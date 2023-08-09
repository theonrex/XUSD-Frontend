import React from "react";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { BannerImg } from "../../../assets";
import Image from "next/image";
export default function About() {
  return (
    <div className={`${styles.banner} ${styles.rowx} container mx-auto`}>
      <div>
        <h1>Swap tokens</h1>
        <p>
          Buy, sell, and explore tokens on Ethereum, Polygon, Optimism, and
          more.
        </p>
      </div>

      <div>
        <h1> Trade NFTs</h1>
        <p>
          Buy and sell NFTs across marketplaces to find more listings at better
          prices.
        </p>
      </div>

      <div>
        <section>
          <h1>Buy Crypto</h1>
          <h4>
            Buy crypto with your credit card or bank account at the best rates.
          </h4>
        </section>
      </div>
    </div>
  );
}
