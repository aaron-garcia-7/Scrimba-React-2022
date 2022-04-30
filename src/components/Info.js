import "../styles/info.css";
import profile from "../images/profile.JPEG";
import mail from "../images/Mail.svg";
import linkedin from "../images/linkedin.svg";
import { hover } from "@testing-library/user-event/dist/hover";

const Info = (props) => {
  let hoverHandler = () => {
    console.log("Looks like you may want to contact me. Yay!");
  };

  return (
    <div className="infoSection">
      <img src={profile} alt="" className="profile" />
      <div className="nameArea">
        <h1 style={{ fontWeight: 600 }}>{props.name}</h1>
        <h2>FullStack Developer</h2>
        <a href="#">aaronegarcia.com</a>
      </div>
      <div className="cta">
        <a
          onMouseEnter={hoverHandler}
          href="mailto:aaronegarcia1@gmail.com"
          className="btn1"
        >
          <img src={mail} alt="" />
          <p>{!props.logged ? "Email" : "Call"}</p>
        </a>
        <a
          href="https://www.linkedin.com/in/aaron-garcia-3b7081211/"
          target="_blank"
          className="btn2"
        >
          <img src={linkedin} alt="" />
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Info;
