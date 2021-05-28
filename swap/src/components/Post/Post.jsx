import React from 'react';
import styled from 'styled-components';

function Post(){
    return(
        <PostPage>
            <Header>
                <h3>Temperature Check - Funding a Political Defense of DeFi</h3>
                <span>Temperature check</span>
            </Header>
            <MainSection>
                <Body>
                    <AvatarContainer>
                        <img src="/images/3143_2.jpeg" alt=""/>
                    </AvatarContainer>
                    <ContentContainer>
                        <Topic>
                            <div>
                                <span>HarvardLawBFI</span>
                            </div>
                            <div>
                                <span>3! </span><span>10 giờ</span>
                            </div>
                        </Topic>
                        <Content>
                            <p>
                                Governments around the world are considering how they will regulate decentralized finance, and we need to defend the ecosystem and decentralized ideals. 
                                We should create and fund with 1-1.5M UNI a community-overseen organization that would finance existing and new political groups engaged in crypto 
                                policy/lobbying with the goals of 
                                1) educating policymakers to preempt regulatory, legal, political, and tax threats to decentralized finance; 
                                2) achieving regulatory clarity for decentralized finance and related activity; 
                                3) advancing laws that support decentralized finance and decentralized governance; and 
                                4) spurring other DeFi protocols’ governance communities to contribute to the effort (through this organization or their own).
                            </p>
                        </Content>
                            
                    </ContentContainer>
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
    flex-direction: row;
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
    width: calc( 80% - 60px );
    padding-top: 15px;
    border-top: 1px solid #e9e9e9;
`

const Topic = styled.div`
    display: flex;
    justify-content: space-between;
`

const Content = styled.div`
    padding-top: 15px;
`

const Timeline = styled.div`
    width: 30%;
`

export default Post;