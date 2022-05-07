import "../styles/Exp.css";

import ExpCard from "./ExpCard";
import expData from "../utils/expData";

const Exp = () => {
  const allCards = expData.map((card) => (
    <ExpCard
      messageText={card.messageText}
      img={card.img}
      rating={card.rating}
      greyText={card.greyText}
      expText={card.expText}
      price={card.price}
    />
  ));
  return <section className="cardSlider">{allCards}</section>;
};

export default Exp;
