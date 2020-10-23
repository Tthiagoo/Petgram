import React from "react";
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
			<Box alignSelf="start" marginBottom="auto" marginTop="10px">
				<ThemeSelector aria-label="" />
			</Box>

			<Grid
				as="main"
				height="87%"
				width="90%"
				templateColumns={["1fr", "1fr 1fr"]}
				templateRows={["23% 68%", "1fr 90% 1fr"]}
				templateAreas={["'photo' 'form'", "'. .''photo form' "]}
				justifyItems="center"
				borderRadius="15px"
				marginBottom="auto"
				backgroundColor={colorMode === "light" ? "blue.200" : "blue.600"}
			>
				<Flex
					gridArea="photo"
				
					width={["auto"]}
					alignItems="center"
				>
					<Image borderRadius={['80px','10px']} size={['100px','100px','300px','380px']}  backgroundColor="white"/>
				</Flex>

				<Flex
					gridArea="form"
					width="100%"
					height="100%"
					flexDirection="column"
					alignItems="center"
					justifyContent={["space-between", "center"]}
				>
					<Input
						width="80%"
						height="10%"
						marginBottom={["5px", "20px"]}
						placeholder="Seu Nome"
					/>
					<Input
						width="80%"
						height="10%"
						marginBottom={["5x", "30px"]}
						placeholder="Seu username"
					/>
					<Input
						width="80%"
						height="10%"
						marginBottom={["5px", "30px"]}
						placeholder="Sua senha"
					/>
					<Textarea
						width="80%"
						height="30%"
						marginBottom={["", "30px"]}
						placeholder="Sua biodescrição"
						fontSize={20}
					/>
					<Button
						width="80%"
						height={["50px"]}
						fontSize={20}
						backgroundColor={colorMode === "light" ? "#0878b9" : "#085b8b"}
						color="white"
					>
						Cadastrar
					</Button>
				</Flex>
			</Grid>
		</Flex>
	);
}
