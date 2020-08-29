import React from "react"
import MessageFilter from "./MessageFilter"
import Icon from "./Icon.js"
import styled from "styled-components"

const SubHeaderWithFilter = styled.div`
    background-color: ${props => props.theme.PrimaryContainerBackground};
    padding: 10px;
    display: flex;
    flex-dirction: column;
    box-shadow: 0px 0px 3px 3px inset rgb(0 0 0 / 81%);
`
const IconFilterWrapper = styled.div`
    background: ${props => props.theme.SecondaryContainerBackground};
    border: ${props => props.theme.PrimaryBorderStyle};
    padding: 5px;
`
export default ({ setMessageFilter }) => {
    return (
        <SubHeaderWithFilter>
            <IconFilterWrapper>
                <Icon fontAwesomeIconClass="filter" />
                <MessageFilter setMessageFilter={setMessageFilter} />
            </IconFilterWrapper>
        </SubHeaderWithFilter>
    )
}
