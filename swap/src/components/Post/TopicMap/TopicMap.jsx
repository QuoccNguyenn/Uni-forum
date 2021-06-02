import { useState } from "react";
import styled from "styled-components";
import AvatarsLink from "./AvatarsLink";

function TopicMap() {
    const [click, setClick] = useState(false);

    function handleClick(){
        setClick(!click);
    }

    return(
        <TopicMapContainer>
            <TopicMapSection>
                <ul>
                    <DateCreate>
                        <h4>ngày tạo</h4>
                        <div className='img'>
                            <a href="/#"><img src="/images/avt-20x20.png" alt=""/></a><span title='28 Thg 05 2021 01:55'>1 ngày</span>
                        </div>
                    </DateCreate>
                    <LastAnswer>
                        <a href="/#">
                            <h4>trả lời gần nhất</h4>
                            <div className='img'>
                                <a href="/#"><img src="/images/40.png" alt=""/></a><span title='28 Thg 05 2021 01:55'>10 giờ</span>
                            </div>
                        </a>
                    </LastAnswer>
                    <Replies>
                        <span className="number">25</span>
                        <h4>trả lời</h4>
                    </Replies>
                    <Views>
                        <span className="number">1.9k</span>
                        <h4>lượt xem</h4>
                    </Views>
                    <Info>
                        <span className="number">20</span>
                        <h4>người dùng</h4>
                    </Info>
                    <Info>
                        <span className="number">84</span>
                        <h4>lượt thích</h4>
                    </Info>
                    <Info>
                        <span className="number">2</span>
                        <h4>liên kết</h4>
                    </Info>
                    <Avatars className={click ? '': 'd-none'}>
                        <div className='img-reply'>
                            <a href="/#"><img src="/images/40.png" alt=""/><span className='post-count' title='Jon Snow'>3</span></a>
                            <a href="/#"><img src="/images/40.png" alt=""/><span className='post-count' title='Jon Snow'>3</span></a>
                            <a href="/#"><img src="/images/40.png" alt=""/></a>
                        </div>
                    </Avatars>
                </ul>
                <DropdownButton onClick={handleClick}><i class={click ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i></DropdownButton>
            </TopicMapSection>

            <AvatarsLink click={click}/>

        </TopicMapContainer>
    );
}

const TopicMapContainer = styled.div`
    .d-none{
        display: none;
    }
`

const TopicMapSection = styled.section`
    background: #f8f8f8;
    display: flex;

    ul{
        padding: 0;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    li{
        list-style: none;
        padding: 7px 10px;
    }
    h4{
        font-size: 13px;
        font-weight: 500;
        color: #919191;
    }
    .img{
        display: flex;
        a{
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 4px;
            position: relative;
            img{
                width: 20px;
                height: 20px;
                position: absolute;
            }
        }
        span{
            font-size: 15px;
        }
    }
    .number{
        line-height: 1.2;
        font-weight: 500;
        color: #646464;
        font-size: 20px;
    }

`
const DateCreate = styled.li`

`

const LastAnswer = styled.li`
    a{
        text-decoration: none;
        color: #ff007a;
    }
`

const Replies = styled.li`
    text-align: center;
`
const Views = styled.li`
    text-align: center;
    .number{
        color: #9b764f;
    }
`
const Info = styled.li`
    text-align: center;
`

const DropdownButton = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;

    :hover{
        background: #e9e9e9;
    }
`

const Avatars = styled.li`
    .img-reply{
        display: flex;
        a{
            display: block;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            
            margin-right: 4px;
            position: relative;

            img{
                width: 32px;
                height: 32px;
                border-radius: 50%;
                position: absolute;
            }
            span{
                position: absolute;
                background: #222;
                padding: 1px 2px;
                right: 0;
                border-radius: 50%;
                opacity: 0.8;
                text-decoration: none;
                color: #fff;
                height: 12px;
                width: 12px;
                line-height: 0.8;
                font-size: 10px;
            }
        }
    }

    .d-none{
        display: none;
    }
`

export default TopicMap;