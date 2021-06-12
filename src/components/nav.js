import React from "react";
import { Heading, Box, Text } from "theme-ui";

import { Row, Column } from "@carbonplan/components";
import { Link } from "gatsby";

const Navbar = () => (
  <Box>
    <Row
      sx={{
        mt: 3,
        pb: 3,
      }}
    >
      <Column start={[1]} width={[6]}>
        <Box>
          <Heading
            sx={{
              fontWeight: "bold",
              fontSize: [5, 6],
            }}
          >
            {" "}
            <Link to={"/"}>
              <Text sx={{ color: "primary" }}>
                <Text sx={{ color: "blue" }}>Sai</Text> Sanjay Yepuri{" "}
              </Text>
            </Link>
          </Heading>
        </Box>
      </Column>
    </Row>
    <Box mt={[1, 3]} mb={[3]}>
      <Text sx={{ letterSpacing: "smallcaps" }}>
        MATH, CODE, AND OTHER THINGS.
      </Text>
    </Box>
  </Box>
);

export default Navbar;
