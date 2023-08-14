// eslint-disable-next-line no-unused-vars
import { styled } from "styled-components";


const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `font-size: 3rem;
  font-weight: 600;
  text-align:center;
 `}
  ${(props) =>
    props.as === "h2" &&
    `font-size: 2rem
  font-weight: 600;
 `}
  ${(props) =>
    props.as === "h3" &&
    `font-size: 2rem;
  font-weight: 500;
 `}
  line-height:1.4;
`;
export default Heading;
