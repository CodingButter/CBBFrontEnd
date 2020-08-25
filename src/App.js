import React from "react"
import { Router } from "@reach/router"
import Chat from "./Components/Chat"
import Drop from "./Components/Drop"
import Events from "./Components/Events"
import Widgets from "./Components/Widgets"
import io from "socket.io-client"

const ENDPOINT = "http://2601:407:8680:5df0:45e8:e46c:294e:7b3:8080" // TODO Move ENPOINT to the .env file
const socket = io(ENDPOINT, { secure: false })

function App() {
    return (
        <Router>
            <Chat path="/chat" socket={socket} />
            <Drop path="/drop" socket={socket} />
            <Events path="/events/:eventType" socket={socket} />
            <Widgets path="/widgets/:widgetType" socket={socket} />
        </Router>
    )
}

export default App
