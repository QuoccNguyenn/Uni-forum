import React from 'react';
import styled from 'styled-components';


const GroupInput=(props) => {

    const{type,name,title} = props;
    return(
        <BoxInput>
            <input type={`${type}`}/>
            <label>{name}</label>
            <p>{title}</p>
        </BoxInput>
    );

}

const BoxInput = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top:10px;

    input{
        padding: 0.75em 0.77em;
        border-radius: 0.25em;
        min-width: 250px;
        box-shadow: none;
        margin-bottom: 0.25em;
        position: relative;
        box-sizing: border-box;
        min-height: 30px;
        color: black;
        background-color: white;
        border: 1px solid #919191;
        transition:all .5s;

        @media screen and (max-width:415px){
            width:300px;
        }

        @media screen and (max-width:350px){
            width:250px;
        }

        &:focus {
            outline: none;
            border: 1px solid #ff007a;
            box-shadow: 0 0 0 2px rgba(255,0,122, 0.25);   
        }
    }

    label{
        position: absolute;
        top: 23px;
        left: 23px;
        transition:all .5s;
    }

    input:focus ~ label{
        font-size:14px;
        top: -3px;
        left: 15px;
        background:white;
    }

    p{
        color:#919191;
    }
`


export default GroupInput
