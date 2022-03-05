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
import { FaPizzaSlice } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Delivery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const responsive = {
    0: { items: 1 },
    420: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={1}>
        <Center>
          <img src="/images/pizza.png" />
        </Center>
        Pizza
      </Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={3}>
        <Center>
          <img src="/images/burger.png" width={40} />
        </Center>
        Burger
      </Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={3}>
        <Center>
          <img src="/images/sausage.png" width={40} />
        </Center>
        Sausage
      </Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={3}>
        <Center>
          <img src="/images/beverages.png" width={40} />
        </Center>
        Beverages
      </Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={3}>
        <Center>
          <img src="/images/noodle.png" width={40} />
        </Center>
        Noodles
      </Box>
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

  const menu = [
    <Box width={225} height={270} boxShadow="sm" rounded="md" bg="white">
      <Center paddingTop={30}>
        <img src="/images/burger-menu.png" width={200} />
      </Center>
      <Box padding={3}>
        <Text fontSize="lg" marginBottom={2} fontWeight={500}>
          Big cheese burger
        </Text>
        <Text fontSize="sm">
          No 10 opp lekki phase 1 bridge in sangotedo estate
        </Text>
      </Box>
    </Box>,
    <Box width={225} height={270} boxShadow="sm" rounded="md" bg="white">
      <Center paddingTop={30}>
        <img src="/images/burger-2.png" width={190} />
      </Center>
      <Box padding={3}>
        <Text fontSize="lg" marginBottom={2} fontWeight={500}>
          Big cheese burger
        </Text>
        <Text fontSize="sm">
          No 10 opp lekki phase 1 bridge in sangotedo estate
        </Text>
      </Box>
    </Box>,
    <Box width={225} height={270} boxShadow="sm" rounded="md" bg="white">
      <Center paddingTop={30}>
        <img src="/images/burger-3.png" width={115} />
      </Center>
      <Box padding={3}>
        <Text fontSize="lg" marginBottom={2} fontWeight={500}>
          Big cheese burger
        </Text>
        <Text fontSize="sm">
          No 10 opp lekki phase 1 bridge in sangotedo estate
        </Text>
      </Box>
    </Box>,
    <Box width={225} height={270} boxShadow="sm" rounded="md" bg="white">
      <Center paddingTop={30}>
        <img src="/images/burger-menu.png" width={200} />
      </Center>
      <Box padding={3}>
        <Text fontSize="lg" marginBottom={2} fontWeight={500}>
          Big cheese burger
        </Text>
        <Text fontSize="sm">
          No 10 opp lekki phase 1 bridge in sangotedo estate
        </Text>
      </Box>
    </Box>,
    <Box width={225} height={270} boxShadow="sm" rounded="md" bg="white">
      <Center paddingTop={30}>
        <img src="/images/burger-menu.png" width={200} />
      </Center>
      <Box padding={3}>
        <Text fontSize="lg" marginBottom={2} fontWeight={500}>
          Big cheese burger
        </Text>
        <Text fontSize="sm">
          No 10 opp lekki phase 1 bridge in sangotedo estate
        </Text>
      </Box>
    </Box>,
  ];

  const menuCarousel = () => (
    <AliceCarousel
      mouseTracking
      keyboardNavigation
      items={menu}
      responsive={responsive}
      disableDotsControls
      disableButtonsControls
    />
  );

  const Footer = () => (
    <Box border={"1px solid black"} bottom={0} >
        <Flex backgroundColor={"lightblue"} >
    <Box w='50px' h='10'/>
    <Spacer />
    <Box w='50px' h='10'  />
    <Spacer />
    <Box w='50px' h='10' />
    <Spacer />
    <Box w='50px' h='10' />
    <Spacer />
    <Box w='50px' h='10'  />
  </Flex>
    </Box>
  )

  return (
    <Box>
    <Box backgroundColor={"#F7F7FB"} height="100vh" padding={10}>
      {Header()}
      {foodList()}
      {listCarousel()}
      <Flex marginTop={5} marginBottom={5} alignItems={"center"}>
        <Box fontWeight={700} fontSize="xl">
          Popular restaurants
        </Box>
        <Spacer />
        <Box color={"#FE554A"}>View all(29)</Box>
      </Flex>
      {menuCarousel()}
     
    
    </Box>
    <Box width={"full"}>
      {Footer()}
    </Box>
    </Box>
  );
};

export default Delivery;
