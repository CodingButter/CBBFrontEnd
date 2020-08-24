import React from "react"
import { Router } from "@reach/router"
import Chat from "./Components/chat"
import Drop from "./pagecomponents/drop"
import Events from "./pagecomponents/events"
import "./App.css"
import io from "socket.io-client"

const ENDPOINT = "http://107.4.77.230:8080"
const socket = io(ENDPOINT)

function App() {
    return (
        <Router>
            <Chat path="/chat" socket={socket} />
            <Drop path="/drop" socket={socket} />
            <Events path="/events" socket={socket} />
        </Router>
    )
}

export default App
