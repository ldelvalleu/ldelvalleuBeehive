class NewPostComponent extends Component {
	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'newPostComponent';

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

		this.title.type = 'text';
		this.body.type = 'text';
		this.okBtn.innerHTML = 'OK';
		this.cancelBtn.innerHTML = 'CANCEL';

		this.okBtn.onclick = this.okBtnClick.bind(this);
		this.cancelBtn.onclick = this.cancelBtnClick.bind(this);

		this.postsCounter = 100000;
	}

	okBtnClick(e) {

		this.postsCounter++;

		var post = {
			userId: this.dataManager.user.id,
			id: this.postsCounter,
			title: this.title.value,
			body: this.body.value,
			comments: []
		}

		this.dataManager.sendPost(post);

		e.preventDefault();
		this.form.reset();
	}

	cancelBtnClick(e) {
		e.preventDefault();
		this.form.reset();
		this.dataManager.navManager.showPostsComponent();
	}
}