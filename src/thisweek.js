import {appendDisplayElement, createDisplayElement, clearTasks} from "./dom.js";
import {taskOperations} from "./tasks.js";

function getWeek(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let week = [];
    
    for(let i = 0; i < 7; i++){
        let today = yyyy + '-' + mm + '-' + dd;
        week.push(today);
        dd = parseInt(dd);
        dd++;
    }

    return week
}

function displaytasksThisWeek(){
    let i = 1;
    let task_number = JSON.parse(localStorage.getItem("task_number"));
    let week = getWeek();  
    document.getElementById("display-tasks").innerHTML = "";
    while(i <= task_number){
        if (localStorage.getItem(`${i}`)){
            let object = JSON.parse(localStorage.getItem(`${i}`));
            if ((object.duedate == week[0]) ||
                (object.duedate == week[1]) ||
                (object.duedate == week[2]) ||
                (object.duedate == week[3]) ||
                (object.duedate == week[4]) ||
                (object.duedate == week[5]) ||
                (object.duedate == week[6])){
                let display_element = createDisplayElement(object);
                appendDisplayElement("display-tasks",display_element);
            }
        }
        i++;
    }
    taskOperations().updateTasks();
    taskOperations().deleteTask();
    clearTasks();

}

function thisWeekBtn(){
    document.getElementById("weekly-tasks").addEventListener("click", event => {
        displaytasksThisWeek();
    })
}

export{thisWeekBtn}