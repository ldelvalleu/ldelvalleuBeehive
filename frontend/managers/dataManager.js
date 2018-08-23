class DataManager {

	constructor() {
		this.bees = [];
		this.selectedBee = null;
		this.user = null;
		this.navManager = new NavManager(this);
		this.netManager = new NetManager(this, this.navManager);
	}

	addPostToBee(post) {
		this.bees.forEach(bee => {
			if (bee.id == post.userId) {
				if (bee.posts) {
					bee.posts.push(post);
					return;
				} else {
					bee.posts = [];
					bee.posts.push(post);
					return;
				}
			}
		});
	}

	addCommentToPost(comment) {
		this.bees.forEach(bee => {
			if (bee.posts) {
				bee.posts.forEach(post => {
					if (post.id == comment.postId) {
						if (post.comments) {
							post.comments.push(comment);
						} else {
							post.comments = [];
							post.comments.push(comment);
						}
					}
				});
			}
		});
	}

	addTodoToBee(todo) {
		this.bees.forEach(bee => {
			if (bee.id == todo.userId) {
				if (bee.todos) {
					bee.todos.push(todo);
					return;
				} else {
					bee.todos = [];
					bee.todos.push(todo);
					return;
				}
			}
		});
	}

	showSelectedBeePosts(bee) {
		this.selectedBee = bee;
		this.navManager.showPostsComponent();
	}

	showSelectedBeeTodos(bee) {
		this.selectedBee = bee;
		this.navManager.showTodosComponent();
	}

	sendPost(post) {
		this.netManager.sendPost(post);
	}

	deletePost(id) {
		this.netManager.deletePost(id);
	}

	sendComment(post, comment) {
		this.netManager.sendComment(post, comment);
	}

	sendTodo(todo) {
		this.netManager.sendTodo(todo);
	}

	patchTodo(todo) {
		this.netManager.patchTodo(todo);
	}
}