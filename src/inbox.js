import {appendDisplayElement, createDisplayElement} from "./dom";
import {taskOperations} from "./tasks.js";

function displayInbox(){
    let i = 1;
    let task_number = JSON.parse(localStorage.getItem("task_number"));
    document.getElementById("display-tasks").innerHTML = "";
    while(i <= task_number){
        if (localStorage.getItem(`${i}`)){
            let object = JSON.parse(localStorage.getItem(`${i}`));
            if (object.project == "Inbox"){
                let display_element = createDisplayElement(object);
                appendDisplayElement("display-tasks",display_element);
            }
        }
        i++;
    }
}

function InboxBtn(){
    document.getElementById("inbox").addEventListener("click", event => {
        displayInbox();
        taskOperations().updateTasks();

    })
}


export {displayInbox,InboxBtn};