import React from "react"
import * as S from "./StoreStyles"
import Modal from "../Modal/Modal"
import { useDispatch } from "react-redux"
import { modalActions } from "../../store/modalSlice"

const Store = () => {
  const dispatch = useDispatch()
  const handleModal = (type) => {
    dispatch(modalActions.toggleModal())
    dispatch(modalActions.changeModalType(type))
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Button onClick={() => handleModal("post")}>Create</S.Button>
        <S.Button onClick={() => handleModal("put")}>Edit</S.Button>
        <S.Button onClick={() => handleModal("delete")}>Delete</S.Button>
      </S.Wrapper>
      <Modal />
    </S.Container>
  )
}

export default Store
