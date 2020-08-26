import JsonAPI from "./JsonAPI"
import config from "./config.json"

class CodingButterBotAPI extends JsonAPI {
    constructor(props) {
        super({ baseUrl: "https://api.twitch.tv" })
        this.ACCESS_TOKEN =
            localStorage.getItem("ACCESS_TOKEN") || config.ACCESS_TOKEN
    }
    getDefaultHeaders() {
        const headers = {
            Accept: "application/vnd.twitchtv.v5+json",
            "Client-ID": config.CODINBUTTERBOT_CLIENT_ID,
            Authorization: `Bearer ${this.ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        }
        return headers
    }

    //Badge API GET
    async getSubscriberBadge(badge) {
        if (this.subscriberBadges) return this.subscriberBadges[badge]
        const subscriberBadgeUrl = `https://badges.twitch.tv/v1/badges/channels/${config.BROADCASTER_ID}/display`
        const subscriberBadgeResponse = await fetch(subscriberBadgeUrl)
        const subscriberBadgeJson = await subscriberBadgeResponse.json()
        const { versions } = subscriberBadgeJson.badge_sets.subscriber
        this.subscriberBadges = versions
        return versions[badge]
    }

    async getBadges({ badges }) {
        const badgeData = {}
        if (badges.subscriber) {
            badgeData.subscriber = await this.getSubscriberBadge(
                badges.subscriber
            )
        }
        return badgeData
    }

    //Base API Get
    async getStream(id) {
        const streamArray = await this.get({
            endpoint: `/helix/streams/?user_id=${id}`
        })
        return streamArray.data[0]
    }

    async getUsersByIds(ids) {
        const idsString = ids.join(`&id=`)
        const usersArray = await this.get({
            endpoint: `helix/users?id=${idsString}`
        })
        return usersArray.data
    }

    async getUserById(id) {
        const userID = id ? id : process.env.CHANNE_ID
        const usersArray = await this.getUsersByIds([userID])
        return usersArray[0]
    }

    async getStreamViewerCount() {
        const streamChannel = await this.getStream(config.BROADCASTER_ID)
        if (!streamChannel) return 3 // FIXME Reset this back to 0 when done testing
        return streamChannel.viewer_count
    }
    async getLogoByUserId(id) {
        const { profile_image_url } = await this.getUserById(id)
        return profile_image_url
    }

    //Base API Set

    async updateChannel(data) {
        const jsonResponse = false
        try {
            await this.patch({
                endpoint: `helix/channels/?broadcaster_id=${config.BROADCASTER_ID}`,
                data,
                jsonResponse
            })
            return { updated: true }
        } catch (error) {
            return { updated: false }
        }
    }

    async setTitle(title) {
        return await this.updateChannel({ title })
    }
}

const myCodingButterBotAPI = new CodingButterBotAPI()
export default myCodingButterBotAPI
