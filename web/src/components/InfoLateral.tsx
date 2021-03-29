import { Flex , Image, Stack, Text} from "@chakra-ui/core";
import React from "react";

const InfoLateral: React.FC = () => {
  return (
    <Flex
      width="30%"
      height="20%"
      backgroundColor="rgba(255, 255, 255, 0.1)"
      position="fixed"
      marginTop="20px"
      marginLeft="10px"
      borderRadius="10px"
      boxShadow="5px 5px 15px 5px rgba(0,0,0,0.15)"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        marginTop="15px"
        width="90%"
        height="30%"
      
        alignItems="center"
        flexDirection="row"
      >
        <Image rounded="full" size="60px" backgroundColor="white" />
        <Stack spacing={1} padding={3}>
          <Text fontSize={["sm", "md"]} fontWeight="bold">
            Tthiagoo
          </Text>
          <Text fontSize={["sm", "md"]}>Thiago Pereira Araujo Silva</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default InfoLateral;
