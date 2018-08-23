class PostsComponent extends Component {
	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'postsComponent';

		this.newPostBtn = document.createElement('button');
		this.postsContainer = document.createElement('div');

		this.container.appendChild(this.newPostBtn);
		this.container.appendChild(this.postsContainer);

		this.newPostBtn.innerHTML = 'New Post';

		this.newPostBtn.onclick = this.newPostBtnClick.bind(this);

		// this.hide();
	}

	showBeePosts() {

		if (this.dataManager.user.id != this.dataManager.selectedBee.id) {
			this.newPostBtn.hidden = true;
		} else {
			this.newPostBtn.hidden = false;
		}

		this.postsContainer.innerHTML = '';

		if (this.dataManager.selectedBee.posts) {
			this.dataManager.selectedBee.posts.forEach(post => {
				var postComponent = new PostComponent(post, this.postsContainer, this.dataManager);
			});
		}
	}

	newPostBtnClick(e) {
		e.preventDefault();
		this.dataManager.navManager.showNewPostComponent();
	}

	//Override show
	show() {
		this.container.hidden = false;
		this.showBeePosts();
	}
}