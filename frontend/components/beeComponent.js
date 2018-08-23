class BeeComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'beeComponent';

		//Create html elements
		this.name = document.createElement('h3');
		this.postBtn = document.createElement('button');
		this.todosBtn = document.createElement('button');

		//Add html elements
		this.container.appendChild(this.name);
		this.container.appendChild(this.postBtn);
		this.container.appendChild(this.todosBtn);

		//Add data to html elements
		this.name.innerHTML = this.model.name;
		this.postBtn.innerHTML = 'POSTS';
		this.todosBtn.innerHTML = 'TODOS';

		//Add event to html elements
		this.postBtn.onclick = this.postBtnClick.bind(this);
		this.todosBtn.onclick = this.todosBtnClick.bind(this);
	}

	postBtnClick(e) {
		this.dataManager.showSelectedBeePosts(this.model);
	}

	todosBtnClick(e) {
		this.dataManager.showSelectedBeeTodos(this.model);
	}
}