import "../styles/ExpCard.css";

import star from "../images/star.svg";

const ExpCard = (props) => {
  return (
    <div className="expCard">
      {props.messageText && <p className="message">{props.messageText}</p>}
      <img className="cardImg" src={props.img} alt="" />
      <div className="stats">
        <img src={star} alt="" />
        <p>
          {props.rating}&nbsp;
          <span className="greyText">{props.greyText}</span>
        </p>
      </div>
      <p className="expText">{props.expText}</p>
      <h4>
        <span className="bold">{props.price}</span> / person
      </h4>
    </div>
  );
};

export default ExpCard;
