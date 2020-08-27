import React from "react"
import styled from "styled-components"

const UserName = styled.span`
    backgroundcolor: #333;
`
export default props => {
    return <UserName>{props.displayName}</UserName>
}
