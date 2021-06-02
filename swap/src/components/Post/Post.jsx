import React from 'react';
import styled from 'styled-components';
import Comments from './Comments/Comments';
import PostFooter from './Footer/PostFooter';
import PostInner from './PostInner/PostInner';
import PostLink from './Footer/PostLink';
import TopicMap from './TopicMap/TopicMap';

function Post(){
    return(
        <PostPage>
            <Header>
                <h3>Temperature Check - Funding a Political Defense of DeFi</h3>
                <span>Temperature check</span>
            </Header>
            <MainSection>
                <Body>
                    <div className='post'>
                        <AvatarContainer>
                            <img src="/images/avt.png" alt=""/>
                        </AvatarContainer>
                        <ContentContainer>
                            
                            {/* Inner content of Post */}
                            <PostInner/>
                            {/* End Inner content*/}

                            {/* FOOTER FOR POSTS */}
                            <PostFooter/>
                            {/* END FOOTER */}
                            
                            {/* POST LINKS */}
                            <PostLink/>
                            {/* END POST LINKS */}

                            {/* TOPIC MAP */}
                            <TopicMap/>
                            {/* END TOPIC MAP */}
                                
                        </ContentContainer>

                    </div>
                    <Comments/>
                </Body>
                <Timeline>

                </Timeline>
            </MainSection>


        </PostPage>
    );
}

const PostPage = styled.div`
    padding: 20px 8px 0;
`
const Header = styled.div``

const MainSection = styled.section`
    display: flex;
    flex-direction: row;
    padding-top : 15px;
`
const Body = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;

    .post{
        display: flex;
        flex-direction: row;
    }
`
const AvatarContainer = styled.div`
    width: 60px;
    overflow: hidden;
    padding-top: 15px;
    border-top: 1px solid #e9e9e9;

    img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
`
const ContentContainer = styled.div`
    max-width: 85%;
    padding-top: 15px;
    border-top: 1px solid #e9e9e9;
    
    p{
        font-size: 14px;
    }
    .pink-letter {
        color: #ff007a;
        text-decoration: none;
        cursor: pointer;
    }
`
const Timeline = styled.div`
    width: 30%;
`

export default Post;