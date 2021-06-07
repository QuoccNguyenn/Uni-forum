import React from 'react';
import styled from 'styled-components';
import TitleBox from '../../components/TitleBox/TitleBox';


const Privacy = () => {
    return (
        <BoxContent>

            <TitleBox nameId={`collect`} content={`What information do we collect?`}></TitleBox>
            <p>We collect information from you when you register on our site and gather data when you participate in the forum by reading, writing, and evaluating the content shared here.</p>
            <p>When registering on our site, you may be asked to enter your name and e-mail address. You may, however, visit our site without registering. Your e-mail address will be verified
                by an email containing a unique link. If that link is visited, we know that you control the e-mail address.</p>
            <p>When registered and posting, we record the IP address that the post originated from. We also may retain server logs which include the IP address of every request to our server.</p>

            <TitleBox nameId={`use`} content={`What do we use your information for?`}></TitleBox>
            <p>Any of the information we collect from you may be used in one of the following ways:</p>
            <ContentUl>
                <li>To personalize your experience — your information helps us to better respond to your individual needs.</li>
                <li>To improve our site — we continually strive to improve our site offerings based on the information and feedback we receive from you.</li>
                <li>To improve customer service — your information helps us to more effectively respond to your customer service requests and support needs.</li>
                <li>To send periodic emails — The email address you provide may be used to send you information, notifications that you request about changes to
                    topics or in response to your user name, respond to inquiries, and/or other requests or questions.</li>
            </ContentUl>

            <TitleBox nameId={`protect`} content={`How do we protect your information?`}></TitleBox>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>

            <TitleBox nameId={`data-retention`} content={`What is your data retention policy?`}></TitleBox>
            <p>We will make a good faith effort to:</p>
            <ContentUl>
                <li>Retain server logs containing the IP address of all requests to this server no more than 90 days.</li>
                <li>Retain the IP addresses associated with registered users and their posts no more than 5 years.</li>
            </ContentUl>

            <TitleBox nameId={`data-retention`} content={`What is your data retention policy?`}></TitleBox>
            <p>Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow). These cookies enable the site to recognize your browser and,
                 if you have a registered account, associate it with your registered account.</p>
            <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                 We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.</p>

            <TitleBox nameId={`disclose`} content={`Do we disclose any information to outside parties?`}></TitleBox>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our site, conducting our business, or servicing you, so long as those parties
            agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally
                 identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>

            <TitleBox nameId={`third-party`} content={`Third party links`}></TitleBox>
            <p>Occasionally, at our discretion, we may include or offer third party products or services on our site. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities
                     of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

            <TitleBox nameId={`coppa`} content={`Children’s Online Privacy Protection Act Compliance`}></TitleBox>
            <p>Our site, products and services are all directed to people who are at least 13 years old or older. If this server is in the USA, and you are under the age of 13, per the requirements of COPPA
                         (<a href="https://en.wikipedia.org/wiki/Children%27s_Online_Privacy_Protection_Act">Children’s Online Privacy Protection Act</a>), do not use this site.</p>

            <TitleBox nameId={`online`} content={`Online Privacy Policy Only`}></TitleBox>
            <p>This online privacy policy applies only to information collected through our site and not to information collected offline.</p>

            <TitleBox nameId={`consent`} content={`Your Consent`}></TitleBox>
            <p>By using our site, you consent to our web site privacy policy.</p>

            <TitleBox nameId={`changes`} content={`Changes to our Privacy Policy`}></TitleBox>
            <p>If we decide to change our privacy policy, we will post those changes on this page.
            This document is CC-BY-SA. It was last updated May 31, 2013.</p>

        </BoxContent>
    );
}

const BoxContent = styled.div`
    padding-top:30px;
    max-width:700px;
    padding:0 .5rem;

`

const ContentUl = styled.ul`

`

export default Privacy