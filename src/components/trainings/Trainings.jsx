import React from "react";
import "./Trainings.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Training1 from "../../assets/images/logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trainings = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <div className="trainings">
      <div className="trainings-container">
        <span className="point-animate"></span>
        <h2>Formations</h2>
        <p>
          Nos différentes formations sur divers sujetsNos différentes formations
          sur divers sujets Nos différentes formations sur divers sujets
        </p>
        {/* <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          className="trainings-slider"
        >
          <div className="item">
            <img src={Training1} alt="" />
            <h5>Excel: Les Bases</h5>
          </div>
          <div className="item">
            <img src={Training1} alt="" />
            <h5>Excel: Tableau de Bord & TCD</h5>
          </div>
          <div className="item">
            <img src={Training1} alt="" />
            <h5>Excel: Développement VBA</h5>
          </div>
          <div className="item">
            <img src={Training1} alt="" />
            <h5>Développement Web</h5>
          </div>
          <div className="item">
            <img src={Training1} alt="" />
            <h5>Développement Mobile</h5>
          </div>
        </Carousel> */}

        <div className="slider-container">
          <Slider {...settings} className="trainings-slider">
            <div className="item">
              <div className="item-container">
                <img src={Training1} alt="" />
                <h5>Excel</h5>
                <strong className="details">Les Bases</strong>
                <button className="souscrire">Souscrire</button>
              </div>
            </div>
            <div className="item">
              <div className="item-container">
                <img src={Training1} alt="" />
                <h5>Excel</h5>
                <strong className="details">Tableau de Bord & TCD</strong>
                <button className="souscrire">Souscrire</button>
              </div>
            </div>
            <div className="item">
              <div className="item-container">
                <img src={Training1} alt="" />
                <h5>Excel</h5>
                <strong>Développement VBA</strong>
                <button className="souscrire">Souscrire</button>
              </div>
            </div>
            <div className="item">
              <div className="item-container">
                <img src={Training1} alt="" />
                <h5>Développement Web</h5>
                <strong>HTML,CSS, javascript</strong>
                <button className="souscrire">Souscrire</button>
              </div>
            </div>
            <div className="item">
              <div className="item-container">
                <img src={Training1} alt="" />
                <h5>Développement Mobile</h5>
                <strong>HTML,CSS, javascript</strong>
                <button className="souscrire">Souscrire</button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
