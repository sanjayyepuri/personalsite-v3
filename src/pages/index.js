import * as React from "react"

// load fonts and css
import "@carbonplan/components/globals.css"
import "@carbonplan/components/fonts.css"

// components
import Layout from "../components/layout"
import { Container, Flex, Text, Box, Grid } from "theme-ui"
import { Buttons } from "@carbonplan/components"

import PostList from "../components/postlist"

const { ArrowButton } = Buttons



// markup
const IndexPage = () => {
  return (
    <Layout>
      <Container>
          <Container>
            <Box py={3}>
            <Text sx={{ letterSpacing: "smallcaps" }}>MATH, CODE, AND OTHER THINGS.</Text>
            </Box>
            <PostList />
          </Container>
      </Container>
    </Layout>
  )
}

export default IndexPage
