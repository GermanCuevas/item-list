/* import React from "react";
import { Modal } from "react-native";

const CustomModal = ({
  children,
  modalVisible,
  animationType,
  onRequestClose,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={onRequestClose}
    >
      {children}
    </Modal>
  );
};

export default CustomModal; */

import React from "react";
import { Modal } from "react-native";

const CustomModal = ({
  children,
  modalVisible = false,
  animationType,
  onRequestClose = () => null,
  transparent = false,
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={modalVisible}
      onRequestClose={onRequestClose}
      transparent={transparent}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
