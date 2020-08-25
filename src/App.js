import React from "react"
import { Router } from "@reach/router"
import Chat from "./Components/Chat"
import Drop from "./Components/Drop"
import Events from "./Components/Events"
import io from "socket.io-client"

import * as widgets from "./Components/Widgets/"

const ENDPOINT = "localhost:8080" // TODO Move ENPOINT to the .env file
const socket = io(ENDPOINT, { secure: false })

function App() {
    const allWidgets = Object.keys(widgets).map(key => {
        return {
            name: key,
            component: widgets[key]
        }
    })

    return (
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
    )
}

export default App
