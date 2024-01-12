import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Popup from '../components/Popup';
import { useState } from "react";
import Logo from '../assets/GibJohnTutoringLogo.png';


const NavigationBar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();
  const Picture = localStorage.getItem('profilePicture');

  if (localStorage.getItem('welcome') == null) {
    localStorage.setItem('welcome', '0px');
  }

  const XButton = () => {
  //   console.log('X-Button Pressed');
  //   console.log(localStorage.getItem('welcome'));
  //   localStorage.setItem('welcome', '-60px');
  //   console.log(localStorage.getItem('welcome'));
    };

  return (
    <>
      <Welcome style={{ marginTop: localStorage.getItem('welcome')}}>
        Sign Up Today and get 10% OFF! Use code WELCOME to redeem!
        <StyledXButton onClick={XButton}>X</StyledXButton>
      </Welcome>
      <StyledDiv>
        <StyledLogo src={Logo} onClick={() => { navigate('/') }} />
        <Button onClick={() => { navigate('/FindATutor') }} text='Find a Tutor' />
        <Button onClick={() => setButtonPopup(true)} text='Login' />
        <StyledImage src={Picture} onClick={() => { navigate('/Profile') }} text='Profile' />
      </StyledDiv>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
    </>
  );
};

export default NavigationBar

const StyledDiv = styled.div`
display: flex;
padding-left: 0px;
padding-right: 20px;
padding-top: 20px;
padding-bottom: 20px;
gap: 20px;
justify-content: space-evenly;
background-color: skyblue;
align-items: center;
`

const StyledLogo = styled.img`
height: 120px;
`


const Welcome = styled.div`
width: -webkit-fill-available;
text-align: center;
background-color: blue;
color: white;
padding: 10px;
// margin-top: -60px;
margin-top: 0px;
transition: 0.69s ease;
&::selection {
  background: black;
}
`

const StyledXButton = styled.button`
background: transparent;
border: transparent;
font-weight: bold;
color: white;
position: absolute;
right: 10px;
`

const StyledImage = styled.img`
height: 120px;
width: 120px;
border-radius: 50%; // This makes the image circular
object-fit: cover // This prevents the image from stretching
`