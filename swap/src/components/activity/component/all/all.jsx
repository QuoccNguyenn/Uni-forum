import React from 'react';
import styled from 'styled-components';
import ItemBox from '../itemBox/itemBox';
import { DataReplies } from './data';

const All = () => {

    return(
        <BoxContent>
            <ItemBox data={DataReplies} ></ItemBox>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width:100%;
`   

export default All