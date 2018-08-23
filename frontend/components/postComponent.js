class PostComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'postComponent';

		//Create html elements
		this.title = document.createElement('h3');
		this.body = document.createElement('p');
		this.addCommentBtn = document.createElement('button');
		this.deleteBtn = document.createElement('button');

		//Add html elements
		this.container.appendChild(this.title);
		this.container.appendChild(this.body);
		this.container.appendChild(this.addCommentBtn);
		this.container.appendChild(this.deleteBtn);

		//Add data to html elements
		this.title.innerHTML = this.model.title;
		this.body.innerHTML = this.model.body;
		this.addCommentBtn.innerHTML = 'ADD COMMENT';
		this.deleteBtn.innerHTML = 'Delete';


		//Add event to html elements
		this.addCommentBtn.onclick = this.addCommentBtnClick.bind(this);
		this.deleteBtn.onclick = this.deleteBtnClick.bind(this);

		this.addComments();

	}

	addComments() {
		this.model.comments.forEach(comment => {
			var commentComponent = new CommentComponent(comment, this.container, this.dataManager);
		});
	}

	addCommentBtnClick() {
		// console.log(this.model.comments);
		// var comment = { postId: this.model.id, id: 0, name: "New Comment", email: "Laurie@lincoln.us", body: "Perferendis omnis esse↵voluptate sit mollitia sed …um qui↵vel quis nisi doloribus animi odio id quas" };
		// this.model.comments.push(comment);
		this.dataManager.navManager.showNewCommentComponent(this.model);
		//this.dataManager.navManager.showBeePosts();
	}

	deleteBtnClick() {
		this.dataManager.deletePost(this.model.id);
	}
}