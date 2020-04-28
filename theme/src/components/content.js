import styled from "@emotion/styled"

const Content = styled.p`
  line-height: 30px;
  font-family: ${props => props.theme.fonts.content};
  font-size: ${props => props.theme.fontSizes[1]}px;
  color: ${props => props.theme.colors.contentText};
`

export default Content
