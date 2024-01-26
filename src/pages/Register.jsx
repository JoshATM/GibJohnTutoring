import { styled } from 'styled-components'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideBarButton from '../components/SideBarButton';
import LoginPopup from '../components/LoginPopup';
import RegisterPopup from '../components/RegisterPopup';

const Register = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginbuttonPopup, setLoginButtonPopup] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email, phone, firstname, lastname }),
      });

      if (response.ok) {
        // Registration successful
        navigate('/login'); // Redirect to the login page
      } else {
        // Handle server-side validation errors, if any
        const data = await response.json();
        setError(data.message || 'Registration failed. User might already exist or server error.');
      }
    } catch (error) {
      // Handle network or other errors
      setError('Failed to connect to the server');
    }
  };

  return (
    <StyledPopup>
      <StyledInnerPopup>
              <StyledP>Register</StyledP>
               <StyledInputDiv>
                 <StyledInput
                    type="text"
                    placeholder="First Name..."
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                  <StyledInput
                    type="text"
                    placeholder="Last Name..."
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </StyledInputDiv>
                <StyledInputDiv>
                  <StyledInput
                    type="email"
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  <StyledInput
                    type="tel"
                    placeholder="Phone Number..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </StyledInputDiv>
                <StyledInputDiv>
                  <StyledInput
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                  <StyledInput
                    type="password"
                    placeholder="Confirm Password..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </StyledInputDiv>
                  <br/>
                <StyledButton type='submit' onClick={handleRegister}>Sign Up</StyledButton>
                  {error && <StyledP>{error}</StyledP>}

                  Already have an account?
                  <SideBarButton onClick={() => setLoginButtonPopup(true)} text='Login' />
                  <LoginPopup trigger={loginbuttonPopup} setTrigger={setLoginButtonPopup} />
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
padding: 42px;
width: 100%;
max-width: 680px;
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