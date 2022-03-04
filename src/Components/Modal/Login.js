import React, { useState, useEffect } from "react"
import * as S from "./ModalStyles"
import { authActions } from "../../store/authSlice"
import axios from "../../api/axios"
import { modalActions } from "../../store/modalSlice"
import { useSelector, useDispatch } from "react-redux"

const LOGIN_URL = "/auth"

const Login = () => {
  const dispatch = useDispatch()
  const modalType = useSelector((state) => state.modal.modalType)

  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])

  // to be sure, check again if it is correct modal type and handle login
  const handleSubmit = (e) => {
    e.preventDefault()
    if (modalType === "login") handleLogin()
  }

  const handleLogin = async () => {
    try {
      // post username and password
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      // from response take accessToken and roles
      const { accessToken, roles } = response?.data
      setUser("")
      setPwd("")
      // set redux state of a user
      dispatch(authActions.setAuth({ accessToken, roles, user }))
      handleModalType("")
      dispatch(modalActions.toggleModal())
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response")
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password")
      } else if (err.response?.status === 401) {
        setErrMsg("Wrong Username or Password")
      } else {
        setErrMsg("Login Failed")
      }
    }
  }

  const handleModalType = (type) => {
    dispatch(modalActions.changeModalType(modalType, type))
  }

  return (
    <S.Form onSubmit={(e) => handleSubmit(e)}>
      {errMsg && <p>Error: {errMsg}</p>}
      <h1>Login</h1>
      <S.Input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        placeholder="username"
        autoComplete="off"
      />
      <S.Input
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        placeholder="password"
        type="password"
        autoComplete="off"
      />
      <S.Button type="submit">Login</S.Button>
    </S.Form>
  )
}

export default Login
