import React from 'react';
import styled from 'styled-components';

const BoxAdmin = (props) => {
    const { title, data } = props;
    console.log(data);

    return (
        <BoxContent>
            <h3> <i class="fas fa-users"></i> {title}</h3>

            <ItemAdmin>
                {data ? data.map((item, idx)=>(
                    <AdminDetail key={idx}> 
                    <div className="imgAdmin">
                        <img src={`${item.img}`} alt="" />
                    </div>

                    <div className="inforAdmin">
                        <div className="nameLine">
                            <a href="/profile">{item.nickName}</a>
                            <span>{item.name}</span>
                        </div>

                        <div className="title">{item.position}</div>
                    </div>
                </AdminDetail>
            )) : "Chưa có Admin"}
            </ItemAdmin>

        </BoxContent>
    );
}

const BoxContent = styled.div`
    width:100%;
    margin-bottom:40px;

    h3{
        margin-bottom:15px;
        font-size:17px;
        font-weight:bold;
        
        i{
            padding-right:5px;
        }
    }
`

const ItemAdmin = styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
`

const AdminDetail = styled.div`
    width:333px;
    display:flex;
    margin-bottom:20px;

    .imgAdmin{
        img{
            max-width:45px;
            border-radius: 50%;
        }
        padding-right:10px;
    }

    .inforAdmin{
        display:block;

        .nameLine{
            a{
                text-decoration: none;
                    color: black;
                    padding-right: 5px;
                    font-size:15px;
            }

            span{
                font-size:17px;
            }
        }

        .title{
            font-size:15px;
            color:#919191;
        }
    }
`

export default BoxAdmin