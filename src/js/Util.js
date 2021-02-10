export default class Util {
    static fillSelectElementOfRoles(element, roles, checkedRoles = null) {
        element = $(element);
        element.text("");

        roles.forEach((role) => {
            const valueAttribute = role.authority;
            const text = role.authority.replace("ROLE_", "");
            let selected = "";

            if(checkedRoles)
                selected = checkedRoles.includes(text) ? "selected" : "";

            const option = `<option ${selected} value="${valueAttribute}">
                                ${text}
                            </option>`;
            element.append(option);
        });
    }
}