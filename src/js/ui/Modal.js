export default class Modal {
    constructor(selector) {
        this.modal = $(selector);
        this.modalInstance = new bootstrap.Modal(this.modal[0]);
    }
}