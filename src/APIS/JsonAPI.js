export default class JsonAPI {
    constructor(props) {
        this.baseUrl = props.baseUrl
    }

    getUrl(endpoint) {
        return new URL(endpoint, this.baseUrl).href
    }

    getDefaultHeaders() {
        return {}
    }

    async request({ method, endpoint, queryString, data, jsonResponse }) {
        const options = {
            method,
            headers: this.getDefaultHeaders()
        }

        let url = this.getUrl(endpoint)

        if (queryString) {
            // COMPLETE use qs package and append to url
            url = url.concat(`&${queryString}`)
        }

        if (data) {
            Object.assign(options, { body: JSON.stringify(data) })
        }

        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        if (jsonResponse === false) {
            return response
        }
        return response.json()
    }

    get({ endpoint, queryString = null }) {
        return this.request({ method: "GET", endpoint, queryString })
    }

    post({ endpoint, data }) {
        return this.request({ method: "POST", endpoint, data })
    }

    patch({ endpoint, data, jsonResponse }) {
        return this.request({ method: "PATCH", endpoint, data, jsonResponse })
    }
}
