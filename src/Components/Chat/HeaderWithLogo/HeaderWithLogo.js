import React from "react"
import styled from "styled-components"
import logoimage from "../../../bin/CodingButterLogo.png"

const Logo = styled.img`
    width: 150px;
`

export default () => {
    return (
        <>
            <Logo src={logoimage} />
        </>
    )
}
