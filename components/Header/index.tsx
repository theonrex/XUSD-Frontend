import React from "react";
import { Icon, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from "./styles.module.css";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.modeBg}>
      <div className={styles.mode}>
        <button className={styles.lightMode} onClick={toggleColorMode}>
          <Icon as={BsFillSunFill} /> Light
        </button>
        <button className={styles.darkMode} onClick={toggleColorMode}>
          <Icon as={BsFillMoonFill} /> Dark
        </button>
      </div>
    </div>
  );
};

export default Header;
