import React from "react";
import "./Footer02.scss";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Logo from "../../assets/images/logo2.png";

const Footer02 = () => {
  return (
    <div className="footer-02">
      <div className="footer-container">
        <div className="footer-content">
          <div className="column">
            <div className="image-container">
              <img src={Logo} alt="" className="mon-logo" />
              <h1 className="le-logo">Solutions</h1>
            </div>
            <p className="mission">
              We are a web hosting provider on a mission to bring success to
              everyone online. We constantly improve our server technology,
              provide professional support, and simplify site creation with our
              AI Website Builder
            </p>
            <div className="location">
              <FaLocationDot className="icon-location" />
              <span>Douala Cameroun</span>
            </div>
          </div>
          <div className="column">
            <div className="title">Formations</div>
            <ul className="list-item-footer">
              <li>Microsoft Excel</li>
              <li>Programmation Excel VBA</li>
              <li>Dévéloppement Web</li>
              <li>Dévéloppement Mobile</li>
            </ul>
          </div>
          <div className="column">
            <div className="title">Services</div>
            <ul className="list-item-footer">
              <li>Conception de Site Web</li>
              <li>Conception d'Appli Mobile</li>
              <li>Dévéloppement d'Appli VBA</li>
            </ul>
          </div>
          <div className="column">
            <div className="title">Liens Utiles</div>
            <ul className="list-item-footer">
              <li>Conception de Site Web</li>
              <li>Conception d'Appli Mobile</li>
              <li>Dévéloppement d'Appli VBA</li>
            </ul>
          </div>
        </div>
        <div className="footer-lower-bottom">
          <div className="copy-right-social">
            <p>© 2004-2024 gaimardsolutions.com - Premium Web Hosting</p>
            <div className="social-container">
              <div className="icon-container">
                <BiLogoYoutube className="icon-soc" />
              </div>
              <div className="icon-container">
                <BiLogoLinkedin className="icon-soc" />
              </div>
              <div className="icon-container">
                <FaFacebookF className="icon-soc" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer02;
