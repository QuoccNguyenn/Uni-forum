import styled from "styled-components";

function PostLink() {
    return(
        <PostLinkSection>
            <ul>
                <li>
                    <a href='/#'><i class="fas fa-link"></i> Preliminary Voting </a><span>14</span>
                </li>
                <li>
                    <a href='/#'><i class="fas fa-link"></i> Preliminary Voting </a><span>14</span>
                </li>
                <li>
                    <a href='/#'><i class="fas fa-link"></i> Preliminary Voting </a><span>14</span>
                </li>
                <li>
                    <a href='/#'><i class="fas fa-link"></i> Preliminary Voting </a><span>14</span>
                </li>
                <li>
                    <a href='/#'><i class="fas fa-link"></i> Preliminary Voting </a><span>14</span>
                </li>
            </ul>
        </PostLinkSection>
    );
}

const PostLinkSection = styled.div`
    margin-top: 1em;
    padding-top: 1em;

    border-top: 1px solid #e9e9e9;
 
    ul{
        padding: 0;
    }
    li{
        list-style: none;   
    }
    a{
        color: #bdbdbd;
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
    }
    span{
        font-weight: normal;
        background-color: #e9e9e9;
        top: -1px;
        color: #919191;
        position: relative;
        border: none;
        border-radius: 10px;
        font-size: 10px;
        padding: 3px;
        text-align: center;
    }
`

export default PostLink;