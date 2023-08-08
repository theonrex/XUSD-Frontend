import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import Homepage from "../components/HomePage";
import React from "react";

const Home: NextPage<{}> = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Home</title>
      </Head>
      <Homepage />
    </div>
  );
};

export default Home;
