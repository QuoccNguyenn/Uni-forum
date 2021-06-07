import React from 'react';
import styled from 'styled-components';


const ItemBox = (props) => {
    const { data,like } = props;
    return (
        <div>
            { data ?data.map((item, idx) => (
                <BoxContent>
                    <Infor key={idx}>
                        <a href="/profile/" className="imgLink"><img src={`${item.img}`} alt="#" /></a>

                        <a href="/" className="titleLink">
                            <a href="/">{item.title}</a>
                            <a href="/" className="nameCata">
                                <span className="dot" style={{ background: `${item.colorDot}` }}></span>
                                <span className="text">{item.nameCata}</span>
                            </a>
                        </a>
                        <span className="Date">{item.date}</span>
                    </Infor>
                    <TextContent>{item.content}</TextContent>
                    <BoxLike className={like ?"active":""}>
                    <i class="fas fa-heart"></i> <img src="https://avatars.discourse-cdn.com/v4/letter/m/c68b51/240.png" alt="" />
                    </BoxLike>
                </BoxContent>
            )):<TextErr>Không tìm thấy mục nào</TextErr>
            
            }
        </div>
    )
}

const BoxContent = styled.div`
    width:100%;
    padding:13px 0;

    border-bottom: 1px solid #e9e9e9;
`

const Infor = styled.div`
    width:100%;
    display: flex;
    padding-bottom:15px;

    .imgLink{
        img{
            max-width:45px;
            border-radius:50%;
        }
        padding-right:10px
    }


    .titleLink{
        width:85%;
        display: flex;
        flex-direction:column;
        text-decoration: none;

        @media screen and (max-width:600px){
            width:70%;
        }

        @media screen and (max-width:415px){
            width:50%;
        }
        
        a{
            color:#ff007a;
            font-size:15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            &:hover{
            text-decoration: none;
            }   
        }

        .nameCata{
            display: inline-flex;
            align-items: center;
            span.dot{
                flex: 0 0 auto;
                width: 9px;
                height: 9px;
                margin-right: 5px;
                display: inline-block; 
            }

            span.text{
                color:#646464;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size:12px;
            }
        }
    }

    .Date{
        font-size:11px;
        color:#919191;   
    }
`

const TextContent = styled.div`

`

const BoxLike = styled.div`
    display: none;
     
    &.active{
        display:flex;
        align-items:center;

        i{
            padding-right:5px;
            color:#ff007a;
        }

        img{
            max-width:20px;
            border-radius:50%;
        }
    }
`

const TextErr = styled.div`
    width:100%;
    padding:13px;
    background:#ffd9eb;
`

export default ItemBox