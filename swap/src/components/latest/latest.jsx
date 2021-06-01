import React from 'react';
import styled from 'styled-components';
import TableItem from '../table/table';
import { DataLatest } from './constants';

const Latest = () => {


    return (

        <BoxLatest>
            <div className="container">
                <ContentLatest>

                    <TableLatest>
                        <TableItem Data={DataLatest}></TableItem>
                    </TableLatest>

                </ContentLatest>
            </div>
        </BoxLatest>

    );
}

const BoxLatest = styled.section`
    width:100%;
`

const ContentLatest = styled.div`
    width:100%;
`

const TableLatest = styled.table`

    width:100% ;

`




export default Latest
