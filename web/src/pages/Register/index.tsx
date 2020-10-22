import React from "react";
import {
	Heading,
	Grid,
	Flex,
	Button,
	Text,
	useColorMode,
	Box,
} from "@chakra-ui/core";
import ThemeSelector from "../../components/ThemeChange";
import Input from "../../components/Input";

export default function Register() {
	const { colorMode } = useColorMode();
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
			flexDirection="column"
		>
			<Box alignSelf="start" marginBottom="auto">
				<ThemeSelector aria-label="" />
			</Box>

			<Grid
				as="main"
				height="87%"
				width="89%"
				templateColumns={["1fr", "1fr 1fr"]}
				templateRows={["23% 68%", "120px 80% 120px"]}
				templateAreas={["'photo' 'form'", "'. .''photo form' "]}
				justifyItems="center"
				borderRadius="25px"
				marginBottom="auto"
				backgroundColor={colorMode === "light" ? "blue.200" : "blue.600"}
			>
				<Box
					border="black 1px dashed"
					width="100px"
					height="100px"
					borderRadius={50}
					gridArea="photo"
					marginTop="20px"
				></Box>

				<Flex
					gridArea="form"
					width="100%"
					height="100%"
					flexDirection="column"
					alignItems="center"
					justifyContent={["space-between"]}
				>
					<Input width='80%' height="70px"/>
					<Input width="80%" />
					<Input width="80%" />
					<Input width="80%" />
					<Button>Cadastrar</Button>
				</Flex>
			</Grid>
		</Flex>
	);
}
