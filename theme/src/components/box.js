import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
// import { css } from "@emotion/core";

// import mediaqueries from "@styles/media";

const Box = styled("div", {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    flex: 1,
  },
  props => props.css
)

export default Box
