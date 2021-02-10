import UserInfoTable from './ui/UserInfoTableClass';
import UserApi from './api/UserApi';
import SaveUserForm from "./ui/SaveUserForm";


(async function(){
    await loadAdminUserTable();
    document.addEventListener("usersChanged", function () {
        loadAdminUserTable()
    });

    const saveUserForm = new SaveUserForm($("#new-user form"));
})();

async function loadAdminUserTable() {
    const userInfoTable = new UserInfoTable("#admin-page .user-info-table");
    const users = await new UserApi().loadAllUsers();
    userInfoTable.init(users);
}
