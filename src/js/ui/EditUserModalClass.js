import Modal from "./Modal.js"
import UserApi from "../api/UserApi";
import RoleApi from "../api/RoleApiClass";
import UsersChangedEvent from "./UsersChangedEvent";
import Form from "./FormClass";
import Util from "../Util";


export default class EditUserModal extends Modal {
    constructor(selector) {
        super(selector);
        this.form = this.modal.find("form");
        this.submitButton = this.modal.find("#user-form-modal-submit");
        this.isDeleteAction = false;
        this.user = {};


        this.userApi = new UserApi();
        this.roleApi = new RoleApi();
    }

    async fillForm() {
        const roles = await this.roleApi.loadAllRoles();

        for(let item in this.user) {
            if(this.user.hasOwnProperty(item)){

                const input = this.form.find(
                    "input[name="+ item +"]," +
                    "select[name="+ item +"]"
                )

                if(item !== "authorities") {
                    input.val(this.user[item]);
                } else {
                    Util.fillSelectElementOfRoles(input, roles, this.user[item]);
                }
            }
        }
    }

    async toggleModal(){
         await this.fillForm();

         this.modal.find(".modal-title")
             .text(this.isDeleteAction ? "Delete user" : "Edit user");
         this.form.find("input, select").attr("disabled", this.isDeleteAction);
         this.form.find("button[type=submit]").hide();

         const idInput = this.form.find("input[name=id]");
         idInput.attr("disabled", true);
         idInput.closest(".form-group").removeClass("d-none");

         const passwordFormGroup = this.form.find("input[type=password]").closest(".form-group");

         this.isDeleteAction ? passwordFormGroup.hide() : passwordFormGroup.show();

         this.submitButton
             .removeClass(this.isDeleteAction ? "btn-primary" : "btn-danger")
             .addClass(this.isDeleteAction ? "btn-danger" : "btn-primary");

         this.submitButton
             .text(this.isDeleteAction ? "Delete" : "Edit user");
    }

    async submitDeleteHandler(event, instanceOfModal) {
        await instanceOfModal.userApi.deleteUser(instanceOfModal.user.id);
        UsersChangedEvent.trigger();
        $(event.target).off("click");
        delete this;
    }

    async submitEditHandler(event, instanceOfModal) {
        const formData = new Form(instanceOfModal.form).getDataFromInputs();
        await instanceOfModal.userApi.editUser(formData.id, formData);
        UsersChangedEvent.trigger();
        $(event.target).off("click");
        delete this;
    }

    addSubmitListener(){
        const handler = this.isDeleteAction ? this.submitDeleteHandler : this.submitEditHandler;
        $(this.submitButton).on("click", async (e) => {
            this.hide();
            await handler(e, this);
        });
    }

    hide() {
        this.modalInstance.hide();
    }

    async show(data, isDeleteAction) {
        this.user = data;
        this.isDeleteAction = isDeleteAction;
        await this.toggleModal();
        this.modalInstance.show();
        this.addSubmitListener();
    }
}