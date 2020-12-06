import React, { useState } from "react";
import ThemeSelector from "../../components/ThemeChange";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logoDark.png";
import { FaDog, FaSignInAlt } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import {
  Heading,
  Grid,
  Flex,
  Button,
  Text,
  useColorMode,
  Box,
} from "@chakra-ui/core";

import Input from "../../components/Input";
import api from "../../api";

export default function Login() {
  const { colorMode } = useColorMode();
  const LogoStyle = colorMode === "light" ? logo : logoDark;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(e:any) {
    e.preventDefault();

    const response = await api.post("session", { username, password });
    console.log(response.data);
  }

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
          : "linear-gradient(to right top, #33383d, #1e3752, #152d48, #0c243e, #041b34);"
      }
    >
      <ThemeSelector aria-label="" gridArea="form" />

      <Flex
        backgroundColor={colorMode === "light" ? "blue.200" : "blue.600"}
        width={["80%", "70%", "85%", "90%", "60%"]}
        gridArea="form"
        height={["77%", "75%", "58%", "50%", "90%"]}
        borderRadius="20px"
        flexDirection="column"
        padding="20px"
        alignItems="center"
        boxShadow="10px 15px 28px black"
      >
        <Heading color="white">Faça seu Login</Heading>

        <Input
          placeholder="username"
          height="60px"
          size="md"
          marginTop="30px"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <Input
          placeholder="password"
          marginTop="25px"
          height="60px"
          size="md"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Link to="/main" style={{ width: "100%", display: "flex" }}>
          <Button
            marginTop="30px"
            width="100%"
            height={20}
            fontSize={30}
            backgroundColor={colorMode === "light" ? "#0878b9" : "#075988"}
			color="white"
			onClick={handleLogin}
          >
            Entrar
          </Button>
        </Link>

        <Box
          display="flex"
          align-items="center"
          justify-content="center"
          marginTop="30px"
          fontWeight="bold"
          width="100%"
          color="white"
        >
          <Link to="/register" style={{ width: "100%", display: "flex" }}>
            <FaSignInAlt
              size={25}
              color="#e9e6e6"
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            Não tenho cadastro
          </Link>
        </Box>
      </Flex>

      <Flex
        gridArea="logo"
        width="85%"
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
            color={colorMode === "dark" ? "#075988" : "#fff"}
          />
        </Box>
      </Flex>
    </Grid>
  );
}
