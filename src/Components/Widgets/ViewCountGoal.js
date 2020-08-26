import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ProgressBar } from "../Shared"
import { EmitterInstance } from "../../Utilities"

export default () => {
    const [currentViewers, setCurrentViewers] = useState(0)
    const [viewerGoal, setViewerGoal] = useState(
        localStorage.getItem("viewerGoal")
    )
    const updateState = viewerGoal => {
        const updatedGoal = parseInt(viewerGoal)
        setViewerGoal(updatedGoal)
        localStorage.setItem("viewerGoal", updatedGoal)
    }
    useEffect(() => {
        EmitterInstance.on("updateViewerGoal", ({ viewerGoal }) => {
            updateState(viewerGoal)
        })
        EmitterInstance.on("updateCurrentViewers", ({ currentViewerCount }) => {
            setCurrentViewers(currentViewerCount)
        })
    }, [])

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
