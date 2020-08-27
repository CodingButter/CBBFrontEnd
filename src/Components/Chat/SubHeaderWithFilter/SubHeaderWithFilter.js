import React from "react"
import MessageFilter from "./MessageFilter"
import Icon from "./Icon.js"

export default ({ setMessageFilter }) => {
    return (
        <>
            <Icon />
            <MessageFilter setMessageFilter={setMessageFilter} />
        </>
    )
}
