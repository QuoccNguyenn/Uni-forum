import React from 'react'
import styled from 'styled-components';
import BoxAdmin from '../../components/AboutBoxAdmin/BoxAdmin';
import Statistical from '../../components/AboutStatistical/statistical';
import { DataAdmin } from './data/admin';


const About = () => {
    return (
        <BoxContent>
            <BoxTitle>
                <h2>Giới thiệu về Uniswap Governance</h2>
                <p>Forum for Uniswap community members to coordinate on governance proposals and participate in discussion.</p>
            </BoxTitle>

            <BoxAdmin title={`Các quản trị viên`} data={DataAdmin} ></BoxAdmin>

            <BoxAdmin title={`Các Điều hành Viên`} data={DataAdmin} ></BoxAdmin>

            <Statistical></Statistical>

            <Footer>
                <h3><i class="far fa-envelope"></i> Liên hệ chúng tôi</h3>
                <p>Trong trường hợp có bất kỳ sự cố nào ảnh hưởng tới trang này, xin vui lòng liên hệ với chúng tôi theo địa chỉ <a href="#">https://uniswap.org/</a></p>
            </Footer>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width:100%;

`

const BoxTitle = styled.div`
    max-width: 700px;
    font-family: Arial, sans-serif; 
    margin:40px 0;

    h2{
        font-size:20px;
        font-weight:bold;
    }

    p{
        margin:0;
        font-size:15px;
    }
`

const Footer = styled.div`
    max-width:700px;

    h3{
        margin-bottom:15px;
        font-size:17px;
        font-weight:bold;
        
        i{
            padding-right:5px;
        }
    }

    p{
        font-size:15px;
        color:#222222;
        a{
            color:#f0077a;
            text-decoration: none;
            cursor: pointer;
        }
    }
`


export default About