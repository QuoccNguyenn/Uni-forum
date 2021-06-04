import { useState } from "react";
import styled from "styled-components";
import AnswersBox from "./AnswersBox";

function PostFooter() {

    const [click,setClick] = useState(false);
    const [emoClick,setEmoClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const handleEmoClick = () => {
        setEmoClick(!emoClick);
    }
    return(
        <PosMenuOutter>
            <PostMenu>
                <AnsButton onClick={handleClick}><span>1 Trả lời</span><i class={click ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i></AnsButton>
                <div>
                    <DoubleButton>
                        <span href='/'>17</span>
                        <span href='/posts' className='emoji' onClick={handleEmoClick}><i class={emoClick ? "fas fa-heart" : "far fa-heart"}></i></span>
                    </DoubleButton>
                    <ShareButton>
                        <span href='/'><i class="fas fa-link"></i></span>
                    </ShareButton>
                </div>
            </PostMenu>
            <AnswersBox click={click} handleClick={handleClick}/>
        </PosMenuOutter>
    );
}

const PosMenuOutter = styled.div`
    .d-none{
        display: none;
    }
`

const PostMenu = styled.section`
    margin: 15px 0;
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        justify-content: flex-end;
    }
`
const DoubleButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    span{
        padding: 8px 10px;
        text-decoration: none;
        color: #bdbdbd;
        cursor: pointer;
    }

    :hover{
        background: #e9e9e9;
    }
        
    span:hover{
        color: #000;
    }

    .emoji{
        .fas{
            color: #ff007a;
        }
    }
    .emoji:hover{
        color: #ff007a;
    }
`
const ShareButton = styled.div`
    span{
        padding: 8px 10px;
        text-decoration: none;
        color: #bdbdbd;
    }

    :hover{
        background: #e9e9e9;
        span{
            color: #000;
        }
    }
`

const AnsButton = styled.div`
    color: #919191;
    font-size: 16px;
    padding: 10px 7px;

    align-items: center;
    cursor: pointer;

    i{
        padding: 0 3px;
    }
    :hover{
        color: #000;
        background: #e9e9e9;
    }
`

export default PostFooter;