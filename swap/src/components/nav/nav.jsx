import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {  Modal} from 'reactstrap';
import Login from './component/login/login';
import useOnClickOutside from '../../hook/useclickoutside/useclickoutside';
import Singin from './component/login/singin';

const Nav = (props) => {

    const {
        className
      } = props;

    const [modal, setModal] = useState(false);
    const [modalDN, setModalDN] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleDN = () => setModalDN(!modalDN);

    const refSearch = useRef();
    const refbar = useRef();

    const [dotsearch, SetDotsearch] = useState(false)
    const [dotbar, SetDotbar] = useState(false);

    useOnClickOutside(refbar, () => SetDotbar(false));
    useOnClickOutside(refSearch, () => SetDotsearch(false));


    return (
        <BoxNav> 
            <div className="container">
                <ContainerNav>
                    <Logo><img src="images/logo.png" alt="" /></Logo>
                    <ContentNav>
                        <BoxBtn>
                            <Btn href="#" onClick={toggle}>Đăng ký</Btn>
                            <Modal isOpen={modal} toggle={toggle} className={className}>
                               
                                <Login></Login>
                            </Modal>

                            <Btn href="#" onClick={toggleDN}>Đăng Nhập</Btn>

                            <Modal isOpen={modalDN} toggle={toggleDN} className={className}>
                               
                               <Singin></Singin>
                           </Modal>
                        </BoxBtn>

                        <BoxIcon>
                            <Icons className="bar" onClick={() => { SetDotsearch(true)}}><i class="fas fa-search"></i>
                                <BarChild ref={refSearch} onClick={() => { SetDotsearch(true)}} className={dotsearch ? "active" : ""}>
                                    <GroupInput>
                                        <input type="text" placeholder="tìm kiếm chủ đề, bài viết, tài khoản hoặc các danh mục" />
                                    </GroupInput>
                                </BarChild>
                            </Icons>

                            <Icons className="bar" onClick={() => { SetDotbar(true) }}><i class="fas fa-bars"></i>
                                <BarChild ref = {refbar}  onClick={() => { SetDotbar(true) }} className={dotbar ? "active" : ""}>
                                    <ChildUl className="box_link">
                                        <li className="link">Mới Nhất</li>
                                        <li className="link">Top</li>
                                        <li className="link">Huy Hiệu</li>
                                        <li className="link">Người dùng</li>
                                        <li className="link">Nhóm</li>
                                    </ChildUl>

                                    <div className="category-links">
                                        <div className="title">
                                            <a href="/#">Danh Mục</a>
                                            <ChildUl>
                                                <li className="cata_link">
                                                    <a href="/#" className="nameLink">
                                                        <span className="dot" style={{ background: '#652D90' }}></span>
                                                        <span className="text">Uncategorized</span>
                                                    </a>

                                                    <b className='topics-count'>131</b>
                                                </li>
                                                <li className="cata_link">
                                                    <a href="/#" className="nameLink">
                                                        <span className="dot" style={{ background: '#652D90' }}></span>
                                                        <span className="text">Uncategorized</span>
                                                    </a>

                                                    <b className='topics-count'>131</b>
                                                </li><li className="cata_link">
                                                    <a href="/#" className="nameLink">
                                                        <span className="dot" style={{ background: '#652D90' }}></span>
                                                        <span className="text">Uncategorized</span>
                                                    </a>

                                                    <b className='topics-count'>131</b>
                                                </li><li className="cata_link">
                                                    <a href="/#" className="nameLink">
                                                        <span className="dot" style={{ background: '#652D90' }}></span>
                                                        <span className="text">Uncategorized</span>
                                                    </a>

                                                    <b className='topics-count'>131</b>
                                                </li><li className="cata_link">
                                                    <a href="/#" className="nameLink">
                                                        <span className="dot" style={{ background: '#652D90' }}></span>
                                                        <span className="text">Uncategorized</span>
                                                    </a>

                                                    <b className='topics-count'>131</b>
                                                </li><li className="cata_link">
                                                    <a href="/#" className="nameLink">
                                                        <span className="dot" style={{ background: '#652D90' }}></span>
                                                        <span className="text">Uncategorized</span>
                                                    </a>

                                                    <b className='topics-count'>131</b>
                                                </li><li className="cata_link">
                                                    <a href="/#" className="nameLink">
                                                        <span className="dot" style={{ background: '#652D90' }}></span>
                                                        <span className="text">Uncategorized</span>
                                                    </a>

                                                    <b className='topics-count'>131</b>
                                                </li>
                                            </ChildUl>

                                            <ChildUl className="box_link">
                                                <li className="link">Giới Thiệu</li>
                                                <li className="link">FAQ</li>
                                                <li className="link">Phím Tắt</li>

                                            </ChildUl>
                                        </div>
                                    </div>

                                </BarChild>
                            </Icons>
                        </BoxIcon>
                    </ContentNav>
                </ContainerNav>
            </div>
        </BoxNav>
    )

}

// const Handelclick=()=>{
//      const[click,setclick]= useState(true);
//      console.log(click);
//      return (click);
// }

const BoxNav = styled.nav`
    with:100%;  
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 25%);
`
const ContainerNav = styled.div`
    with:100%;
    height:60px;
    display:flex;
`

const Logo = styled.div`
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:50%;
    }
`

const ContentNav = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;

`

const BoxBtn = styled.div`
    height:60px;
    display :flex;
    align-items:center;

`

const Btn = styled.a`
    padding: .3rem 1rem;
    background:black;
    color:white !important;
    font-size: 12px;
    text-decoration: none;
    margin:0 5px;
    background:#ff007a;

    &:hover{
        text-decoration: none;
        background:#bf005c;
    }


    
`

const BoxIcon = styled.div`
    display:flex;
`

const Icons = styled.div`
    

    &:hover{
        background:#e9e9e9;

        i{
            color:#919191;
        }
    }
    i{
        font-size:24px;
        color:#d0d0d0;

        padding:.5rem;
    }


    &.bar{
        position:relative;
    }
`
const BarChild = styled.div`
    position:absolute;
    min-width:300px;
    max-height:60vh;
    z-index:9999;
    right:-20px;
    border: 1px solid #e9e9e9;
    box-shadow: 0 12px 12px rgb(0 0 0 / 15%);
    background-color: white;
    display:none;
    flex-direction: column;
    padding: 10px;

    &.active{
        display:flex;
    }


    .category-links{
        .title{
            a{
                text-decoration: none;
                color: black;
                display:block;
                padding: 0 5px;
                &:hover{
                    background:#ffffa6;
                }
            }
        }
    }
`

const ChildUl = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &.box_link{
        border-bottom:1px solid #e9e9e9;
    }

    li{
        width: 50%;
        cursor: pointer;
        padding: 0 5px;

        &.link:hover{
            background:#ffffa6;
        }

        &.cata_link{
            background-color: transparent;
            display: inline-flex;
            align-items: center;
            box-sizing: border-box;

             a.nameLink{
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

            .topics-count{
                color: #646464;
                font-weight: normal;
                font-size:12px;
                float:left;
            }
        }
    }
`
const GroupInput = styled.div`
    width:500px;    
    input{
        box-sizing: border-box;
        width: calc(100% - 6px);
        height: 32px;
    }

    input[type=text]:focus {
        border-color: #ff007a;
        outline: 1px solid #ff007a;
        outline-offset: 0;
      }
`





export default Nav