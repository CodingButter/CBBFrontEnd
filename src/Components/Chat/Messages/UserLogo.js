import React from "react"
import styled from "styled-components"

const UserLogo = styled.div`
    height: 100%;
    width: 120px;
    overflow: hidden;
`
const Img = styled.img`
    height: 100%;
    border-radius: 5px;
`

export default ({ logo, displayName }) => {
    return (
        <UserLogo className="user-logo">
            <Img src={logo} alt={`${displayName} Twitch Logo`} />
        </UserLogo>
    )
}
