import React from 'react';
import styled from 'styled-components';

const BoxPeople=(props) => {

    const{img,name , count,ClassIcon}=props;

    return(
        <BoxContent>
            <TopicInfor>
                <div className="img">
                    <img src={`${img}`} alt="" />
                </div>

                <Name>
                    <a href="/#">{name}</a> <br />
                    <i class={`${ClassIcon}`}></i> <span className="count">{count}</span>
                </Name>
            </TopicInfor>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width:100%;
    padding :.5rem 1rem;
    margin:10px 0;
    border-left: 2px solid #e9e9e9;
`

const TopicInfor = styled.div`
    font-size:15px;
    color:#919191;
    display: flex;
    flex-direction: row;

    .img{
        margin-right: 10px;
        img{
            max-width:45px;
            border-radius:50%;
        }
    }
    
`

const Name = styled.span`
    color:#646464;
    padding-left:10px;
    a{
        text-decoration: none;
        color:#646464;
        font-size:15px;
        font-weight:bold;
    }
    i{
        transform: rotateY(180deg);
        color:black;
        &.fa-heart{
            color:#ff007a;
        }
    }
`

export default BoxPeople