import theme from "@carbonplan/theme";

const Theme = {
  ...theme,
  fonts: {
    body: "relative-book-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    faux: "relative-faux-book-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    heading:
      "relative-medium-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    mono: 'relative-mono-11-pitch-pro, "Fira Code", monospace',
  },
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 500,
  },
  styles: {
    ...theme.styles,
  },
};

export default Theme;
