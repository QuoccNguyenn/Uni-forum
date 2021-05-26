import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useOnClickOutside from '../../hook/useclickoutside/useclickoutside';

function ListControl() {
    const category = [
        {
            title: 'Temperature Check',
            content: 'The purpose of the Temperature Check is to determine if there is sufficient will to make changes to the status quo.',
            num: '19',
            decor: {
                borderLeft: '5px solid orange' 
            }
        },
        {
            title: 'Consensus Check',
            content: 'The purpose of the Consensus Check is to establish formal discussion around a potential proposal.',
            num: '7',
            decor: {
                borderLeft: '5px solid red' 
            }
        },
        {
            title: 'Proposal Disussion',
            content: 'For the discussion and informal consensus-gathering work related to potential governance proposals.',
            num: '122',
            decor: {
                borderLeft: '5px solid #0088CC' 
            }
        },
        {
            title: 'Delegation Pitch',
            content: 'Explain why members of the Uniswap community may want to delegate their votes to you!',
            num: '25',
            decor: {
                borderLeft: '5px solid green' 
            }
        },
        {
            title: 'Governance-Met',
            content: 'This section is for discussions around governance systems, ways of distributing resources, how the community should think about governance responsibilities–basically all things related to governance, but which are not a specific proposal.',
            num: '12',
            decor: {
                borderLeft: '5px solid #652D90' 
            }
        },
        {
            title: 'Site Feedback',
            content: 'Discussion about this site, its organization, how it works, and how we can improve it.',
            num: '12',
            decor: {
                borderLeft: '5px solid grey' 
            }
        },
        {
            title: 'Uncategorized',
            content: 'Topics that don\'t need a category, or don\'t fit into any other existing category.',
            num: '131',
            decor: {
                borderLeft: '5px solid red' 
            }
        }
    ]

    const [click, setClick] = useState(false);

    const ref = useRef();

    useOnClickOutside(ref, () =>setClick(false));
    // function handleClick(){
    //     setClick(!click);
    // }
    return(
        <ListControlSection>
            <Selection>
                <div className='dropdown-holder' ref={ref} onClick={()=>{setClick(true)}}>
                    <div className='dropdown'>Tất cả chuyên mục</div>
                    <div className='dropdown-icon'><i className={click ? "fas fa-caret-down" : "fas fa-caret-right"}></i></div>
                </div>    
                <SelectionItem className={click ? "active" : ""}>
                    {category.map(item => (
                        <Item style={item.decor}>
                            <div>
                                <h6>{item.title}</h6><span>x{item.num}</span>
                                <p>{item.content}</p>
                            </div>
                            
                        </Item>
                    ))}
                </SelectionItem>
            </Selection>
                
            <ul>
                <li><Link to='/Categories'>Danh mục</Link></li>
                <li><Link to='/latest'>Mới nhất</Link></li>
                <li><Link to='/top'>Top</Link></li>
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

const Selection = styled.div`
    margin: 2px;

    .dropdown-holder{
        display: flex;
        flex-direction: row;
        align-items: center;

        border: 1px solid;
        padding: 0 5px;

        cursor: pointer;
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

    .active{
        display: block;
    }
`

const SelectionItem = styled.div`
    height: 200px;
    width: 300px;
    display: none;

    position: absolute;
    background-color: #f9f9f9;
    box-sizing: border-box;
    overflow-y: scroll;
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
`


export default ListControl;