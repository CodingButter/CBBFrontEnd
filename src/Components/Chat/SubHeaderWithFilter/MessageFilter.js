import React from "react"
import styled from "styled-components"

const FilterWrapper = styled.div``

export default ({ setMessageFilter }) => (
    <FilterWrapper>
        <input
            onChange={e => {
                setMessageFilter(e.target.value)
            }}
        />
    </FilterWrapper>
)
