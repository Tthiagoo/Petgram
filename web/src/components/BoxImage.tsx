import React from "react";
import { Box } from "@chakra-ui/core";

interface PostInfo {
  id: Number;

  photo: string;
}

const BoxImage: React.FC<PostInfo> = ({ id, photo }) => {
  return (
    <Box
      w="100%"
      maxHeight={["120px", "200px", "320px", "340"]}
      h={["120px", "200px", "320px", "340"]}
      id={`${id}`}
      borderRadius="10px"
      backgroundImage={`url(${photo})`}
      backgroundSize="cover"
      cursor="pointer"
      
    >
    
    </Box>
  );
};

export default BoxImage;
