import React from "react";
import { Link } from "react-router-dom";
import styles from "./mainbox.module.css";
import MetaData from "../layouts/MetaData";
import Header from "../header/header";
import Footer from "../footer/footer";

const MainBox = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <MetaData title={`Login `} />
          <h1>Login Form</h1>
          <div className={styles.buttonContainer}>
            <Link to="/student-login" className={styles.roleButton}>
              Student
            </Link>
            <Link to="/lecturer-login" className={styles.roleButton}>
              Lecturer
            </Link>
            <Link to="/officer-login" className={styles.roleButton}>
              Officer
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainBox;
