import React from 'react';
import styled from 'styled-components';
import Nav from './components/nav/nav';
import Home from './view/Home/Home';

function App() {


  return (
    <Wrapper>
      <Nav />
      <WrapperHome>
        <Home/>
      </WrapperHome>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`

const WrapperHome = styled.div`
  max-width: 1140px;
  margin: auto;
`

export default App;
