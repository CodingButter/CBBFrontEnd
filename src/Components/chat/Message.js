import React from "react"
import UserLogo from "./UserLogo"
import MessageBody from "./MessageBody"
import UserDisplayName from "./UserDisplayName"

export default ({ tags, message }) => {
    console.log(tags)
    return (
        <div className="message-wrapper" id={tags.id} key={tags.id}>
            <UserLogo
                logo={tags.userdata.profile_image_url}
                displayName={tags["display-name"]}
            />
            <div className="displayname-message-body">
                <UserDisplayName displayName={tags["display-name"]} />
                <MessageBody message={message} />
            </div>
        </div>
    )
}
