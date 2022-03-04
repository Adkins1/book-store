import React from "react"
import * as S from "./ModalStyles"

const Delete = ({ handleSubmit }) => {
  return (
    <S.Form onSubmit={(e) => handleSubmit(e)}>
      <h1>Delete book?</h1>
      <S.Button type="submit">Delete</S.Button>
    </S.Form>
  )
}

export default Delete
