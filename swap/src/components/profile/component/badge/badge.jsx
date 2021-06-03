import React from 'react';
import styled from 'styled-components';

const BadgeCard = (props) => {
    const { data } = props;
    return (
        <Badges>
            {data
                ? data.map((item, idx) => (
                    <BoxContent key={idx}>
                        <ImgBadge>
                            <a href="#/">
                                <i class={`${item.iconBadges}`}></i>
                            </a>
                        </ImgBadge>

                        <ContentBadge>
                            <h3>{item.nameBadges}</h3>
                            <p>{item.summaryBadges}</p>
                        </ContentBadge>
                    </BoxContent>
                ))
                : <BoxContent>
                    <ImgBadge>
                        <a href="#/">
                            <i class="fas fa-certificate"></i>
                        </a>
                    </ImgBadge>

                    <ContentBadge>
                        <h3>Thành viên mới của tháng</h3>
                        <p>Outstanding contributions in their first month</p>
                    </ContentBadge>
                </BoxContent>
            }
        </Badges>
    );
}

const Badges = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const BoxContent = styled.div`
    display: flex;
    min-height: 128px;
    height: 100%;
    padding: 1rem 0;
    justify-content:center;
    align-items:center;
    width:32%;
    margin-bottom: 2vh;
    
    position: relative;
    background-color: #f8f8f8;
    border: 1px solid #e9e9e9;
    
    &:hover{
        box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
    }
`

const ImgBadge = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height:100%;
    a{
        i{
            font-size:53px;
            padding:0 2rem;
            color:#cd7f32 !important;
        }
    }
`

const ContentBadge = styled.div`
    h3{
        font-size:19px;
    }

    p{
        font-size:15px;
    }
`

export default BadgeCard