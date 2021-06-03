import React from 'react';
import styled from 'styled-components';
import BadgeCard from '../profile/component/badge/badge';
import { BoxBadges } from './data';


const Badges = () => {
    return (
        <BoxContent>
            <BadgeCard data={BoxBadges}></BadgeCard>
        </BoxContent>
    );
}

const BoxContent = styled.div` 
    width:100%;
    padding:1.5rem 0;
`


export default Badges