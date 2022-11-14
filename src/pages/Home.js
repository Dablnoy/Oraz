import React from "react";
import styles from "./Home.module.css";
import backGround from "../assets/s2.jpg";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.h1}>Online Shopping Store</h1>
      <img src={backGround} alt="" className={styles.img}/>
    </div>
  );
};

export default Home;
