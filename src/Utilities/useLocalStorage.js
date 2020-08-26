export default key => {
    const isBrowser = typeof window !== `undefined` // checks if running in browser or SSR

    if (!isBrowser) {
        return [null, null]
    }

    const setLocalItem = data => {
        const dataString = JSON.stringify(data)
        localStorage.setItem(key, dataString)
    }

    const localItem = localStorage.getItem(key)
    const item = localItem && JSON.parse(localItem)

    return [item, setLocalItem]
}
