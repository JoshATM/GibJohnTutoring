import styled from "styled-components";

const Button = (props) => {
    return ( 
        <StyledButton onClick={props.onClick} {...props.style}>{props.text}</StyledButton>
    );
};

const StyledButton = styled.button`
font-size: 15px;
background-color: white;
border-color: transparent;
border-radius: 15px;
margin-bottom: 15px;
height: 60px;
width: 20%;


transition: 0.2s ease;
&:hover {
    color: white;
    background-color: dodgerblue;
    transform: scale(1.025);
}
&:active {
    text-decoration: none;
    transform: scale(1);
}
`

export default Button