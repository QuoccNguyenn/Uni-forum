import React from 'react';
import styled from 'styled-components';


const TitleForm = (props) => {
    const{title,img,slog} = props
    return (
        <BoxTitle>
            <h1>{title}</h1>
            <div className="img">
                <img src={`${img}`} alt="" />
            </div>
            <p>{slog}</p>
        </BoxTitle>
    );
}

const BoxTitle = styled.div`
    width:100%;
    height:20%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;

    h1{
            width: 40%;
            margin: 0;
            font-size: 30px;
    }

    .img{
        width: 50%;
        
        img{
            max-width:35px;
        }
    }

    p{
        width: 50%;
    }
`

export default TitleForm