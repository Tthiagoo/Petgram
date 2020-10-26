import React from "react";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logoDark.png";
import {
  Heading,
  Grid,
  Flex,
  Button,
  Text,
  useColorMode,
  Box,
  Textarea,
  Image,
} from "@chakra-ui/core";
import { FaUser, FaHome, FaCameraRetro } from "react-icons/fa";
import ThemeSelector from "../../components/ThemeChange";
import { List, ListItem, ListIcon } from "@chakra-ui/core";

export default function Main() {
  const { colorMode } = useColorMode();
  const LogoStyle = colorMode === "light" ? logo : logoDark;
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage={
        colorMode === "light"
          ? "linear-gradient(to left bottom, #a6bbcd, #aecbd2, #c0d8d5, #d6e4da, #edf0e5);"
          : "linear-gradient(to right top, #33383d, #1e3752, #152d48, #0c243e, #041b34);"
      }
    >
      <Grid
        as="main"
        height="100%"
        width="100%"
        templateColumns={["1fr"]}
        templateRows={["1fr 93%"]}
        gridTemplateAreas={["'logo' 'feed'"]}
      >
        <Flex
          gridArea="logo"
          width="100%"
          height="100%"
          backgroundColor={colorMode === "light" ? "blue.200" : "blue.600"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box gridArea="logo" marginLeft="-5px">
            <ThemeSelector aria-label="" />
          </Box>

          <Box gridArea="logo" maxWidth="120px">
            <img src={LogoStyle} alt="" />
          </Box>

          <Box
            gridArea="logo"
            marginRight="15px"
            display="flex"
            flexDirection="row"
          >
            <Box marginRight="10px">
              <FaUser size={20} />
            </Box>

            <Box marginRight="10px">
              <FaHome size={20} />
            </Box>

            <Box>
              <FaCameraRetro size={20} />
            </Box>
          </Box>
        </Flex>

        <Grid gridArea="feed" maxHeight="100%" overflowX="scroll" >
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
        </Grid>
      </Grid>
    </Flex>
  );
}
