import * as React from "react"

// load fonts and css
import "@carbonplan/components/globals.css"
import "@carbonplan/components/fonts.css"

// components
import Layout from "../components/layout"
import { Container, Flex, Text, Box, Grid } from "theme-ui"
import { Buttons } from "@carbonplan/components"

const { ArrowButton } = Buttons

// temporary holder for article
const ArticleTmp = () =>
  <Box>
    <ArrowButton label={"Article Name"} size="lg" />
    <Grid gap={2} columns={[1,"1fr 1fr"]}>
      <Text>
        This is some text. Occasionally could be a bit more. But, this is the
        average case.
      </Text>
      <Text
        sx={{
          mx: [0, 3],
          letterSpacing: "smallcaps",
          fontFamily: "mono",
          fontSize: 1
        }}>
          APR 20 2021
      </Text>
    </Grid>
    <hr />
  </Box>

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Container>
          <Container>
            <Box py={3}>
            <Text sx={{ letterSpacing: "smallcaps" }}>HELLO, WORLD!</Text>
            </Box>
            <ArticleTmp />
            <ArticleTmp />
          </Container>
      </Container>
    </Layout>
  )
}

export default IndexPage
