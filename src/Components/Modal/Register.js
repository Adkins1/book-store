import React from "react"
import * as S from "./ModalStyles"

const Register = ({ user, pwd, setUser, setPwd, handleSubmit }) => {
  return (
    <S.Form onSubmit={(e) => handleSubmit(e)}>
      <h1>Register</h1>
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
      <S.Input
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        placeholder="password"
        type="password"
        autoComplete="off"
      />
      <S.Button type="submit">Register</S.Button>
    </S.Form>
  )
}

export default Register
