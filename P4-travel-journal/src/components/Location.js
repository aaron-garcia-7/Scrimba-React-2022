import styled from "styled-components";
import pin from "../images/pin.svg";

const Location = ({ props }) => {
  return (
    <StyledSection>
      <img className="photo" src={props.img} alt={props.location.spot} />
      <div className="textArea">
        <div>
          <img src={pin} alt={null} />
          <h4>{props.location.country}</h4>
          <a href={props.location.maps} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2>{props.location.spot}</h2>
        <h3>{props.date}</h3>
        <p>{props.description}</p>
        <button>Read More</button>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled("section")`
  width: 64vw;
  min-width: 42rem;
  margin: 2rem auto;
  display: flex;

  .photo {
    width: 14rem;
    height: 18rem;
    border-radius: 0.6rem;
    margin-right: 1rem;
    object-fit: cover;
  }

  .textArea {
    padding-top: 1rem;
    div {
      display: flex;
      margin-bottom: 1rem;
      img {
        width: 1rem;
        margin-right: 0.6rem;
      }
      h4 {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        font-weight: 300;
        margin-right: 2rem;
      }
      a {
        color: #918e9b;
        text-decoration: none;
        border-bottom: 1px solid #918e9b;
      }
    }
    h2 {
      font-size: 2.8rem;
      margin-bottom: 1.2rem;
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      color: #f55b5a;
    }
    p {
      font-size: 0.9rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }
    button {
      background: #f55b5a;
      color: #fff;
      border: 1px solid #f55b5a;
      padding: 0.6rem 2rem;
      cursor: pointer;
      border-radius: 0.4rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 80vw;
    min-width: auto;
    margin: 4rem auto;

    .photo {
      width: 100%;
      height: 14rem;
      object-fit: cover;
      /* border-radius: 0.6rem; */
      margin-right: 0;
    }

    .textArea {
      div {
        padding: 0rem 0.2rem;
        h4 {
          margin-right: auto;
        }
        a {
          font-size: 0.8rem;
          transform: translate(0px, 2px);
        }
      }
      h2 {
        font-size: 2.4rem;
        margin-bottom: 0.8rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
`;

export default Location;
