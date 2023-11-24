import { styled } from "styled-components";
import ChatBoxLogo from "../assets/ChatBoxLogo.png";

export default function ChatBot() {
  function ChatBoxOnClick() {
    return <>
        {console.log("Clicked Chat Bot")}
        <div>Clicked!</div>
    </>
  }
  return (
    <StyledDiv >
      <StyledImage onClick={ChatBoxOnClick} src={ChatBoxLogo} alt="Chat Box Logo" />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  top: 85%;
  left: 90%;
  }
`;

const StyledImage = styled.img`
  width: 100px;
`;
