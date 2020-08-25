import React from "react"
import { Router } from "@reach/router"
import Chat from "./components/Chat"
import Drop from "./components/Drop"
import Events from "./components/Events"
import io from "socket.io-client"

const ENDPOINT = "http://107.4.77.230:8080" // TODO Move ENPOINT to the .env file
const socket = io(ENDPOINT)

function App() {
    return (
        <Router>
            <Chat path="/chat" socket={socket} />
            <Drop path="/drop" socket={socket} />
        </Router>
    )
}

export default App
