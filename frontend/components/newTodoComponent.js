class NewTodoComponent extends Component {
	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);

		this.container.className = 'newTodoComponent';

		this.form = document.createElement('form');
		this.title = document.createElement('input');
		this.okBtn = document.createElement('button');
		this.cancelBtn = document.createElement('button');

		this.container.appendChild(this.form);
		this.form.appendChild(this.title);
		this.form.appendChild(this.okBtn);
		this.form.appendChild(this.cancelBtn);

		this.hide();

		this.okBtn.innerHTML = 'OK';
		this.cancelBtn.innerHTML = 'CANCEL';

		this.okBtn.onclick = this.okBtnClick.bind(this);
		this.cancelBtn.onclick = this.cancelBtnClick.bind(this);

		this.todosCounter = 100000;
	}

	okBtnClick(e) {

		this.todosCounter++;

		var todo = {
			userId: this.dataManager.selectedBee.id,
			id: this.todosCounter,
			title: this.title.value,
			completed: false
		}

		this.dataManager.sendTodo(todo);

		e.preventDefault();
		this.form.reset();
	}

	cancelBtnClick(e) {
		e.preventDefault();
		this.form.reset();
		this.dataManager.navManager.showTodosComponent();
	}
}