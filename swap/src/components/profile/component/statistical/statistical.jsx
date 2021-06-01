import React from 'react';
import styled from 'styled-components';


const Statistical = () => {
    return (
        <BoxContent>
            <Title>Thống Kê</Title>
            <Content>
                
                <div><span>5</span> Ngày đã ghé thăm</div>

                <div><span>36 phút</span> thời gian đọc</div>

                <div><span>18</span> chủ đề đã xem</div>

                <div><span>97</span> Bài viết đã đọc</div>

                <div> <span>7</span>  nhận</div>

                <div><span>9</span> Bài viết đã được tạo</div>

                <div> <span>8</span>  Đã nhận</div>

            </Content>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    padding:1rem 0;

`

const Title = styled.div`

`

const Content = styled.div`
    width:80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color:#919191;

    div{
        
        padding-top:20px;
        padding-right:60px;
        font-size:15px;

        span{
            font-size:19px;
            font-weight: bold;
            color:black;
        }
    }
`

export default Statistical