import React from "react"
import * as S from "./ModalStyles"
import { useSelector } from "react-redux"
import Login from "./Login"
import Register from "./Register"
import Post from "./Post"
import Put from "./Put"
import Delete from "./Delete"

const Modal = () => {
  const displayModal = useSelector((state) => state.modal.displayModal)
  const modalType = useSelector((state) => state.modal.modalType)

  return (
    <S.Container $display={displayModal}>
      <S.Wrapper>
        {modalType === "register" && <Register />}
        {modalType === "login" && <Login />}
        {modalType === "post" && <Post />}
        {modalType === "put" && <Put />}
        {modalType === "delete" && <Delete />}
      </S.Wrapper>
    </S.Container>
  )
}

export default Modal
