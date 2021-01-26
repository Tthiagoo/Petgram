import React from "react";
import { useColorMode, IconButton, IconButtonProps, Box } from "@chakra-ui/core";



const ThemeSelector: React.FC<IconButtonProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display="flex" alignSelf="center" justifySelf="start" marginLeft="20px">
      <IconButton
      display="flex"
        aria-label=""
        maxWidth="20px"
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
      />
      
    </Box>
  );
};

export default ThemeSelector;
