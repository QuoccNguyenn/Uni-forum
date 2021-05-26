import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hook/useclickoutside/useclickoutside';
import Table from '../table/table';
import Card from '../userCard/card';
import { DataLatest } from './constants';

const Latest = () => {


    return (

        <BoxLatest>
            <div className="container">
                <ContentLatest>

                    <TableLatest>
                        <Table Data={DataLatest}></Table>
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
