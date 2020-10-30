import React from "react";
import { Link } from "react-router-dom";
import { Flex, useColorMode, Box } from "@chakra-ui/core";
import { FaUser, FaHome, FaCameraRetro } from "react-icons/fa";

import ThemeSelector from "./ThemeChange";

import logo from "../assets/logo.png";

import logoDark from "../assets/logoDark.png";

export default function Header() {
	const { colorMode } = useColorMode();
	const LogoStyle = colorMode === "light" ? logo : logoDark;
	return (
		<Flex
			gridArea="logo"
			width="100%"
			height="100%"
			backgroundColor={colorMode === "light" ? "blue.200" : "blue.500"}
			alignItems="center"
			justifyContent={['space-between','space-between','space-between','space-between','space-around']}
		>
			<Box gridArea="logo" marginLeft="-5px">
				<ThemeSelector aria-label="" />
			</Box>

			<Box gridArea="logo" maxWidth="120px">
				<img src={LogoStyle} alt="" />
			</Box>

			<Box gridArea="logo" marginRight="15px" display="flex" flexDirection="row">

				<Box marginRight="15px" w={["18px", "25px", "30px", "35px", "20px"]}>
					<Link to="/profile" style={{ width: "100%", display: "flex" }}>
						<FaUser size="100%" />
					</Link>
				</Box>

				<Box marginRight="15px" w={["22px", "27px", "32px", "35px", "23px"]}>
					<FaHome size="100%" />
				</Box>

				<Box w={["18px", "25px", "30px", "35px", "20px"]}>
					<FaCameraRetro size="100%" />
				</Box>

			</Box>
		</Flex>
	);
}
