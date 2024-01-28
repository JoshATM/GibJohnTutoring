import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  let error = '';
  let validEmail = false;
  let validPassword = false;
  let validPhoneNumber = false;


  if (email.includes('@' && '.') === true) {
    validEmail = true;
  } else {
    validEmail = false;
    error = 'Email must include @ AND .';
  }
  if (password === confirmPassword) {
    validPassword = true;
  } else {
    validPassword = false;
    error = 'Passwords must match';
  }
  if (password > 8) {
    validPassword = true;
  } else {
    validPassword = false;
    error = 'Password must be 8 characters or longer';
  }
  if (phoneNumber.length > 9) {
    validPhoneNumber = true;
  } else {
    validPhoneNumber = false;
    error = 'Phone Number invalid';
  }


  const Submit = () => {
    if (
      validEmail === true &&
      validPassword === true
    ) {
      alert('Account Created');
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('password', password);
      localStorage.setItem('email', email);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('LoggedIn', true);
      console.log('firstName', firstName);
      console.log('lastName', lastName);
      console.log('password', password);
      console.log('email', email);
      console.log('phoneNumber', phoneNumber);
      console.log('LoggedIn', true);
      
      
      localStorage.setItem('LoggedIn', true);
      navigate('/');
      window.location.reload();
    } else {
      alert(`${error}`);
    }
  };


  return (
    <RegisterForm>
      <h1>Register</h1>
      <br />
      <br />
      <StyledInputDiv>
        <FormInput
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <FormInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <FormInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </StyledInputDiv>
      <br />
      <RegisterButton onClick={Submit}>Register</RegisterButton>
      <div>{`${error}`}</div>
      <br />
      <LoginDiv>
        <StyledLoginText>Already have an account?</StyledLoginText>
        <LoginLink onClick={() => { navigate('/Login') }}>Login</LoginLink>
      </LoginDiv>
      <br />
    </RegisterForm>
    
  );
}


const StyledLoginText = styled.p`
  display: flex;
  font-size: 20px;
  text-align: center;
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginLink = styled.p`
color: blue;
  cursor: pointer;
  text-decoration: underline;
  font-size: 20px;
  text-align: center;
  `


const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 128, 255, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 800px;
  margin-top: 50px;
  margin-left: 50%;
  margin-right: 50%;
  padding: 20px;
  transform: translate(-50%, 0);
`;

const FormInput = styled.input`
margin-bottom: 10px;
padding: 15px;
width: 340px;
`;

const RegisterButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 500px;
  margin-left: 50%;
  margin-right: 50%;
  transform: translate(-50%, 0);
`;

const StyledInputDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`