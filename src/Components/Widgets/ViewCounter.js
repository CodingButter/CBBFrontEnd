import React, { useState, useEffect } from "react"

export default ({ socket }) => {
    const [currentViewers, setCurrentViewers] = useState()

    useEffect(() => {
        socket.on("updateCurrentViewers", ({ currentViewerCount }) => {
            console.log(currentViewerCount)
            setCurrentViewers(currentViewerCount)
        })
    }, [socket])

    return (
        <div className="viewcount-wrapper">
            <div className="viewcount">
                <span className="viewcount-text">Viewers</span>
                <span className="viewcount">{currentViewers}</span>
            </div>
        </div>
    )
}
