import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../../../hook/useclickoutside/useclickoutside';
import Card from '../../../userCard/card';

const UserDetail = (props) => {
    const { data } = props;

    const [ClickCard, SetClickCard] = useState(false);
    const [test, Settest] = useState(0);
    const refCard = useRef();

    useOnClickOutside(refCard, () => SetClickCard(false));

    return (
        <BoxContent>
            {data
                ?
                data.map((item, idx) => (
                    <UserContent>
                        <td>
                            <NameUser>
                                <div className="imgUser">
                                    <img className="img_pt"  src={item.img} onClick={() => { SetClickCard(true); Settest(idx); }} alt='' />
                                    {idx === test ? <BoxCard ref={refCard} className={ClickCard && idx === test ? "active" : ""}><Card ClickCard={ClickCard} img={item.persons.img} name={item.persons.name} time={item.persons.time} metadata={item.persons.metadata} ></Card></BoxCard> : ""}
                                </div>

                                <div className="nameUser">
                                    <span>{item.Nick_name}</span>
                                    {item.name}
                                </div>
                            </NameUser>
                        </td>

                        <td>{item.Received}</td>
                        <td>{item.Given}</td>
                        <td>{item.Theme_create}</td>
                        <td>{item.Reply_posted}</td>
                        <td>{item.Threads_viewed}</td>
                        <td>{item.Posts_read}</td>
                        <td>{item.Date_visited}</td>
                    </UserContent>
                ))
                : "không có mục hiển thị"}
        </BoxContent>
    );
}

const BoxContent = styled.tbody`
   
`

const UserContent = styled.tr`
    td{
        padding:.5rem;
        text-align: left;
        color:#919191;
        font-size:22px;
    }

    border-bottom: 1px solid #e9e9e9;
`

const NameUser = styled.div`
    display:flex;
    flex-direction:row;
    width:250px;

    .imgUser{
        position:relative;
        img{    
            width:45px;
            border-radius:50%;
        }
        
    }

    .nameUser{
        padding-left: 15px;
        font-size:15px;
        display:flex;
        flex-wrap: wrap;
        span{
            font-weight: bold;
            padding-right:5px;
            color:black;
        }
    }

`
const BoxCard = styled.div`
    position:absolute;
    padding: .5rem;
    background:white;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
    z-index:9999999;
    text-decoration: none;
    color:black;
    display:none;
    transform: translateX(10%);


    &.active{
        display:block;
    }

    @media screen and (max-width: 580px){
        width: 300px;
        left: 0;
        transform: translateX(15%);
    }

    @media screen and (max-width: 280px){
        width: 260px;
        transform: translateX(-45%);
    }
`

export default UserDetail