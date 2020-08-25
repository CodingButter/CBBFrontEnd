import React, { useState } from "react"
import { Router } from "@reach/router"
import Chat from "./Components/Chat"
import Drop from "./Components/Drop"
import Events from "./Components/Events"
import io from "socket.io-client"
import * as Themes from "./Themes"
import { ThemeProvider } from "styled-components"
import "./App.css"

import * as widgets from "./Components/Widgets/"

const ENDPOINT = "localhost:8080" // TODO Move ENPOINT to the .env file
const socket = io(ENDPOINT, { secure: false })

function App() {
    const inititialTheme = localStorage.theme || "Darkula"
    const [theme, setTheme] = useState(inititialTheme)

    const handleSetTheme = themeName => {
        if (!Themes[themeName]) return
        setTheme(themeName)
        localStorage.setItem("theme", themeName)
    }

    const allWidgets = Object.keys(widgets).map(key => {
        return {
            name: key,
            component: widgets[key]
        }
    })

    return (
        <ThemeProvider theme={Themes[theme]}>
            <button
                onClick={({ target }) => {
                    const newTheme =
                        theme === "Darkula" ? "Daylight" : "Darkula"
                    handleSetTheme(newTheme)
                }}
            >
                {theme}
            </button>
            <Router>
                <Chat path="/chat" socket={socket} />
                <Drop path="/drop" socket={socket} />
                <Events path="/events/:eventType" socket={socket} />
                {allWidgets &&
                    allWidgets.map(widget => {
                        return (
                            <React.Fragment key={widget.name}>
                                <widget.component
                                    path={`/widgets/${widget.name}`}
                                    socket={socket}
                                />
                                <widget.component
                                    path={`/widgets/${widget.name.toLowerCase()}`}
                                    socket={socket}
                                />
                            </React.Fragment>
                        )
                    })}
            </Router>
        </ThemeProvider>
    )
}

export default App
