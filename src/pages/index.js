import * as React from "react"

// load fonts and css
import "@carbonplan/components/globals.css"
import "@carbonplan/components/fonts.css"
import "katex/dist/katex.min.css"

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
      <PostList />
    </Layout>
  )
}

export default IndexPage
