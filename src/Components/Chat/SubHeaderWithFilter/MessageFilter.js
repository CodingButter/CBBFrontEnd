import React from "react"
import styled from "styled-components"

const FilterInput = styled.input`
    outline: none;
    background: none;
    border: none;
    padding: 5px;
    padding-left: 5px;
    font-size: 18px;
    margin-left: 5px;
    color: ${props => props.theme.PrimaryForgroundColor};
    border-left: 1px solid ${props => props.theme.PrimaryForgroundColor};
    &::placeholder {
        color: ${props => props.theme.PrimaryForgroundColor};
    }
`

export default ({ setMessageFilter }) => (
    <FilterInput
        type="text"
        placeholder="@CodingButter"
        onChange={e => {
            setMessageFilter(e.target.value)
        }}
    />
)
