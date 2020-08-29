import React from "react"
import Message from "./Message"
import styled from "styled-components"

const Messages = styled.div`
    height: 100%;
    display: flex;
    flex-direction: rows;
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    box-shadow: 0px 0px 3px 3px inset rgb(0 0 0 / 81%);
    background: ${props => props.theme.SecondaryContainerBackground};
`

export default ({ messages, messageFilter }) => {
    return (
        <Messages>
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
