class Component {
	constructor(model, parent, dataManager) {
		this.model = model;
		this.parent = parent;
		this.dataManager = dataManager;
		this.container = document.createElement('div');
		this.parent.appendChild(this.container);
	}

	hide() {
		this.container.hidden = true;
	}

	show() {
		this.container.hidden = false;
	}
}