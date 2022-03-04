import React from "react"
import * as S from "./HomeStyles"
import Modal from "../Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { modalActions } from "../../store/modalSlice"

// login // axios -> post -> localhost:3500/auth
// register // axios -> post -> localhost:3500/register
// refresh?? // localhost:3500/refresh

// if admin // get -> localhost:3500/users
// books // localhost:3500/books

const Home = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.auth.accessToken)
  const user = useSelector((state) => state.auth.user)

  const handleModal = (type) => {
    dispatch(modalActions.toggleModal())
    dispatch(modalActions.changeModalType(type))
  }

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.OptionsWrap>
            <S.Button onClick={() => handleModal("register")}>
              Register
            </S.Button>
            <S.Button onClick={() => handleModal("login")}>Login</S.Button>
          </S.OptionsWrap>
          <S.OptionsWrap>
            {user && `hello ${user}`}
            {accessToken && (
              <p style={{ wordBreak: "break-all" }}>access: {accessToken}</p>
            )}
            <S.Button>Logout</S.Button>
          </S.OptionsWrap>
        </S.Wrapper>
      </S.Container>
      <Modal />
    </>
  )
}

export default Home
