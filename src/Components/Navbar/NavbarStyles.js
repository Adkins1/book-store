import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"

export const Container = styled.nav`
  height: 10vh;
  width: 100%;
  background: #3d5af1;
`
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Link = styled(LinkR)`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  color: white;
  font-size: 2rem;
  :hover {
    background: #5872f3;
    transition: 0.2s;
  }
`
