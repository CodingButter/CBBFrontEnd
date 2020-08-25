import React from "react"
import styled from "styled-components"

export default ({ value, total }) => {
    const percentage = 100 * (value / total)
    const BackgroundBar = styled.div`
        width: 100%;
        height: 100%;
    `
    const InsideBar = styled.div`
        width: ${percentage}%;
        height: 100%;
    `
    return (
        <BackgroundBar>
            <InsideBar />
        </BackgroundBar>
    )
}
