import React from "react";
import Navbar from "./Navbar";
import { Box, Heading, Center, Text, Button } from "@chakra-ui/react";
import background from "../Assets/bg.png";
import { motion } from "framer-motion";
import { BiArrowFromLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom'; // Import from 'react-router-dom' for correct usage of the Link component

function LandingPage() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Box
          bgImage={`url(${background})`}
          bgSize="800px"
          backgroundPosition="center"
          bgRepeat="no-repeat"
          minHeight="80vh"
          minWidth="100%"
        >
          <Center>
            <Heading size="2xl" mt="50vh" position="absolute" zIndex={2000}>
              Welcome to HAckHUb.com
            </Heading>
            <Text fontSize="30px" mt="70vh" fontWeight={700} position="absolute">
              Register your Future
            </Text>
            <Button
              mt="100vh"
              color="black"
              backgroundColor="pink.400"
              size="lg"
              position="absolute"
            >
              <Link
                to="/main"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "30px",
                  textDecoration: "none"
                }}
              >
                <span>Get Started</span> <BiArrowFromLeft size={30} style={{ marginLeft: "10px" }}/>
              </Link>
            </Button>
          </Center>
        </Box>
      </motion.div>
    </div>
  );
}

export default LandingPage;
