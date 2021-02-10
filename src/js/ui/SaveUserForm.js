import Form from "./FormClass";
import UserApi from "../api/UserApi";
import RoleApi from "../api/RoleApiClass";
import Util from "../Util";
import UsersChangedEvent from "./UsersChangedEvent";

export default class SaveUserForm extends Form {
    constructor(selector) {
        super(selector);
        this.userApi = new UserApi();
        this.roleApi = new RoleApi();
        this.submitButton = this.element.find("button[type=submit]");
        this.init();
    }

    async init() {
        const roles = await this.roleApi.loadAllRoles();
        const selectElementOfRoles =
            this.element.find("select[name=authorities]");

        Util.fillSelectElementOfRoles(selectElementOfRoles, roles);

        await this.addSubmitListener()
    }

    async addSubmitListener() {
        this.element.on("submit", async (e) => {
            e.preventDefault();
            await this.submitHandler(e)
        })
    }

    async submitHandler(e) {
        const user = this.getDataFromInputs();
        console.log(window.location.href);
        await this.userApi.saveUser(user);
        UsersChangedEvent.trigger();
        $('#myTab li:first-child a').tab('show')
    }
}