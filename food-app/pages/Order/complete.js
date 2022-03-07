import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";

const complete = () => {

const item = () => (
    <Box
    
    boxShadow="xs"
    borderRadius={35}
    bg="white"
    width="100%"
  
  >
   
      <Flex padding={3}>
        <Center w="70px" h="90">
          <img src="/images/burger-menu.png" />
        </Center>
        <Spacer />
        <Center w="140px" h="90" display={"flex"} flexDirection="column">
          <Box>
            <Text fontSize="lg" fontWeight={500}>
              The Macdonalds{" "}
            </Text>
            <Text fontSize="sm">Classic cheesburger</Text>
            <Text fontSize="lg" color={"#FE554A"} fontWeight={500}>
              $23.99
            </Text>
          </Box>
        </Center>
        <Spacer />
        <Box w="50px" h="90" >
        </Box>
        <Box w="90px" h="90" borderRadius={"0 35px 35px 0"}
        position="absolute"
        top={10} right={10}>  <img src="/images/complete.png" width={110} height={90}  /></Box>
     
      </Flex>
      
    

   
  </Box>
)
  return (
    <Box
    backgroundColor={"#F7F7FB"}
    padding={10}
    height={"100vh"}
    
    >
     {item()}
      

     
    </Box>
  );
};

export default complete;
