import { styled } from "styled-components";
import NavigationBar from "../Navigation/NavigationBar";
import React from "react";
import VerticlePersonHome from "../assets/StockPersonVerticleHome.jpg";
import StockTeacherVerticleHome from "../assets/StockTeacherVerticleHome.jpg";

export default function Home() {
  return (
    <>
      <StyledTopDiv>

        <NavigationBar />
        <StyledHomeTopTextTitle>Welcome to GibJohn Tutoring!</StyledHomeTopTextTitle>
        <StyledHomeTopTextSlogan>Building Strong Foundations for Bright Futures</StyledHomeTopTextSlogan>
        <StyledImageVerticlePersonHome src={VerticlePersonHome}/>
      </StyledTopDiv>
        <StyledHomeMainText>
        Are you looking for personalized and effective tutoring to help you excel in your studies? Look no further! Our team of experienced tutors is here to support you every step of the way.
        <br/>
        <br/>
        Whether you need help with math, science, language arts, or any other subject, we've got you covered. Our tutors are highly qualified and passionate about helping students reach their full potential.
        <br/>
        <br/>
        Sign up now to unlock a world of knowledge and academic success. Gain access to one-on-one tutoring sessions, tailored study materials, and a supportive learning community. Don't miss out on this opportunity to boost your grades and build confidence in your abilities.
        <br/>
        <br/>
        Join us today and embark on a journey towards academic excellence. Sign up now and take the first step towards achieving your goals!
        <StyledImageVerticleTeacherHome src={StockTeacherVerticleHome}/>
        </StyledHomeMainText>
    </>
  );
}

const StyledTopDiv = styled.div`
  font-size: 40px;
  background-color: cornflowerblue;
  padding-bottom: 600px;
  color: white;
  `;

const StyledImageVerticlePersonHome = styled.img`
height: 30vh;
position: absolute;
top: 25%;
left: 60%;
transform: scaleX(-1);
border-radius: 35%;
`;


const StyledHomeTopTextTitle = styled.h1`
  font-size: 40px;
  top: 35%;
  left: 42%;
  position: absolute;
  transform: translate(-50%, -50%);
  `;

  const StyledHomeTopTextSlogan = styled.h1`
  font-size: 25px;
  top: 40%;
  left: 42%;
  position: absolute;
  transform: translate(-50%, -50%);
  `;

const StyledHomeMainText = styled.p`
font-size: 24px;
text-align: center;
padding-left: 600px;
padding-right: 100px;
padding-top: 100px;
color: #0a3d48;
font-family: system-ui;
  `;

const StyledImageVerticleTeacherHome = styled.img`
height: 80vh;
position: absolute;
top: 77%;
left: 0%;
z-index: -1;
`;