import React, { useState, useEffect } from "react"
import Message from "./Message"
import FilterInput from "./FilterInput"

export default ({ socket }) => {
    const [messages, setMessages] = useState([])
    const [messageFilter, setMessageFilter] = useState("")

    useEffect(() => {
        socket.on("newmessage", data => {
            console.log(data.tags)
            setMessages(oldMessages => [...oldMessages, data])
        })
    }, [socket])

    return (
        <div className="chat container">
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
        </div>
    )
}
