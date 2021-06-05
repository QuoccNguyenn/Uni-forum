import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import Categories from '../../components/Categories/Categories';
import Latest from '../../components/latest/latest';
import ListControl from '../../components/ListControl/ListControl';
import Nav from '../../components/nav/nav';
import Post from '../../components/Post/Post';
import BoxTop from '../../components/top/top';
import PersonalPage from '../personalPage/personalPage';
import Activity from '../../components/activity/activity'
import User from '../../components/user/user';
import BadgesPage from '../badgesPage/badgesPage';
import About from '../about/about';
import ListAbout from './listAbout/ListAbout';
import FAQ from '../FAQ/faq';
import TOS from '../TOS/tos';

function Home() {

  const [active, setActive] = useState('1');

  function handleActive (value){
      setActive(value);
  }

  return (

    <Router>
      <Nav/>
      <WrapperHome>
        <div>
          <Route exact path="/">
            <Redirect to="/categories" />
          </Route>

          <Route path='/categories' >
            <ListControl active={active} handleActive ={handleActive}/>
            <Categories active={active} handleActive ={handleActive}/>
          </Route>

          <Route path='/latest'>
            <ListControl active={active} handleActive ={handleActive}/>
            <Latest/>
          </Route>

          <Route path='/top'>
            <ListControl active={active} handleActive ={handleActive}/>
            <BoxTop/>
          </Route>

          <Route path='/user' component={User}/>
          <Route path='/badges' component={BadgesPage}/>

          <Route path='/profile' component={PersonalPage}/>
          <Route path='/activity' component={Activity}/>
          <Route path='/posts' component={Post}/>

          {/* about */}

          <Route path='/about'>
            <ListAbout></ListAbout>
            <About></About>
          </Route>

          <Route path='/faq'>
            <ListAbout></ListAbout>
            <FAQ></FAQ>
          </Route>

          <Route path='/tos'>
            <ListAbout></ListAbout>
            <TOS></TOS>
          </Route>

          <Route path='/privacy' component={About}/>


        </div>
      </WrapperHome>
    </Router>
  );
}

const WrapperHome = styled.div`
  max-width: 1140px;
  margin: auto;
  padding:2rem 0;
`

export default Home;
