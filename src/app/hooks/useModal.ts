import { useState, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useClickOutside(modalRef, () => {
    if (isOpen) {
      closeModal();
    }
  });

  return { isOpen, openModal, closeModal, modalRef };
};
