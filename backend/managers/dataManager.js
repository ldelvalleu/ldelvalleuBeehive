var fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');

var dataManager = {
	path: '../backend/data/'
};

dataManager.load = function (name) {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve(process.cwd(), this.path + name + '.json'), (err, data) => {
			if (err) {
				reject(err);
			} else {
				var json = JSON.parse(data);
				resolve(json);
			}
		});
	});
}

dataManager.save = function (model, name) {
	return new Promise((resolve, reject) => {
		this.load(name).then((data) => {

			model.id = uniqid();
			data.push(model);

			fs.writeFile(path.resolve(process.cwd(), this.path + name + '.json'), JSON.stringify(data), (err) => {
				if (err) {
					reject(err)
				} else {
					resolve();
				}
			});
		}).catch((err) => {
			console.log('Error loading posts on save.', err);
		});
	});
}

dataManager.saveFile = function (data, name) {
	return new Promise((resolve, reject) => {
		fs.writeFile(path.resolve(process.cwd(), this.path + name + '.json'), JSON.stringify(data), (err) => {
			if (err) {
				reject(err)
			} else {
				resolve();
			}
		});
	});
}

//Old methods
dataManager.loadUsers = function () {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve(process.cwd(), '../backend/data/users.json'), (err, data) => {
			if (err) {
				reject(err);
			} else {
				var users = JSON.parse(data);
				resolve(users);
			}
		});
	});
};

dataManager.loadPosts = function () {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve(process.cwd(), '../backend/data/posts.json'), (err, data) => {
			if (err) {
				reject(err);
			} else {
				var posts = JSON.parse(data);
				resolve(posts);
			}
		});
	});
};

dataManager.loadComments = function () {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve(process.cwd(), '../backend/data/comments.json'), (err, data) => {
			if (err) {
				reject(err);
			} else {
				var comments = JSON.parse(data);
				resolve(comments);
			}
		});
	});
}

dataManager.loadTodos = function () {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve(process.cwd(), '../backend/data/todos.json'), (err, data) => {
			if (err) {
				reject(err);
			} else {
				var todos = JSON.parse(data);
				resolve(todos);
			}
		});
	});
}


module.exports = dataManager;