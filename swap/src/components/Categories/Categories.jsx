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
                borderLeft: '5px solid #0088CC' 
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
                borderLeft: '5px solid #652D90' 
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

    const topic = [
        {
            title: 'Community Governance Process',
            img: '../../images/avt-1.png',
            colorCls: 'violet',
            topic: 'Governance-Meta',
            tpDisplay: '',
            num: '15',
            time:'10 Thg 04'
        },
        {
            title: 'Uniswap Governance Forum Rules',
            img: '../../images/225_2.jpeg',
            colorCls: 'd-none',
            topic: '',
            tpDisplay: 'd-none',
            num: '2',
            time:'Thg 09\'20'
        },
        {
            title: 'Compounding Fees in V3 LP',
            img: '../../images/90.png',
            colorCls: 'blue',
            topic: 'Proposal Discussion',
            tpDisplay: '',
            num: '2',
            time:'8 giờ'
        },
        {
            title: 'Building Uniswap’s Moat: Attracting Non-DeFi Developers',
            img: '../../images/3143_2.jpeg',
            colorCls: 'blue',
            topic: 'Proposal Discussion',
            tpDisplay: '',
            num: '1',
            time:'1 ngày'
        },
        {
            title: 'Community Governance Process',
            img: '../../images/avt-1.png',
            colorCls: 'violet',
            topic: 'Governance-Meta',
            tpDisplay: '',
            num: '15',
            time:'10 Thg 04'
        },
        {
            title: 'Uniswap Governance Forum Rules',
            img: '../../images/225_2.jpeg',
            colorCls: 'd-none',
            topic: '',
            tpDisplay: 'd-none',
            num: '2',
            time:'Thg 09\'20'
        },
        {
            title: 'Compounding Fees in V3 LP',
            img: '../../images/90.png',
            colorCls: 'blue',
            topic: 'Proposal Discussion',
            tpDisplay: '',
            num: '2',
            time:'8 giờ'
        },
        {
            title: 'Building Uniswap’s Moat: Attracting Non-DeFi Developers',
            img: '../../images/3143_2.jpeg',
            colorCls: 'blue',
            topic: 'Proposal Discussion',
            tpDisplay: '',
            num: '1',
            time:'1 ngày'
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
                        <TopicContent>
                            {topic.map(item => (
                                <ItemTopic>
                                    <Image>
                                        <img src={item.img} alt=''/>
                                    </Image>
                                    <div className='content'>
                                        <h5>{item.title}</h5>
                                        <Block className={item.colorCls}/><div className={`name ${item.tpDisplay}`}>{item.topic}</div>
                                    </div>
                                    <div className='date-time'>
                                        <div>{item.num}</div>
                                        <span className='date'>{item.time}</span>
                                    </div>
                                </ItemTopic>
                            ))}
                        </TopicContent>
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
    padding: 0 10px;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    color: #919191;
    width: 100%;
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

const TopicContent = styled.div`
    display: flex;
    flex-direction: column;
`
const ItemTopic = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px 10px;
    border-bottom: 1px solid lightgrey;

    h5{
        margin: 0;
        font-size: 18px;
    }
    .name{
        display: inline-block;
        font-size: 13px;
        padding-left: 5px;
    }
    .content{
        width: 55%;
    }
    .date-time{
        text-align: right;
        width: 30%;

        div{
            font-weight: bold;
        }
        span{
            color: #919191;
        }
    }

    .violet{
        background-color: #652D90;
    }

    .blue{
        background-color: #0088CC;
    }

    .d-none{
        display: none!important;
    }
`

const Block = styled.span`
    display: inline-block;
    height: 9px;
    width: 9px;

`

const Image = styled.div`
    border-radius: 5rem;
    overflow: hidden;
    height: 100%;
    width: 45px;

    img{
        height: 45px;
        width: 45px;
    }
`

export default Categories;