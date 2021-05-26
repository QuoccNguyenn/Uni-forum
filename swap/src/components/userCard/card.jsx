import React from 'react';
import styled from 'styled-components';

const Card =(props) => {
    const{ClickCard,img ,name , time , metadata,idx, test,idxs, test2}=props

    return(

        <BoxCard className={ClickCard && idx===test && idxs===test2 ?"active":""}>
            <FirstCard>
                <a href="/#" className="imgCard">
                    <img src={`${img}`} style={{ width: '120px'}} alt="" />
                </a>

                <a href="/#" className="name">
                    <h1>{name}</h1>
                    <h2>{name}</h2>
                </a>
            </FirstCard>

            <LocalTime>
                <div className="time">
                    <i class="far fa-clock"></i>
                    <span>{time}</span>
                </div>
            </LocalTime>

            <Metadata>
               {metadata}
            </Metadata>

            <Btnbadge>
                <a href="/#"> 
                    <i class="fas fa-user-alt" style={{ color: '#e7c300' }}></i>
                    <span>Lãnh Đạo</span>
                </a>

                <a href="/#">
                    <i class="fas fa-certificate" style={{ color: '#e7c300' }}></i> 
                    <span>Chủ Đề Tuyệt Vời</span>
                </a>

                <a href="/#">
                    <i class="fas fa-user-plus" style={{ color: 'silver' }}></i> 
                    <span>Người Vận Động</span>
                </a>

                <a href="/#"> 
                    <span>+11 Khác</span>
                </a>
            </Btnbadge>

        </BoxCard>

    );

}

const BoxCard = styled.div`
    position:absolute;
    width:580px;
    padding: .5rem;
    background:white;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
    z-index:200;
    text-decoration: none;
    color:black;
    display:none;
    transform: translateX(-40%);

    &.active{
    display:block;
    }
`

const FirstCard= styled.div`
    width:100%;
    display:flex;

    .imgCard{
        margin-top:-50px;
        border-radius:50%;
        img{
            width:120px;
            height:120px;
            border-radius:50%;
        }
    }

    .name{
        padding-left:20px;
        text-decoration: none;
        color:black;
        h1{
            font-family:Arial, sans-serif;
            font-size:30px;
            font-weight:bold;
        }

        h2{
            font-family:Arial, sans-serif;
            font-size:18px;
        }
    }
`

const LocalTime = styled.div`
    
    .time{
        span{
            padding-left:3px;
        }
    }
`

const Metadata = styled.div`
    margin:10px 0;
`

const Btnbadge = styled.div`
    margin:10px 0;
    display: flex;
    align-items: flex-start;
    a{
        display:flex;
        padding: 0 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background: #f8f8f8;
        border: 1px solid #e9e9e9;
        color: black;
        margin-right:10px;
        align-items:center;
        &:hover{
            text-decoration: none;
        }

        span{
            padding-left:5px;
        }
    }
`


export default Card