import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer,
  useDisclosure,
  Image,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";

const Delivery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Header = () => (
    <Box >
      <Flex padding={10} >
        <Box w="70px" h="50" >
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
              as={Button}
              variant="solid"
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
        <Box w="200px" h="50">
          <Center>
            <Box width="fit-content">
              <Text
                fontSize="xs"
                alignItems={"center"}
                display={"flex"}
                paddingLeft={5}
              >
                Delivery to <AiOutlineDown />
              </Text>

              <Text fontSize="xs" textAlign={"center"} color={"foodiez.orange"}>
                lekki phase 1, Estate
              </Text>
            </Box>
          </Center>
        </Box>
        <Spacer />
        <Box w="50px" h="50">
          <img src="/images/person.jpg" />
        </Box>
      </Flex>
    </Box>
  );

  return <Box backgroundColor={"#F7F7FB"}>{Header()}</Box>;
};

export default Delivery;
