import React from 'react';
import styled from 'styled-components';
import GroupInput from './compoment/GroupInput/groupinput';
import TitleForm from './compoment/TitleForm/TitleForm';


const Singin=() =>{
    return(
        <BoxSingin>
            <FormSingin>
                <TitleForm title={`Welcome back`} img={`https://emoji.discourse-cdn.com/apple/wave/6.png`} slog={`Log in to your account`}></TitleForm>

                <ContentForm>
                    <form action="#">
                        <GroupInput type={`email`} name={`Email`} autofocus></GroupInput>
                        <GroupInput type={`password`} name={`Mật Khẩu`}></GroupInput>
                   </form>
                </ContentForm>

                <FooterForm>
                    <button>Create your account</button>
                    <a href='/#'>Đăng Nhập</a>
                </FooterForm> 
            </FormSingin>

            <SinginGit>
                <button>
                    <i class="fab fa-github"></i> Với GitHub
                </button>
            </SinginGit>
        </BoxSingin>
    );
}

const BoxSingin = styled.div`
    width:690px;
    height:500px;
    display:flex;
    background:white;
    position: relative;
`

const FormSingin = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0 0 1.5rem ;
`



const ContentForm = styled.div`
    width:100%;
    height:50%;
    
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

    button{
        background:#ff007a;
        padding:.5rem 2.5rem;
        border: transparent;
        color:white;
        border-radius: 3px;
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
    }
`

const SinginGit = styled.div`
    width:35%;
    height:100%;
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background:#ff007a;
    position:relative;

    button{
        border: transparent;
        padding: .5rem 1rem;

        &:focus {
            box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
            outline: 1px solid #000;
        }
    }
`

export default Singin