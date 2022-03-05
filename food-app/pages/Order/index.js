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
  border,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillClockFill } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import {
  AiFillStar,
  AiOutlineDown,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import NumericInput from "react-numeric-input";

const index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const responsive = {
    0: { items: 1 },
    420: { items: 2 },
    1024: { items: 3 },
  };

  const Header = () => (
    <Box>
      <Flex padding={10}>
        <Box w="70px" h="50">
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton as={Button} variant="solid" onClick={onOpen}>
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

  const menuPhoto = () => (
    <Box>
      <Center padding={10} display="flex" flexDirection={"column"}>
        <Center
          height={250}
          width={250}
          boxShadow="2xl"
          rounded="md"
          bg="white"
        >
          <img src="/images/burger-menu.png" />
        </Center>
        <Box marginTop={15}>
          <NumericInput
            className="form-control"
            value={1}
            min={0}
            max={100}
            step={1}
            precision={0}
            size={5}
            mobile
          />
        </Box>
        <Box marginTop={18}>
          <Text fontSize="2xl" fontWeight={500} textAlign="center">
            Big boys Cheese burger
          </Text>
          <Box width={250}>
            <Flex>
              <Center display={"flex"} w="60px" h="10">
                <AiFillStar />{" "}
                <Text marginLeft={1} fontSize="12">
                  {" "}
                  4+{" "}
                </Text>
              </Center>
              <Spacer />
              <Center display={"flex"} w="60px" h="10">
                <MdOutlineLocalFireDepartment />{" "}
                <Text marginLeft={1} fontSize="12">
                  {" "}
                  400cal{" "}
                </Text>
              </Center>
              <Spacer />
              <Center display={"flex"} w="70px" h="10" fontSize={13}>
                <BsFillClockFill />{" "}
                <Text marginLeft={1} fontSize="12">
                  {" "}
                  5-10min{" "}
                </Text>
              </Center>
            </Flex>
          </Box>
        </Box>
      </Center>
      <Box padding={"0 50px"}>
        <Text fontSize="lg" textAlign="justify">
          Our simple, classic cheeseburger begins with a 100% pure beef burger
          seasoned with just a pinch of salt and pepper. The McDonald’s
          Cheeseburger is topped
        </Text>
      </Box>
    </Box>
  );

  const Button = () => (
    <Box>
      <Button
        borderRadius={20}
        width="full"
        marginBottom={5}
        color="white"
        backgroundColor="foodiez.orange"
        fontSize="sm"
      >
        Create an account
      </Button>
    </Box>
  );
  
  return (
    <Box>
      <Box>
        {Header()}
        {menuPhoto()}
      </Box>
      <Box> {Button()}</Box>
    </Box>
  );
};

export default index;
