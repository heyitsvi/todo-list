import {
  appendDisplayElement,
  createDisplayElement,
  clearTasks,
} from "./dom.js";
import { taskOperations } from "./tasks.js";
// import {getDate} from "./today.js";

function getThisWeekDates() {
  let today = new Date();
  let firstDay = new Date();

  if (today.getDay() == 0) {
    firstDay.setDate(today.getDate() - 6);
    return [firstDay, today];
  } else {
    while (today.getDay() != 0) {
      today.setDate(today.getDate() + 1);
    }
  }
  firstDay.setDate(today.getDate() - 6);
  return [firstDay, today];
}

function displaytasksThisWeek() {
  let i = 1;
  let task_number = JSON.parse(localStorage.getItem("task_number"));
  let [mon, sun] = getThisWeekDates();

  document.getElementById("display-tasks").innerHTML = "";
  while (i <= task_number) {
    if (localStorage.getItem(`${i}`)) {
      let object = JSON.parse(localStorage.getItem(`${i}`));
      let objdate = new Date(object.duedate);
      if (
        objdate.getTime() >= mon.getTime() &&
        objdate.getTime() <= sun.getTime()
      ) {
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

function thisWeekBtn() {
  document.getElementById("weekly-tasks").addEventListener("click", (event) => {
    displaytasksThisWeek();
  });
}

export { thisWeekBtn };
