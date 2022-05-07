import "../styles/Hero.css";

import imgGal1 from "../images/imgGal1.png";
import imgGal2 from "../images/imgGal2.png";
import imgGal3 from "../images/imgGal3.png";
import imgGal4 from "../images/imgGal4.png";
import imgGal5 from "../images/imgGal5.png";
import imgGal6 from "../images/imgGal6.png";
import imgGal7 from "../images/imgGal7.png";
import imgGal8 from "../images/imgGal8.png";
import imgGal9 from "../images/imgGal9.png";

const Hero = () => {
  return (
    <section>
      <div className="gallery">
        <img className="galleryImg imgGal1" src={imgGal1} alt="" />
        <img className="galleryImg imgGal2" src={imgGal2} alt="" />
        <img className="galleryImg imgGal3" src={imgGal3} alt="" />
        <img className="galleryImg imgGal4" src={imgGal4} alt="" />
        <img className="galleryImg imgGal5" src={imgGal5} alt="" />
        <img className="galleryImg imgGal6" src={imgGal6} alt="" />
        <img className="galleryImg imgGal7" src={imgGal7} alt="" />
        <img className="galleryImg imgGal8" src={imgGal8} alt="" />
        <img className="galleryImg imgGal9" src={imgGal9} alt="" />
      </div>
      <div className="textContainer">
        <h2 className="heroTitle">Online Experiences</h2>
        <p className="heroSubText">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
