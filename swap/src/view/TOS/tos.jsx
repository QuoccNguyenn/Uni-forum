import React from 'react';
import styled from 'styled-components';
import TitleBox from '../../components/TitleBox/TitleBox';


const TOS = () => {
    return (
        <BoxContent>
            <p>These terms govern use of the Internet forum at <a href="/">http://gov.uniswap.org</a>. To use the forum, you must agree to these terms with Uniswap,
             the company that runs the forum.</p>
            <p>The company may offer other products and services, under different terms. These terms apply only to use of the forum.</p>
            <p>Skip to:</p>

            <ContentUl>
                <li><a href="#--important-terms">Important Terms</a></li>
                <li><a href="#heading--permission">Your Permission to Use the Forum</a></li>
                <li><a href="#heading--conditions">Conditions for Use of the Forum</a></li>
                <li><a href="#heading--acceptable-use">Acceptable Use</a></li>
                <li><a href="#heading--enforcement">Enforcement</a></li>
                <li><a href="#heading--your-account">Your Account</a></li>
                <li><a href="#heading--your-content">Your Content</a></li>
                <li><a href="#heading--responsibility">Your Responsibility</a></li>
                <li><a href="#heading--disclaimers">Disclaimers</a></li>
                <li><a href="#heading--liability">Limits on Liability</a></li>
                <li><a href="#heading--feedback">Feedback</a></li>
                <li><a href="#heading--termination">Termination</a></li>
                <li><a href="#heading--disputes">Disputes</a></li>
                <li><a href="#heading--general">General Terms</a></li>
                <li><a href="#heading--contact">Contact</a></li>
                <li><a href="#heading--changes">Changes</a></li>
            </ContentUl>

            <TitleBox nameId={`heading--important-terms`} content={`Important Terms`}></TitleBox>
            <strong>
                These terms include a number of important provisions that affect your rights and responsibilities, such as the disclaimers in <a href="#heading--disclaimers">Disclaimers</a>,
                limits on the company’s liability to you in <a href="#heading--liability">Limits on Liability</a>, your agreement to cover the company for damages caused by your misuse of the forum in
               <a href="#heading--responsibility"> Responsibility for Your Use</a>, and an agreement to arbitrate disputes in <a href="#heading--disputes">Disputes</a>.
            </strong>

            <TitleBox nameId={`heading--permission`} content={`Your Permission to Use the Forum`}></TitleBox>
            <p>Subject to these terms, the company gives you permission to use the forum. Everyone needs to agree to these terms to use the forum.</p>

            <TitleBox nameId={`heading--conditions`} content={`Conditions for Use of the Forum`}></TitleBox>
            <p>Your permission to use the forum is subject to the following conditions:</p>
            <ContentOL>
                <li>You must be at least thirteen years old.</li>
                <li>You may no longer use the forum if the company contacts you directly to say that you may not.</li>
                <li>You must use the forum in accordance with <a href="#heading--acceptable-use">Acceptable Use</a> and <a href="#heading--content-standards">Content Standards</a>.</li>   
            </ContentOL>

            <TitleBox nameId={`heading--acceptable-use`} content={`Acceptable Use`}></TitleBox>
            <ContentOL>
                <li>You may not break the law using the forum.</li>

                <li>You may not use or try to use another’s account on the forum without their specific permission.</li>

                <li>You may not buy, sell, or otherwise trade in user names or other unique identifiers on the forum.</li>

                <li>You may not send advertisements, chain letters, or other solicitations through the forum, or use 
                    the forum to gather addresses or other personal data for commercial mailing lists or databases.</li>

                <li>You may not automate access to the forum, or monitor the forum, such as with a web crawler, browser 
                    plug-in or add-on, or other computer program that is not a web browser. You may crawl the forum to index 
                    it for a publicly available search engine, if you run one.</li>

                <li>You may not use the forum to send e-mail to distribution lists, newsgroups, or group mail aliases.</li>

                <li>You may not falsely imply that you’re affiliated with or endorsed by the company.</li>

                <li>You may not hyperlink to images or other non-hypertext content on the forum on other webpages.</li>

                <li>You may not remove any marks showing proprietary ownership from materials you download from the forum.</li>

                <li>You may not show any part of the forum on other websites with .</li>

                <li>You may not disable, avoid, or circumvent any security or access restrictions of the forum.</li>

                <li>You may not strain infrastructure of the forum with an unreasonable volume of requests, or 
                    requests designed to impose an unreasonable load on information systems underlying the forum.</li>

                <li>You may not impersonate others through the forum.</li>

                <li>You may not encourage or help anyone in violation of these terms.</li>

            </ContentOL>

            <TitleBox nameId={`heading--content-standards`} content={`Content Standards`}></TitleBox>
            <ContentOL>
                <li>You may not submit content to the forum that is illegal, offensive, or otherwise harmful to others. This includes content that is harassing, inappropriate, or abusive.</li>
                <li>You may not submit content to the forum that violates the law, infringes anyone’s intellectual property rights, violates anyone’s privacy, or breaches agreements you have with others.</li>
                <li>You may not submit content to the forum containing malicious computer code, such as computer viruses or spyware.</li>
                <li>You may not submit content to the forum as a mere placeholder, to hold a particular address, user name, or other unique identifier.</li>
                <li>You may not use the forum to disclose information that you don’t have the right to disclose, like others’ confidential or personal information.</li>
            </ContentOL>

            <TitleBox nameId={`heading--enforcement`} content={`Enforcement`}></TitleBox>
            <p>The company may investigate and prosecute violations of these terms to the fullest legal extent. The company may notify and cooperate with law enforcement 
                authorities in prosecuting violations of the law and these terms.</p>
            <p>The company reserves the right to change, redact, and delete content on the forum for any reason. If you believe someone has submitted content to the forum in violation of these terms, <a href="#heading--contact">contact us immediately</a></p>

            <TitleBox nameId={`heading--your-account`} content={`Your Account`}></TitleBox>
            <p>You must create and log into an account to use some features of the forum.</p>
            <p>To create an account, you must provide some information about yourself. If you create an account, you agree to provide, at a minimum, a valid e-mail address, and to keep that address up-to-date. You may close your account at any time by e-mailing 
                <a href="mailto:ashleigh@uniswap.org">ashleigh@uniswap.org</a>
            </p>
            <p>You agree to be responsible for all action taken using your account, whether authorized by you or not, until you either close your account or notify the company that your account has been compromised. You agree to notify the company immediately 
                if you suspect your account has been compromised. You agree to select a secure password for your account, and keep it secret.</p>
            <p>The company may restrict, suspend, or close your account on the forum according to its policy for handling copyright-related takedown requests, or if the company reasonably believes that you’ve broken any rule in these terms.</p>

            <TitleBox nameId={`heading--your-content`} content={`Your Content`}></TitleBox>
            <p>Nothing in these terms gives the company any ownership rights in intellectual property that you share with the forum, such as your account information, posts, or other content you submit to the forum. Nothing in these terms gives 
                you any ownership rights in the company’s intellectual property, either.</p>
            <p>Between you and the company, you remain solely responsible for content you submit to the forum. You agree not to wrongly imply that content you submit to the forum is sponsored or approved by the company. These terms do not obligate 
                the company to store, maintain, or provide copies of content you submit, and to change it, according to these terms.</p>
            <p>Content you submit to the forum belongs to you, and you decide what permission to give others for it. But at a minimum, you license the company to provide content that you submit to the forum to other users of the forum. That special 
                license allows the company to copy, publish, and analyze content you submit to the forum.</p>
            <p>When content you submit is removed from the forum, whether by you or by the company, the company’s special license ends when the last copy disappears from the company’s backups, caches, and other systems. Other licenses you apply to
                 content you submit, such as <a href="https://creativecommons.org/">Creative Commons</a> licenses, may continue after your content is removed. Those licenses may give others, or the company itself, the right to share your content through the forum again.</p>
            <p>Others who receive content you submit to the forum may violate the terms on which you license your content. You agree that the company will not be liable to you for those violations or their consequences.</p>

            <TitleBox nameId={`heading--responsibility`} content={`Your Responsibility`}></TitleBox>
            <p>You agree to indemnify the company from legal claims by others related to your breach of these terms, or breach of these terms by others using your account on the forum. Both you and the company agree to notify the other side of any legal 
                claims for which you might have to indemnify the company as soon as possible. If the company fails to notify you of a legal claim promptly, you won’t have to indemnify the company for damages that you could have defended against or mitigated with prompt notice.
                 You agree to allow the company to control investigation, defense, and settlement of legal claims for which you would have to indemnify the company, and to cooperate with those efforts. The company agrees not to agree to any settlement that admits fault for you 
                 or imposes obligations on you without your prior agreement.</p>
            
            <TitleBox nameId={`heading--disclaimers`} content={`Disclaimers`}></TitleBox>
            <p><strong>You accept all risk of using the forum and content on the forum. As far as the law allows, the company and its suppliers provide the forum as is, without any warranty whatsoever.</strong></p>
            <p>The forum may hyperlink to and integrate forums and services run by others. The company does not make any warranty about services run by others, or content they may provide. Use of services run by others may be governed by other terms between you and the one running service.</p>

            <TitleBox nameId={`heading--liability`} content={`Limits on Liability`}></TitleBox>
            <p><strong>Neither the company nor its suppliers will be liable to you for breach-of-contract damages their personnel could not have reasonably foreseen when you agreed to these terms.</strong></p>
            <p><strong>As far as the law allows, the total liability to you for claims of any kind that are related to the forum or content on the forum will be limited to $50.</strong></p>

            <TitleBox nameId={`heading--feedback`} content={`Feedback`}></TitleBox>
            <p>The company welcomes your feedback and suggestions for the forum. See the Contact section below for ways to get in touch with us.</p>
            <p>You agree that the company will be free to act on feedback and suggestions you provide, and that the company won’t have to notify you that your feedback was used, get your permission to use it, or pay you. You agree not to submit feedback or suggestions that you believe might be confidential or proprietary, to you or others.</p>

            <TitleBox nameId={`heading--termination`} content={`Termination`}></TitleBox>
            <p>Either you or the company may end the agreement written out in these terms at any time. When our agreement ends, your permission to use the forum also ends.</p>
            <p>The following provisions survive the end of our agreement: <a href="#heading--your-content">Your Content</a>,<a href="#heading--feedback"> Feedback</a>,<a href="#heading--responsibility"> Your Responsibility</a>, <a href="#heading--disclaimers">Disclaimers</a>, <a href="#heading--liability">Limits on Liability</a>, and <a href="#heading--general">General Terms</a>.</p>

            <TitleBox nameId={`heading--disputes`} content={`Disputes`}></TitleBox>
            <p>New York will govern any dispute related to these terms or your use of the forum.</p>
            <p>You and the company agree to seek injunctions related to these terms only in state or federal court in New York . Neither you nor the company will object to jurisdiction, forum, or venue in those courts.</p>
            <p><strong>Other than to seek an injunction or for claims under the Computer Fraud and Abuse Act, you and the company will resolve any dispute by binding American Arbitration Association arbitration. Arbitration will follow the AAA’s Commercial Arbitration Rules and Supplementary Procedures for Consumer Related Disputes. Arbitration will happen in New York . 
                You will settle any dispute as an individual, and not as part of a class action or other representative proceeding, whether as the plaintiff or a class member. No arbitrator will consolidate any dispute with any other arbitration without the company’s permission.</strong></p>
            <p>Any arbitration award will include costs of the arbitration, reasonable attorneys’ fees, and reasonable costs for witnesses. You and the company may enter arbitration awards in any court with jurisdiction.</p>

            <TitleBox nameId={`heading--general`} content={`General Terms`}></TitleBox>
            <p>If a provision of these terms is unenforceable as written, but could be changed to make it enforceable, that provision should be modified to the minimum extent necessary to make it enforceable. Otherwise, that provision should be removed.</p>
            <p>You may not assign your agreement with the company. The company may assign your agreement to any affiliate of the company, any other company that obtains control of the company, or any other company that buys assets of the company related to 
                the forum. Any attempted assignment against these terms has no legal effect.</p>
            <p>Neither the exercise of any right under this Agreement, nor waiver of any breach of this Agreement, waives any other breach of this Agreement.</p>
            <p>These terms embody all the terms of agreement between you and the company about use of the forum. These terms entirely replace any other agreements 
                about your use of the forum, written or not.</p>

            <TitleBox nameId={`heading--contact`} content={`Contact`}></TitleBox>
            <p>You may notify the company under these terms, and send questions to the company,at <a href="mailto:ashleigh@uniswap.org">ashleigh@uniswap.org</a>  .</p>
            <p>The company may notify you under these terms using the e-mail address you provide for your account on the forum, or by posting a message to the homepage of the forum or your account page.</p>

            <TitleBox nameId={`heading--changes`} content={`Changes`}></TitleBox>
            <p>The company last updated these terms on July 12, 2018, and may update these terms again. The company will post all updates to the forum. For updates that contain substantial changes, the company agrees to e-mail you, if you’ve created an account
                 and provided a valid e-mail address. The company may also announce updates with special messages or alerts on the forum.</p>
            <p>Once you get notice of an update to these terms, you must agree to the new terms in order to keep using the forum.</p>

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

const ContentOL = styled.ol`

`

export default TOS