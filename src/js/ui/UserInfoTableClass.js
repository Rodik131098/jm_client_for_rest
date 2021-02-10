import EditUserModal from "./EditUserModalClass";

export default class UserInfoTable {
    constructor(selector){
        this.table = $(selector);
        this.body = this.table.find("tbody");
        this.modal = new EditUserModal("#user-form-modal");
    }

    fillTable(users) {
        this.body.text("");

        users.forEach(user => {
            let authorities = "";
            user.authorities.forEach(item => {
                const authority = item.authority.replace("ROLE_", "")
                authorities += " " + authority;
            })

            authorities = authorities.trim();

            const userRow = `
                <tr>
                    <td data-name="id">${user.id}</td>
                    <td data-name="firstName">${user.firstName}</td>
                    <td data-name="lastName">${user.lastName}</td>
                    <td data-name="age">${user.age}</td>
                    <td data-name="email">${user.email}</td>
                    <td data-name="authorities">${authorities}</td>
                    <td><button class="btn btn-primary user-info-table__button"
                                data-delete="false">Edit</button></td>
                    <td><button class="btn btn-danger user-info-table__button"
                                data-delete="true">Delete</button></td>
                </tr>
            `;


            this.body.append(userRow);
        });
    }

    addButtonListeners() {
        $(".user-info-table__button").on("click", (e) => this.clickButtonHandler(e));
    }

    clickButtonHandler(e) {
        const button = $(e.target);
        const isDeleteButton = !!button.data("delete");
        const tableRow = button.closest("tr");

        const data = {};

        $(tableRow).find("td[data-name]").each(function(idx, item) {
            const name = $(item).data("name");
            const value = $(item).text();

            if(name !== "authorities") {
                data[name] = value;
            } else {
                const rolesArr = value.split(" ");
                data[name] = value.split(" ");
            }
        })

        this.modal.show(data, isDeleteButton).then();
    }

    init(users) {
        this.fillTable(users);
        this.addButtonListeners();
    }
}