import React from "react"
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
import { EmitterInstance } from "./Utilities"
import { ViewCounts } from "./Crons"
import "./App.css"
import * as widgets from "./Components/Widgets/"

client.connect().catch(console.error)
client.on("message", (Events, tags, message, self) => {
    ChatCommands(Events, tags, message, self, client)
})

ViewCounts(EmitterInstance)
function App() {
    // TODO get subscriptions working
    //client.on("subscription", Subscription)
    const inititialTheme = localStorage.theme || "Darkula"

    const allWidgets = Object.keys(widgets).map(key => {
        return {
            name: key,
            component: widgets[key]
        }
    })

    return (
        <ThemeProvider theme={Themes[inititialTheme]}>
            <Router>
                <EnableBot path="/" />
                <Authorized path="/authorized" />
                <Chat path="/chat" EmitterInstance={EmitterInstance} />
                <Drop path="/drop" EmitterInstance={EmitterInstance} />
                <Events path="/events/:eventType" />
                {allWidgets &&
                    allWidgets.map(widget => {
                        return (
                            <React.Fragment key={widget.name}>
                                <widget.component
                                    path={`/widgets/${widget.name}`}
                                    EmitterInstance={EmitterInstance}
                                />
                                <widget.component
                                    path={`/widgets/${widget.name.toLowerCase()}`}
                                    EmitterInstance={EmitterInstance}
                                />
                            </React.Fragment>
                        )
                    })}
            </Router>
        </ThemeProvider>
    )
}

export default App
