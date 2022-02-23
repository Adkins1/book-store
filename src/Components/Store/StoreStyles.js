import styled from "styled-components"

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
