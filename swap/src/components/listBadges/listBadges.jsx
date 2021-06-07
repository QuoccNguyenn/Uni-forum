import React from 'react';
import styled from 'styled-components';
import BadgeCard from '../profile/component/badge/badge';


const ListBadges = (props) => {
    const { data } = props;
    return (
        <div>
            {data.map((item, idx) => (
                <BoxContent>
                    <Title>{item.TitleList}</Title>
                    <BadgeCard data={item.BoxBadges}></BadgeCard>
                </BoxContent>
            ))}
        </div>
    );
}

const BoxContent = styled.div`
    width:100%;
    padding:1.5rem 0;
`

const Title = styled.h3`
    font-family:Arial, sans-serif;
    color:#919191;
    font-size:17px;
    font-weight:bold;
    margin-box:20px;

`

export default ListBadges