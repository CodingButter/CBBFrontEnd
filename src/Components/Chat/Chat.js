import React, { useState, useEffect } from "react"
import { Wrapper } from "../Shared"
import HeaderWithLogo from "./HeaderWithLogo"
import SubHeaderWithFilter from "./SubHeaderWithFilter"
import Messages from "./Messages"
import styled from "styled-components"

export default ({ EmitterInstance }) => {
    const [messages, setMessages] = useState([])
    const [messageFilter, setMessageFilter] = useState("")

    useEffect(() => {
        EmitterInstance.on("newmessage", data => {
            setMessages(oldMessages => [...oldMessages, data])
        })
    }, [EmitterInstance])

    return (
        <Wrapper>
            <HeaderWithLogo />
            <SubHeaderWithFilter setMessageFilter={setMessageFilter} />
            <Messages messageFilter={messageFilter} messages={messages} />
        </Wrapper>
    )
}
