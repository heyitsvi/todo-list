import {appendDisplayElement, createDisplayElement} from "./dom";
import {taskOperations} from "./tasks.js";

function displayInbox(){
    let i = 1;
    let task_number = JSON.parse(localStorage.getItem("task_number"));
    // console.log(task_number);
    // console.log(taskOperations().task_number);
    document.getElementById("display-tasks").innerHTML = "";
    while(i <= task_number){
        if (localStorage.getItem(`${i}`)){
            let object = JSON.parse(localStorage.getItem(`${i}`));
            // console.log(object.project == "Inbox");
    
            if (object.project == "Inbox"){
                let display_element = createDisplayElement(object);
                // console.log(display_element);
                appendDisplayElement("display-tasks",display_element);
            }
        }
        // else{
        //     continue label;
        // }
        i++;
    }
}

function InboxBtn(){
    document.getElementById("inbox").addEventListener("click", event => {
        displayInbox();
        taskOperations().updateTasks();

    })
}

// function inboxOperations(){
//     (function InboxBtn(){
//         document.getElementById("inbox").addEventListener("click", event => {
//             console.log("click");
//             displayInbox();
//             // updateTasks();
//             // checkifTaskDone();
//             // deleteTask();
//             // clearAllTasks();
//         })
//     })()


// }






export {displayInbox,InboxBtn};