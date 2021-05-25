import React from 'react';
import styled from 'styled-components';


const Login=() =>{ 
    return(
        <BoxLogin>
            <FormLogin>
                <TitleForm>
                    <h1>WellCome</h1> 
                    <div className="img">
                        <img src="https://emoji.discourse-cdn.com/apple/wave/2.png" alt="" />
                    </div>
                    <p>Let's create your account</p>
                </TitleForm>

                <ContentForm>
                    <form action="#">
                        <GroupInput>
                            <input type="text" placeholder="Email"/>
                            <p>Không hiển thị công cộng</p>
                        </GroupInput>

                        <GroupInput>
                            <input type="text" placeholder="Email"/>
                            <p>Không hiển thị công cộng</p>
                        </GroupInput>

                        <GroupInput>
                            <input type="text" placeholder="Email"/>
                            <p>Không hiển thị công cộng</p>
                        </GroupInput>

                        <GroupInput>
                            <input type="text" placeholder="Email"/>
                            <p>Không hiển thị công cộng</p>
                        </GroupInput>
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
    width:45vw;
    height:500px;
    display:flex;
`

const FormLogin = styled.div`
    width:65%;
    height100%;
    display:flex;
    flex-direction:column;
    padding: 2.5rem 1.5rem 0 1.5rem ;
`

const TitleForm = styled.div`
    width:100%;
    height:20%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;

    h1{
            width: 40%;
            margin: 0;
            font-size: 30px;
    }

    .img{
        width: 50%;
        
        img{
            max-width:35px;
        }
    }

    p{
        width: 50%;
    }
`

const ContentForm = styled.div`
    width:100%;
    height:60%;
    overflow: hidden;
    overflow-y: scroll;
`

const GroupInput = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    position: relative;

    padding-bottom:10px;

    input{
        width: 100%;
        border-radius: 5px;
        height: 40px;
        position: relative;
    }

    input[type=text]:focus.span {
        font-size:10px;
      }

    p{
        color:#919191;
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

const LoginGit = styled.div`
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

export default Login