import {View, Text} from 'react-native';
import React from 'react';
import {
  Alert,
  Center,
  VStack,
  HStack,
  Box,
  IconButton,
  CloseIcon,
} from 'native-base';
export default function AlertComponent(props) {
  return (
    <Center>
      <Alert w="90%" maxW="400" status={props.type} colorScheme="info">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                {props.title}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
          <Box
            pl="6"
            _text={{
              color: 'coolGray.600',
            }}>
            {props.text}
          </Box>
        </VStack>
      </Alert>
    </Center>
  );
}
