import React from "react";
import { Stack } from "@chakra-ui/layout";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/input";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./searchBox.module.css";
export default function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <Stack spacing={4}>
        <InputGroup bg="#e2eef1" outline="none" border="none">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" bg="white" />
          </InputLeftElement>
          <Input type="search" placeholder=" Search" />
        </InputGroup>
      </Stack>
    </div>
  );
}
