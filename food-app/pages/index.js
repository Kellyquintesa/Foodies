import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Flex, Spacer, Text, Button, ButtonGroup } from "@chakra-ui/react";
import Image from "next/image";

const Home = () => {
  const images = [
    <div className="1">
      <img src="/images/login-1.png" />
    </div>,
    <div className="2">
      <img src="/images/login-2.png" />
    </div>,
    <div className="3">
      <img src="/images/login-3.png" />
    </div>,
  ];

  const renderCarousel = () => {
    <AliceCarousel
      autoPlay
      autoPlayInterval="3000"
      items={images}
      animationType="fadeout"
      animationDuration={800}
      disableButtonsControls
      infinite
      mouseTracking
    />;
  };

  return (
    <Box>
      <Flex textAlign="center" padding={10}>
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
      {renderCarousel()}
      <Box padding={5}>
        <Button
          borderRadius={20}
          width="full"
          marginBottom={5}
          color="white"
          backgroundColor="foodiez.orange"
        >
          Create an account
        </Button>{" "}
        <br />
        <Button borderRadius={20} width="full" color="foodiez.orange">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
