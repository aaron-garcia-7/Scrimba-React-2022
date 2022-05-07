import styled from "styled-components";
import favicon from "../images/favicon.svg";

const Nav = (props) => {
  return (
    <StyledNav>
      <img src={favicon} alt="" />
      <h2>{props.title}</h2>
    </StyledNav>
  );
};

const StyledNav = styled("nav")`
  width: 100vw;
  height: 10vh;
  min-height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f55a5a;
  margin-bottom: 4rem;
  position: sticky;
  top: 0;
  z-index: 2;
  & > * {
    margin: 0 0.4rem;
  }

  img {
    width: 2.4rem;
  }

  h2 {
    color: #fff;
    font-weight: 400;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 768px) {
    height: 8vh;
    img {
      width: 1.6rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default Nav;
