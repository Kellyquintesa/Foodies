import {
    Box,
    Grid,
    Center,
    Text,
    Circle,
    ColorModeScript,
    color,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { Button, ButtonGroup } from "@chakra-ui/react";
  
  function login() {
    return (
      <Box flexDirection="column" margin="40px 0">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="70px" h="10" />
  
          <Box textAlign="center">
            <Image
              width={35}
              height={22}
              boxSize="100px"
              src="/icon.png"
              alt="Logo"
              backgroundColor="lightblue"
            />
          </Box>
  
          <Box>
            <Center w="100px" h="10" justifyContent="center" color="orange" fontWeight={700}>
              Skip
            </Center>
          </Box>
        </Grid>
  
        <Box>
          <Text fontSize="2xl" textAlign="center" padding="30px" fontWeight="700">
            {" "}
            Choose from a wide range of delicious meals
          </Text>
        </Box>
  
        <br />
        <Box boxSize={420} textAlign="center">
        <Image src="/login-3.png" width={300} height={330}  padding={0}/>
  
        <Box display="flex" textAlign="center" margin="20px 0" padding="0 200px"  >
        <Circle size='7px' bg='lightgrey' /> 
        <Circle size='7px'  /> 
        <Circle size='7px' bg='navy' />
        <Circle size='7px'  /> 
        <Circle size='7px' bg='lightgrey' />
        </Box>
  
        </Box>
  
        <Box textAlign="center">
        <Button
            borderRadius="25px"
            w={380}
            color="white"
            backgroundColor="Orange"
          >
            Create an account
          </Button>
          <br /> <br />
          <Button
            borderRadius="25px"
            w={380}
            color="orange"
            backgroundColor="white"
          >
            Login
          </Button>
        </Box>
      </Box>
    );
  }
  
  export default login;
  