export default class UsersChangedEvent {

    static trigger() {
        const event = new CustomEvent("usersChanged");
        document.dispatchEvent(event);
    }
}