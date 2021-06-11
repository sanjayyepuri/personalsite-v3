import React from "react"
import { Container, Heading, Flex, Text } from "theme-ui"

const Navbar = () =>
	<Container>
			<Flex px={3} py={3}>
				<Heading sx={{
					fontWeight: "bold",
					fontSize: 6,
				}}> <Text sx={{color: "blue"}}>Sai</Text> Sanjay Yepuri </Heading>
			</Flex>
	</Container>

export default Navbar
