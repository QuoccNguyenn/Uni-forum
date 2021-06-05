import React from 'react';
import styled from 'styled-components';


const TOS = () => {
    return (
        <BoxContent>
            <p>These terms govern use of the Internet forum at <a href="/">http://gov.uniswap.org</a>. To use the forum, you must agree to these terms with Uniswap,
             the company that runs the forum.</p>
            <p>The company may offer other products and services, under different terms. These terms apply only to use of the forum.</p>
            <p>Skip to:</p>

            <ContentUl>
                <li><a href="heading--important-terms">Important Terms</a></li>
                <li><a href="heading--permission">Your Permission to Use the Forum</a></li>
                <li><a href="heading--conditions">Conditions for Use of the Forum</a></li>
                <li><a href="heading--acceptable-use">Acceptable Use</a></li>
                <li><a href="heading--enforcement">Enforcement</a></li>
                <li><a href="heading--your-account">Your Account</a></li>
                <li><a href="heading--your-content">Your Content</a></li>
                <li><a href="heading--responsibility">Your Responsibility</a></li>
                <li><a href="heading--disclaimers">Disclaimers</a></li>
                <li><a href="heading--liability">Limits on Liability</a></li>
                <li><a href="heading--feedback">Feedback</a></li>
                <li><a href="heading--termination">Termination</a></li>
                <li><a href="heading--disputes">Disputes</a></li>
                <li><a href="heading--general">General Terms</a></li>
                <li><a href="heading--contact">Contact</a></li>
                <li><a href="heading--changes">Changes</a></li>
            </ContentUl>

            <strong>
                These terms include a number of important provisions that affect your rights and responsibilities, such as the disclaimers in <a href="#heading--disclaimers">Disclaimers</a>,
                limits on the company’s liability to you in <a href="#heading--liability">Limits on Liability</a>, your agreement to cover the company for damages caused by your misuse of the forum in
               <a href="#heading--responsibility"> Responsibility for Your Use</a>, and an agreement to arbitrate disputes in <a href="#heading--disputes">Disputes</a>.
            </strong>

        </BoxContent>
    );
}


const BoxContent = styled.div`
    padding-top:30px;
    max-width:700px;

`

const ContentUl = styled.ul`

`

export default TOS