import Api from "./ApiClass";

export default class RoleApi extends Api {
    constructor() {
        super();
        this.apiUrl = this.apiUrl + "/role";
    }
    
    async loadAllRoles() {
        return await this.fetchRequest(this.apiUrl + "/all", "GET")
    }
}