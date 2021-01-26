import React from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/core'

const Input: React.FC<ChakraInputProps> = (props) => {
  
  return (
    <ChakraInput
      
      fontSize={20}
      borderRadius={8}
      focusBorderColor="blue.700"
      border="1px solid black"
      {...props}
    />
  )
}

export default Input;