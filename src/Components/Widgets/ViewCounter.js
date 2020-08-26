import React, { useState, useEffect } from "react"
import { EmitterInstance } from "../../Utilities"

export default () => {
    const [currentViewers, setCurrentViewers] = useState(0)

    useEffect(() => {
        EmitterInstance.on(
            "updatedCurrentViewers",
            ({ currentViewerCount }) => {
                setCurrentViewers(currentViewerCount)
            }
        )
    }, [])

    return (
        <div className="viewcount-wrapper">
            <div className="viewcount">
                <span className="viewcount-text">Viewers</span>
                <span className="viewcount">{currentViewers}</span>
            </div>
        </div>
    )
}
