import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"

export const Container = styled.section`
  height: 90vh;
  width: 100%;
  background: #e2f3f5;
`
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
export const Form = styled.form`
  background: #3d5af1;
  height: 50%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  gap: 10px;
`
export const Input = styled.input`
  height: 4rem;
  width: 80%;
  font-size: 1.5rem;
`
export const Button = styled.button`
  border: none;
  width: 20%;
  height: 3rem;
  font-size: 1.5rem;
  background: #22d1ee;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background: #41d6f1;
    transition: 0.2s;
    transform: scale(110%);
  }
`
