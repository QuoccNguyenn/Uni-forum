import styled from "styled-components";

function PostInner() {
    return(
        <div>
            <Topic>
                <div>
                    <span>HarvardLawBFI</span>
                </div>
                <div className='options'>
                    <span>3 <i class="fas fa-pencil-alt"></i></span><span>10 giờ</span>
                </div>
            </Topic>
            <Content>
                <p>
                    Governments around the world are considering how they will regulate decentralized finance, and we need to defend the ecosystem and decentralized ideals. 
                    We should create and fund with 1-1.5M UNI a community-overseen organization that would finance existing and new political groups engaged in crypto 
                    policy/lobbying with the goals of 
                    1) educating policymakers to preempt regulatory, legal, political, and tax threats to decentralized finance; 
                    2) achieving regulatory clarity for decentralized finance and related activity; 
                    3) advancing laws that support decentralized finance and decentralized governance; and 
                    4) spurring other DeFi protocols’ governance communities to contribute to the effort (through this organization or their own).
                </p>
                <p>
                    In short, we propose to create a political grants committee (loosely modeled on the Uniswap Grants Program) with board members who 
                    are legal and policy experts, including lawyers from various leading DeFi projects. We propose a large amount of funding (between 
                    2-3x the existing Uniswap Grants Program) because effective lawyers, lobbyists, and organizers are very expensive. They are also 
                    often specialized in different specific legal areas and specific jurisdictions or branches of government, so hiring a team of specialists 
                    is necessary. Further, an infusion of capital—while less than 0.25% of the Uniswap treasury–will enable the DeFi space to counter the massive 
                    spending from traditional finance players.
                </p>
                <p>
                    The need for such an organization is urgent as governments around the world are awakening to decentralized finance and are rushing to regulate 
                    the projects without being properly educated on their benefits. Currently DeFi is not at the table—but on the menu.
                </p>
                <p>
                    New developments include reactionary tax, securities, and illicit finance proposals. These proposals are actively being considered in multiple 
                    countries and venues at the same time. This organization would help fund the education of policy makers to achieve more balanced legal frameworks 
                    around the world. It would be similar to a group of funders who founded the Media Democracy Fund in the early days of the Internet; it relied on 
                    experts to allocate funds across organizations advocating for a more decentralized and democratic internet.
                </p>
                <p>
                    <strong>The Snap Poll will be live for 2 days, from May 27th until May 29th at 7:00 PM EST. If the poll passes with a minimum of 25,000 UNI in support, this 
                    proposal will move forward to the consensus check phase.</strong>
                </p>
                <p>A link to our snapshot proposal: <a className='pink-letter' href='/#'>Snapshot</a><span>128</span></p>
            </Content>
        </div>
    );
}

const Topic = styled.div`
    display: flex;
    justify-content: space-between;

    .options{
        display: flex;
        span{
            padding: 8px 10px;
        }
    }
`

const Content = styled.div`
    padding-top: 15px;

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
export default PostInner;