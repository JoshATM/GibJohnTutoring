import React from 'react'
import Login from '../pages/Login';
import { styled } from 'styled-components';

export default function Popup(props) {
  return (props.trigger) ? (
    <>
      <Login/>
      { props.children }
      <StyledButton onClick={() => props.setTrigger(false)}>X</StyledButton>
    </>
  ) : " ";
}

const StyledButton = styled.button`
position: absolute;
top: 16px;
right: 16px;
font-size: 20px;
`
