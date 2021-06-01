import React from 'react';
import styled from 'styled-components';
import TableItem from '../table/table';
import { DataTop } from './constants';

const BoxTop=()=> {

    return(
        <Container>
            <div className="container">
                <ContentTop>

                    <TableTop>
                        <TableItem Data={DataTop}></TableItem>
                    </TableTop>

                </ContentTop>
            </div>
        </Container>
    );

}

const Container = styled.div`
    width:100%;
`

const ContentTop = styled.div`
    width:100%;
`

const TableTop = styled.div`
    width:100%;
`

export default BoxTop
