var cleaner = require('deep-cleaner');

var router = {
	dataManager: null
};

router.process = function (request, response, method, path, query, dataManager) {

	this.dataManager = dataManager;

	switch (method) {
		case 'GET':
			this.get(request, response, path);
			break;
		case 'POST':
			this.post(request, response, path);
			break;
		case 'PATCH':
			this.patch(request, response, path);
			break;
		case 'DELETE':
			this.delete(request, response, query, path);
			break;
		default:
			break;
	}
};

router.get = function (request, response, path) {
	this.dataManager.load(path).then((data) => {

		response.writeHead(200, {
			'Content-Type':
				'application/json'
		});

		response.write(JSON.stringify(data));
		response.end();

	}).catch((err) => {
		console.log('Error loading data.', err);
	});
};

router.post = function (request, response, path) {

	let buffer = [];
	let model = null;

	request.on('data', (chunk) => {
		buffer.push(chunk);
	})

	request.on('end', () => {

		buffer = Buffer.concat(buffer).toString();
		model = JSON.parse(buffer);

		this.dataManager.save(model, path).then(() => {
			response.writeHead(200);
			response.end();
		}).catch((err) => {
			console.log('Error saving model', err);
		});
	});
};

router.patch = function (request, response, path) {
	let buffer = [];
	let model = null;

	request.on('data', (chunk) => {
		buffer.push(chunk);
	})

	request.on('end', () => {

		buffer = Buffer.concat(buffer).toString();
		model = JSON.parse(buffer);

		this.dataManager.load(path).then((data) => {
			for (const element of data) {
				if (element.id == model.id) {
					element.completed = true;
					console.log(element.id);
					break;
				}
			}

			this.dataManager.saveFile(data, path).then(() => {
				response.writeHead(200);
				response.end();
			}).catch((err) => {
				console.log('Error saving on update model', err);
			});

		}).catch((err) => {
			console.log('Error loading on update model', err);
		});

		// this.dataManager.saveFile(model, name).then(() => {
		// 	response.writeHead(200);
		// 	response.end();
		// }).catch((err) => {
		// 	console.log('Error saving model', err);
		// });
	});
};

router.delete = function (request, response, query, path) {
	var id = query.query;
	//console.log(id);

	this.dataManager.load(path).then((data) => {

		for (const key in data) {
			if (data.hasOwnProperty(key)) {
				if (data[key].id === id) {
					delete data[key];
				}
			}
		}

		cleaner(data);

		this.dataManager.saveFile(data, path).then(() => {
			response.writeHead(200);
			response.end();
		}).catch((err) => {
			console.log('Error saving on update model', err);
		});

	}).catch((err) => {
		console.log('Error loading on update model', err);
	});

}

module.exports = router;