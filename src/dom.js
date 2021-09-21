import {displayInbox} from "./inbox.js";
import {taskOperations} from "./tasks.js";




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
    // if (object.priority == "High" && object.check === false){
    //     task.style.backgroundColor = "#ef476f";
    // }
    // else if(object.priority == "Medium" && object.check === false){
    //     task.style.backgroundColor = "#06d6a0";

    // }
    // else if(object.priority == "Low" && object.check === false) {
    //     task.style.backgroundColor = "white";
    // }
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


function clearTasks() {
    // let children = document.getElementById("display-tasks").children;
    // let task_number = JSON.parse(localStorage.getItem('task_number'));
    // // console.log(task_number);
    // document.querySelector("#clear-tasks").addEventListener("click", event => {
    //     for(let i=0; i< children.length; i++){
    //         let num = children.item(i).id.split("-")[2];
    //         if (localStorage.getItem(`${num}`)){
    //             children.item(i).remove();
    //             localStorage.removeItem(`${num}`);
    //             task_number--;
    //             localStorage.setItem("task_number",task_number);
    //         }
    //     }
    // })
    let i = 1;
    let task_number = taskOperations().getTaskNumber();
    document.querySelector("#clear-tasks").addEventListener("click", event => {
        while(i <= task_number){
            if (localStorage.getItem(`${i}`)){
                localStorage.removeItem(`${i}`);
            }
            i++;
        }
    task_number = 1;
    localStorage.setItem("task_number","1");
    displayInbox();
    })
}


export {createDisplayElement,appendDisplayElement, clearTasks };