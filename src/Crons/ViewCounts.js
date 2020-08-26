import { CodingButterBot } from "../APIS"
export default EmitterInstance => {
    setInterval(async () => {
        const currentViewerCount = await CodingButterBot.getStreamViewerCount()
        EmitterInstance.emit("updatedCurrentViewers", { currentViewerCount })
    }, 10000)
}
