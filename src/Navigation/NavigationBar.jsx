import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Popup from '../components/Popup';
import { useState } from "react";

const NavigationBar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate()

  return (
    <>
    <StyledLogo onClick={() => {navigate('/')}}>GibJohn Tutoring</StyledLogo>
    <StyledDiv>
        <Button onClick={() => {navigate('/')}} text='Home'/>
        <Button onClick={() => {navigate('/FindATutor')}} text='Find a Tutor'/>
        <Button onClick={() => setButtonPopup(true)} text='Login'/>
        
    </StyledDiv>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </>
    )
  };

export default NavigationBar

const StyledDiv = styled.div`
  display: flex;
  padding-right: 30px;
  padding-top: 10px;
  gap: 20px;
  justify-content: flex-end;

  &:after {
    content:"";
    top: 6vh;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: black;
    left: 0;
  
`

const StyledLogo = styled.div`
position: absolute;
padding-top: 20px;
`