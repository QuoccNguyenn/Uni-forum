import React from'react';
import styled from 'styled-components';
import ListBadges from '../../components/listBadges/listBadges';
import { DataBadges } from './data';


const BadgesPage=()=>{
    return(
        <BoxContent>
            <Title>Huy Hiệu</Title>

            <ListBadges data={DataBadges}></ListBadges>
        </BoxContent>       
    );
}

const BoxContent = styled.div`
    width:100%;
    min-height:300px;
    padding:2.5rem .5rem ;
`

const Title = styled.h1`
    @media screen and (max-width:600px){
        font-size:35px;
    }
    @media screen and (max-width:415px){
        font-size:25px;
    }
`       


export default BadgesPage