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
        <h1>Discover digital art and collect NFTs</h1>
        <p>
          raroin is a shared liquidity NFT market smart contract which is used
          by multiple websites to provide the users the best possible
          experience.
        </p>
        <Button className={styles.view_market}>View Market</Button>{" "}
        <Button className={styles.upload_item}> Upload your item</Button>
      </div>
      <div className={styles.col50}>
        <Image src={BannerImg} alt="Banner" width={700} />
      </div>
    </div>
  );
}
