import React, { useState, useEffect } from "react"
import * as S from "./RegisterStyles"
import axios from "../../api/axios"
import { FaCheck, FaTimes } from "react-icons/fa"
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = "/register"

const Register = () => {
  const [user, setUser] = useState("")
  const [validName, setValidName] = useState(false)

  const [pwd, setPwd] = useState("")
  const [validPwd, setValidPwd] = useState(false)

  const [matchPwd, setMatchPwd] = useState("")
  const [validMatch, setValidMatch] = useState(false)

  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd, matchPwd])

  useEffect(() => {
    setValidName(USER_REGEX.test(user))
  }, [user])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
    setValidMatch(pwd === matchPwd)
  }, [pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user)
    const v2 = PWD_REGEX.test(pwd)
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry")
      return
    }
    handleRegister()
  }

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      console.log(response)
      setUser("")
      setPwd("")
      setMatchPwd("")
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response")
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken")
      } else {
        setErrMsg("Registration Failed")
      }
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          {errMsg && <p>Error: {errMsg}</p>}
          <h1>Register</h1>
          {validName ? (
            <FaCheck />
          ) : (
            <p>
              <FaTimes />
              [4 to 24 characters] Must begin with a letter. Letters, numbers,
              underscores, hyphens allowed.
              <br />
            </p>
          )}
          <S.Input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            placeholder="username"
            autoComplete="off"
          />
          {validPwd ? (
            <FaCheck />
          ) : (
            <p>
              <FaTimes />
              [8 to 24 characters] Password must include uppercase and lowercase
              letters, a number and a special character.
              <br />
            </p>
          )}
          <S.Input
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            placeholder="password"
            type="password"
            required
            autoComplete="off"
          />
          {validMatch ? (
            <FaCheck />
          ) : (
            <p>
              <FaTimes />
              Must match password
              <br />
            </p>
          )}
          <S.Input
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            placeholder="match password"
            type="password"
            autoComplete="off"
          />
          <S.Button
            disabled={!validName || !validPwd || !validMatch ? true : false}
            type="submit"
          >
            Register
          </S.Button>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  )
}

export default Register
