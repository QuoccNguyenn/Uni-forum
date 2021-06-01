import React, { useState } from 'react';
import styled from 'styled-components';
import ItemBox from '../itemBox/itemBox';
import { DataLikeGiven } from './data';

const LikeGiven =() => {

    const [like,SetLike]= useState(true)
    return(
        <BoxContent>
            <ItemBox data={DataLikeGiven} like = {like}></ItemBox>
        </BoxContent>
    );
}

const BoxContent = styled.div`

`

export default LikeGiven