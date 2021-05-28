import React from 'react';
import styled from 'styled-components';
import Home from './view/Home/Home';

function App() {
  return (
    <Wrapper>
        <Home/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`

export default App;
