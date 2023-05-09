export default {
    serverUrl: 'https://dummyjson.com/products/',

    async getDate() {
        return fetch(this.serverUrl, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then((response) => {
            console.log(response)
            return response
        }).catch((err) => {
            console.log(err)
        })
    }
}