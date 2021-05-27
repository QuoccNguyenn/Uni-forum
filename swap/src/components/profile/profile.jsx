import React from 'react';
import styled from 'styled-components';
import InfoPanel from './component/infor_panel/InforPanel';
import TopProfile from './component/top/topProfile';


const Profile = () => {
    return (
        <BoxProfile>
            <TopProfile></TopProfile>

            <InfoPanel></InfoPanel>

            

        </BoxProfile>
    );
}


const BoxProfile = styled.section`
    width:100%;
    height:100vh;
`


export default Profile