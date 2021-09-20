import {displayInbox} from "./inbox.js";




function appendDisplayElement(id,object){
    document.getElementById(id).appendChild(object);
}


function createDisplayElement(object){
    let task = document.createElement('div');
    if (object.check === true){
        task.style.backgroundColor = "cyan";
    }
    task.setAttribute("class","task-element");
    task.setAttribute("id",`task-number-${object["task_number"]}`)
    let check = document.createElement('button');
    if (object.check === true){
        check.innerHTML = "";
    }
    else{
        check.innerHTML= `<span class="material-icons">
        done
        </span>`;
    }
    check.setAttribute("id",`check-${object["task_number"]}`);
    check.setAttribute("class","check");
    let title = document.createElement('div');
    title.setAttribute("id","title");
    title.textContent=object["title"];
    let description = document.createElement('div');
    description.setAttribute("id","description");
    description.textContent=object["description"];
    let duedate = document.createElement('div');
    duedate.setAttribute("id","duedate");
    duedate.textContent = object["duedate"];
    let priority = document.createElement('div');
    priority.setAttribute("id","priority");
    priority.textContent = object["priority"];
    let update = document.createElement('button');
    update.setAttribute("id",`update-task-${object["task_number"]}`);
    update.setAttribute("class","updateTaskBtn");
    update.innerHTML=`<span class="material-icons" style="font-size:20px;">
    edit
    </span>`;

    let close = document.createElement("button");
    close.setAttribute("id",`close-task-${object["task_number"]}`);
    close.setAttribute("class","closeTaskBtn");

    close.innerHTML = `<span class="material-icons">
    close
    </span>`


    let list = [check,title,description,duedate,priority,update,close];

    list.forEach( child => {
        task.appendChild(child);
    })

    return task;
}

// function 



function appendWarning(){
    
}



// function showClearTasksBtn(){
//     document.querySelector("#clear-tasks").classList.add('show');
// }





// function addTask

export {createDisplayElement,appendDisplayElement, };