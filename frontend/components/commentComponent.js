class CommentComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'commentComponent';

		//Create html elements
		this.name = document.createElement('h4');
		this.body = document.createElement('p');

		//Add html elements
		this.container.appendChild(this.name);
		this.container.appendChild(this.body);

		//Add data to html elements
		this.name.innerHTML = this.model.name;
		this.body.innerHTML = this.model.body;
		//Add event to html elements
	}
}