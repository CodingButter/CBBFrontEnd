import React from "react"
import styled from "styled-components"
import logoimage from "../../../bin/CodingButterLogo.png"

const HeaderWithLogo = styled.div`
    padding: 10px;
`

const Logo = styled.img`
    width: 150px;
`

export default () => {
    return (
        <HeaderWithLogo>
            <Logo src={logoimage} />
        </HeaderWithLogo>
    )
}
