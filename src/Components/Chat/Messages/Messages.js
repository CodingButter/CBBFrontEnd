import React from "react"
import Message from "./Message"
import styled from "styled-components"

const Messages = styled.div`
    display: flex;
    width: 100%;
`

export default ({ messages, messageFilter }) => {
    return (
        <Messages className="chatbox">
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
        </Messages>
    )
}
