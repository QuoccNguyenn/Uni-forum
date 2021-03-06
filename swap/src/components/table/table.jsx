import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import useOnClickOutside from '../../hook/useclickoutside/useclickoutside';
import Card from '../userCard/card';



const TableItem=(props) => {
    const{Data}=props;

    const data = Data;
    const [ClickCard, SetClickCard] = useState(false);
    const [test, Settest] = useState(0);
    const [pIdxs, SetpIdxs] = useState(0);

    const refCard = useRef();

    useOnClickOutside(refCard, () => SetClickCard(false));

    return(
        <BoxTable>
            <TheadLatest>
                <tr>
                    <ThLatest className="title">Chủ Đề</ThLatest>
                    <ThLatest className="poster"></ThLatest>
                    <ThLatest className="sortable num">Trả Lời</ThLatest>
                    <ThLatest className="sortable num">Lượt Xem</ThLatest>
                    <ThLatest className="sortable">Hoạt Động</ThLatest>
                </tr>
            </TheadLatest>

            <Tbody>
                {data.map((item, idxs) => (
                    <tr key={idxs}>
                        <TdLates>

                            <TdLink href="/#">{item.title}</TdLink>

                            <TdLink href="/#" className="link_bot">
                                <TdSpan className="badge-category-bg" style={{ background: '#652D90' }}></TdSpan>
                                <TdSpan className="category-name">{item.cataname}</TdSpan>
                            </TdLink>

                            <TdLink href="/#" className="topic-excerpt">
                                {item.topicExcerpt}
                            </TdLink>

                        </TdLates>

                        <TdLates className="posters">
                            <div className="linePost">
                                {item.persons ? item.persons.map((itemPr, idx) => (
                                    <p   onClick={() => { SetClickCard(true); Settest(idx);SetpIdxs(idxs) }}><img className="img_pt" src={`${itemPr.img}`} alt="" />
                                        {idx===test && idxs===pIdxs ? <BoxCard ref={refCard}  className={ClickCard && idx===test && idxs===pIdxs ?"active":""}><Card  img={itemPr.img} name={itemPr.name} time={itemPr.time} metadata={itemPr.metadata} ></Card></BoxCard>:"" }
                                    </p>
                                )):""}
                            </div>
                        </TdLates>

                        <TdLates className="number">{item.replies}</TdLates>
                        <TdLates className="number">{item.view}</TdLates>
                        <TdLates className="Age">
                            <a href="/#" >{item.time}</a>
                        </TdLates>
                    </tr>
                ))}
            </Tbody>
        </BoxTable>
    );

}

const BoxTable = styled.table`

`
const TheadLatest = styled.thead`

    tr{
        border-bottom: 1px solid #e9e9e9;
    }
`

const ThLatest = styled.th`
    padding: 12px 5px;
    text-align:center;

    &.title{
        width:60%;
        text-align:left;
    }

    &.poster{
        width: 15%;
    }
    &.sortable.num{
        width:7%;
        font-size:14px;
    }

    &.sortable{
        width:10%;
    }


`

const Tbody = styled.tbody`

    border-top: 3px solid #e9e9e9;

    tr{
        border-bottom: 1px solid #e9e9e9;
    }
`

const TdLates = styled.td`
    padding: 12px 5px;

    &.posters{

        p{
            position:relative;
            float: left;
            margin-right: 4px;

            .img_pt{
                max-width:25px;
                border-radius: 50%;
            }

        }
    }

    &.number{
        font-weight: 700;
        color: #fe7a15 !important;
        text-align:center;
    }

    &.Age{
        a{
            text-decoration:none;
            padding:15px 5px;
            color:#bdbdbd;

            &:hover{
                text-decoration:none;
            }
        }
    }

`
const TdLink = styled.a`
    color:black;
    text-decoration: none;
    cursor: pointer;
    font-size:18px;

    &:hover{
        color:black;
        text-decoration: none;
    }

    &.link_bot{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    &.topic-excerpt{
        font-size: 14px;
        margin-top: 5px;
        color:#646464;
        word-wrap: break-word;
        line-height: 8px;
        padding-right: 20px;

        span{
            color:#646464;
        }
    }

`

const TdSpan = styled.span`
    &.badge-category-bg {
        width: 9px;
        height: 9px;
        margin-right: 5px;
        display: inline-block;
    }

    &.category-name{
        font-size:14px;
        color:#646464;
    }
`

const BoxCard = styled.div`
    position:absolute;
    left:-120px;
    width: 580px;
    padding: .5rem;
    background:white;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
    z-index:9999999;
    text-decoration: none;
    color:black;
    display:none;
    transform: translateX(-40%);


    &.active{
        display:block;
    }

    @media screen and (max-width: 580px){
        width: 300px;
        left: 0;
        transform: translateX(-50%);
    }

    @media screen and (max-width: 280px){
        width: 260px;
        transform: translateX(-45%);
    }
`



export default TableItem