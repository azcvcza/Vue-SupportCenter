/* eslint-disable eol-last */
let baseUrl
export default {
    // eslint-disable-next-line
    install(Vue, options) {
        // console.log('installed', options)
        baseUrl = options.baseUrl
            // console.log('install:', baseUrl)
        Vue.prototype.$fetch = $fetch
    }

}
// eslint-disable-next-line
export async function $fetch(url) {
    // console.log('url:', `${baseUrl}${url}`)
    const response = await fetch(`${baseUrl}${url}`)
        // console.log('response:', response)
    if (response.ok) {
        const data = await response.json()

        return data
    } else {
        const error = new Error('error')
        throw error
    }
}