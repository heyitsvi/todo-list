import {appendDisplayElement, createDisplayElement} from "./dom";
import {taskOperations} from "./tasks.js";

function inboxOperations(){
}

function InboxBtn(){
    document.getElementById("inbox").addEventListener("click", event => {
        displayInbox();
    })
}

function displayInbox(){
    let i = 1;
    document.getElementById("display-tasks").innerHTML = "";
    while(localStorage.getItem(`${i}`)){
        let object = JSON.parse(localStorage.getItem(`${i}`));
        // console.log(object.project == "Inbox");

        if (object.project == "Inbox"){
            let display_element = createDisplayElement(object);
            // console.log(display_element);
            appendDisplayElement("display-tasks",display_element);
        }
        i++;
    }
}

export {InboxBtn,displayInbox};