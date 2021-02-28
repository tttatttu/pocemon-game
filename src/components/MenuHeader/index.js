import React, { useState } from "react";
import LoginForm from "../LoginForm";
import Menu from "../Menu";
import Modal from "../Modal";
import NavBar from "../NavBar";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenNodal] = useState(true);

  const handleClickHamburg = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClickLogin = () => {
    setOpenNodal((prevState) => !prevState);
  };

  const handleSubmitLoginForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <Menu onClickMenu={handleClickHamburg} isOpen={isOpen} />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburg={handleClickHamburg}
        onClickLogin={handleClickLogin}
      />

      <Modal
        isOpen={isOpenModal}
        title="Log in..."
        onCloseModal={handleClickLogin}
      >
        <LoginForm onSubmit={handleSubmitLoginForm} />
      </Modal>
    </>
  );
};

export default MenuHeader;
