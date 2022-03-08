import React, { useState, useEffect } from "react"
import * as S from "./LoginStyles"
import { authActions } from "../../store/authSlice"
import axios from "../../api/axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
const LOGIN_URL = "/auth"

const Login = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin()
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
      navigate("/linkpage")
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

  return (
    <S.Container>
      <S.Wrapper>
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
      </S.Wrapper>
    </S.Container>
  )
}

export default Login
