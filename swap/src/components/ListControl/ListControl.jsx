import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ListControl() {
    return(
        <ListControlSection>
            <ul>
                <li>Tất cả chuyên mục</li>
            </ul>
            <ul>
                <li><Link to='/Categories'>Danh mục</Link></li>
                <li><Link to='/latest'>Mới nhất</Link></li>
                <li><Link to='/Categories'>Top</Link></li>
            </ul>
        </ListControlSection>
    );
}

const ListControlSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        
        li{
            
            a{
                display: block;
                padding: 10px;
                margin: 2px;
                text-decoration: none;
                color: #000;
            }
            a:active{
                background: #4d8fea;
                color: #fff;
            }
            a:hover{
                background: #caddf9;
                color: #4d8fea;
            }
        }
    }
`

export default ListControl;