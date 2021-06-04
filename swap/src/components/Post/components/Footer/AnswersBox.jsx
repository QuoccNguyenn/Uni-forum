import styled from "styled-components";

function AnswersBox(props) {
    return(
        <AnswerSection className={props.click ? '' : 'd-none'}>
            <div className='comment-holder'>
                <Comment>
                    <Avatar>
                        <a href="/#">
                            <img src='images/avt-1.png' alt=''/>
                        </a>
                    </Avatar>
                    <CommentInner>
                        <Header>
                            <a href='/#' className='user-name'>Depest99</a>
                        </Header>
                        <Content>
                            <p>Does it just need to be Uniswap that funds this? What about creating a Gitcoin project for this?</p>
                        </Content>
                    </CommentInner>
                </Comment>
            </div>
            <div className='comment-holder'>
                <Comment>
                    <Avatar>
                        <a href="/#">
                            <img src='images/avt-1.png' alt=''/>
                        </a>
                    </Avatar>
                    <CommentInner>
                        <Header>
                            <a href='/#' className='user-name'>Depest99</a>
                        </Header>
                        <Content>
                            <p>Does it just need to be Uniswap that funds this? What about creating a Gitcoin project for this?</p>
                        </Content>
                    </CommentInner>
                </Comment>
            </div>
            <div className='up-button' onClick={props.handleClick}>
                <i class= "fas fa-chevron-up"></i>
            </div>
        </AnswerSection>
    );
}

const AnswerSection = styled.section`
    border: 1px solid #e9e9e9;
    border-top: none;

    position: relative;

    .comment-holder{
        border-top: 1px solid #e9e9e9;
        padding: 0 15px;
    }

    .up-button{
        width: 35px;
        height: 35px;
        display: block;
        font-size: 20px;
        color: #919191;
        text-align: center;
        border: 1px solid #e9e9e9;;
        background: #fff;
        transition: 0.3s all ease;

        position: absolute;
        left: -20px;
        bottom: 30px;

        :hover{
            background: #e9e9e9;
            color: 646464;
        }
    }
`
const Comment = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    padding-top: 15px;
`
const Avatar = styled.div`
    a{    
        width: 60px;
        overflow: hidden;
        padding-top: 15px;

        img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }
    }
`
const CommentInner = styled.div`
    padding: 0 15px 15px;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a{
        text-decoration: none;
        color: #000;
        font-weight: 500;
        font-size: 14px;
    }
`
const Content = styled.div`
    padding-top: 15px;
`

export default AnswersBox;