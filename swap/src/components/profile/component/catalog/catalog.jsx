import React from 'react';
import styled from 'styled-components';

const Catalog = (props) => {
    return (
        <BoxContent>
            <Table >
                <Thead>
                    <tr>
                        <th></th>
                        <th>Chủ đề</th>
                        <th>Trả lời</th>
                    </tr>
                </Thead>

                <Tbody>
                    <tr>
                        <td> <span className="dot" style={{ background: '#652D90' }}></span> <a href="#/" className="nameCata">Uncategorized</a></td>
                        <td>-</td>
                        <td><a href="#/"className="reply-count">5</a></td>
                    </tr>

                    <tr>
                        <td> <span className="dot" style={{ background: '#652D90' }}></span> <a href="#/" className="nameCata">Uncategorized</a></td>
                        <td>-</td>
                        <td><a href="#/"className="reply-count">5</a></td>
                    </tr>

                    <tr>
                        <td> <span className="dot" style={{ background: '#652D90' }}></span> <a href="#/" className="nameCata">Uncategorized</a></td>
                        <td>-</td>
                        <td><a href="#/"className="reply-count">5</a></td>
                    </tr>

                    <tr>
                        <td> <span className="dot" style={{ background: '#652D90' }}></span> <a href="#/" className="nameCata">Uncategorized</a></td>
                        <td>-</td>
                        <td><a href="#/"className="reply-count">5</a></td>
                    </tr>

                </Tbody>
            </Table>
        </BoxContent>
    );
}

const BoxContent = styled.div`

`

const Table = styled.table`
    width:300px;
`

const Tbody = styled.tbody`
    td{
        text-align:center;
        span.dot{
            flex: 0 0 auto;
            width: 9px;
            height: 9px;
            margin-right: 5px;
            display: inline-block; 
        }
        a{
            text-decoration: none;
            color:black;
            &:hover{
                text-decoration: none;
            }  
        }

        .nameCata{
            text-overflow: ellipsis;
            overflow: hidden;
            color:#646464;
            font-size:15px;     
        }

        .reply-count{
            color:#ff007a;
        }
    }
`

const Thead = styled.thead`
    th{
        text-align:center;
    }
`

export default Catalog