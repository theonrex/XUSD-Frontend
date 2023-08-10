import React from "react";
import styles from "./styles.module.css";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/modal";
import SearchBox from "../../Inputs/searchBox";
import { IoIosArrowDown } from "react-icons/io";
export default function PayModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={`container mx-auto ${styles.PayModal}`}>
      <Button onClick={onOpen} className={styles.swapCoin}>
        {" "}
        ETH <IoIosArrowDown />{" "}
      </Button>

      <div className={styles.ModalBody}>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />{" "}
          <ModalContent
            bg="#0a0208"
            border="1px"
            borderColor="gray.200"
            width="80%"
          >
            <ModalHeader color="white">
              <h3>Select a token</h3>
            </ModalHeader>
            <ModalCloseButton color="white" />

            <ModalBody>
              <SearchBox />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
