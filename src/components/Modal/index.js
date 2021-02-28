import React, { useEffect, useRef } from "react";
import s from "./style.module.css";
import cn from "classnames";

const Modal = ({ isOpen, title, children, onCloseModal }) => {
  const modalEl = useRef();

  useEffect(() => {
    document.querySelector("body").style.overflow = isOpen ? "hidden" : null;
  }, [isOpen]);

  const handleCloseModal = () => {
    onCloseModal && onCloseModal(false);
  };

  const handleClickRoot = (event) => {
    if (!modalEl.current.contains(event.target)) {
      handleCloseModal();
    }
  };
  return (
    <div class={cn(s.root, { [s.open]: isOpen })} onClick={handleClickRoot}>
      <div ref={modalEl} class={s.modal}>
        <div class={s.head}>
          {title}
          <span class={s.btnClose} onClick={handleCloseModal}></span>
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
