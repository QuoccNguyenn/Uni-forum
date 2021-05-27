import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import Categories from '../../components/Categories/Categories';
import Latest from '../../components/latest/latest';
import ListControl from '../../components/ListControl/ListControl';
import Nav from '../../components/nav/nav';
import BoxTop from '../../components/top/top';

function Home() {

  const [active, setActive] = useState('1');

  function handleActive (value){
      setActive(value);
  }

  return (
    <Router>
      <Nav/>
      <WrapperHome>
        <ListControl active={active} handleActive ={handleActive}/>
        <div className="App">
          <Route exact path="/">
            <Redirect to="/categories" />
          </Route>
          <Route path='/categories' > <Categories active={active} handleActive ={handleActive}/></Route>
          <Route path='/latest' component={Latest} />
          <Route path='/top' component={BoxTop} />
        </div>
      </WrapperHome>  
    </Router>
  );
}

const WrapperHome = styled.div`
  max-width: 1140px;
  margin: auto;
`

export default Home;