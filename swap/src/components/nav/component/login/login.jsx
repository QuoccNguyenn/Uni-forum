import React from 'react';
import styled from 'styled-components';
import GroupInput from './compoment/GroupInput/groupinput';
import TitleForm from './compoment/TitleForm/TitleForm';


const Login=() =>{ 
    return(
        <BoxLogin>
            <FormLogin>
                <TitleForm title={`WellCome`} img={`https://emoji.discourse-cdn.com/apple/wave/2.png`} slog={`Let's create your account`}></TitleForm>

                <ContentForm>
                    <form action="#">
                        <GroupInput type={`email`} name={`Email`} title={`Không hiển thị công cộng`} autofocus></GroupInput>
                        <GroupInput type={`text`} name={`Username`} title={`Duy Nhất, không có khoảng trống, ngắn`}></GroupInput>
                        <GroupInput type={`text`} name={`Tên`} title={`Tên đầy đủ của bạn (tùy chọn)`}></GroupInput>
                        <GroupInput type={`password`} name={`Mật Khẩu`} title={`ít nhất 10 ký tự`}></GroupInput>
                   </form>
                </ContentForm>

                <FooterForm>
                    <button>Create your account</button>
                    <a href="/">Đăng Nhập</a>
                </FooterForm>
            </FormLogin>

            <LoginGit>
                <button>
                    <i class="fab fa-github"></i> Với GitHub
                </button>
            </LoginGit>
        </BoxLogin>
    );
}

const BoxLogin = styled.div`
    width:690px;
    min-height:500px;
    display:flex;

    @media screen and (max-width:600px){
        width:583px;
        flex-direction:column;
    }

    @media screen and (max-width:415px){
        width:342px;
    }

    @media screen and (max-width:350px){
        width:287px;
    }
`

const FormLogin = styled.div`
    width:65%;
    height100%;
    display:flex;
    flex-direction:column;
    padding: 2.5rem  0 0 1.5rem ;

    @media screen and (max-width:600px){
        width:auto;
    }
`



const ContentForm = styled.div`
    width:100%;
    max-height:300px;
    overflow: hidden;
    overflow-y: scroll;
    padding-right:1rem;

    /* width */
    ::-webkit-scrollbar {
    width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #919191; 
    border-radius: 10px;
    }
`


const FooterForm = styled.div`
    padding-top:10px;
    width:100%;
    height:20%;
    marginh-bottom:20px;

    button{
        background:#ff007a;
        padding:.5rem 2.5rem;
        border: transparent;
        color:white;
        border-radius: 3px;

        @media screen and (max-width:415px){
            padding:.5rem 1.5rem;
        }
        @media screen and (max-width:350px){
            padding:.5rem;
        }
        
        &:focus {
            box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
            outline: 1px solid #000;
        }
    }

    a{
        text-decoration: none;
        color:#646464;
        padding-left:20px ;
        font-size:18px;

        @media screen and (max-width:415px){
            padding-left:10px;
            font-size:15px;
        }

       
    }
`

const LoginGit = styled.div`
    width:35%;
    height:500px;
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background:#ff007a;
    position:relative;

    @media screen and (max-width:600px){
        width:auto;
        height:auto;
        margin: 20px 0;
        margin-left: 24px;
        justify-content: flex-start;
        background:transparent;
    }

    button{
        border: transparent;
        padding: .5rem 1rem;

        &:focus {
            box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
            outline: 1px solid #000;
        }
    }
`

export default Login