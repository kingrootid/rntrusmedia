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
  Toast,
} from 'native-base';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import {API_URL} from '@env';
export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    if (!email || !password) {
      console.log('Please fill all fields');
      Toast.show({
        title: 'Please fill all fields',
      });
    } else {
      let form = new FormData();
      form.append('email', email);
      form.append('password', password);
      axios
        .post(`${API_URL}login`, form)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          // Toast.show({
          //   description: err,
          // });
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
            Silahkan Signin Untuk Masuk
          </Heading>
          <VStack space={3} mt="5">
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
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={login}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                I'm a new user.{' '}
              </Text>
              <Pressable onPress={() => props.navigation.navigate('Register')}>
                <Text color="indigo.500" fontWeight="medium" fontSize="sm">
                  Register Account
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
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
