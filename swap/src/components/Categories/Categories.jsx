import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useOnClickOutside from '../../hook/useclickoutside/useclickoutside';
import Card from '../userCard/card';
import { category } from './constants/data';
import { topic } from './constants/topic';

function Categories(props) {

    const [ClickCard, SetClickCard] = useState(false);
    const [test, Settest] = useState(0);
    const ref = useRef();

    useOnClickOutside(ref, () => SetClickCard(false));

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
                                        <h4 className='button' onClick={()=>{props.handleActive('2')}}><Link to='/latest/#'>{item.title}</Link></h4>
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
                            {topic.map((item,idx) => (
                                <ItemTopic key={idx}>
                                    <Image>
                                        <img className="img_pt" src={item.persons.img} ref={ref} onClick={() => { SetClickCard(true); Settest(idx); }} alt=''/>
                                        <Card ClickCard={ClickCard} img={item.persons.img} name={item.persons.name} time={item.persons.time} metadata={item.persons.metadata}  idx={idx} test ={test}></Card>
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
                    <div className='button' onClick={()=>{props.handleActive('2')}}><Link to='/latest/#'>Nhiều hơn</Link></div>
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

    a{
        text-decoration: none;
        color: #000;
        display: block;
    }

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

    .button{
        a{
            display: block;
            padding: 6px 12px;
            background: #e9e9e9;
            color: #000;
            text-decoration: none;
            align-items: flex-end;
            justify-content: center;
            float: right;
        }
        a:hover{
            background: grey;
            color: #fff;
        }
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
    position: relative;

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

    .yellow{
        background-color: #f7941d; 
    }

    .orange{
        background-color: #f1592a;
    }

    .blue{
        background-color: #0088CC;
    }

    .green{
        background-color: #12A89D;
    }

    .violet{
        background-color: #652D90;
    }

    .gray{
        background-color: #808281
    }

    .red{
        background-color: #BF1E2E;
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

    .active{
        transform: translate(5%,20%);
    }
    img{
        height: 45px;
        width: 45px;
    }
    @media screen and (max-width: 1024px){
        .active{
            transform: translate(-17%,20%);
        }
    }

    @media screen and (max-width: 768px){
        .active{
            transform: translate(20%, 20%);
        }
    }

    @media screen and (max-width: 415px){
        .active{
            transform: translate(5%, 20%);
        }
    }

    @media screen and (max-width: 320px){
        .active{
            transform: translate(-3%, 20%);
        }
    }
`

export default Categories;