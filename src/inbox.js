import {appendDisplayElement, createDisplayElement} from "./dom";
import {taskOperations} from "./tasks.js";

function inboxOperations(){
}

function displayInbox(tasknumber){
    document.getElementById("display-tasks").innerHTML = "";
    for(let i=1; i < tasknumber; i++){
        let object = JSON.parse(localStorage.getItem(`${i}`));
        let display_element = createDisplayElement(object);
        console.log(display_element);
        appendDisplayElement("display-tasks",display_element);
    }

}

export {displayInbox};