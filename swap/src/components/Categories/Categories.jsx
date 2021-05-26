import React from 'react';
import styled from 'styled-components';
import { category } from './constants/data';
import { topic } from './constants/topic';

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

    @media screen and (max-width: 768px){
        flex-direction: column
    }
`

const CategoryHolder = styled.div`
    width: 50%;
    padding: 0 10px;

    @media screen and (max-width: 768px){
        width: 100%;
    }
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

    justify-content: space-between;
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

    @media screen and (max-width: 768px){
        width: 100%;
    }
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