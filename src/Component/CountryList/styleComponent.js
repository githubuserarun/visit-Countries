import Styled from 'styled-components'

export const Li = Styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #94a3b8;
  background-color: #1f1f2f;
  `

export const Button = Styled.button`
  width: 80px;
  text-align: center;
  background-color: ${props => props.btnBg};
  border: none;
  padding: 5px;
  border-radius: 3px;
  color:${props => props.bgClr};
  `
