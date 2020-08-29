import React from "react"
import styled from "styled-components"

const MessageBody = styled.div`
    background-color: ${props => props.theme.SecondaryContainerBackground};
    margin: 5px;
    width: 100%;
`

export default ({ message }) => {
    return (
        <MessageBody>
            <p>{message}</p>
        </MessageBody>
    )
}
