import React from "react"
import * as S from "./ModalStyles"

const Put = ({ handleSubmit }) => {
  return (
    <S.Form onSubmit={(e) => handleSubmit(e)}>
      <h1>Edit book</h1>
      <S.Input
        type="text"
        // onChange={(e) => setUser(e.target.value)}
        // value={user}
        placeholder="Name"
        autoComplete="off"
      />
      <S.Input
        // onChange={(e) => setPwd(e.target.value)}
        // value={pwd}
        placeholder="Description"
        type="text"
        autoComplete="off"
      />
      <S.Input
        // onChange={(e) => setPwd(e.target.value)}
        // value={pwd}
        placeholder="Price"
        type="number"
        autoComplete="off"
      />
      <S.Button type="submit">Edit Book</S.Button>
    </S.Form>
  )
}

export default Put
