import { CodingButterBot } from "../APIS"
import { EmitterInstance } from "../Utilities"

setInterval(async () => {
    const currentViewerCount = await CodingButterBot.getStreamViewerCount()

    EmitterInstance.emit("updatedCurrentViewers", { currentViewerCount })
}, 10000)
