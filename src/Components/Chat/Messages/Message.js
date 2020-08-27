import React from "react"
import UserLogo from "../../Shared/UserLogo"
import MessageBody from "./MessageBody"
import UserNameWithBadges from "./UserNameWithBadges"
import styled from "styled-components"

const Message = styled.div`
    display: flex;
    flex-direction: columns;
    height: 100px;
    width: 100%;
`
const MessageInfo = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid white;
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
