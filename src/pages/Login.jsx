import { styled } from 'styled-components'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideBarButton from '../components/SideBarButton';
import LoginPopup from '../components/LoginPopup';
import RegisterPopup from '../components/RegisterPopup';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registerbuttonPopup, setRegisterButtonPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true); // Update login status
        navigate('/'); // Navigate to Home on successful login
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Failed to connect to the server');
    }
  };



  return (
    <StyledPopup>
      <StyledInnerPopup>
        <StyledP>Login</StyledP>
          <StyledTextBoxDiv>
            <StyledInput
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <StyledInput
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </StyledTextBoxDiv>
            <br/>
          <StyledButton type='submit' onClick={handleLogin}>Log In</StyledButton>
            {error && <StyledP>{error}</StyledP>}
            Don't have an account? 
            <SideBarButton onClick={() => setRegisterButtonPopup(true)} text='Register'>Register</SideBarButton>
            <RegisterPopup trigger={registerbuttonPopup} setTrigger={setRegisterButtonPopup} />
      </StyledInnerPopup>
    </StyledPopup>
  );
};

export default Register;



const StyledTextBoxDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


const StyledPopup = styled.div`
display: flex;
position: fixed;
width: -webkit-fill-available;
height: -webkit-fill-available;
background-color: rgba(0, 0, 0, 0.3);
justify-content: center;
align-items: center;
top: 0;
left: 0;
`

const StyledInnerPopup = styled.div`
position: relative;
padding: 32px;
width: 100%;
max-width: 640px;
background-color: skyblue;
border-radius: 20px;
background: linear-gradient(315deg, skyblue, dodgerblue);
`

const StyledInputDiv = styled.div`
display: inline-flex;
gap: 10px;
padding-bottom: 10px;
`

const StyledInput = styled.input`
padding: 10px;
border-radius: 10px;
border: transparent;
`

const StyledButton = styled.button`
border-radius: 10px;
border: transparent;
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;
padding-bottom: 10px;
background-color: white;
&:hover {
  background-color: lightgray;
}
&:active {
  transform: scale(0.95);
}
`

const StyledP = styled.p`
color: white;
`