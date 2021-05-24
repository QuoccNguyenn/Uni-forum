import React from 'react';
import styled from 'styled-components';


const Nav = () => {

    return (
        <BoxNav>
            <div className="container">
                <ContainerNav>
                    <Logo><img src="images/logo.png" alt="" /></Logo>
                    <ContentNav>
                        <BoxBtn>
                            <Btn href="#">Đăng ký</Btn>
                            <Btn href="#">Đăng Nhập</Btn>
                        </BoxBtn>

                        <BoxIcon>
                            <Icons><i class="fas fa-search"></i></Icons>
                            <Icons><i class="fas fa-bars"></i></Icons>
                        </BoxIcon>
                    </ContentNav>
                </ContainerNav>
            </div>
        </BoxNav>
    )

}

const BoxNav = styled.nav`
    with:100%;  
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 25%);
`
const ContainerNav = styled.div`
    with:100%;
    height:60px;
    display:flex;
`

const Logo = styled.div`
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:50%;
    }
`

const ContentNav = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;

`

const BoxBtn = styled.div`
    height:60px;
    display :flex;
    align-items:center;
`

const Btn = styled.a`
    padding: .3rem 1rem;
    background:black;
    color:white !important;
    font-size: 12px;
    text-decoration: none;
    margin:0 5px;
    background:#ff007a;

    &:hover{
        text-decoration: none;
        background:#bf005c;
    }
`

const BoxIcon = styled.div`
    display:flex;
`

const Icons =styled.div`
    

    &:hover{
        background:#e9e9e9;

        i{
            color:#919191;
        }
    }
    i{
        font-size:24px;
        color:#d0d0d0;

        padding:.5rem;
    }
`





export default Nav