import theme from "@carbonplan/theme"

const Theme = {
	...theme,
	fonts: {
		body:
			'relative-book-pro, Lexend, system-ui, -apple-system, BlinkMacSystemFont',
		faux:
			'relative-faux-book-pro, Lexend, system-ui, -apple-system, BlinkMacSystemFont',
		heading:
			'relative-medium-pro, Lexend, system-ui, -apple-system, BlinkMacSystemFont',
		mono: 'relative-mono-11-pitch-pro, "Fira Code", monospace',
	},
	styles: {
		...theme.styles
	}
}

export default Theme
