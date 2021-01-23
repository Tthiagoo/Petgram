import React from "react";
import { Box, Flex, Image, Stack, Text, useColorMode } from "@chakra-ui/core";

import { FaSearch } from "react-icons/fa";

export default function Comment() {
  return (
    <Flex flexDirection="row" width="100%" height="5em" marginTop="10px">
      <Flex alignItems="center" justifyContent="center" marginLeft="5px">
        <Image
          borderRadius={["100px"]}
          size={["40px", "45px"]}
          backgroundColor="white"
        />
      </Flex>

      <Stack spacing={1} padding={2} marginTop="5px">
        <Text fontSize={["xl", "sm", "lg", "base"]} fontWeight="bold">
          Thiaguitoo
        </Text>
        <Text fontSize={["xs", "xl", "sm"]} border="1px solid black">
        
          teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
          t
        </Text>
      </Stack>
    </Flex>
  );
}
