import React from 'react';
import styled from 'styled-components';

const TitleBox=(props)=>{
    const{nameId,content}=props;

    return(
        <BoxContent id={`${nameId}`}>
            <a href={`#${nameId}`}> {content}</a>
        </BoxContent>
    );
}

const BoxContent = styled.h2`
    font-family:Arial, sans-serif;
    margin-top: 0;
    margin-bottom: 0.5rem;

    a{
        color:#f0077a;
        font-size:22px;
        font-weight:bold;
        text-decoration: none;
    }
`

export default TitleBox