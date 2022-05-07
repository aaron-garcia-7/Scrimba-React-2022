import "../styles/Nav.css";

import logo from "../images/logo.svg";
import globe from "../images/globe.svg";
import burger from "../images/burger.svg";
import profile from "../images/profile.svg";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navInt">
        <button className="btnHost">Become a Host</button>
        <button className="btnLang">
          <img src={globe} alt="" />
        </button>
        <button className="btnLog">
          <img src={burger} alt="" />
          <img src={profile} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
