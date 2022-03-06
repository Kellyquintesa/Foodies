import { Box, Flex, Spacer, Button, Link, Text, Center } from "@chakra-ui/react";
import { BsFillClockFill, BsChevronLeft } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { AiFillStar, AiOutlineDown } from "react-icons/ai";
import NumericInput from "react-numeric-input";

const index = () => {
  
  const orderHeader = () => (
    <Box padding={10}>
      <Flex>
        <Center w="70px" h="50" >
          <Link href="/order/delivery">
          <Box fontSize={25} >
          <BsChevronLeft />{" "}
          </Box>
          </Link>
        </Center>
        <Spacer />
        <Box w="200px" h="50">
          {" "}
          <Center>
            <Box width="fit-content" >
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
          {" "}
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
          Cheeseburger is topped more
        </Text>
      </Box>
    </Box>
  );

  const cartButton = () => (
    <Box margin={5}>
      <Link href="/order/cart">
      <Button
        borderRadius={20}
        width="full"
        marginBottom={5}
        color="white"
        backgroundColor="foodiez.orange"
      >
        Add to cart
      </Button>
      </Link>
    </Box>
  );

  return (
    <Box backgroundColor={"#F7F7FB"}>
      <Box height="100vh">
        {orderHeader()}
        {menuPhoto()}
      </Box>
      <Box>{cartButton()}</Box>
    </Box>
  );
};

export default index;
