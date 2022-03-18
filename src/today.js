import {
  appendDisplayElement,
  createDisplayElement,
  clearTasks,
} from "./dom.js";
import { taskOperations } from "./tasks.js";

function getDate() {
  let date = new Date().toISOString().slice(0, 10);
  return date;
}

function displaytasksinToday() {
  let i = 1;
  let task_number = JSON.parse(localStorage.getItem("task_number"));
  let date = getDate();
  document.getElementById("display-tasks").innerHTML = "";
  while (i <= task_number) {
    if (localStorage.getItem(`${i}`)) {
      let object = JSON.parse(localStorage.getItem(`${i}`));

      if (object.duedate == date) {
        let display_element = createDisplayElement(object);
        appendDisplayElement("display-tasks", display_element);
      }
    }
    i++;
  }
  taskOperations().updateTasks();
  taskOperations().deleteTask();
  clearTasks();
}

function todayBtn() {
  document.getElementById("today-tasks").addEventListener("click", (event) => {
    displaytasksinToday();
  });
}

export { todayBtn, getDate };
