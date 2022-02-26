import {
  Box,
  Flex,
  Spacer,
  Text,
  Input,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import Image from "next/image";

const reset = () => {
  const Logo = () => (
    <Box>
      <Flex textAlign="center" padding={8}>
        <Box w="70px" h="10" />
        <Spacer />
        <Box w="170px" h="10">
          <Image src="/images/icon.png" width={35} height={24} />
        </Box>
        <Spacer />
        <Box w="70px" h="10" fontWeight={700} color="foodiez.orange">
          Skip
        </Box>
      </Flex>
    </Box>
  );

  const content = () => (
    <Box textAlign="center" p={8}>
      <Text fontSize="2xl" fontWeight={600} marginBottom={5}>
        Reset Password
      </Text>
      <Text fontSize="md" color="#3D3D3D">
        A reset code has been sent to your email{" "}
      </Text>
    </Box>
  );

  const enterCode = () => (
    <Box padding="5px 10px" width="100%" margin="auto">
      <Box padding={5} width={300} margin="auto">
        <Text fontSize="xs" textAlign="center" paddingBottom={3}>
          Enter code
        </Text>
        <Input
          htmlSize={4}
          boxShadow="base"
          marginRight={5}
          width="45px"
          type="tel"
        />
        <Input
          htmlSize={4}
          boxShadow="base"
          marginRight={5}
          width="45px"
          type="tel"
        />
        <Input
          htmlSize={4}
          boxShadow="base"
          marginRight={5}
          width="45px"
          type="tel"
        />
        <Input
          htmlSize={4}
          boxShadow="base"
          marginRight={5}
          width="45px"
          type="tel"
        />
      </Box>
    </Box>
  );

  const button = () => (
    <Box padding={5}>
      <Button
        borderRadius={20}
        width="full"
        marginBottom={5}
        color="white"
        backgroundColor="foodiez.orange"
        fontSize="sm"
      >
        Reset Password
      </Button>{" "}
    </Box>
  );

  return (
    <Box>
      {Logo()}
      {content()}
      {enterCode()}
      {button()}
    </Box>
  );
};

export default reset;
