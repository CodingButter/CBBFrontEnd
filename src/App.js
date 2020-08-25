import React from "react"
import { Router } from "@reach/router"
import Chat from "./Components/Chat"
import Drop from "./Components/Drop"
import Events from "./Components/Events"
import io from "socket.io-client"

const ENDPOINT = "http://107.4.77.230:8080" // TODO Move ENPOINT to the .env file
const socket = io(ENDPOINT,{secure: false})

function App() {
    return (
        <Router>
            <Chat path="/chat" socket={socket} />
            <Drop path="/drop" socket={socket} />
            <Events path="/events" socket={socket}/>
        </Router>
    )
}

export default App
