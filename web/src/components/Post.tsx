import React from "react";

import {
  Heading,
  Grid,
  Flex,
  Text,
  useColorMode,
  Box,
  Image,
} from "@chakra-ui/core";
import { FaRegHeart, FaRegComments } from "react-icons/fa";

import { ListItem } from "@chakra-ui/core";

export default function Post() {
  const { colorMode } = useColorMode();

  return (
    <ListItem
      width={["93%", "70%", "68%", "60%", "50%"]}
      marginTop="10px"
      height="auto"
      marginBottom="5px"
    >
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
          marginTop="15px"
          border="solid 1px yellow"
        >
          <Image
            borderRadius={["100px"]}
            size={["30px", "45px"]}
            marginLeft="5px"
            backgroundColor="white"
          />
          <Heading as="h5" size="sm" marginLeft="10px">
            UserName
          </Heading>
        </Flex>

        <Flex
          marginTop="15px"
          gridArea="photo"
          width="100%"
          height={["20em", "30em", "35em"]}
          justifyContent="center"
          border="solid 1px red"
        >
          <Image
            width={["95%", "95%", "95%"]}
            height="100%"
            backgroundColor="white"
            borderRadius="15px"
            border="1px solid black"
          />
        </Flex>

        <Flex
          gridArea="icons"
          w="95%"
          h="100%"
          paddingTop="15px"
          paddingLeft="18px"
        >
          <Box >
            <FaRegHeart size={28} style={{marginRight:"10px"}}/>
            <Text style={{fontWeight:"bold"}}>210</Text>
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
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve t
          </Text>
        </Flex>
        <Flex
          gridArea="comments"
          w="100%"
          height="auto"
          maxHeight="200px"
          overflowX="hidden"
          overflowY="scroll"
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
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve t
          </Text>
          <Text>
            <Heading as="h6" size="sm" marginRight="10px" width="auto">
              UserName
            </Heading>
            teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve
            tste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve t
          </Text>
        </Flex>
      </Grid>
    </ListItem>
  );
}
