import React from "react";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/button";
import { BsArrowDownShort } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { ConnectWallet } from "@thirdweb-dev/react";
import PayModal from "../Modal/PayModal";
import ReceiveModal from "../Modal/receiveModal";
export default function SwapBox() {
  return (
    <div className={`container mx-auto`}>
      <div className={styles.swapBox}>
        <div className={styles.swapHeader}>
          <section>
            <h2>Swap</h2> <h2>Buy</h2>
          </section>
          <h1 className={styles.settings}>
            {" "}
            <AiFillSetting />
          </h1>
        </div>
        <div className={styles.payBox}>
          <section className={styles.amount}>
            <h3>You pay</h3>
            <h1>0</h1>
          </section>
          <section>
            <PayModal />
          </section>
        </div>
        <div className={styles.arrowDown}>
          <BsArrowDownShort />
        </div>
        <div className={styles.receiveBox}>
          <section className={styles.amount}>
            <h3>You receive</h3>
            <h1>0</h1>
          </section>
          <section>
            <ReceiveModal />
          </section>
        </div>
        <div className={styles.walletBTN}>
          <ConnectWallet />
        </div>{" "}
      </div>
    </div>
  );
}
