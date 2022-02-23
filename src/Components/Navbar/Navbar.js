import React from "react"
import * as S from "./NavbarStyles"

const Navbar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Link to="/">Home</S.Link>
        <S.Link to="/bookstore">Store</S.Link>
      </S.Wrapper>
    </S.Container>
  )
}

export default Navbar
