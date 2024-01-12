import { styled } from "styled-components";
import ChatBoxLogo from "../../assets/ChatBoxLogo.png";
// import Chatbot from "react-chatbot-kit";

// import ActionProvider from './ActionProvider';
// import MessageParser from './MessageParser';
// import config from './config'

export default function ChatBot() {
  function ChatBoxOnClick() {
    return <>
        {console.log("Clicked Chat Bot")}
        <div>Clicked!</div>
    </>
  }
  return (
    <>
    <ChatBotDiv>
      {/* <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} /> */}
    </ChatBotDiv>
    <StyledDiv >
      <StyledImage onClick={ChatBoxOnClick} src={ChatBoxLogo} alt="Chat Box Logo" />
    </StyledDiv>
    </>
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

const ChatBotDiv = styled.div`

`;