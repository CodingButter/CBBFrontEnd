import Config from "./cron.config.json"
export default class BaseInterval {
    constructor(cron, callback) {
        this.callback = callback
        this.settings = Config[cron]
        if (this.settings.enabled) this.run()
    }
    run() {
        setInterval(this.callback, this.settings.interval)
    }
}
