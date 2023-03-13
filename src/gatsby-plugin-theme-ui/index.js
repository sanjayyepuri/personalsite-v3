const theme = require("@carbonplan/theme");

const Theme = {
  ...theme,
  fonts: {
    body: "Rubik, relative-book-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    faux: "'IBM Plex Sans Condensed', relative-faux-book-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    heading:
      "Rubik, relative-medium-pro, stolzl, system-ui, -apple-system, BlinkMacSystemFont",
    mono: '"Jetbrains Mono", relative-mono-11-pitch-pro, "Fira Code", monospace',
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
