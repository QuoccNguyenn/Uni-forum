import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ListControl() {
    return(
        <ListControlSection>
            <ul>
                <li>Tất cả chuyên mục</li>
            </ul>
            <ul>
                <li><Link to='/Categories'>Danh mục</Link></li>
                <li>Mới nhất</li>
                <li>Top</li>
            </ul>
        </ListControlSection>
    );
}

const ListControlSection = styled.section``

export default ListControl;