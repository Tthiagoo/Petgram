import React from "react";

import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
 
  Flex,
} from "@chakra-ui/core";
import Input from "./Input";
import Comment from "./Comment";

const ModalComments: React.FC = () => {
  return (
    <>
        <ModalHeader display="flex" justifyContent="center">
          Comentarios
        </ModalHeader>
        <ModalCloseButton marginBottom="10px" />
        <ModalBody
          display="flex"
          flexDirection="column"
        >
          <Flex
            maxHeight="21em"
            overflowY="auto"
            width="100%"
            flexDirection="column"
           
            justifyContent="start"
          >
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </Flex>
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyContent="center"
        >
          <Input placeholder="Escreva seu comentario" />
        </ModalFooter>
      </>
    
  );
};
export default ModalComments
