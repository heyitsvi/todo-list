
class tasks{
    constructor(title, info, duedate, priority,check){
        this.title = title;
        this.info = info;
        this.duedate = duedate;
        this.priority = priority;
        this.check = check;
    }
}

function taskOperations(){
    const taskcontainer = document.querySelector("#task-container");

    function createTaskElement(){
    }

    function showTaskContainer(){
        taskcontainer.classList.add('show');
    }
    
    function hideTaskContainer(){
        taskcontainer.classList.remove('show');
    }

    (function taskBtnClick(){
        document.querySelector("#add-taskBtn").addEventListener("click", event => {
            showTaskContainer();
        });
    })();

    (function cancelBtnClick(){
        document.querySelector("#cancel-task").addEventListener("click", event => {
            hideTaskContainer();
        });
    })();
}



function hideTaskInput(){

}



export {taskOperations};

// function getTasks(){

// }