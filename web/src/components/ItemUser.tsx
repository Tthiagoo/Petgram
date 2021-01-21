import React from "react";

import { Box, Flex, List, ListItem, Image } from "@chakra-ui/core";

import { FaSearch } from "react-icons/fa";

export default function ItemUser() {
	return (
		<Flex flexDirection="row" border="1px solid white" width="100%" height="5em">
			<Flex alignItems="center" justifyContent="center">
				<Image
					borderRadius={["100px"]}
					size={["40px", "45px"]}
					backgroundColor="white"
				/>
			</Flex>
      <Flex flexDirection="column" height="100%" width="75%" border="1px solid red">
        <Box height="60%" width="100%" border="1px solid yellow">

        </Box>

        <Box height="40%" width="100%" border="1px solid blue">

        </Box>

      </Flex>
		</Flex>
	);
}
