import React from "react"
import Message from "./Message"
export default ({ messages, messageFilter }) => {
    return (
        <div className="chatbox">
            {messages &&
                messages
                    .filter(message => {
                        const matches = message.message.match(
                            new RegExp(messageFilter, "g")
                        )
                        return matches
                    })
                    .reverse()
                    .map(({ tags, message }) => {
                        return (
                            <Message
                                tags={tags}
                                message={message}
                                key={tags.id}
                            />
                        )
                    })}
        </div>
    )
}
