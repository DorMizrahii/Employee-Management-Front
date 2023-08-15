import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 50px;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="../../public/checkpointICON2.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
