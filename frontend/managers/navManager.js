class NavManager {

	constructor(dataManager) {
		this.dataManager = dataManager;
		this.beesComponent = document.getElementById('beesComponent');
		this.beeActivityComponent = document.getElementById('beeActivityComponent');
		this.postsComponent = new PostsComponent(this.dataManager.selectedBee, this.beeActivityComponent, this.dataManager);
		this.todosComponent = new TodosComponent(this.dataManager.selectedBee, this.beeActivityComponent, this.dataManager);
		this.newPostComponent = new NewPostComponent(null, this.beeActivityComponent, this.dataManager);
		this.newCommentComponent = new NewCommentComponent(null, this.beeActivityComponent, this.dataManager);
		this.newTodoComponent = new NewTodoComponent(null, this.beeActivityComponent, this.dataManager);

		this.todosComponent.hide();
	}

	showBees() {
		this.dataManager.bees.forEach(bee => {
			var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
		});
	}

	showNewPostComponent() {
		this.postsComponent.hide();
		this.todosComponent.hide();

		this.newPostComponent.show();
		this.newTodoComponent.hide();
		this.newCommentComponent.hide();
	}

	showNewCommentComponent(post) {
		this.newCommentComponent.model = post;
		this.postsComponent.hide();
		this.todosComponent.hide();

		this.newPostComponent.hide();
		this.newTodoComponent.hide();
		this.newCommentComponent.show();
	}

	showPostsComponent() {
		this.postsComponent.show();
		this.todosComponent.hide();

		this.newPostComponent.hide();
		this.newTodoComponent.hide();
		this.newCommentComponent.hide();
	}

	showTodosComponent() {
		this.postsComponent.hide();
		this.todosComponent.show();

		this.newPostComponent.hide();
		this.newTodoComponent.hide();
		this.newCommentComponent.hide();
	}

	showNewTodoComponent() {
		this.postsComponent.hide();
		this.todosComponent.hide();

		this.newPostComponent.hide();
		this.newTodoComponent.show();
		this.newCommentComponent.hide();
		//Show newTodoComponent
	}
}