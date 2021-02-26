import React from "react";
import { Box } from "@chakra-ui/core";
import { FaRegTimesCircle } from "react-icons/fa";
import api from '../api'

interface PostInfo {
  idPhoto: Number;
  photo: string;
}



const BoxImage: React.FC<PostInfo> = ({ idPhoto, photo }) => {

  const idUser = localStorage.getItem("id");

  async function handleDeletePhoto() {
    try {
      await api.delete(`post/${idPhoto}`, {
        headers: {
          Authorization: idUser,
        }
      });
      alert('deu certo');
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  return (
    <Box
      display="flex"
      w="100%"
      maxHeight={["120px", "200px", "320px", "340"]}
      h={["120px", "200px", "320px", "340"]}
      id={`${idPhoto}`}
      borderRadius="10px"
      backgroundImage={`url(${photo})`}
      backgroundSize="cover"
      cursor="pointer"
      justifyContent="flex-end"
      alignItems="start"
      padding="15px"
      
    >
      <FaRegTimesCircle size={25} onClick={handleDeletePhoto} color="grey" />
    </Box>
  );
};

export default BoxImage;
