import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Delivery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Header = () => (
    <Box>
      <Flex padding={10}>
        <Box w="70px" h="10">
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
              as={Button}
              variant="solid"
              colorScheme="teal"
              onClick={onOpen}
            >
              <GiHamburgerMenu />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Spacer />
        <Box w="170px" h="10" bg="red.500" />
        <Spacer />
        <Box w="180px" h="10" bg="red.500" />
      </Flex>
    </Box>
  );

  return <Box>{Header()}</Box>;
};

export default Delivery;
