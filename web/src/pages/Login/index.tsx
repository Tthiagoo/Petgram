import React from "react";
import ThemeSelector from "../../components/ThemeChange";
import {
	Heading,
	Grid,
	Flex,
	Link,
	Button,
	Text,
	useColorMode,
} from "@chakra-ui/core";

import Input from "../../components/Input";
import Divider from "../../components/Divider";

export default function Login() {
	const { colorMode } = useColorMode();

	return (
		<Grid
			as="main"
			height="100vh"
		
			templateColumns={[
				"1fr", 
				"1fr 1fr"]}

			templateRows={[
				"1fr 614px 1fr", 
				"185px 1fr 185px"]}

			templateAreas={["'.' 'form''.'", "'. .' 'form logo' '. .'"]}
			justifyContent="center"
			alignItems="center"
			
			backgroundImage={
				colorMode === "light"
					? "linear-gradient(to right top, #95c9ff, #95beeb, #94b4d7, #92a9c3, #909fb0);"
					: "linear-gradient(to right top, #445e7a, #365170, #284466, #1a375b, #092b51)"
			}
		>
			<ThemeSelector aria-label="" gridArea="form" />

			
		</Grid>
	);
}
