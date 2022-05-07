import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

const data = [
  {
    id: 101,
    img: img1,
    location: {
      country: "USA",
      spot: "Times Square",
      maps: "https://www.google.com/maps/@40.7588341,-73.9848658,17.82z",
    },
    date: "May 04, 2018 - May 06, 2018",
    description:
      "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in Midtown Manhattan, New York City. Formerly known as Longacre Square, Times square was renamed in 1904.",
  },
  {
    id: 102,
    img: img2,
    location: {
      country: "Portugal",
      spot: "Praia da Benagil",
      maps: "https://www.google.com/maps/@37.0874852,-8.4252931,18.07z",
    },
    date: "Sept 13, 2017 - Sept 15, 2017",
    description:
      "Praia da Benagil is a beach located on the Atlantic coast in the municipality of Lagoa, Algarve, in Portugal. Up to the late 20th century, the village's economy was based on ocean fishing. Now it is a tourist area with a widely used beach: Praia de Benagil.",
  },
  {
    id: 103,
    img: img3,
    location: {
      country: "Taiwan",
      spot: "Taipei 101",
      maps: "https://www.google.com/maps/@25.0336368,121.5647092,17.54z",
    },
    date: "Aug 05, 2016 - Aug 07, 2016",
    description:
      "Taipei 101 is a skyscraper in Taipei, Taiwan. This building was officially classified as the world’s tallest bulding from 2004 - 2009. Upon completion, it became the world’s first skyscraper to exceed a height of half a kilometer.",
  },
];

export default data;
