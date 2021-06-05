import { Link } from "react-router-dom";
import styled from "styled-components";

function RelativePost() {

    const data = [
        {
            topic: 'Restoring UNI value after LP & airdrop sell-off',
            category: 'Temperature Check',
            color: 'orange',
            num: '17',
            colorNum: 'goldNum',
            views: '2.2k',
            colorViews:'goldViews',
            age: '1 Thg 3'
        },
        {
            topic: 'Should we continue the same UNI liquidity incentives for 2 more months?',
            category: 'Temperature Check',
            color: 'orange',
            num: '7',
            colorNum: '',
            views: '1.1k',
            colorViews:'bronzeViews',
            age: 'Thg 11 \'20'
        },
        {
            topic: 'Temperature check - [Should we increase the votingDelay?]',
            category: 'Temperature Check',
            color: 'orange',
            num: '8',
            colorNum: '',
            views: '776',
            colorViews:'',
            age: 'Thg 11 \'20'
        },
        {
            topic: 'Temperature Check - [Should the community delegate a working group to make recommendations on the liquidity mining program?]',
            category: 'Temperature Check',
            color: 'orange',
            num: '4',
            colorNum: '',
            views: '570',
            colorViews:'',
            age: 'Thg 11 \'20'
        }
    ]

    return(
        <Section>
            <h3>Chủ đề tương tự</h3>
            <div className='table-topics'>
                <table>
                    <thead>
                        <tr className='head-topic'>
                            <th className='head-category'>Chủ đề</th>
                            <th>Trả lời</th>
                            <th>Lượt xem</th>
                            <th>Hoạt động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='main-link'>
                                <span className='topic-name'>
                                    <Link to='/posts'>Temperature Check - [Liquidity mining continuation budget]</Link>
                                </span>
                                <div className='link-topics'>
                                    <span className='box orange'/><span className='category-name'>Temperature Check</span>
                                </div>
                            </td>
                            <td className='num'>
                                <button>
                                    <span className='number' arial-label='Chủ đề này có 0 trả lời'>0</span>
                                </button>
                            </td>
                            <td className='num views'>
                                <span tltle='Chủ đề này đã được xem 367 lần'>367</span>
                            </td>
                            <td className='num age'>
                                <a href="/posts">
                                    <span className='realative-date'>Thg 11 '20</span>
                                </a>
                            </td>
                        </tr>
                        {
                            data.map(item => (
                                <tr className='content'>
                                    <td className='main-link'>
                                        <span className='topic-name'>
                                            <Link to='/posts'>{item.topic}</Link>
                                        </span>
                                        <div className='link-topics'>
                                            <span className='box orange'/><span className='category-name'><Link to='/latest'>{item.category}</Link></span>
                                        </div>
                                    </td>
                                    <td className='num'>
                                        <button>
                                            <span className={`number ${item.colorNum}`} arial-label={`Chủ đề này có ${item.num} trả lời`}>{item.num}</span>
                                        </button>
                                    </td>
                                    <td className='num views'>
                                        <span className={item.colorViews} tltle={`Chủ đề này đã được xem ${item.views} lần`}>{item.views}</span>
                                    </td>
                                    <td className='num age'>
                                        <a href="/posts">
                                            <span className='realative-date'>{item.age}</span>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <h3>
                Muốn đọc nữa? Xem qua các chủ đề khác trong 
                <span className='box-lower orange'/><span className='category-lower'><Link to='/latest'>Temperature Check</Link></span> 
                hoặc 
                <span className='newest-topics'> xem các chủ đề mới nhất</span>
            </h3>
        </Section>
    );
}

const Section = styled.section`
    margin-bottom: 50px;
    
    table{
        width: 100%;
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: 15px;
    }
    th{
        color: #919191;
        font-size: 15px;
        font-weight: 500;
        text-align: center;
    }
    tr{

        .num{
            text-align: center;
            color: #919191 !important;

            .goldNum{
                color: #fe7a15;
            }
            .goldViews{
                color: #cf7721;
            }
            .bronzeViews{
                color: #9b764f;
            }
        }
        .views{
            width: 90px;
        }
        .age{
            width: 90px;
        }
    }
    td{
        padding: 15px 5px 15px 10px;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    h3{
        font-size: 18px;
        font-weight: 700;
    }
    button{
        border: none;
        background: none;
        color: #919191;
        font-weight: 700;
    }

    .head-topic{
        border-bottom: 3px solid #e9e9e9;
    }

    .content{
        display: table-row;
        max-width: 90%;
        border-top: 1px solid #e9e9e9;
    }

    .head-category{
        text-align: left!important;
    }

    .main-link{
    }

    .topic-name{
        color: #919191;
        font-size: 18px;
        font-weight: 500;
    }
    .link-topics{
        .category-name{
            font-size: 13px;
        }
        
        .box{
            display: inline-flex;
            height: 10px;
            width: 10px;
            margin-right: 5px;
            align-items: center;
            justify-content: center;
        }

        .orange{
            background: #F7941D;
        }
    }

    .age{
        a{
            color: #919191;
        }
    }
    .newest-topics{
        color: #ff007a;
    }
     
    .category-lower{
        font-weight: 200;
    }
    .box-lower{
        display: inline-flex;
        height: 10px;
        width: 10px;
        margin-right: 5px;
        align-items: center;
        background: #F7941D;
        justify-content: center;
    }
`


export default RelativePost;