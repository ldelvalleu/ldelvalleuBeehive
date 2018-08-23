class Bee {
    constructor(pUserId, pId, pTitle, pCompleted) {
       this.userId = pUserId;
       this.id = pId;
       this.title = pTitle;
       this.completed = pCompleted;
    }

    completeTodo(pState){
        this.completed = pState;
    }
}