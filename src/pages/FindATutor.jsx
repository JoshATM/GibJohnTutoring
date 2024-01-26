import React, { useState } from "react";
import NavigationBar from "../Navigation/NavigationBar";
import { styled } from "styled-components";

import TutorImage from "../assets/Undefined.jpg";

const tutors = [
  {
    name: "Rodrigo Cobaleda",
    subject: "Spanish",
    price: "15",
    aboutMe:
      "I am a dedicated and experienced math tutor with a passion for helping students succeed. I have a strong background in mathematics and hold a degree in Mathematics Education. With over 5 years of tutoring experience, I have helped numerous students improve their math skills and achieve their academic goals. My teaching approach focuses on building a solid foundation of mathematical concepts and problem-solving skills.",
    skills: "Spanish, English, French",
  },
  {
    name: "John Doe",
    subject: "Math",
    price: "20",
    aboutMe:
      "I am a dedicated and experienced math tutor with a passion for helping students succeed. I have a strong background in mathematics and hold a degree in Mathematics Education. With over 5 years of tutoring experience, I have helped numerous students improve their math skills and achieve their academic goals. My teaching approach focuses on building a solid foundation of mathematical concepts and problem-solving skills.",
    skills: "Math, Science, English",
  },
];

export default function FindATutor() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTutors = tutors.filter((tutor) => {
    return (
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <NavigationBar />
      <StyledDiv>
        <h1>Find A Tutor</h1>
        <h2>Search for a tutor by name, subject, or price</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        ></input>
        <button>Search</button>
        <h2>Or browse our tutors below</h2>
        <br />
        <br />

        {filteredTutors.map((tutor, index) => (
          <TutorLayout key={index}>
            <StyledTutorImage src={TutorImage} />
            <StyledText>
              <StyledMainText>Name: {tutor.name}</StyledMainText>
              <StyledMainText>Subject: {tutor.subject}</StyledMainText>
              <StyledMainText>Price: £{tutor.price}/hr</StyledMainText>
              <div>
                <StyledMainText>
                  <br />
                  My Skills: {tutor.skills}
                </StyledMainText>
                <StyledMainText>
                  <br />
                  About Me: {tutor.aboutMe}
                </StyledMainText>
              </div>
            </StyledText>
          </TutorLayout>
        ))}
        <br />
        <br />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  padding: 50px;
`;

const TutorLayout = styled.div`
  display: flex;
  border: 5px solid rgba(0, 150, 250, 1);
  border-radius: 25px;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  background-color: aliceblue;
`;

const StyledTutorImage = styled.img`
  height: 200px;
  border-radius: 50%;
`;

const StyledText = styled.p`
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledMainText = styled.div``;
