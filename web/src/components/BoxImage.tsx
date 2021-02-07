import React from "react";
import { Box, Image } from "@chakra-ui/core";

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
      backgroundImage={photo}
      backgroundSize="cover"
    >
    </Box>
  );
};

export default BoxImage;
