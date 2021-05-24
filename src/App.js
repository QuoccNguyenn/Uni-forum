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
`

export default App;
