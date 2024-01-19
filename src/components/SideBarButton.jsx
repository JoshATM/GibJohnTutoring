import styled from "styled-components";

const SideBarButton = (props) => {
    return (
        <StyledSideBarButton onClick={props.onClick} {...props.style}>{props.text}</StyledSideBarButton>
    );
};

const StyledSideBarButton = styled.button`
font-size: 15px;
background-color: white;
color: black;
border-color: transparent;
border-radius: 15px;
margin-bottom: 15px;
height: 60px;
width: 90%;
align-self: center;
`


export default SideBarButton