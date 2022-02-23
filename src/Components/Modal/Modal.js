import React from "react"
import * as S from "./ModalStyles"
import { useSelector, useDispatch } from "react-redux"
import { modalActions } from "../../store/modalSlice"

const Modal = () => {
  const dispatch = useDispatch()
  const displayModal = useSelector((state) => state.modal.displayModal)
  const modalType = useSelector((state) => state.modal.modalType)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(modalActions.toggleModal(displayModal))
  }

  const handleModalType = (type) => {
    dispatch(modalActions.changeModalType(modalType, type))
  }

  return (
    <S.Container $display={displayModal}>
      <S.Wrapper>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          {modalType === "register" && (
            <>
              <h1>Register</h1>
              <S.Input placeholder="username" />
              <S.Input placeholder="password" />
              <S.Input placeholder="repeat password" />
              <S.Button onClick={() => handleModalType("")} type="submit">
                Register
              </S.Button>
            </>
          )}
          {modalType === "login" && (
            <>
              <h1>Login</h1>
              <S.Input placeholder="username" />
              <S.Input placeholder="password" />
              <S.Button onClick={() => handleModalType("")} type="submit">
                Login
              </S.Button>
            </>
          )}
          {modalType === "post" && (
            <>
              <h1>Create new book</h1>
              <S.Input type="text" placeholder="name" />
              <S.Input type="text" placeholder="desc" />
              <S.Input type="number" placeholder="price" />
              <S.Button onClick={() => handleModalType("")} type="submit">
                Create
              </S.Button>
            </>
          )}
          {modalType === "put" && (
            <>
              <h1>Edit a book</h1>
              <S.Input type="text" placeholder="name" />
              <S.Input type="text" placeholder="desc" />
              <S.Input type="number" placeholder="price" />
              <S.Button onClick={() => handleModalType("")} type="submit">
                Edit
              </S.Button>
            </>
          )}
          {modalType === "delete" && (
            <>
              <h1>Do you want to delete this book?</h1>
              <S.Button onClick={() => handleModalType("")} type="submit">
                Delete
              </S.Button>
            </>
          )}
        </S.Form>
      </S.Wrapper>
    </S.Container>
  )
}

export default Modal
