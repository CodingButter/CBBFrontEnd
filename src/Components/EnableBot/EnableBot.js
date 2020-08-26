import React from "react"
import config from "../../APIS/config.json"

export default () => {
    const scopes = [
        "bits:read",
        "channel:edit:commercial",
        "channel:read:hype_train",
        "channel:read:subscriptions",
        "clips:edit",
        "user:edit",
        "user:edit:broadcast",
        "user:edit:follows",
        "user:read:broadcast",
        "user:read:email"
    ]

    const queryscope = scopes.join("+")
    const authURL = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${config.CODINBUTTERBOT_CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&scope=${queryscope}`

    return !localStorage.getItem("ACCESS_TOKEN") ? (
        <>
            <a href={authURL}>Enable Coding Butter Bot</a>
        </>
    ) : (
        <>
            <h1>Your tokens set pal</h1>
        </>
    )
}
// TODO make this page set tokens for users
