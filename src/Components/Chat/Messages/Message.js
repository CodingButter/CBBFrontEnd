import React from "react"
import UserLogo from "../../Shared/UserLogo"
import MessageBody from "./MessageBody"
export default ({ tags, message }) => {
    return (
        <div className="message-wrapper" id={tags.id} key={tags.id}>
            <UserLogo
                logo={tags.userdata.profile_image_url}
                displayName={tags["display-name"]}
            />
            <div className="displayname-message-body">
                <span>{tags["display-name"]}</span>
                <MessageBody message={message} />
            </div>
        </div>
    )
}
