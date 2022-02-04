import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {NativeBaseProvider, Box, Text} from 'native-base';
moment.locale('id');
export default function App() {
  const [dt, setDt] = useState(moment().format('llll'));
  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(moment().format('llll'));
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);
  return (
    <>
      <NativeBaseProvider>
        <Box alignItems="center">
          <Text fontSize="2xl" fontWeight="semibold">
            Mayjen Sungkono
          </Text>
          <Text>Surabaya</Text>
        </Box>
        <Box px="3.5">
          <Text>{dt}</Text>
        </Box>
      </NativeBaseProvider>
    </>
  );
}
