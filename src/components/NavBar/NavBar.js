import "./NavBar.css";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const links = [
    { link: "HOME", to: "#home" },
    { link: "MY SKILLS", to: "#skills" },
    { link: "PORTFOLIO", to: "#portfolio" },
    { link: "CONTACT", to: "#contact" },
    { link: "RESUME", to: "#" },
  ];
  return (
    <section className="navBarBG">
      <div className="linksContainer">
        {links.map((link, index) => {
          return (
            <Link to={link.to} smooth key={index} className="links">
              {link.link}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default NavBar;
