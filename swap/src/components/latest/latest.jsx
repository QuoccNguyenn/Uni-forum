import React from 'react';
import styled from 'styled-components';

const Latest = () => {
    return (

        <BoxLatest>
            <div className="container">
                <ContentLatest>

                    <TableLatest>
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
                            <tr>
                                <TdLates>

                                    <TdLink href="/#">Community Governance Process</TdLink>

                                    <TdLink href="/#" className="link_bot">
                                        <TdSpan className="badge-category-bg" style={{ background: '#652D90' }}></TdSpan>
                                        <TdSpan className="category-name">Governance-Meta</TdSpan>
                                    </TdLink>

                                    <TdLink href="/#" className="topic-excerpt">
                                        This document is a suggested process for developing and advancing Uniswap Governance Proposals. It is a living document intended to be owned, modified and enforced by the Uniswap community.
                                        Note: Autonomous proposals ar…
                                        <span className="topic-excerpt-more">đọc thêm</span>
                                    </TdLink>

                                </TdLates>

                                <TdLates className="posters">
                                    <div className="linePost">
                                        <a href="/#"><img src="https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/ashleigh/50/10_2.png" alt="" /></a>
                                        <a href="/#"><img src="https://sjc3.discourse-cdn.com/business6/user_avatar/gov.uniswap.org/heyjonbray/50/820_2.png" alt="" /></a>
                                        <a href="/#"><img src="https://avatars.discourse-cdn.com/v4/letter/h/bc8723/50.png" alt="" /></a>
                                        <a href="/#"><img src="https://avatars.discourse-cdn.com/v4/letter/a/aeb1de/50.png" alt="" /></a>
                                        <a href="/#"><img src="https://avatars.discourse-cdn.com/v4/letter/m/c68b51/50.png" alt="" /></a>
                                    </div>
                                </TdLates>

                                <TdLates className="number">15</TdLates>
                                <TdLates className="number">7.7k</TdLates>
                                <TdLates className="Age">
                                    <a href="/#">10 Thg 04</a>
                                </TdLates>
                            </tr>
                        </Tbody>
                    </TableLatest>

                </ContentLatest>
            </div>
        </BoxLatest>

    );
}

const BoxLatest = styled.section`
    width:100%;
    overflow: hidden;
`

const ContentLatest = styled.div`
    width:100%;
`

const TableLatest = styled.table`

    width:100% ;

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

        a{
            float: left;
            margin-right: 4px;

            img{
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


export default Latest
