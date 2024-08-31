import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // const onScrolled = () => {
    //   if (window.scrollY > 50) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // };
    // window.onscroll = () => {
    //   console.log("Scrolling");
    // };
  }, []);

  const updateLink = (value) => {
    setActiveLink(value);
    console.log(activeLink);
  };

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="frist-navbar">
          <div className="logo-container">
            <Link to="/" className="link-nav my-logo">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <Link to="/" className="link-nav name">
              <span className="first">Gaimard</span>
              <span className="second">Solutions</span>
            </Link>
          </div>
          <ul className="menu">
            <li
              onClick={() => updateLink("accueil")}
              className={activeLink === "accueil" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/">
                Accueil
              </Link>
            </li>
            <li
              onClick={() => updateLink("formations")}
              className={activeLink === "formations" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/formations">
                Formations
              </Link>
            </li>
            <li
              onClick={() => updateLink("services")}
              className={activeLink === "services" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/services">
                Services
              </Link>
            </li>
            {/* <li className="dropdown">
              <span className="main">Services</span>
              <ul className="list">
                <li className="list-item">
                  <Link className="sub-link-nav" to="/formations">
                    Développement Web
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="sub-link-nav" to="/formations">
                    Développement Mobile
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="sub-link-nav" to="/formations">
                    Appication Excel
                  </Link>
                </li>
              </ul>
            </li> */}
            <li
              onClick={() => updateLink("projets")}
              className={activeLink === "projets" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/projets">
                Projets
              </Link>
            </li>
            <li
              onClick={() => updateLink("contact")}
              className={activeLink === "contact" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/contact">
                Contact
              </Link>
            </li>
            <div className="btn-start">Start</div>
          </ul>
          <div className="nav-icon-menu">
            <FiMenu className="nav-icon-menu-sub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
