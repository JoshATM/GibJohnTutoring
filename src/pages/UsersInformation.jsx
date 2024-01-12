import React from 'react'
import NavigationBar from '../Navigation/NavigationBar'
import { styled } from 'styled-components'

export default function UsersInformation() {
    const Submit = () => {
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
        localStorage.setItem('profilePicture', reader.result);
        }, false);
        if (file) {
        reader.readAsDataURL(file);
        }
    }
    const Picture = localStorage.getItem('profilePicture')
  return (
    <>
        <NavigationBar />
        <StyledImage src={Picture}/>
        
        <StyledP>Upload Profile Picture:</StyledP>
            <StyledInputFile
            type='file'
        />
        {}
        <StyledButton onClick={Submit}>Submit</StyledButton>
        <StyledP>First Name:</StyledP>
        {localStorage.getItem('firstname')}

        <StyledP>Last Name:</StyledP>
        {localStorage.getItem('lastname')}

        <StyledP>Email:</StyledP>
        {localStorage.getItem('email')}

        <StyledP>Phone Number:</StyledP>
        {localStorage.getItem('phone')}

        <StyledP>Password:</StyledP>
        {localStorage.getItem('password')}

        <StyledP>Confirm Password:</StyledP>
        {localStorage.getItem('confirmPassword')}
    </>
  )
}


const StyledP = styled.p`
`;

const StyledInputFile = styled.input`
`

const StyledButton = styled.button`
`

const StyledImage = styled.img`
height: 120px;
width: 120px;
object-fit: cover
`