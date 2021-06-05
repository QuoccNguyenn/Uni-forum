import React from 'react';
import styled from 'styled-components';

const Statistical = () => {
    return (
        <BoxContent>
            <h3> <i class="far fa-chart-bar"></i> Thống kê trang</h3>

            <Table>

                <Thead>
                    <tr>
                        <th></th>
                        <th>Last 24 hours</th>
                        <th>Last 7 days</th>
                        <th>Last 30 days</th>
                        <th>Từ trước tới nay</th>
                    </tr>
                </Thead>

                <Tbody>
                    <tr>
                        <td className="title">Các chủ đề</td>
                        <td>0</td>
                        <td>8</td>
                        <td>29</td>
                        <td>382</td>
                    </tr>

                    <tr>
                        <td>Các bài viết</td>
                        <td>58</td>
                        <td>410</td>
                        <td>2.0k</td>
                        <td>29.5k</td>
                    </tr>

                    <tr>
                        <td>Người dùng	</td>
                        <td>14</td>
                        <td>116</td>
                        <td>731</td>
                        <td>9.2k</td>
                    </tr>

                    <tr>
                        <td>Thành viên tích cực	</td>
                        <td>117</td>
                        <td>397</td>
                        <td>1.2k</td>
                        <td>—</td>
                    </tr>

                    <tr>
                        <td>Lượt thích	</td>
                        <td>63</td>
                        <td>405</td>
                        <td>1.4k</td>
                        <td>15.3k</td>
                    </tr>
                </Tbody>

            </Table>

        </BoxContent>
    );
}

const BoxContent = styled.div`
    max-width:700px;
    margin-bottom:40px;

    h3{
        margin-bottom:15px;
        font-size:17px;
        font-weight:bold;
        
        i{
            padding-right:5px;
        }
    }
`

const Table = styled.table`
    width:100%;
`

const Thead = styled.thead`
    border-top: 3px solid #e9e9e9;
    tr{
        border-bottom:1px solid #e9e9e9;

        th{
            font-weight: normal;
            color: #919191;
            text-align: left;
            padding: 0.5em;
        }
    }
`

const Tbody = styled.tbody`
    tr{
        border-bottom:1px solid #e9e9e9;
        td{
            padding:10px;
            &.title{
                width:33%;
                font-size:15px;
                color:#222222
            }
        }
    }

`

export default Statistical