import React from 'react';
import styled from 'styled-components';
import Nav from './components/nav/nav';
import Home from './view/Home/Home';

function App() {
  return (
    <WrapperHome>
      <Nav></Nav>
      <Home/>
    </WrapperHome>
  );
}

const WrapperHome = styled.div`
  overflow: hidden;
  max-height: 100vh;
  max-width: 1140px;
  margin: auto;
`

export default App;
