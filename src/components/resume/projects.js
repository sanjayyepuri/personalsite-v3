import React from "react";

import { Box, Heading } from "@theme-ui/components";
import { Row, Column, Buttons } from "@carbonplan/components";

const { CalloutButton } = Buttons;

const Projects = () => (
  <Box id="projects" mt={[3, 2, 6, 6]} mb={[3, 2, 6, 6]}>
    <Row mb={[1, 2]}>
      <Column start={[1, 1, 2, 2]} width={[3]}>
        <Heading
          sx={{
            fontSize: [4, 5],
            color: "teal",
          }}
        >
          Projects
        </Heading>
      </Column>
    </Row>
    <Row>
      <Column start={[1, 1, 2, 2]} width={[3]}>
        <a href="https://drive.google.com/file/d/1OEg4nZAnqHKTMuYdlVuYouBxQqgOX9k0/view" target="_blank">
          <CalloutButton color="primary" label="Resume">
            Coming Soon... In the meanwhile check out my{" "}
          </CalloutButton>
        </a>
      </Column>
    </Row>
  </Box>
);

export default Projects;
