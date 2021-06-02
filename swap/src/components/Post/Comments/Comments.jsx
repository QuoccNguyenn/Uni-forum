import styled from "styled-components";
import PostFooter from "../Footer/PostFooter";

function Comments() {

    const data = [
        {
            link:'/#',
            src: 'images/avt-8.png',
            userName:'Depest99',
            content:[
                {
                    p:'Does it just need to be Uniswap that funds this? What about creating a Gitcoin project for this?'
                }
            ]
        },
        {
            link:'/#',
            src: 'images/avt-3.png',
            userName:'Miller',
            content:[
                {
                    p:'I work in crypto policy in the US and this post is 100 on point. The question is what future for defi we want: do we want to have active governance over protocols that can be changed, upgraded, and secured over time or for Defi to be effectively prohibited (whatever that means in practice, it wouldn’t be good)?'
                },
                {
                    p:'Regulatory proposals like the Financial Action Task Force’s draft updated guidance (intended to be finalized next month) for crypto essentially claims that there is always an intermediary where a financial service is offered.'
                },
                {
                    p:'The scrutiny of DeFi is intense in jurisdictions all over the world, and it’s only going to get more serious as defi gains adoption. The traditional financial services industry has always leveraged political engagement to secure advantages, and they will use that leverage against defi when it becomes a threat. Re the above comments, policy is always a “tragedy of the commons” situation. If UNI doesn’t make the first leap, then which project will? If anything, UNI moving first will pressure other communities to act with us, and we don’t have time to wait for them rn given the regulatory action we’re facing.'
                }
            ]
        }
    ]

    return(
        <CommentSection>
            <div>
                {
                    data.map(item => (
                        <Comment>
                            <Avatar>
                                <a href="/#">
                                    <img src={item.src} alt=''/>
                                </a>
                            </Avatar>
                            <CommentInner>
                                <Header>
                                    <a href='/#' className='user-name'>{item.userName}</a>
                                <Time>4 ngày</Time>
                                </Header>
                                <Content>
                                    {item.content.map(i => (
                                        <p>{i.p}</p>
                                    ))}
                                </Content>
                            </CommentInner>
                        </Comment>
                    ))
                }
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
                        <Footer>
                            <PostFooter/>
                        </Footer>    
                    </CommentInner>
                </Comment>
            </div>
        </CommentSection>
    );
}

const CommentSection = styled.section`
    display: flex;
    flex-direction: column;
`
const Comment = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #e9e9e9;
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
const Time = styled.span``
const Content = styled.div`
    padding-top: 15px;
`
const Footer = styled.div`
    position: relative
`


export default Comments;