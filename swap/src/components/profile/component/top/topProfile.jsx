import React from 'react';
import styled from 'styled-components';


const TopProfile = () => {

    return(
        <BoxContent>
             <Avatar>
                    <img src="https://avatars.discourse-cdn.com/v4/letter/m/c68b51/240.png" alt="" />
                </Avatar>
                
                <Infor>
                    <NickName>mboyle522</NickName>
                    <Name>Matthew Boyle</Name>
                    <Address><i class="fas fa-map-marker-alt"></i><span>San Diego</span></Address>
                    <TextInfor>
                        <p>Data architect fintech/Healthcare</p>
                        <p>This crypto stuff is cool… Just trying to learn and be a part of it</p>
                    </TextInfor>
                </Infor>
        </BoxContent>
    );

}

const BoxContent = styled.div`
    width:100%;
    padding:1.5rem 0;
    display: flex;
    flex-direction:row;
`

const Avatar = styled.div`

    img{
        max-width:120px;
        border-radius:50%;
    }
`

const Infor = styled.div`
    padding-left: 20px;
    font-family:Arial, sans-serif;
`

const NickName = styled.h1`
    font-size: 30px;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight:bold;
`

const Name = styled.h2`
    font-size: 22px;
    font-weight: normal;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Address = styled.div`
    font-size:17px;
    span{
        margin-left: .5em;
    }
`

const TextInfor = styled.div`
    margin-top:1em;
`


export default TopProfile