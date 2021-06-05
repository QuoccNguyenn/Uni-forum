import React from 'react';
import styled from 'styled-components';
import TitleBox from '../../components/TitleBox/TitleBox';

const FAQ = () => {
    return (
        <BoxContent>

            <TitleBox nameId={'civilized'} content={'This is a Civilized Place for Public Discussion'}> </TitleBox>
            <p>Please treat this discussion forum with the same respect you would a public park. We, too, are a shared community resource — a place to share skills, knowledge and interests through ongoing conversation.</p>
            <p>These are not hard and fast rules, merely guidelines to aid the human judgment of our community and keep this a clean and well-lighted place for civilized public discourse.</p>

            <TitleBox nameId={`improve`} content={`Improve the Discussion`}></TitleBox>
            <p>Help us make this a great place for discussion by always working to improve the discussion in some way, however small. If you are not sure your post adds to the conversation, think over what you want to say and try again later.</p>
            <p>The topics discussed here matter to us, and we want you to act as if they matter to you, too. Be respectful of the topics and the people discussing them, even if you disagree with some of what is being said.</p>
            <p>One way to improve the discussion is by discovering ones that are already happening. Spend time browsing the topics here before replying or starting your own, and you’ll have a better chance of meeting others who share your interests.</p>
            
            <TitleBox nameId={`agreeable`} content={`Be Agreeable, Even When You Disagree`}></TitleBox>
            <p>You may wish to respond to something by disagreeing with it. That’s fine. But remember to criticize ideas, not people. Please avoid:</p>
            <ContentUl>
                <li>Name-calling</li>
                <li>Ad hominem attacks</li>
                <li>Responding to a post’s tone instead of its actual content</li>
                <li>Knee-jerk contradiction</li>
            </ContentUl>
            <p>Instead, provide reasoned counter-arguments that improve the conversation.</p>

            <TitleBox nameId={`participate`} content={`Your Participation Counts`}></TitleBox>
            <p>The conversations we have here set the tone for every new arrival. Help us influence the future of this community by choosing to engage in discussions that make this forum an interesting place to be — and avoiding those that do not.</p>
            <p>Discourse provides tools that enable the community to collectively identify the best (and worst) contributions: bookmarks, likes, flags, replies, edits, and so forth. Use these tools to improve your own experience, and everyone else’s, too.</p>
            <p>Let’s leave our community better than we found it.</p>

            <TitleBox nameId={`flag-problems`} content={`If You See a Problem, Flag It`}></TitleBox>
            <p>Moderators have special authority; they are responsible for this forum. But so are you. With your help, moderators can be community facilitators, not just janitors or police.</p>
            <p>When you see bad behavior, don’t reply. It encourages the bad behavior by acknowledging it, consumes your energy, and wastes everyone’s time. Just flag it. If enough flags accrue, action will be taken, either automatically or by moderator intervention.</p>
            <p>In order to maintain our community, moderators reserve the right to remove any content and any user account for any reason at any time. Moderators do not preview new posts; the moderators and site operators take no responsibility for any content posted by the community.</p>

            <TitleBox nameId={`be-civil`} content={`Always Be Civil`}></TitleBox>
            <p>Nothing sabotages a healthy conversation like rudeness:</p>
            <ContentUl>
                <li>Name-callingBe civil. Don’t post anything that a reasonable person would consider offensive, abusive, or hate speech.</li>
                <li>Keep it clean. Don’t post anything obscene or sexually explicit.</li>
                <li>Respect each other. Don’t harass or grief anyone, impersonate people, or expose their private information.</li>
                <li>Respect our forum. Don’t post spam or otherwise vandalize the forum.</li>
            </ContentUl>
            <p>These are not concrete terms with precise definitions — avoid even the appearance of any of these things. If you’re unsure, ask yourself how you would feel if your post was featured on the front page of the New York Times.</p>
            <p>This is a public forum, and search engines index these discussions. Keep the language, links, and images safe for family and friends.</p>
            
            <TitleBox nameId={`keep-tidy`} content={`Keep It Tidy`}></TitleBox>
            <p>Make the effort to put things in the right place, so that we can spend more time discussing and less cleaning up. So:</p>
            <ContentUl>
                <li>Don’t start a topic in the wrong category.</li>
                <li>Don’t cross-post the same thing in multiple topics.explicit.</li>
                <li>Don’t post no-content replies.</li>
                <li>Don’t divert a topic by changing it midstream.</li>
                <li>Don’t sign your posts — every post has your profile information attached to it.</li>
            </ContentUl>
            <p>Rather than posting “+1” or “Agreed”, use the Like button. Rather than taking an existing topic in a radically different direction, use Reply as a Linked Topic.</p>

            <TitleBox nameId={`stealing`} content={`Post Only Your Own Stuff`}></TitleBox>
            <p>You may not post anything digital that belongs to someone else without permission. You may not post descriptions of, links to, or methods for stealing someone’s intellectual property (software, video, audio, images), or for breaking any other law.</p>

            <TitleBox nameId={`power`} content={`Powered by You`}></TitleBox>
            <p> This site is operated by your <a href="/about">friendly local staff</a> and you, the community. If you have any further questions about how things should work here, open a new topic in the <a href="/">site feedback category</a> and let’s discuss! If there’s a critical or urgent issue that can’t be handled by a meta topic or flag, contact us via the <a href="/about">staff page</a>.</p>

            <TitleBox nameId={`tos`} content={`Terms of Service`}></TitleBox>
            <p>Yes, legalese is boring, but we must protect ourselves – and by extension, you and your data – against unfriendly folks. We have a Terms of Service describing your (and our) behavior and rights related to content, privacy, and laws. To use this service, you must agree to abide by our <a href="/tos">TOS</a>.</p>


        </BoxContent>
    );
}

const BoxContent = styled.div`
    max-width:700px;
    min-height:300px;
    padding-top:3rem;
`

const ContentUl = styled.ul`

`

export default FAQ