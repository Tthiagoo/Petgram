import React, { useMemo, useState } from "react";

import {
	
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
  Box,
  Button,
  useColorMode,
  Textarea,

} from "@chakra-ui/core";
import Input from "./Input";
import { FaCameraRetro } from "react-icons/fa";



const ModalPhoto: React.FC = () => {

  const { colorMode } = useColorMode();
  const [photo, setPhoto] = useState(null);
  const preview = useMemo(() => {
    return photo ? URL.createObjectURL(photo) : null;
  }, [photo]);
  
	
	return (
		<>
			<ModalHeader display="flex" justifyContent="center">
				Publique sua Foto
			</ModalHeader>
			<ModalCloseButton marginBottom="10px" />
			<ModalBody display="flex" flexDirection="column" justifyContent="center" alignItems="center" border="1px red solid">
			<Box
            as="label"
            display="flex"
            borderRadius="20px"
            size={["180px", "180px", "300px", "380px", "400px", "500px"]}
            backgroundColor="rgba(255, 255, 255, 0.070);"
            backgroundImage={`url(${preview})`}
            backgroundSize="cover"
            border={photo ? "none" : "3px dashed black"}
            justifyContent="center"
            alignItems="center"
            style={{ backgroundSize: "cover" }}
            //onClick={clickPhoto}
            cursor="pointer"
          >
            <FaCameraRetro
              style={photo ? { display: "none" } : { display: "flex" }}
              size={20}
              cursor="pointer"
            />
            <Input
              type="file"
              onChange={(e: any) => {
                setPhoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              display="none"
            />
          </Box>
          <Button
          marginTop="10px"
            width="60%"
            height={["30px","40px"]}
            fontSize={15}
            backgroundColor={colorMode === "light" ? "#0878b9" : "#0c4363"}
            color="white"
           
            _hover={
              colorMode === "light"
                ? { backgroundColor: "#186d9e" }
                : { backgroundColor: "#14608c" }
            }
          >
            Cadastrar
          </Button>
			</ModalBody>
			<ModalFooter display="flex" justifyContent="center">
				<Textarea placeholder="Escreva seu comentario" 
         focusBorderColor="blue.700"
         />
			</ModalFooter>
		</>
	);
};
export default ModalPhoto;
