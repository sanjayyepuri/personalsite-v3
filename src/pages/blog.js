import * as React from "react"

// load fonts and css
import "@carbonplan/components/globals.css"
// import "@carbonplan/components/fonts.css"
// import "katex/dist/katex.min.css"

// components
import Layout from "../components/layout"
import PostList from "../components/postlist"

// markup
const IndexPage = () => {
  return (
    <Layout mode="mouse">
      <PostList />
    </Layout>
  )
}

export default IndexPage
