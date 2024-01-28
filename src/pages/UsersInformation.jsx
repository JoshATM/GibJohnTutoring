import React, { useState } from 'react'
import { styled } from 'styled-components'



export default function UsersInformation() {
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || '');

  const handleSave = () => {
    localStorage.setItem('email', email);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('profilePicture', profilePicture);
  };

  return (
    <>
      <StyledDiv>
        <h1>Profile</h1>

        <StyledImage src={profilePicture} alt="Profile Picture" />
        {/* <StyledInput
          type="file"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          placeholder="Profile Picture URL"
          /> */}

        <StyledP>Email: {email}</StyledP>
        <StyledInput
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          />

        <StyledP>First Name: {firstName}</StyledP>
        <StyledInput
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          />

        <StyledP>Last Name: {lastName}</StyledP>
        <StyledInput
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          />

        <StyledP>Phone Number: {phoneNumber}</StyledP>
        <StyledInput
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          />

        <StyledButton onClick={handleSave}>Save</StyledButton>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 50%;
  height: 50%;
  align-items: center;
  justify-content: center;
  border: 5px solid rgba(0, 150, 250, 1);
  border-radius: 25px;
  background-color: rgba(0, 150, 250, 0.5);
  margin-top: 400px;
  margin-left: 50%;
  margin-right: 50%;
  transform: translate(-50%, -50%);

`;

const StyledP = styled.p`
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  margin-bottom: 10px;
`;

const StyledImage = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  margin-bottom: 10px;
`;