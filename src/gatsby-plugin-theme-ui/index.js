const theme = require("@carbonplan/theme");

const Theme = {
  ...theme,
  fonts: {
    body: "Lexend, relative-book-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    faux: "Lexend, relative-faux-book-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    heading:
      "Lexend, relative-medium-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    mono: '"Fira Code", relative-mono-11-pitch-pro, "Fira Code", monospace',
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

module.exports = Theme;
