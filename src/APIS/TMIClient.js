import tmi from "tmi.js"
import config from "./config.json"
const client = new tmi.Client({
    options: {
        debug: true
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: config.BROADCASTER_LOGIN,
        password: config.TMI_PASSWORD
    },
    channels: [config.BROADCASTER_LOGIN]
})

export default client
