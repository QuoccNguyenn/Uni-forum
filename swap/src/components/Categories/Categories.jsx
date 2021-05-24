import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';
function Categories() {
    return(
        <CategorySection>
            <CategoryContainer>
                <CategoryHolder>
                    <div>
                        <Title>
                            <div>Chuyên mục</div>
                            <div className='header-right'>Chủ đề</div>
                        </Title>
                        <CategoryContent>
                            <Item>
                                <div>
                                    <h2>Temperature Check</h2>
                                    <p>The purpose of the Temperature Check is to determine if there is sufficient will to make changes to the status quo.</p>
                                </div>
                                <span>19</span>  
                            </Item>
                        </CategoryContent>
                    </div>
                </CategoryHolder>
                <TopicHolder>
                    <div>
                        <Title>
                            <div>Mới nhất</div>
                        </Title>
                    </div>
                </TopicHolder>
            </CategoryContainer>
        </CategorySection>
    );
}

const CategorySection = styled.section`
    padding: 10px;
`
const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const CategoryHolder = styled.div`
    width: 50%;
`

const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid lightgray;
    padding: 10px 0;

    div{
        width: 50%;
    }
    .header-right{
        text-align: right;
    }
`

const CategoryContent = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgrey;
`
const Item = styled.div`
    display: flex;
    flex-direction: row;
    h2{
        margin-top: 0;
    }
    div{
        padding: 10px;
    }
    span{
        padding: 10px;
        font-weight: bold;
        color: #919191;
    }
`

const TopicHolder = styled.div`
    width: 50%;

    padding: 0 10px;
`

export default Categories;