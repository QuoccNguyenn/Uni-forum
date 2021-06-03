import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hook/useclickoutside/useclickoutside';
import UserDetail from './component/userDetail/userDetail';
import { DataUsers } from './data';


const User = () => {

 

    return (
        <BoxContent>
            <ListUser>
                <TitleList>
                    <tr>
                        <th>Tên tài khoản</th>
                        <th><i class="fas fa-heart"></i> Đã nhận</th>
                        <th><i class="fas fa-heart"></i> Đưa ra</th>
                        <th>Chủ đề đã được tạo</th>
                        <th>Trả lời đã đăng</th>
                        <th>Chủ đề đã xem</th>
                        <th>Bài đăng đã đọc</th>
                        <th>Ngày đã ghé thăm</th>
                    </tr>
                </TitleList>

                <UserDetail data={DataUsers}></UserDetail>

            </ListUser>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width:100%;
    min-height:300px;
    padding:2.5rem 0;
`

const ListUser = styled.table`
    width:100%;
`

const TitleList = styled.thead`
    tr{
        th{
            padding: 0.5em;
            text-align: left;
            border-bottom: 3px solid #e9e9e9;
            font-weight: normal;
            color: #919191;

            i{
                color:#ff007a;
            }
        }
    }
`



export default User


