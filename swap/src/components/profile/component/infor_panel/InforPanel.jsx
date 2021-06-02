import React from 'react';
import styled from 'styled-components';


const InfoPanel = (props) => {
    const {active}=props;
    return (
        <BoxContent className={active ? "active" : ""}>
            <div>Đã tham gia <span>10 Thg 04</span></div>
            <div>Bài viết cuối cùng <span>10 Thg 04</span></div>
            <div>Được thấy <span>5 Thg 05</span></div>
            <div>Lượt xem <span>32</span></div>
            <div>Độ tin tưởng <span>初级用户</span></div>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    padding: 5px 0;
    border-top:1px solid #e9e9e9;
    border-bottom:1px solid #e9e9e9;

    display:flex;

    &.active{
        display:none;
    }

    div{
        color:gray;
        padding: 0 10px;
        span{
            color:#222;
        }
    }
`

export default InfoPanel