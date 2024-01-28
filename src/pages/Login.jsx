import { styled } from 'styled-components'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const Submit = () => {
    const validEmail = localStorage.getItem('email');
    const validPassword = localStorage.getItem('password');
    if (email === validEmail && password === validPassword) {
      localStorage.setItem('LoggedIn', true);
      navigate('/');
    } else {
      alert('Incorrect Username or Password');
    }
  }
  
  return (
    <LoginForm>
      <h1>Login</h1>
      <br />
      <br />
      <StyledInputDiv>
        <FormInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StyledInputDiv>
      <br />
      <LoginButton onClick={Submit}>Login</LoginButton>
      <br />
      <RegisterDiv>
        <StyledRegisterText>Dont have an account?</StyledRegisterText>
        <RegisterLink onClick={() => { navigate('/Register') }}>Register</RegisterLink>
      </RegisterDiv>
      <br />
    </LoginForm>
  );
}



const StyledRegisterText = styled.p`
  display: flex;
  font-size: 20px;
  text-align: center;
`;

const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RegisterLink = styled.p`
color: blue;
  cursor: pointer;
  text-decoration: underline;
  font-size: 20px;
  text-align: center;
  `

const LoginForm = styled.div`
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

const LoginButton = styled.button`
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