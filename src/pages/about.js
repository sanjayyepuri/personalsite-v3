import * as React from "react"

// load fonts and css
import "@carbonplan/components/globals.css"
import "@carbonplan/components/fonts.css"
import "katex/dist/katex.min.css"

// components
import Layout from "../components/layout"

import { Box, Heading } from "theme-ui"
import { Row, Column } from "@carbonplan/components"


const Intro = () =>
	<Box mt={[2, 5]}>
		<Row>
			<Column start={[1, 2, 2, 2]} width={[4]}>
				<Heading sx={{
					letterSpacing: "heading",
					fontSize: [6, 6, 8, 8]
				}}>Hello, World!</Heading>
			</Column>
		</Row>
	</Box>




// markup
const IndexPage = () => {
	return (
		<Layout mode="mouse">
			<Intro />
		</Layout>
	)
}

export default IndexPage

