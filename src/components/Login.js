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
} from 'native-base';
import React from 'react';

export default function Login(props) {
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Selamat Datang di Aplikasi
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Silahkan Signin Untuk Masuk
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
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
            <Button mt="2" colorScheme="indigo">
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
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                href="#">
                Sign Up
              </Link>
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
