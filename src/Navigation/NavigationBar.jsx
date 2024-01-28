import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBarButton from "../components/SideBarButton";
import { useState } from "react";
import Logo from '../assets/GibJohnTutoringLogo.png';
import SidebarImage from '../assets/Sidebar.png';


const Header = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Header;


const NavigationBar = () => {
  const navigate = useNavigate();
  const Picture = localStorage.getItem('profilePicture');
  const LoggedIn = localStorage.getItem('LoggedIn');
  
  
  if (localStorage.getItem('welcome') == null) {
    localStorage.setItem('welcome', '0px');
  }
  
  const AcceptCookieConsent = () => {
    document.getElementById('CookieConsent').style.bottom = '-100%';
    localStorage.setItem('IsCookieConsent', true);
  }
  
  const DeclineCookieConsent = () => {
    document.getElementById('CookieConsent').style.bottom = '-100%';
    localStorage.setItem('IsCookieConsent', true);
  }
  
  const CloseCookieButton = () => {
    document.getElementById('CookieConsent').style.bottom = '-100%';
    localStorage.setItem('IsCookieConsent', true);
  }
  
  if (localStorage.getItem('IsCookieConsent') == true) {
    document.getElementById('CookieConsent').style.display = 'none';
    console.log('Cookie Consent Accepted');
  }
  
  const OpenSideBar = () => {
    document.getElementById('sideBar').style.left = '0px'; // https://static.thenounproject.com/png/3401904-200.png used this image for the sidebar
  }
  
  const CloseSideBar = () => {
    document.getElementById('sideBar').style.left = '-100%';
  }

  const Logout = () => {
    localStorage.setItem('LoggedIn', false);
    window.location.reload();
  }
  
    return (
    <>
      <StyledDiv>
        <StyledLogo src={Logo} onClick={() => { navigate('/') }} />
        {LoggedIn === 'true'
        ?
        <StyledLogoutButton onClick={Logout}>Logout</StyledLogoutButton>
        :
        <div></div>
        }
      </StyledDiv>
      <StyledSideBarOpenButton src={SidebarImage} onClick={OpenSideBar}></StyledSideBarOpenButton>
      <StyledSideBar id="sideBar">
        <StyledInnerSideBar>
          <StyledSideBarCloseButton onClick={CloseSideBar}>X</StyledSideBarCloseButton>
          <SideBarButton onClick={() => { navigate('/') }} text='Home' />
          <SideBarButton onClick={() => { navigate('/Profile') }} text='Profile' />
          <SideBarButton onClick={() => { navigate('/FindATutor') }} text='Find a Tutor' />
          {LoggedIn === 'true'
          ?
          <SideBarButton onClick={() => { navigate('/Resources') }} text='Resources' />
          :
          <SideBarButton onClick={() => { navigate('/Login') }} text='Login' />
          }
        </StyledInnerSideBar>
      </StyledSideBar>
      <CookieConsent id="CookieConsent" >
        <p>
          This website uses Cookies to enhance the user experience.
        </p>
        <CookieConsentButtonDiv>
          <CookieConsentButton onClick={AcceptCookieConsent}>Accept</CookieConsentButton>
          <CookieConsentButton onClick={DeclineCookieConsent}>Decline</CookieConsentButton>
        </CookieConsentButtonDiv>
        <StyledLink>Privacy and Cookie Policy</StyledLink>
        <StyledCloseButton onClick={CloseCookieButton}>X</StyledCloseButton>
      </CookieConsent>
      <Footer>
        <StyledFooterText>© 2024 GibJohn Tutoring</StyledFooterText>
      </Footer>
    </>
    )
  }


const StyledLogoutButton = styled.button`
background-color: transparent;
border-color: transparent;
color: white;
font-weight: bold;
display: flex;
position: absolute;
right: 100px;
top: 40px;
border-radius: 20px;
font-size: 30px;
padding: 10px;
&:hover {
  background-color: black;
}
`

const StyledDiv = styled.div`
display: flex;
padding-left: 0px;
padding-right: 20px;
padding-top: 120px;
padding-bottom: 20px;
gap: 20px;
justify-content: space-evenly;
background-color: #0d67b5;
align-items: center;
`

const StyledLogo = styled.img`
position: absolute;
height: 140px;
width: 450px;
top: 0;
object-fit: cover;
cursor: pointer;
`

const StyledCloseButton = styled.button`
background: transparent;
border: transparent;
font-weight: bold;
color: white;
position: absolute;
right: 10px;
&:hover {
  background-color: black;
}
`

const StyledSideBar = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
flex-direction: column;
background-color: cornflowerblue;
position: fixed;
top: 0;
bottom: 0;
left: -100%;
padding-top: 40px;
padding-left: 20px;
transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const StyledInnerSideBar = styled.div`
`

const StyledSideBarCloseButton = styled.button`
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

const StyledSideBarOpenButton = styled.img`
cursor: pointer;
filter: invert(100%);
position: absolute;
left: 10px;
top: 1px;
border-color: transparent;
width: 70px;
transition: 1s;
border-radius: 10%;
background-color: transparent;
`

const CookieConsent = styled.div`
width: -webkit-fill-available;
text-align: center;
background-color: orangered;
color: white;
padding: 10px;
bottom: 0;
position: fixed;
display: flex;
transition: 0.69s ease;
align-items: center;
justify-content: center;
&::selection {
  background: black;
}
`

const CookieConsentButton = styled.button`
background-color: transparent;
border-color: transparent;
color: white;
font-weight: bold;

&:hover {
  background-color: black;
}
`

const CookieConsentButtonDiv = styled.div`
display: flex;
justify-content: center;
gap: 20px;
padding-left: 40px;
`

const StyledLink = styled.a`
position: absolute;
left: 100px;
color: white;
font-size: 10px;
&:hover {
  text-decoration: underline;
}
`

const Footer = styled.div`
display: flex;
position: fixed;
bottom: 0;
width: -webkit-fill-available;
`

const StyledFooterText = styled.p`
color: white;
font-size: 10px;
`
