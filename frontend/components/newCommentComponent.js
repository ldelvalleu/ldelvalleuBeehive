class NewCommentComponent extends Component {
	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);

		this.container.className = 'newCommentComponent';

		this.form = document.createElement('form');
		this.title = document.createElement('input');
		this.body = document.createElement('input');
		this.okBtn = document.createElement('button');
		this.cancelBtn = document.createElement('button');

		this.container.appendChild(this.form);
		this.form.appendChild(this.title);
		this.form.appendChild(this.body);
		this.form.appendChild(this.okBtn);
		this.form.appendChild(this.cancelBtn);

		this.hide();

		this.okBtn.innerHTML = 'OK';
		this.cancelBtn.innerHTML = 'CANCEL';

		this.okBtn.onclick = this.okBtnClick.bind(this);
		this.cancelBtn.onclick = this.cancelBtnClick.bind(this);

		this.commentsCounter = 100000;
	}

	okBtnClick(e) {

		this.commentsCounter++;

		var comment = {
			postId: this.model.id,
			id: this.commentsCounter,
			name: this.title.value,
			email: this.dataManager.user.email,
			body: this.body.value
		}

		//this.model.comments.push(comment);
		this.dataManager.sendComment(this.model, comment);

		e.preventDefault();
		this.form.reset();
	}

	cancelBtnClick(e) {
		e.preventDefault();
		this.form.reset();
		this.dataManager.navManager.showPostsComponent();
	}
}