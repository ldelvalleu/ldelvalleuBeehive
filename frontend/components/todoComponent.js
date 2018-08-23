class TodoComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'todoComponent';

		//Create html elements
		this.title = document.createElement('p');
		this.isCompleted = document.createElement('input');

		//Add html elements
		this.container.appendChild(this.title);
		this.container.appendChild(this.isCompleted);

		//Add data to html elements
		this.title.innerHTML = this.model.title;
		this.isCompleted.type = 'checkbox';

		if (this.model.completed) {
			this.isCompleted.checked = true;
			this.isCompleted.disabled = true;
		} else {
			this.isCompleted.onchange = this.isCompletedOnCheck.bind(this);
		}
	}

	isCompletedOnCheck() {
		this.model.completed = true;
		this.isCompleted.checked = true;
		this.isCompleted.disabled = true;
		this.dataManager.patchTodo(this.model);
	}
}