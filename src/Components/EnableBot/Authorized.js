import React from "react"

export default props => {
    localStorage.setItem("ACCESS_TOKEN", null)
    const access_token = new URLSearchParams(
        props.location.hash.replace("#", "?")
    ).get("access_token")
    localStorage.setItem("ACCESS_TOKEN", access_token)
    return <h1>Token Stored as {access_token}</h1>
}
