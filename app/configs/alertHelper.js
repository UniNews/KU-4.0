export class AlertHelper {
    static dropDown;
    static onClose;

    static setDropDown(dropDown) {
        this.dropDown = dropDown;
    }

    static alert(type, title, message) {
        if (this.dropDown) {
            this.dropDown.alertWithType(type, title, message);
        }
    }
}