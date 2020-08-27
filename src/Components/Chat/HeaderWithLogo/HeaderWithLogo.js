import React from "react"
import styled from "styled-components"
import logoimage from "../../../bin/CodingButterLogo.png"
export default () => {
    const Logo = styled.img`
        width: 150px;
    `
    return <Logo src={logoimage} />
}
