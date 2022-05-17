import { useState, useEffect } from "react";

import styled from "styled-components";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    let randomNum = Math.floor(Math.random() * allMemes.length);
    let randomSrc = allMemes[randomNum].url;
    setMeme(() => ({
      topText: "",
      bottomText: "",
      randomImg: randomSrc,
    }));
  };

  const changeText = (e) => {
    const { name, value } = e.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <StyledMain>
      <section>
        <div className="top">
          <input
            className="input topInput"
            type="text"
            name="topText"
            placeholder="Top text"
            onChange={changeText}
          />
          <input
            className="input bottomInput"
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            onChange={changeText}
          />
        </div>
        <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </section>
      {meme.randomImg && (
        <div className="imgDiv">
          <h5 className="topText">{meme.topText}</h5>
          <img src={meme.randomImg} alt="" />
          <h5 className="bottomText">{meme.bottomText}</h5>
        </div>
      )}
    </StyledMain>
  );
};

const StyledMain = styled("main")`
  width: 80vw;
  max-width: 48rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  section {
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.2rem;
      .input {
        width: 48%;
        padding: 1rem 0.8rem;
        border-radius: 0.4rem;
        border: 1px solid #c0c0c0;
      }
    }
    button {
      /* background: linear-gradient(90deg, #672280, #a626d3); */
      background: #672280;
      padding: 1rem 2rem;
      border: 1px solid #672280;
      border-radius: 0.4rem;
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        background: #fff;
        color: #672280;
      }
    }
  }
  .imgDiv {
    width: 100%;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
    .topText,
    .bottomText {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      width: 80%;
      text-align: center;
      font-size: 2.6rem;
      font-weight: 600;
      color: #fff;
      text-shadow: 0px 1px 4px black;
    }
    .topText {
      top: 48px;
    }
    .bottomText {
      bottom: 48px;
    }
    img {
      margin: auto;
      width: 100%;
      height: 24rem;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 484px) {
    section {
      .top {
        flex-direction: column;
        .input {
          width: 100%;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
      }
      button {
        &:hover {
          background: #672280;
          color: #fff;
        }
      }
    }
    .imgDiv {
      .topText,
      .bottomText {
        font-size: 1.6rem;
      }
    }
  }
`;

export default Main;
