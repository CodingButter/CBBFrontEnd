import { CodingButterBot } from "../APIS"

const Commands = {
    "!setViewerGoal": async (
        EmitterInstance,
        args,
        channel,
        tags,
        message,
        self,
        client
    ) => {
        const viewerGoal = parseInt(args[1])
        EmitterInstance.emit("updateViewerGoal", { viewerGoal })
        client.say(
            channel,
            `@${tags["display-name"]} set our viewer goal for todays stream to ${viewerGoal}`
        )
    },
    "!setTitle": async (
        EmitterInstance,
        args,
        channel,
        tags,
        message,
        self,
        client
    ) => {
        if ((!tags.badges || !parseInt(tags.badges.broadcaster)) && !tags.mod) {
            return
        }
        args.shift()
        const response = await CodingButterBot.setTitle(args.join(" "))
        if (response.updated === true)
            client.say(
                channel,
                `${tags["display-name"]} updated the stream title`
            )
    },
    "!discord": async (
        EmitterInstance,
        args,
        channel,
        tags,
        message,
        self,
        client
    ) => {
        const discord = "https://discord.gg/RQe3HAz"
        client.say(channel, discord)
    },
    "!youtube": async (
        EmitterInstance,
        args,
        channel,
        tags,
        message,
        self,
        client
    ) => {
        const youtube = "https://youtube.com/codingbutter"
        client.say(channel, youtube)
    },
    "!twitter": async (
        EmitterInstance,
        args,
        channel,
        tags,
        message,
        self,
        client
    ) => {
        const twitter = "https://twitter.com/codingbutter"
        client.say(channel, twitter)
    },
    "!drop": async (
        EmitterInstance,
        args,
        channel,
        tags,
        message,
        self,
        client
    ) => {
        tags.emote = args[1]
        tags.logo = await CodingButterBot.getLogoByUserId(tags["user-id"])
        EmitterInstance.emit("drop", tags)
    },
    "!repeat": (
        EmitterInstance,
        args,
        channel,
        tags,
        message,
        self,
        client
    ) => {
        args.shift()
        const repeatString = args.join(" ")
        const username = tags["display-name"]
        client.say(channel, `Hey ${username} just said ${repeatString}`)
    },

    /* FIXME This will trigger a event for testing subs and follows

    "!trigger": async (args, channel, tags, message, self, client) => {
        if ((!tags.badges || !parseInt(tags.badges.broadcaster)) && !tags.mod) {
            client.say(channel, `${tags["display-name"]} can't trigger events.`)
            return
        }
        const logo = await CodingButterBot.getLogoByUserId(tags["user-id"])
        tags.logo = logo
        args.shift()
        const triggerEvent = args.shift()
        const customMessage = args.join(" ")
        Events[triggerEvent] &&
            Events[triggerEvent](
                io,
                channel,
                tags["display-name"],
                "test trigger method",
                customMessage,
                tags
            )
    },*/
    "!whoami": (args, channel, tags, message, self, client) => {
        const response = `You are @${tags["display-name"]}`
        client.say(channel, response)
    }
}

export default Commands
