import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const ListAbout =() => {
    return(
        <BoxContent>
           <NavLink exact to="/about/" className="menu_link" activeClassName="active">Giớ Thiệu</NavLink>
           <NavLink exact to="/faq" className="menu_link" activeClassName="active">FAQ</NavLink>
           <NavLink exact to="/tos" className="menu_link" activeClassName="active">Điều khoản dịch vụ</NavLink>
           <NavLink exact to="/privacy" className="menu_link" activeClassName="active">Sự riêng tư</NavLink>
        </BoxContent>
    );
}

const BoxContent = styled.div` 
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 500px){
        flex-direction: column;
    }

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

export default ListAbout