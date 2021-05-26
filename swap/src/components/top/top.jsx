import React from 'react';
import styled from 'styled-components';
import Table from '../table/table';
import { DataTop } from './constants';

const BoxTop=()=> {

    return(
        <Container>
            <div className="container">
                <ContentTop>

                    <TableTop>
                        <Table Data={DataTop}></Table>
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
