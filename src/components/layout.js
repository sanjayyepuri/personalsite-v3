import React from "react"

import { Box, Container, Flex, Heading } from "theme-ui"
import { Dimmer, FadeIn } from "@carbonplan/components"

import Navbar from "./nav"
import Footerbar from "./footer"

const Header = ({ children }) =>
	<Box as="header"
		sx={{
			width: "100%",
			position: "sticky",
			top: 0,
			bg: "background"
		}}> {children} </Box>

const Main = ({children}) =>
	<Box as="main"
		sx={{
			width: "100%",
			flex: "1 1 auto"
		}}> {children} </Box>


const Footer = ({ children }) =>
	<Box as="footer"
		sx={{
			width: "100%",
		}}> {children} </Box>


const DimmerContainer = () =>
	<Box
		sx={{
			display: ["none", "none", "initial", "initial"],
			position: ["fixed"],
			right: [13],
			bottom: [17, 17, 15, 16],
		}}>
		<Dimmer />
	</Box>

const Layout = ({ children }) =>
	<Flex
		sx={{
			flexDirection: "column",
			minHeight: "100vh",
		}}>

		<Header>
			<Navbar />
		</Header>

		<Main>
			<FadeIn duration={250}><Container>{ children }</Container></FadeIn>
		</Main>

		<Footer>
			<Footerbar />
		</Footer>

		<DimmerContainer />
	</Flex>


export default Layout