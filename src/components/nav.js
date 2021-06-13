import React from "react";
import { Heading, Box, Text, Themed, Flex } from "theme-ui";

import { Row, Column, Buttons } from "@carbonplan/components";
import { Link } from "gatsby";

const { ArrowButton } = Buttons;

const Navlink = ({ children, to, external = false }) => {
  const button = (
    <ArrowButton fill="blue" size={"sm"} px={[2, 3]} label={children} />
  );

  return (
    <Box sx={{ my: "auto" }}>
      {external ? <a href={to}> {button} </a> : <Link to={to}> {button} </Link>}
    </Box>
  );
};

const Navbar = () => (
  <Box
    sx={{
      mt: 3,
      pb: 3,
    }}
  >
    <Flex>
      <Heading
        sx={{
          fontWeight: "bold",
          fontSize: [4, 5, 5, 6],
        }}
      >
        <Link to={"/"}>
          <Text sx={{ color: "primary" }}>
            <Text sx={{ color: "blue" }}>Sai</Text> Sanjay Yepuri{" "}
          </Text>
        </Link>
      </Heading>
      <Box sx={{ mx: "auto" }}></Box>

      <Navlink to="/"> Home </Navlink>
      <Navlink to="/blog"> Blog </Navlink>
      <Navlink to="https://drive.google.com/file/d/1OEg4nZAnqHKTMuYdlVuYouBxQqgOX9k0/view">
        Resume
      </Navlink>
    </Flex>

    <Box mt={[3, 3]} mb={[2]}>
      <Text sx={{ letterSpacing: "smallcaps" }}>
        MATH, CODE, AND OTHER THINGS.
      </Text>
    </Box>
  </Box>
);

export default Navbar;
