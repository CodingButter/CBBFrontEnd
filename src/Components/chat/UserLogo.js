import React from "./node_modules/react"

export default ({ logo, displayName }) => {
    return (
        <div className="user-logo">
            <img src={logo} alt={`${displayName} Twitch Logo`} />
        </div>
    )
}
