import { CodingButterBot, config } from "../APIS"
import Commands from "./Commands"
import { EmitterInstance } from "../Utilities"

export default async (channel, tags, message, self, client) => {
    if (tags["user-id"]) {
        tags.userdata = await CodingButterBot.getUserById(tags["user-id"])
    } else {
        tags.userdata = await CodingButterBot.getUserById(config.BROADCASTER_ID)
        tags["display-name"] = "CodingButterBot"
        const time = new Date().getTime()
        tags.id = btoa(time + tags["display-name"] + message)
        tags.userdata.profile_image_url =
            "https://banner2.cleanpng.com/20181201/qqu/kisspng-clip-art-vector-graphics-openclipart-image-illustr-clipart-chatbot-icon-5c02745add0789.5330085515436647309054.jpg"
    }
    if (tags.badges) {
        tags.badges = await CodingButterBot.getBadges(tags)
    }
    const command = message.split(" ")[0]
    if (Commands[command]) {
        Commands[command](
            message.split(" "),
            channel,
            tags,
            message,
            self,
            client
        )
    } else {
        EmitterInstance.emit("newmessage", { tags, message })
    }
}
