import styled from "styled-components"

export const Container = styled.aside`
  position: absolute;
  top: 0;
  display: ${({ $display }) => ($display ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(6px);
  z-index: 100;
`
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 20%;
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
