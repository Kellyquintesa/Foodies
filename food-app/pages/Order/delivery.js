import { Box, Flex, Spacer } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  RepeatIcon,
  EditIcon,
  IconButton,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon
} from "@chakra-ui/react";

const delivery = () => {
    
  const header = () => (
    <Box>
      <Flex padding={10}>
        <Box w="70px" h="10" >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
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

  return (
  
  <Box>
      
      {header()}</Box>
  );
};

export default delivery;
