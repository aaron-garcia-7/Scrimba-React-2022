import "../styles/footer.css";

// Social Media Icons
import Twitter from "../images/Twitter.svg";
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import GitHub from "../images/GitHub.svg";

const Footer = () => {
  const mediaLinks = [
    {
      name: "Twitter Logo",
      src: Twitter,
      url: "https://twitter.com/aaron_garcia_7",
    },
    {
      name: "Facebook Logo",
      src: Facebook,
      url: "https://www.facebook.com/aaron.garcia.58367116/",
    },
    {
      name: "Instagram Logo",
      src: Instagram,
      url: "https://www.instagram.com/aaron_garcia_7/",
    },
    {
      name: "Github Logo",
      src: GitHub,
      url: "https://github.com/aaron-garcia-7",
    },
  ];

  const socialIcons = mediaLinks.map((li, key) => {
    return (
      <li key={key + 1}>
        <a href={li.url} target="_blank">
          <img src={li.src} alt={li.name} className="socialIcon" />
        </a>
      </li>
    );
  });

  return (
    <footer>
      <ul>{socialIcons}</ul>
    </footer>
  );
};

export default Footer;
