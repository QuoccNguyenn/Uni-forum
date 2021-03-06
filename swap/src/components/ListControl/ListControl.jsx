import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { category } from '../Categories/constants/data';
import useOnClickOutside from '../../hook/useclickoutside/useclickoutside';

function ListControl(props) {

    const [click, setClick] = useState(false);

    const ref = useRef();

    function handleClick() {
        setClick(!click);
    }

    useOnClickOutside(ref, () => setClick(false));
    return (
        <ListControlSection>
            <Selection>
                <div className='dropdown-holder' ref={ref} onClick={() => {handleClick() }}>
                    <div className='dropdown'>Tất cả chuyên mục</div>
                    <div className='dropdown-icon'><i className={click ? "fas fa-caret-down" : "fas fa-caret-right"}></i></div>

                    <SelectionItem  className={click ? "active" : ""}>
                        {category.map(item => (
                            <Link to='/latest'>
                                <Item style={item.decor}>
                                    <div>
                                        <h6>{item.title}</h6><span>x{item.num}</span>
                                        <p>{item.content}</p>
                                    </div>

                                </Item>
                            </Link>
                        ))}
                    </SelectionItem>
                </div>

            </Selection>

            <ul>
                <li onClick={() => { props.handleActive('1') }}><Link className={(props.active === '1') ? "active" : ""} to='/categories'>Danh mục</Link></li>
                <li onClick={() => { props.handleActive('2') }}><Link className={(props.active === '2') ? "active" : ""} to='/latest'>Mới nhất</Link></li>
                <li onClick={() => { props.handleActive('3') }}><Link className={(props.active === '3') ? "active" : ""} to='/top'>Top</Link></li>
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
        padding: 0;
        
        li{
            
            a{
                display: block;
                padding: 6px 12px;
                margin: 2px;
                text-decoration: none;
                color: #000;
            }
            .active{
                background: #4d8fea;
                color: #fff;
            }
            a:hover{
                background: #caddf9;
                color: #4d8fea;
            }
            .active:hover{
                background: #4d8fea;
                color: #fff;
            }
        }
    }

    @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
    }
`

const Selection = styled.div`
    margin: 2px;

    .dropdown-holder{
        display: flex;
        flex-direction: row;
        align-items: center;

        border: 1px solid;
        padding: 0 5px;

        cursor: pointer;
        position:relative;

    }

    .dropdown{
        padding:6px 12px;
    }

    .dropdown-icon{
        width: 10px;
        text-align: center;
    }

    div{
        i{
            transform: rotate(deg(90));
        }
    }

   
`

const SelectionItem = styled.div`
    height: 200px;
    width: 300px;
    display: none;

    position: absolute;
    top:100%;
    left:0;
    background-color: #f9f9f9;
    box-sizing: border-box;
    overflow-y: scroll;

    &.active{
        display:block;
    }

    a{
        text-decoration: none;
        color: #000;
        display: block;
    }

    @media screen and (max-width: 440px){
        left: 15%;
    }

    @media screen and (max-width: 360px){
        left: 5%;
    }
`

const Item = styled.div`
    display: flex;
    flex-direction: row;

    h6{
        display: inline-block;
        margin-top: 0;
        font-weight: bold;
    }
    p{
        font-size: 13px;
    }
    div{
        padding: 10px 10px 0;
    }
    span{
        font-size: 13px;
        padding: 10px;
        font-weight: bold;
        color: #919191;
    }

    :hover{
        background: #ffd9eb;
        cursor: pointer;
    }
`


export default ListControl;