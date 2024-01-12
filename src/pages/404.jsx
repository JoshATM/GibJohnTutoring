import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components";

function PageNotFound() {
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if (counter === 0) {
    window.location.replace('/');
  }
  const error = "404";
    return (
      <StyledDiv>
        <h1>Page is not found!</h1>
        <h1>Redirecting to Home in {counter} seconds...</h1>
        <h1>Error {error}</h1>
        {counter < 1 ? <Link class="Text">If not please click here</Link> : <div></div>}
      </StyledDiv>
    );
  };
  
export default PageNotFound;

const StyledDiv = styled.div`
text-align: center;
`