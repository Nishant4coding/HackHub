import React from "react";
import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  Heading,
  Center,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import Hamburger from "hamburger-react";

function Navbar() {
  return (
    <Box py={4} bg="#212121" shadow="md">
      <Flex align="center" maxW="container.xl" m="auto">
        <ChakraLink as={Link} to="/" mr={6} fontWeight="bold" fontSize="xl">
          <Image width="200px" src={logo} ml={"20px"} />
        </ChakraLink>
        <Spacer />
        <Button
          colorScheme="blue"
          size="md"
          pl="30px"
          pr="30px"
          _hover={{ backgroundColor: "#007BFF", color: "#FFFFFF" }}
        >
          <Link to="./main">Get Started</Link>
        </Button>

        <Button
          colorScheme="orange"
          size="md"
          pl="40px"
          pr="40px"
          marginLeft="20px"
          mr="10px"
          _hover={{ backgroundColor: "#FFA500", color: "#272727" }}
        >
          <Link to="/auth">Login/SignUp</Link>
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
