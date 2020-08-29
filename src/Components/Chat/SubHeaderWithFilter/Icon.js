import React from "react"
import styled from "styled-components"

const Icon = styled.i`
    font-size: 20px;
    color: ${props => props.theme.PrimaryForgroundColor};
`

export default ({ fontAwesomeIconClass }) => {
    return <Icon className={`fa fa-${fontAwesomeIconClass}`} />
}
