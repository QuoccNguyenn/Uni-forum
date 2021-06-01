import React from 'react';
import {BrowserRouter as Router,  NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import All from './component/all/all';
import LikeGiven from './component/likeGiven/likeGiven';
import Topics from './component/topics/topics';



const Activity = () => {
    return (
        <Router>
            <BoxContent classNames="container">
                <Menu>
                    <ContentMenu>
                        <NavLink exact to="/profile/activity" className="menu_link" activeClassName="active">All</NavLink>
                        <NavLink exact to="/profile/activity/topics" className="menu_link">Các chủ đề</NavLink>
                        <NavLink exact to="/profile/activity/replies" className="menu_link">Trả lời</NavLink>
                        <NavLink exact to="/profile/activity/likes-given" className="menu_link">Lượt thích</NavLink>
                        <NavLink exact to="/profile/activity/solved" className="menu_link"><i class="fas fa-check-square"></i> Đã xử lý</NavLink>
                        <NavLink exact to="/profile/" className="menu_link"><i class="fas fa-heart"></i> Bình chọn</NavLink>
                    </ContentMenu>
                </Menu>

                <UserContent>
                    <div>
                        <Route exact path="/profile/activity">
                            <All></All>
                        </Route>

                        <Route exact path="/profile/activity/topics">
                            <Topics></Topics>
                        </Route>

                        <Route exact path="/profile/activity/replies">
                            <All></All>
                        </Route>

                        <Route exact path="/profile/activity/likes-given">
                            <LikeGiven></LikeGiven>
                        </Route>

                    </div>
                </UserContent>

            </BoxContent>
        </Router>
    );
}

const BoxContent = styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    padding:1.5rem 0;
`


const Menu = styled.div`
    width:15%;

    .menu_link{
        margin: 0;
        padding: 13px;
        font-size:17px;
        cursor: pointer;
        color: #919191;  

        &:hover{
            text-decoration: none;
        }
    }

    .active{
        color: #222;
        font-weight: bold;
        background-color: transparent;
    }
`

const ContentMenu = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
`

const UserContent = styled.div`
    width:85%;
`

export default Activity