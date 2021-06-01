import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const ListControl =() => {
    return(
        <BoxContent>
           <NavLink exact to="/profile/" className="menu_link" activeClassName="active">Tóm Tắt</NavLink>
           <NavLink exact to="/profile/activity" className="menu_link" activeClassName="active">Hoạt Động</NavLink>
           <NavLink exact to="/profile/badges" className="menu_link" activeClassName="active"><i class="fas fa-certificate"></i> Huy Hiệu</NavLink>
        </BoxContent>
    );
}

const BoxContent = styled.div` 
    width:100%;
    display: flex;
    flex-direction: row;

    padding:1rem 0;

    .menu_link{
        padding:5px 20px;
        color:black;
        text-decoration: none;
        margin:0 5px;

        &.active{
           
            color:white;
            background:#4d8fea;
            &:hover{
                color:white;
                background:#4d8fea;
            }
        }
        &:hover{
            color:#4d8fea;
            background:#caddf9;
        }
    }
`

export default ListControl