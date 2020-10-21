import React from "react";
import ThemeSelector from "../../components/ThemeChange";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logoDark.png";
import { FaDog } from "react-icons/fa";
import {
	Heading,
	Grid,
	Flex,
	Link,
	Button,
	Text,
	useColorMode,
	Box,
} from "@chakra-ui/core";

import Input from "../../components/Input";
import Divider from "../../components/Divider";

export default function Login() {
	const { colorMode } = useColorMode();
	const LogoStyle = colorMode === "light" ? logo : logoDark;

	return (
		<Grid
			as="main"
			height="100vh"
			templateColumns={["1fr", "1fr 1fr"]}
			templateRows={["1fr 614px 1fr", "120px 80% 120px"]}
			templateAreas={["'.' 'form''.'", "'. .' 'form logo' '. .'"]}
			justifyItems="center"
			alignItems="center"
			backgroundImage={
				colorMode === "light"
					? "linear-gradient(to left bottom, #a6bbcd, #aecbd2, #c0d8d5, #d6e4da, #edf0e5);"
					: "linear-gradient(to right top, #445e7a, #365170, #284466, #1a375b, #092b51)"
			}
		>
			<ThemeSelector aria-label="" gridArea="form" />

			<Flex
				backgroundColor={colorMode === "light" ? "blue.200" : "blue.600"}
				width={["80%", "70%", "85%", "90%", "75%"]}
				gridArea="form"
				height={["80%", "75%", "50%", "90%"]}
				borderRadius="20px"
				flexDirection="column"
				padding="20px"
				alignItems="center"
			>
				<Heading>Faça seu Login</Heading>
				<Input
					placeholder="username"
					size="lg"
					marginTop="30px"
					height={20}
					fontSize={30}
				/>
				<Input
					placeholder="password"
					marginTop="25px"
					size="lg"
					height={20}
					fontSize={30}
				/>
				<Button
					marginTop="30px"
					width="100%"
					height={20}
					fontSize={30}
					backgroundColor={"#075988"}
				>
					Entrar
				</Button>
			</Flex>

			<Flex
				gridArea="logo"
				width="80%"
				display={["none", "none", "flex", "flex"]}
				flexDirection="row"
				alignItems="center"
			>
				<Box gridArea="logo">
					<img src={LogoStyle} alt="" />
				</Box>

				<Box>
					<FaDog
						size="80px"
						style={{ marginTop: "15px", marginLeft: "10px" }}
						color={colorMode === "dark" ? "#254f67" : "#fff"}
					/>
				</Box>
			</Flex>
		</Grid>
	);
}
