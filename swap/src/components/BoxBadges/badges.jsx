import React from 'react';
import styled from 'styled-components';
import BadgeCard from '../profile/component/badge/badge';


const Badges = () => {
    return (
        <BoxContent>
            <BadgeCard></BadgeCard>
            <BadgeCard></BadgeCard>
            <BadgeCard></BadgeCard>
            <BadgeCard></BadgeCard>
            <BadgeCard></BadgeCard>
            <BadgeCard></BadgeCard>
        </BoxContent>
    );
}

const BoxContent = styled.div` 
display: flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: space-between;
`


export default Badges