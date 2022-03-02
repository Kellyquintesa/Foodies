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
import { FaPizzaSlice} from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Delivery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const responsive = {
    0: { items: 1 },
    320: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px">
      <img src="/images/pizza.png" />
       Pizza</Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
    <Box textAlign={"center"} padding={3} fontSize="12px">
    <img src="/images/burger.png" />
     Burger</Box>
  </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
    <Box textAlign={"center"} padding={3} fontSize="12px">
    <img src="/images/sausage.png" />
     Sausage</Box>
  </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
    <Box textAlign={"center"} padding={3} fontSize="12px">
    <img src="/images/beverages.png" />
     Beverages</Box>
  </Box>,
   <Box width={100} height={120} borderRadius={50} border="1px solid orange">
   <Box textAlign={"center"} padding={3} fontSize="12px">
   <img src="/images/noodle.png" />
    Noodles</Box>
 </Box>,
  ];

  const Header = () => (
    <Box>
      <Flex>
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

  const foodList = () => (
    <Box>
      <Box marginTop={10}>
        <Text fontSize="2xl" fontWeight={600}>
          Enjoy Delicious food
        </Text>
      </Box>
    </Box>
  );

  const listCarousel = () => (
    <Box marginTop={10}>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
      />
    </Box>
  );

  return (
    <Box backgroundColor={"#F7F7FB"} height="100vh" padding={10} >
      {Header()}
      {foodList()}
      {listCarousel()}
    </Box>
  );
};

export default Delivery;
