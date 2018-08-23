class Post {
	constructor(pUserId, pId, pTitle, pBody) {
		this.userId = pUserId;        
        this.id = pId;
		this.title = pTitle;
		this.body = pBody;
		this.comments = [];
	}
}