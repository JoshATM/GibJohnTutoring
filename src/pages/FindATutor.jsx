import NavigationBar from "../Navigation/NavigationBar"
import { styled } from "styled-components"

export default function FindATutor() {
  return (
    <>
    <NavigationBar/>
    <StyledDiv>
      Find a Tutor
    </StyledDiv>
    </>
  )
}

const StyledDiv = styled.div`
font-size: 40px;
`