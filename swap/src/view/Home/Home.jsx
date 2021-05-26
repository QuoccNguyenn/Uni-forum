import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import Latest from '../../components/latest/latest';
import ListControl from '../../components/ListControl/ListControl';
import BoxTop from '../../components/top/top';

function Home() {

  const [active, setActive] = useState('1');

  function handleActive (value){
      setActive(value);
  }

  return (
    <Router>
      <ListControl active={active} handleActive ={handleActive}/>
      <div className="App">
        <Route exact path="/">
           <Redirect to="/categories" />
        </Route>
        <Route path='/categories' > <Categories active={active} handleActive ={handleActive}/></Route>
        <Route path='/latest' component={Latest} />
        <Route path='/top' component={BoxTop} />
      </div>
    </Router>
  );
}

export default Home;