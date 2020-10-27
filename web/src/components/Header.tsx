import React from "react";
import {Flex,useColorMode,Box} from "@chakra-ui/core";
import {FaUser,FaHome,FaCameraRetro} from "react-icons/fa";

import ThemeSelector from "./ThemeChange";

import logo from '../assets/logo.png'

import logoDark from '../assets/logoDark.png'

export default function Header(){
	const { colorMode } = useColorMode();
	const LogoStyle = colorMode === "light" ? logo : logoDark;
	return (
		<Flex
			gridArea="logo"
			width="100%"
			height="100%"
			backgroundColor={colorMode === "light" ? "blue.2c00" : "blue.500"}
			alignItems="center"
			justifyContent="space-between"
		>
			<Box gridArea="logo" marginLeft="-5px">
				<ThemeSelector aria-label="" />
			</Box>

			<Box gridArea="logo" maxWidth="120px">
				<img src={LogoStyle} alt=""  />
			</Box>

			<Box gridArea="logo" marginRight="15px" display="flex" flexDirection="row">
				<Box marginRight="10px" w={["18px","25px","30px","35px",'20px']}>
					<FaUser size="100%" />
				</Box>

				<Box marginRight="10px" w={["18px","25px","30px","35px",'20px']}>
					<FaHome size="100%" />
				</Box>

				<Box w={["18px","25px","30px","35px",'20px']}>
					<FaCameraRetro size="100%" />
				</Box>
			</Box>
		</Flex>
	);
};


