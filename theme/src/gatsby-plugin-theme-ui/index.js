/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#232129",
    background: "#fff",
    primary: "#fdbb07",
  },
  fonts: {
    default:
      "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  fontSizes: [12, 16, 18, 20, 22, 27, 56],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 1040,
  },
  h2: {
    likeH1: {
      color: "text",
      fontSize: 6,
      lineHeight: "heading",
    },
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "background",
      color: "text",
      fontWeight: "bold",
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    Subtitle: {
      textTransform: "uppercase",
      fontSize: 1,
      color: "primary",
    },
    h1: {
      color: "text",
      fontSize: 6,
      lineHeight: "heading",
    },
    a: {
      color: "primary",
    },
  },
}
