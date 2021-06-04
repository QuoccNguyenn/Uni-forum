import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Activity from '../../components/activity/activity';
import TopProfile from '../../components/profile/component/top/topProfile';
import Profile from '../../components/profile/profile';
import ListControl from './component/listControl';
import InfoPanel from '../../components/profile/component/infor_panel/InforPanel';
import Badges from '../../components/BoxBadges/badges';


const PersonalPage = () => {

    const active = true

    return (
        <Router>
            <BoxContent>
                <div>


                    <Route exact path="/profile/">
                        <TopProfile></TopProfile>
                        <InfoPanel></InfoPanel>
                        <ListControl></ListControl>
                        <Profile></Profile>
                    </Route>

                    <Route path='/profile/activity'>
                        <TopProfile active={active}></TopProfile>
                        <InfoPanel active={active}></InfoPanel>
                        <ListControl></ListControl>
                        <Activity></Activity>
                    </Route>

                    <Route path='/profile/badges' >
                        <TopProfile active={active}></TopProfile>
                        <InfoPanel active={active}></InfoPanel>
                        <ListControl></ListControl>
                        <Badges></Badges>
                    </Route>


                </div>
            </BoxContent>
        </Router>

    );
}

const BoxContent = styled.div`
    width:100%;
`

export default PersonalPage