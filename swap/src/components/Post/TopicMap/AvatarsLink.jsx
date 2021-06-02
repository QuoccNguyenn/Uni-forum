import styled from "styled-components";

function AvatarsLink(props) {
    return(
        <Section className={props.click ? 'd-none' : ''}>
            <Avatars>
                <h4>Poster thường xuyên</h4>
                <div>
                    <a href="/#"><img src="/images/avt.png" alt=""/><span className='post-count' title='Jon Snow'>3</span></a>
                    <a href="/#"><img src="/images/avt-1.png" alt=""/><span className='post-count' title='Jon Snow'>3</span></a>
                    <a href="/#"><img src="/images/avt-2.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-3.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-4.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-5.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-6.jpeg" alt=""/></a>
                    <a href="/#"><img src="/images/avt-7.jpeg" alt=""/></a>
                    <a href="/#"><img src="/images/avt.png" alt=""/><span className='post-count' title='Jon Snow'>3</span></a>
                    <a href="/#"><img src="/images/avt-1.png" alt=""/><span className='post-count' title='Jon Snow'>3</span></a>
                    <a href="/#"><img src="/images/avt-2.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-3.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-4.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-5.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-6.jpeg" alt=""/></a>
                    <a href="/#"><img src="/images/avt-7.jpeg" alt=""/></a>
                    <a href="/#"><img src="/images/avt.png" alt=""/><span className='post-count' title='Jon Snow'>3</span></a>
                    <a href="/#"><img src="/images/avt-1.png" alt=""/><span className='post-count' title='Jon Snow'>3</span></a>
                    <a href="/#"><img src="/images/avt-2.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-3.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-4.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-5.png" alt=""/></a>
                    <a href="/#"><img src="/images/avt-6.jpeg" alt=""/></a>
                    <a href="/#"><img src="/images/avt-7.jpeg" alt=""/></a>
                </div>
            </Avatars>
            <Links>
                <h4>Liên kết phổ biến</h4>
                <table>
                    <tr>
                        <td><span>143</span></td>
                        <td>
                            <a href='/#' className='pink-letter'>Snapshot</a><span className='domain'>snapshot.org</span>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td>
                            <a href='/#' className='pink-letter'>https://www.opensecrets.org/industries/</a>
                        </td>
                    </tr>
                </table>
            </Links>
        </Section>
    );
}

const Section = styled.section`
    background: #f8f8f8;
    padding: 7px 10px;

    border: 1.4px solid #e9e9e9;
`
const Avatars = styled.section`

    h4{
        font-size: 14px;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        a{
            display: block;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            
            margin-top: 4px;
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

`
const Links = styled.section`

    h4{
        font-size: 14px;
    }
    td{
        margin: 5px 6px 0;
    }
    .pink-letter {
        color: #ff007a;
        text-decoration: none;
        cursor: pointer;
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

    .domain{
        background: none;
        top: unset;
    }
`

export default AvatarsLink;