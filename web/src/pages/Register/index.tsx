import React, { useState, useMemo, FormEvent, ChangeEvent } from "react";
import {
  Grid,
  Flex,
  Button,
  useColorMode,
  Box,
  Textarea,
} from "@chakra-ui/core";
import { FaCameraRetro } from "react-icons/fa";
import ThemeSelector from "../../components/ThemeChange";
import Input from "../../components/Input";
import api from "../../api";

export default function Register() {
  const { colorMode } = useColorMode();
  const [photo, setPhoto] = useState(null);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const input = document.getElementById("inputPhoto");

  function clickPhoto() {
    input?.click();
  }
  const preview = useMemo(() => {
    return photo ? URL.createObjectURL(photo) : null;
  }, [photo]);

  async function handleRegister(e: FormEvent) {
    e.preventDefault();

    const data = new FormData();

    data.append("photo", photo!);
    data.append("name", name);
    data.append("username", username);
    data.append("password", password);
    data.append("bio", bio);
    console.log(data);
    console.log(username);
    console.log(password);
    console.log(photo);
    console.log(preview);
    await api.post("register", data);
  }

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
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            display="flex"
            rounded="full"
            //width="100%"
            //height="50%"
            size={["100px", "100px", "300px", "380px", "400px", "500px"]}
            backgroundColor="rgba(255, 255, 255, 0.070);"
            backgroundImage={`url(${preview})`}
            backgroundSize="cover"
            id="labelPhoto"
            onClick={clickPhoto}
            border={photo ? "none" : "3px dashed black"}
            justifyContent="center"
            alignItems="center"
          >
            <FaCameraRetro display={photo ? "none" : "flex"} size={30}/>
          </Box>

          <Input
            type="file"
            onChange={(e: any) => {
              setPhoto(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
            alignContent="center"
            id="inputPhoto"
            //display="none"
          />
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
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <Input
            width="80%"
            height="10%"
            marginBottom={["5x", "30px"]}
            placeholder="Seu username"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <Input
            width="80%"
            height="10%"
            marginBottom={["5px", "30px"]}
            placeholder="Sua senha"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Textarea
            width="80%"
            height="30%"
            marginBottom={["", "30px"]}
            placeholder="Sua biodescrição"
            fontSize={20}
            value={bio}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBio(e.target.value)
            }
          />
          <Button
            width="80%"
            height={["50px"]}
            fontSize={20}
            backgroundColor={colorMode === "light" ? "#0878b9" : "#085b8b"}
            color="white"
            onClick={handleRegister}
          >
            Cadastrar
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
}
