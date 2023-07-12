import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../../assets/images/picture1.jpg";
import pic2 from "../../assets/images/picture2.jpg";
import pic3 from "../../assets/images/picture3.jpeg";
import styles from "./home.module.css";
import MetaData from "../layouts/MetaData.js";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Footer from "../footer/footer";
import Header1 from "../header/Header1";

const Home2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Header1 />

      <div className={styles.homeContainer}>
        <MetaData title="Home2" />
        <Slider {...settings}>
          <div className={styles.imageContainer}>
            <img
              src={pic1}
              alt=""
              style={{ width: "1500px", height: "400px" }}
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              src={pic2}
              alt=""
              style={{ width: "1500px", height: "400px" }}
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              src={pic3}
              alt=""
              style={{ width: "1500px", height: "400px" }}
            />
          </div>
        </Slider>
        <div className={styles.buttonContainer}>
          <Link to="/requests" className={styles.button}>
            <StarIcon className={styles.icon} />
            New Requests
          </Link>
          <Link to="/requests" className={styles.button}>
            <StarIcon className={styles.icon} />
            New Requests
          </Link>
          <Link to="/requests" className={styles.button}>
            <StarIcon className={styles.icon} />
            New Requests
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home2;
