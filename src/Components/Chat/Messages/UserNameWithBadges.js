import React from "react"
import styled from "styled-components"

const UserName = styled.span`
    width: 100%;
    background-color: ${props => props.theme.SecondaryContainerBackground};
`
export default props => {
    return <UserName>{props.displayName}</UserName>
}
