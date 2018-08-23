class TodosComponent extends Component {
	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'todosComponent';

		this.newTodoBtn = document.createElement('button');
		this.todosContainer = document.createElement('div');

		this.container.appendChild(this.newTodoBtn);
		this.container.appendChild(this.todosContainer);

		this.newTodoBtn.innerHTML = 'New Todo';

		this.newTodoBtn.onclick = this.newTodoBtnClick.bind(this);

		// this.hide();
	}

	showBeeTodos() {

		this.todosContainer.innerHTML = '';

		if (this.dataManager.selectedBee.todos) {
			this.dataManager.selectedBee.todos.forEach(todo => {
				var todoComponent = new TodoComponent(todo, this.todosContainer, this.dataManager);
			});
		}
	}

	newTodoBtnClick(e) {
		e.preventDefault();
		this.dataManager.navManager.showNewTodoComponent();
	}

	//Override show
	show() {
		this.container.hidden = false;
		this.showBeeTodos();
	}
}