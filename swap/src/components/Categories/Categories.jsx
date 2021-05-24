import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';
function Categories() {

    const category = [
        {
            title: 'Temperature Check',
            content: 'The purpose of the Temperature Check is to determine if there is sufficient will to make changes to the status quo.',
            num: '19',
            decor: {
                borderLeft: '5px solid orange' 
            }
        },
        {
            title: 'Consensus Check',
            content: 'The purpose of the Consensus Check is to establish formal discussion around a potential proposal.',
            num: '7',
            decor: {
                borderLeft: '5px solid red' 
            }
        },
        {
            title: 'Proposal Disussion',
            content: 'For the discussion and informal consensus-gathering work related to potential governance proposals.',
            num: '122',
            decor: {
                borderLeft: '5px solid blue' 
            }
        },
        {
            title: 'Delegation Pitch',
            content: 'Explain why members of the Uniswap community may want to delegate their votes to you!',
            num: '25',
            decor: {
                borderLeft: '5px solid green' 
            }
        },
        {
            title: 'Governance-Met',
            content: 'This section is for discussions around governance systems, ways of distributing resources, how the community should think about governance responsibilities–basically all things related to governance, but which are not a specific proposal.',
            num: '12',
            decor: {
                borderLeft: '5px solid violet' 
            }
        },
        {
            title: 'Site Feedback',
            content: 'Discussion about this site, its organization, how it works, and how we can improve it.',
            num: '12',
            decor: {
                borderLeft: '5px solid grey' 
            }
        },
        {
            title: 'Uncategorized',
            content: 'Topics that don\'t need a category, or don\'t fit into any other existing category.',
            num: '131',
            decor: {
                borderLeft: '5px solid red' 
            }
        }
    ]

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
                            {category.map(item => (
                                <Item style={item.decor}>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.content}</p>
                                    </div>
                                    <span>{item.num}</span>
                                </Item>
                            ))}
                            
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
`
const Item = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid lightgrey;

    h4{
        margin-top: 0;
        font-weight: bold;
    }
    div{
        padding: 10px 10px 0;
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