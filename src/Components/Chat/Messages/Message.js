import React from "react"
import UserLogo from "./UserLogo"
import MessageBody from "./MessageBody"
import UserNameWithBadges from "./UserNameWithBadges"
import styled from "styled-components"

const Message = styled.div`
    display: flex;
    flex-direction: columns;
    height: 100px;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    padding: 10px;
    background: #4c302f; /* Old browsers */

    background: -moz-radial-gradient(center, ellipse cover,  ${props =>
        props.theme.SecondaryGradientStart} 0%, ${props =>
    props.theme.SecondaryGradientEnd} 100%); /* FF3.6-15 */,
    background: -webkit-radial-gradient(center, ellipse cover,  ${props =>
        props.theme.SecondarGradientStart} 0%,${props =>
    props.theme.SedondaryGradientEnd} 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center,  ${props =>
        props.theme.SecondaryGradientStart} 0%,${props =>
    props.theme
        .SecondaryGradientEnd} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${props =>
        props.theme.SecondaryGradientStart}', endColorstr='${props =>
    props.theme
        .PrimarySecondaryGradientEnd}',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

`
const MessageInfo = styled.div`
    display: flex;
    flex-direction: rows;
    padding: 5px;
    width: 100%;
    bckground: none;
`

export default ({ tags, message }) => {
    return (
        <Message id={tags.id} key={tags.id}>
            <UserLogo
                logo={tags.userdata.profile_image_url}
                displayName={tags["display-name"]}
            />
            <MessageInfo>
                <UserNameWithBadges displayName={tags["display-name"]} />
                <MessageBody message={message} />
            </MessageInfo>
        </Message>
    )
}
