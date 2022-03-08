import React from "react"
import * as S from "./HomeStyles"
import Modal from "../Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../store/authSlice"
import { useNavigate, Link } from "react-router-dom"

// login // axios -> post -> localhost:3500/auth
// register // axios -> post -> localhost:3500/register
// refresh?? // localhost:3500/refresh

// if admin // get -> localhost:3500/users
// books // localhost:3500/books

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)
  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    dispatch(authActions.setAuth({}))
    navigate("/linkpage")
  }
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.OptionsWrap>
            <h1>Home</h1>
            <p>You are logged in as {user && `${user}`}</p>
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <S.Button onClick={logout}>Logout</S.Button>
          </S.OptionsWrap>
        </S.Wrapper>
      </S.Container>
      <Modal />
    </>
  )
}

export default Home
