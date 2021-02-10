import Api from './ApiClass';

export default class UserApi extends Api {
    constructor() {
        super();
        this.apiUrl = this.apiUrl + "/user";
    }

    async loadAllUsers() {
        return await this.fetchRequest(this.apiUrl + "/all", "GET");
    }

    async loadUser(id) {
        return await this.fetchRequest(this.apiUrl + "/" + id, "GET");
    }

    async saveUser(user) {
        user.enabled = true;
        return await this.fetchRequest(this.apiUrl, "POST", user);
    }

    async editUser(id, user) {
        user.enabled = true;
        return await this.fetchRequest(this.apiUrl + "/" + id, "PUT", user);
    }

    async deleteUser(id) {
        console.log("Delete " + id);
        return await this.fetchRequest(this.apiUrl + "/" + id, "DELETE");
    }
}