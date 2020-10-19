import React from "react";
import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/core";



const ThemeSelector: React.FC<IconButtonProps> = () => {
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
      
    </>
  );
};

export default ThemeSelector;
