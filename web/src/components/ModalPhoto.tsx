import React, { useMemo, useState } from "react";

import {
	
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
  Flex,
  Box,

} from "@chakra-ui/core";
import Input from "./Input";
import { FaCameraRetro } from "react-icons/fa";



const ModalPhoto: React.FC = () => {
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
			<ModalBody display="flex" flexDirection="column">
			<Box
            as="label"
            display="flex"
            borderRadius="20px"
            size={["100px", "100px", "300px", "380px", "400px", "500px"]}
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
              size={30}
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
			</ModalBody>
			<ModalFooter display="flex" justifyContent="center">
				<Input placeholder="Escreva seu comentario" />
			</ModalFooter>
		</>
	);
};
export default ModalPhoto;
