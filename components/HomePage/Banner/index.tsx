import React from "react";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { BannerImg } from "../../../assets";
import Image from "next/image";
export default function Banner() {
  return (
    <div className={`${styles.banner} ${styles.rowx} container mx-auto`}>
      <div className={`${styles.col50} ${styles.hero}`}>
        <h1>Trade crypto and NFTs with confidence</h1>
        <p>Buy, sell, and explore tokens and NFTs</p>
        <div className={styles.getStarted}>
          <Button >
            {" "}
            <Link href="/swap"> Get Started</Link>{" "}
          </Button>{" "}
        </div>
      </div>
      <div className={styles.col50}>
        <Image src={BannerImg} alt="Banner" width={700} />
      </div>
    </div>
  );
}
