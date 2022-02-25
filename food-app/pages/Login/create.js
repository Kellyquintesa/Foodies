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

const create = () => {
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

  return (
    <Box>
      {Logo()}
      <Spacer />

      <Box padding={6} >
        <Box>
          <Text fontSize="2xl" fontWeight={600} marginBottom={3}>
            Create an account
          </Text>
          <Spacer />
          <Text fontSize="md" marginBottom={4}>
            Welcome friend, enter your details so lets get started in ordering
            food.
          </Text>
        </Box>

        <Spacer />

        <Box>
          <Box>
            <Text fontSize="sm">Email Address</Text>
            <Input placeholder="Enter email" size="sm" />
          </Box>
          <Box>
            <Text fontSize="sm">Password</Text>
            <Input placeholder="Enter password" size="sm" />
          </Box>
          <Box>
            <Text fontSize="sm">Confirm Password</Text>
            <Input placeholder="Confirm Password" size="sm" />
          </Box>
        </Box>



      </Box>
    </Box>
  );
};

export default create;
