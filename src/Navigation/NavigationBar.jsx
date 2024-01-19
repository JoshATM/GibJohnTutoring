import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import SideBarButton from "../components/SideBarButton";
import Popup from '../components/LoginPopup';
import { useState } from "react";
import Logo from '../assets/GibJohnTutoringLogo.png';
import LoginPopup from '../components/LoginPopup';
import RegisterPopup from '../components/RegisterPopup';


const NavigationBar = () => {
  const [loginbuttonPopup, setLoginButtonPopup] = useState(false);
  const [registerbuttonPopup, setRegisterButtonPopup] = useState(false);
  const navigate = useNavigate();
  const Picture = localStorage.getItem('profilePicture');

  const LoggedIn = false;

  
  if (localStorage.getItem('welcome') == null) {
    localStorage.setItem('welcome', '0px');
  }

  const CloseSideBar = () => {
    document.getElementById('sideBar').style.left = '-283px;';
  }
  
  const XButton = () => {
    //   console.log('X-Button Pressed');
    //   console.log(localStorage.getItem('welcome'));
    //   localStorage.setItem('welcome', '-60px');
    //   console.log(localStorage.getItem('welcome'));
  };
  
  const x = 1;
  if (x==1) {
    return (
    <>
      <Welcome style={{ marginTop: localStorage.getItem('welcome')}}>
        Sign Up Today and get 10% OFF! Use code WELCOME to redeem!
        <StyledXButton onClick={XButton}>X</StyledXButton>
      </Welcome>
      <StyledDiv>
        <StyledLogo src={Logo} onClick={() => { navigate('/') }} />
      </StyledDiv>
      <StyledSideBar id="sideBar">
        <StyledInnerSideBar>
          <StyledSideBarXButton onClick={CloseSideBar}>X</StyledSideBarXButton>
          <SideBarButton onClick={() => { navigate('/') }} text='Home' />
          <SideBarButton onClick={() => { navigate('/Profile') }} text='Profile' />
          <SideBarButton onClick={() => { navigate('/FindATutor') }} text='Find a Tutor' />
          {LoggedIn != true
          ?
          <SideBarButton onClick={() => {setLoginButtonPopup(false); setRegisterButtonPopup(true)}} text='Register' />
          :
          <SideBarButton onClick={() => {setRegisterButtonPopup(false); setLoginButtonPopup(true)}} text='Login'/>
          }
          <LoginPopup trigger={loginbuttonPopup} setTrigger={setLoginButtonPopup} />
          <RegisterPopup trigger={registerbuttonPopup} setTrigger={setRegisterButtonPopup} />
        </StyledInnerSideBar>
      </StyledSideBar>
    </>
    )
  }

  return (
    <>
      <Welcome style={{ marginTop: localStorage.getItem('welcome')}}>
        Sign Up Today and get 10% OFF! Use code WELCOME to redeem!
        <StyledXButton onClick={XButton}>X</StyledXButton>
      </Welcome>

      <StyledDiv>
        <StyledLogo src={Logo} onClick={() => { navigate('/') }} />
        <Button onClick={() => { navigate('/FindATutor') }} text='Find a Tutor' />
        {LoggedIn != true ? <Button onClick={() => setButtonPopup(true)} text='Login'/> : <Button onClick={() => setButtonPopup(true)} text='Register' />}
        <StyledImage src={Picture} onClick={() => { navigate('/Profile') }} text='Profile' />
      </StyledDiv>
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
@media (max-width: 750px) {
  display: none;
}
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

const StyledSideBar = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
flex-direction: column;
background-color: skyblue;
position: fixed;
top: 0;
bottom: 0;
left: 0;
padding-top: 40px;
`

const StyledInnerSideBar = styled.div`
padding-left: 20px;
`

const StyledSideBarXButton = styled.button`
position: absolute;
right: 10px;
top: 1px;
border-radius: 50%;
border-color: transparent;
background-color: transparent;
&:hover {
  background-color: rgba(100, 100, 100, 0.5);
}
`