import React from "react";
import { Box, Text, Heading } from "theme-ui";
import { Row, Column } from "@carbonplan/components";

const Intro = () => (
  <Box mt={[2, 5]} mb={[2, 5]}>
    <Row>
      <Column start={[1, 1, 2, 2]} width={[4, 2, 3, 2]}>
        <Heading
          sx={{
            letterSpacing: "heading",
            fontSize: [6, 6, 8, 9],
          }}
        >
          Hello, World!
        </Heading>
      </Column>

      <Column start={[1, 3, 5, 5]} width={[5, 4, 5, 5]}>
        <Box
          sx={{
            pt: [2, 2],
            fontSize: [3, 3, 4, 5],
          }}
        >
          <Text>
            Hi, I’m a student at the University of Texas at Austin, majoring in
            Computer Science and Mathematics. Feel free to shoot me an email if
            you have anything to say, interesting articles, job opportunities,
            etc.
          </Text>
        </Box>
      </Column>
    </Row>
  </Box>
);

export default Intro;
