import React from 'react';
import styled from 'styled-components';
import TableItem from '../../../table/table';
import { DataCata } from './data';



const Topics=()=> {
    return(
        <BoxContent>
            <TableItem Data={DataCata}></TableItem>
        </BoxContent>
    );
}

const BoxContent = styled.div`

`

export default Topics