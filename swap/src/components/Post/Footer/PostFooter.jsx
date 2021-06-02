import { useState } from "react";
import styled from "styled-components";
import AnswersBox from "./AnswersBox";

function PostFooter() {

    const [click,setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    return(
        <div>
            <PostMenu>
                <AnsButton onClick={handleClick}><span>1 Trả lời</span><i class={click ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i></AnsButton>
                <div>
                    <DoubleButton>
                        <a href='/#'>17</a>
                        <a href='/#' className='emoji'><i class="far fa-heart"></i></a>
                    </DoubleButton>
                    <ShareButton>
                        <a href='/#'><i class="fas fa-link"></i></a>
                    </ShareButton>
                </div>
            </PostMenu>
            <AnswersBox/>
        </div>
    );
}

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

    a{
        padding: 8px 10px;
        text-decoration: none;
        color: #bdbdbd;
    }

    :hover{
        background: #e9e9e9;
    }
        
    a:hover{
        color: #000;
    }

    .emoji:hover{
        color: #ff007a;
    }
`
const ShareButton = styled.div`
    a{
        padding: 8px 10px;
        text-decoration: none;
        color: #bdbdbd;
    }

    :hover{
        background: #e9e9e9;
        a{
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