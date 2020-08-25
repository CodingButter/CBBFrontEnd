import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ProgressBar } from "../Shared"

export default ({ socket }) => {
    const [currentViewers, setCurrentViewers] = useState(0)
    const [viewerGoal, setViewerGoal] = useState(localStorage.viewerGoal)
    const updateState = viewerGoal => {
        const updatedGoal = parseInt(viewerGoal)
        setViewerGoal(updatedGoal)
        localStorage.setItem("viewerGoal", updatedGoal)
    }
    useEffect(() => {
        socket.on("updateViewerGoal", ({ viewerGoal }) => {
            console.log({ viewerGoal })
            updateState(viewerGoal)
        })
        socket.on("updateCurrentViewers", ({ currentViewerCount }) => {
            console.log({ currentViewerCount })
            setCurrentViewers(currentViewerCount)
        })
    }, [socket])

    const Container = styled.div``

    const TwitchIcon = styled.img``

    return (
        <Container>
            <ProgressBar value={currentViewers} total={viewerGoal} />
            <TwitchIcon src="/icons/twitch-viewcount.png" alt="Twitches Icon" />
            <span className="viewcount">{currentViewers}</span>
            <span className="slash">/</span>
            <span className="viewgoal">{viewerGoal}</span>
            <span className="viewcount-text">viewers</span>
        </Container>
    )
}
