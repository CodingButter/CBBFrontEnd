import React, { useState } from "react"
import { Router } from "@reach/router"
import Chat from "./Components/Chat"
import EnableBot from "./Components/EnableBot"
import Authorized from "./Components/EnableBot/Authorized"
import Drop from "./Components/Drop"
import Events from "./Components/Events"
import * as Themes from "./Themes"
import { ThemeProvider } from "styled-components"
import ChatCommands from "./ChatCommands"
import { TMIClient as client } from "./APIS"
import "./Crons"

import "./App.css"

import * as widgets from "./Components/Widgets/"

function App() {
    client.connect().catch(console.error)
    client.on("message", (channel, tags, message, self) => {
        ChatCommands(channel, tags, message, self, client)
    })

    // TODO get subscriptions working
    //client.on("subscription", Subscription)
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
                <EnableBot path="/" />
                <Authorized path="/authorized" />
                <Chat path="/chat" />
                <Drop path="/drop" />
                <Events path="/events/:eventType" />
                {allWidgets &&
                    allWidgets.map(widget => {
                        return (
                            <React.Fragment key={widget.name}>
                                <widget.component
                                    path={`/widgets/${widget.name}`}
                                />
                                <widget.component
                                    path={`/widgets/${widget.name.toLowerCase()}`}
                                />
                            </React.Fragment>
                        )
                    })}
            </Router>
        </ThemeProvider>
    )
}

export default App
