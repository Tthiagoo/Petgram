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
import {
	FaUser,
	FaHome,
	FaCameraRetro,
	FaRegHeart,
	FaRegComments,
} from "react-icons/fa";
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
					backgroundColor={colorMode === "light" ? "blue.200" : "blue.500"}
					alignItems="center"
					justifyContent="space-between"
				>
					<Box gridArea="logo" marginLeft="-5px">
						<ThemeSelector aria-label="" />
					</Box>

					<Box gridArea="logo" maxWidth="120px">
						<img src={LogoStyle} alt="" />
					</Box>

					<Box gridArea="logo" marginRight="15px" display="flex" flexDirection="row">
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

				<List
					display="flex"
					width="100%"
					height="100%"
					maxHeight="100%"
					overflowX="scroll"
					flexDirection="column"
					alignItems="center"
					gridArea="feed"
				>
					<ListItem width="90%" marginTop="10px" height="auto" marginBottom="10px">
						<Grid
							height="auto"
							borderRadius="20px"
							width="100%"
							templateColumns={["1fr"]}
							backgroundColor={colorMode === "light" ? "#dae7f1" : "blue.600"}
							gridTemplateAreas={[
								"'header' 'photo' 'icons' 'description' 'comments' ",
							]}
						>
							<Flex
								alignItems="center"
								flexDirection="row"
								w="100%"
								h="100%"
								gridArea="header"
								padding="5px"
							>
								<Image
									borderRadius={["100px"]}
									size={["40px", "100px", "300px", "380px"]}
									marginLeft="5px"
									backgroundColor="white"
								/>
								<Heading as="h5" size="sm" marginLeft="10px">
									UserName
								</Heading>
							</Flex>

							<Flex
								gridArea="photo"
								minWidth="100px"
								minHeight="400px"
								justifyContent="center"
							>
								<Image
									minWidth="95%"
									minHeight="100%"
									backgroundColor="white"
									borderRadius="15px"
								/>
							</Flex>

							<Flex
								gridArea="icons"
								w="95%"
								h="100%"
								paddingTop="15px"
								paddingLeft="18px"
							>
								<Box>
									<FaRegHeart size={28} />
								</Box>
								<Box marginLeft="10px">
									<FaRegComments size={28} />
								</Box>
							</Flex>

							<Flex
								flexDirection="row"
								w="100%"
								height="auto"
								gridArea="description"
								paddingLeft="18px"
								paddingTop="15px"
								marginBottom="10px"
							>
								<Text>
									<Heading as="h5" size="sm" marginRight="10px" width="auto">
										UserName
									</Heading>
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve t
								</Text>
							</Flex>
							<Flex
								gridArea="comments"
								w="100%"
								height="auto"
								maxHeight="200px"
								overflowX="scroll"
								paddingLeft="17px"
								paddingBottom="10px"
								paddingTop="10px"
								flexDirection="column"
								marginTop="10px"
							>
								<Text marginBottom="10px">
									<Heading as="h6" size="sm" marginRight="10px" width="auto">
										UserName
									</Heading>
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve t
								</Text>
								<Text>
									<Heading as="h6" size="sm" marginRight="10px" width="auto">
										UserName
									</Heading>
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
									tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
									sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve t
								</Text>
							</Flex>
						</Grid>
					</ListItem>
				</List>
			</Grid>
		</Flex>
	);
}
