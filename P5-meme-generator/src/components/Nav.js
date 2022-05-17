import styled from "styled-components";

import troll from "../images/troll.png";

const Nav = () => {
  return (
    <StyledNav>
      <div className="logo">
        <img src={troll} alt="" />
        <h2>Meme Generator</h2>
      </div>
      <div className="subTitle">
        <h3>React Course - Project 5</h3>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled("nav")`
  background: linear-gradient(90deg, #672280, #a626d3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 14vh;
  min-height: 4.8rem;
  padding: 0 2rem;

  .logo {
    display: flex;
    align-items: center;
    img {
      width: 4rem;
      /* height: 3.2rem; */
      margin-right: 1rem;
    }
    h2 {
      color: #fff;
      font-weight: 500;
      letter-spacing: -2px;
      font-size: 1.8rem;
    }
  }

  .subTitle {
    h3 {
      color: #fff;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 1.4rem;
    height: 12vh;
    .logo {
      img {
        width: 2.4rem;
        margin-right: 0.4rem;
      }
      h2 {
        font-size: 1.4rem;
        letter-spacing: -1px;
      }
    }

    .subTitle {
      h3 {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 484px) {
    padding: 0 1rem;
    height: 8vh;
    .logo {
      img {
        width: 2rem;
        margin-right: 0.6rem;
      }
      h2 {
        font-size: 1rem;
      }
    }

    .subTitle {
      h3 {
        font-size: 0.8rem;
      }
    }
  }
`;

export default Nav;
