class Bee {
    constructor(pId, pName, pUsername, pEmail, pAddress, pPhone, pWebsite) {
        this.id = pId;
        this.name = pName;
        this.username = pUsername;
        this.email = pEmail;
        this.address = pAddress;
        this.phone = pPhone;
        this.website = pWebsite;
        this.company = null;
        this.posts = [];
        this.todos = [];
    }
}