import React from 'react';
import styled from 'styled-components';

const UserDetail = (props) => {
    const { data } = props;

    return (
        <BoxContent>
            {data
            ?
            data.map((item,idx)=>(
                <UserContent>
                <td>
                    <NameUser>
                        <div className="imgUser">
                            <img src={item.img} alt="" />
                        </div>

                        <div className="nameUser">
                            <span>{item.Nick_name}</span>
                            {item.name}
                    </div>
                    </NameUser>
                </td>

                <td>{item.Received}</td>
                <td>{item.Given}</td>
                <td>{item.Theme_create}</td>
                <td>{item.Reply_posted}</td>
                <td>{item.Threads_viewed}</td>
                <td>{item.Posts_read}</td>
                <td>{item.Date_visited}</td>
            </UserContent>
            ))
            :"không có mục hiển thị"}
        </BoxContent>
    );
}

const BoxContent = styled.tbody`
   
`

const UserContent = styled.tr`
    td{
        padding:.5rem;
        text-align: left;
        color:#919191;
        font-size:22px;
    }

    border-bottom: 1px solid #e9e9e9;
`

const NameUser = styled.div`
    display:flex;
    flex-direction:row;
    width:250px;

    .imgUser{
        img{    
            width:45px;
            border-radius:50%;
        }
    }

    .nameUser{
        padding-left: 15px;
        font-size:15px;
        display:flex;
        flex-wrap: wrap;
        span{
            font-weight: bold;
            padding-right:5px;
            color:black;
        }
    }

`


export default UserDetail