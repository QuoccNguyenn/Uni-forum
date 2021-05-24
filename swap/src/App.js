import React from 'react';
import styled from 'styled-components';
import Home from './view/Home/Home';

function App() {
  return (
    <WrapperHome>
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
