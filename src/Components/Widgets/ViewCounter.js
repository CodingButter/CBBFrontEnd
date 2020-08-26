import React, { useState, useEffect } from "react"

export default ({ EmitterInstance }) => {
    const [currentViewers, setCurrentViewers] = useState(0)

    useEffect(() => {
        EmitterInstance.on(
            "updatedCurrentViewers",
            ({ currentViewerCount }) => {
                setCurrentViewers(currentViewerCount)
            }
        )
    }, [EmitterInstance])

    return (
        <div className="viewcount-wrapper">
            <div className="viewcount">
                <span className="viewcount-text">Viewers</span>
                <span className="viewcount">{currentViewers}</span>
            </div>
        </div>
    )
}
