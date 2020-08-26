import React, { useState, useEffect } from "react"
import Message from "./Message"
import FilterInput from "./FilterInput"
import { Wrapper } from "../Shared"
import { EmitterInstance } from "../../Utilities"

export default () => {
    const [messages, setMessages] = useState([])
    const [messageFilter, setMessageFilter] = useState("")

    useEffect(() => {
        EmitterInstance.on("newmessage", data => {
            setMessages(oldMessages => [...oldMessages, data])
        })
    }, [])

    return (
        <Wrapper>
            <div className="chatbox container">
                <FilterInput setFilter={setMessageFilter} />
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
            </div>
        </Wrapper>
    )
}
