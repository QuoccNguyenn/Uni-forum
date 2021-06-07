import React from 'react';
import styled from 'styled-components';
import { BoxBadges } from '../BoxBadges/data';
import BadgeCard from './component/badge/badge';
import BoxPeople from './component/boxPeople/BoxPeople';
import Catalog from './component/catalog/catalog';
import Statistical from './component/statistical/statistical';
import TopAnswer from './component/topAnswer/topAnswer';


const Profile = () => {
    return (
        <BoxProfile>
          

            <Statistical></Statistical>

            <TopSection>
                <BoxReplies>
                    <TitleSection> top trả lời</TitleSection>
                    <TopAnswer time={"10 Thg 04"} likeCount={1} title={"[Temperature Check] Lock treasury UNI in Maker vault and use borrowed DAI to generate yield"}></TopAnswer>
                    <TopAnswer time={"10 Thg 04"} likeCount={1} title={"[Temperature Check] Lock treasury UNI in Maker vault and use borrowed DAI to generate yield"}></TopAnswer>
                    <TopAnswer time={"10 Thg 04"} likeCount={1} title={"[Temperature Check] Lock treasury UNI in Maker vault and use borrowed DAI to generate yield"}></TopAnswer>
                    <TopAnswer time={"10 Thg 04"} likeCount={1} title={"[Temperature Check] Lock treasury UNI in Maker vault and use borrowed DAI to generate yield"}></TopAnswer>
                    <TopAnswer time={"10 Thg 04"} likeCount={1} title={"[Temperature Check] Lock treasury UNI in Maker vault and use borrowed DAI to generate yield"}></TopAnswer>
                    <TopAnswer time={"10 Thg 04"} likeCount={1} title={"[Temperature Check] Lock treasury UNI in Maker vault and use borrowed DAI to generate yield"}></TopAnswer>
                    <TopAnswer time={"10 Thg 04"} likeCount={1} title={"[Temperature Check] Lock treasury UNI in Maker vault and use borrowed DAI to generate yield"}></TopAnswer>
                    <TopAnswer time={"10 Thg 04"} likeCount={1} title={"[Temperature Check] Lock treasury UNI in Maker vault and use borrowed DAI to generate yield"}></TopAnswer>
                </BoxReplies>

                <BoxReplies>
                    <TitleSection> top chủ đề</TitleSection>
                    chưa có chủ đề nào
                </BoxReplies>

            </TopSection>

            <TopSection>

                <LinkSection>
                    <TitleSection> liên kết đầu</TitleSection>
                    không có liên kết đầu
                </LinkSection>

                <BoxReplies>
                    <TitleSection>Trả Lời nhiều nhất</TitleSection>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-share"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/hindel/90/2021_2.png"} name={"Hindel"} count={1} ClassIcon={"fas fa-share"}></BoxPeople>
                </BoxReplies>
            </TopSection>

            <TopSection>

                <LinkSection>
                    <TitleSection> ĐƯỢC THÍCH NHIỀU NHẤT BỞI</TitleSection>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                </LinkSection>

                <BoxReplies>
                    <TitleSection>LIKE NHIỀU NHẤT</TitleSection>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                    <BoxPeople img={"https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/neverselling/240/612_2.png"} name={"neverselling"} count={1} ClassIcon={"fas fa-heart"}></BoxPeople>
                </BoxReplies>
            </TopSection>

            <TopCata>
                <TitleSection>danh mục hàng đầu</TitleSection>
                <Catalog></Catalog>
            </TopCata>

            <TopSection className="Badge">
    
                <TitleSection>top huy hiệu</TitleSection>

                <BoxBadge>
                    <BadgeCard data={BoxBadges}></BadgeCard>
                </BoxBadge>
            </TopSection>

        </BoxProfile>
    );
}


const BoxProfile = styled.section`
    width:100%;
`

const TopSection = styled.section`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    padding:2rem 0;

    &.Badge{
        flex-direction:column;
    }
`

const TitleSection = styled.h3`
    text-transform: uppercase;
    margin-bottom: 10px;
    width: 100%;
    font-family: Arial, sans-serif;
    font-size:17px;
    color:#222222;
    font-weight:bold;
`
const TopCata = styled.div`
    padding-bottom:2rem;
`

const BoxReplies = styled.div`
    width:50%;
    @media screen and (max-width:600px){
        width:100%;
    }
`
const LinkSection = styled.div`
    width:50%;
`

const BoxBadge = styled.div`
    width:100%;
    padding:1.5rem 0;
`



export default Profile