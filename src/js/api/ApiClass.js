export default class Api {

    constructor() {
        this.headers = {};
        this.headers.contentType = "application/json";
        this.apiUrl = "http://localhost:8080/api/v1";
    }

    async fetchRequest(url, method, body = null) {

        let response = await fetch(url, {
            method: method,
            headers: {
                "Content-type": this.headers.contentType,
            },
            body: body ? JSON.stringify(body) : null
        });

        const content = await response.json();

        if(content.code !== 200) {
            throw new Exception("Request failed: " + content.message);
        }

        return content.data;
    }
}