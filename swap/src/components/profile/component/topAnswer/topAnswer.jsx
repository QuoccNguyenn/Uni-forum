import React from 'react';
import styled from 'styled-components';


const TopAnswer=(props) => {

    const{time,likeCount,title}= props

    return(
        <BoxContent classNames="active">
            <TopicInfor>
                <Date>{time}</Date>
                <i class="fas fa-heart toppicIcon"></i>
                <LikeCount>{likeCount}</LikeCount>
            </TopicInfor>

            <TextContent>
                <a href="#/">{title}</a>
            </TextContent>
            
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

    .toppicIcon{
        color:#ff007a;
        padding-left:15px;
    }
`

const Date = styled.span`
    position:relative;
    line-height:15px;

    &::after{
        content: "";
        width: 2px;
        height: 2px;
        background: #919191;
        position: absolute;
        top: 50%;
        right: -7px;
        transform: translateY(-50%);
        border-radius: 50%;
    }
`

const LikeCount = styled.span`
    padding-left:5px;
`

const TextContent = styled.div`
    font-size:15px;
    color:#919191;

    a{
        text-decoration: none;
        cursor: pointer;
        color:#ff007a;
    }
`


export default TopAnswer