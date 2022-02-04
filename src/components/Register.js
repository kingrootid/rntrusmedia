import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Pressable,
  TextArea,
  Radio,
  groupValues,
  Toast,
  ScrollView,
} from 'native-base';
import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import {base_url} from '../Config';
export default function Register(props) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [value, setValue] = useState('MALE');
  const ref = useRef(null);
  useEffect(() => {
    console.log('ref here', ref.current); // ref.current.setNativeProps({
    //   backgroundColor: 'red',
    // });
    // ref.current.setNativeProps({
    //   backgroundColor: 'red',
    // });

    ref.current.focus();
  }, []);
  const register = () => {
    if (
      !email ||
      !password ||
      !fullName ||
      !confirmPassword ||
      !phone ||
      !address
    ) {
      Toast.show({
        description: 'Please fill all fields',
      });
    } else {
      let data = {
        email: email,
        password: password,
        fullName: fullName,
        confirm_password: confirmPassword,
        phone: phone,
        address: address,
        gender: value,
      };
      let formData = new FormData();
      Object.keys(data).forEach(key => formData.append(key, data[key]));
      axios
        .post(`${base_url}register`, formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log('asdjaksdas');
          console.log(err);
          //   Toast.show({
          //     description: err,
          //   });
        });
    }
  };
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Selamat Datang di Aplikasi
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Daftarkan akun segera
          </Heading>
          <ScrollView w="100%" showsVerticalScrollIndicator={false}>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Full Name</FormControl.Label>
                <Input
                  type="text"
                  value={fullName}
                  onChangeText={anything => setFullName(anything)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  type="email"
                  value={email}
                  onChangeText={anything => setEmail(anything)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="password"
                  value={password}
                  onChangeText={anything => setPassword(anything)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirmation Password</FormControl.Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChangeText={anything => setConfirmPassword(anything)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Address</FormControl.Label>
                <TextArea
                  h={20}
                  placeholder="Text Area Placeholder"
                  value={address}
                  onChangeText={anything => setAddress(anything)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Gender</FormControl.Label>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value}
                  onChange={nextValue => {
                    setValue(nextValue);
                  }}>
                  <Radio value="MALE">MALE</Radio>
                  <Radio value="FEMALE" ref={ref}>
                    FEMALE
                  </Radio>
                </Radio.Group>
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input
                  type="text"
                  value={phone}
                  onChangeText={anything => setPhone(anything)}
                />
              </FormControl>
              <Button mt="2" colorScheme="indigo" onPress={register}>
                Sign up
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Have an account ?.{' '}
                </Text>
                <Pressable onPress={() => props.navigation.navigate('Login')}>
                  <Text color="indigo.500" fontWeight="medium" fontSize="sm">
                    Sign in
                  </Text>
                </Pressable>
              </HStack>
              <HStack justifyContent="center">
                <Pressable onPress={() => props.navigation.navigate('Home')}>
                  <Text color="indigo.500" fontWeight="medium" fontSize="sm">
                    Continue with guest
                  </Text>
                </Pressable>
              </HStack>
            </VStack>
          </ScrollView>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
