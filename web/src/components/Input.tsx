import React from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/core'

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <ChakraInput
      focusBorderColor="blue.700"
      fontSize={20}
      borderRadius={12}
      {...props}
    />
  )
}

export default Input;