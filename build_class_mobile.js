class Mobile {
    constructor(battery,draft,inbox,send) {
        this.battery = battery;
        this.draft =draft;
        this.inbox = inbox;
        this.send = send;
    }
    charge() {
        return this.battery = 100;
    }
    textMessage(text) {
        this.draft = text;
    }
    showInbox() {
        return this.inbox;
    }
    showSend() {
        return this.send;
    }
    sendMessage(phone) {
        this.send.push(this.draft);
        phone.inbox.push(this.draft);
        this.draft="";
    }
}
let nokia = new Mobile(50,"",[],[]);
let iphone = new Mobile(60,"",[],[]);
