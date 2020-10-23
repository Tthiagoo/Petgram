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

export default function Main() {
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
					border="1px solid yellow"
					backgroundColor={colorMode === "light" ? "blue.200" : "blue.600"}
					alignItems="center"
				>
					<Box>
						<ThemeSelector aria-label="" />
					</Box>
				</Flex>
			</Grid>
		</Flex>
	);
}
