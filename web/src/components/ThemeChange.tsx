import React from "react";
import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/core";

interface teste{
    texto:String,
}

const ThemeSelector: React.FC<IconButtonProps> = (text:teste) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        marginTop="10px"
        marginLeft="10px"
        aria-label=""
        maxWidth="20px"
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
      />
      <h1>{text}</h1>
    </>
  );
};

export default ThemeSelector;
