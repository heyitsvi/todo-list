(()=>{"use strict";function e(){let e=1,r=JSON.parse(localStorage.getItem("task_number"));for(document.getElementById("display-tasks").innerHTML="";e<=r;){if(localStorage.getItem(`${e}`)){let o=JSON.parse(localStorage.getItem(`${e}`));"Inbox"==o.project&&t("display-tasks",n(o))}e++}a().updateTasks(),a().deleteTask(),o()}function t(e,t){document.getElementById(e).appendChild(t)}function n(e){let t=document.createElement("div");!0===e.check&&(t.style.backgroundColor="cyan"),t.setAttribute("class","task-element"),t.setAttribute("id",`task-number-${e.task_number}`);let n=document.createElement("button");!0===e.check?n.innerHTML="":n.innerHTML='<span class="material-icons">\n        done\n        </span>',n.setAttribute("id",`check-${e.task_number}`),n.setAttribute("class","check");let o=document.createElement("div");o.setAttribute("id","title"),o.textContent=e.title;let r=document.createElement("div");r.setAttribute("id","description"),r.textContent=e.description;let c=document.createElement("div");c.setAttribute("id","duedate"),c.textContent=e.duedate;let a=document.createElement("div");a.setAttribute("id","priority"),a.textContent=e.priority;let l=document.createElement("button");l.setAttribute("id",`update-task-${e.task_number}`),l.setAttribute("class","updateTaskBtn"),l.innerHTML='<span class="material-icons" style="font-size:20px;">\n    edit\n    </span>';let u=document.createElement("button");return u.setAttribute("id",`close-task-${e.task_number}`),u.setAttribute("class","closeTaskBtn"),u.innerHTML='<span class="material-icons">\n    close\n    </span>',[n,o,r,c,a,l,u].forEach((e=>{t.appendChild(e)})),t}function o(){let t=1,n=a().getTaskNumber();document.querySelector("#clear-tasks").addEventListener("click",(o=>{for(;t<=n;)localStorage.getItem(`${t}`)&&localStorage.removeItem(`${t}`),t++;n=1,localStorage.setItem("task_number","1"),e()}))}function r(){let e=[];function r(e){let t=document.createElement("button");return t.setAttribute("id","project-number-1"),t.setAttribute("class","project-title"),t.style.height="30px",t.innerHTML=`<span class="material-icons">bookmarks </span> ${e}`,t}function c(){document.getElementById("project-container").classList.remove("show")}function l(e){let n=document.createElement("option");n.textContent=e;let o=document.createElement("option");o.textContent=e,t("project-selection-input-1",n),t("project-selection-input-2",o)}function u(){document.querySelectorAll(".project-title").forEach((e=>{e.addEventListener("click",(r=>{let c=JSON.parse(localStorage.getItem("task_number"));document.getElementById("display-tasks").textContent="";let l=e.textContent.replace("bookmarks  ",""),u=1;for(;u<=c;){if(localStorage.getItem(`${u}`)){let e=JSON.parse(localStorage.getItem(`${u}`));e.project==l&&t("display-tasks",n(e))}u++}a().updateTasks(),a().deleteTask(),o()}))}))}return function(){if(localStorage.getItem("Projects")){document.getElementById("project-list").textContent="";let e=JSON.parse(localStorage.getItem("Projects"));for(let n=0;n<e.length;n++)t("project-list",r(e[n]))}}(),document.getElementById("cancel-project-Btn").addEventListener("click",(e=>{c()})),document.getElementById("add-projectBtn").addEventListener("click",(e=>{document.getElementById("project-container").classList.add("show")})),document.getElementById("clear-projects").addEventListener("click",(t=>{document.getElementById("project-list").textContent="",e=[],localStorage.removeItem("Projects"),function(){let e=document.querySelector("#project-selection-input-1").children;for(let t=e.length-1;t>1;t--)e.item(t).remove();let t=document.querySelector("#project-selection-input-2").children;for(let e=t.length-1;e>1;e--)t.item(e).remove()}()})),setTimeout((function(){if(localStorage.getItem("Projects")){let e=JSON.parse(localStorage.getItem("Projects"));for(let t=0;t<e.length;t++)l(e[t])}}),100),u(),document.querySelector("#add-projectBtn").addEventListener("click",(n=>{document.querySelector("#add-project-Btn").addEventListener("click",(n=>{""!=document.getElementById("project-name").value==1?(t("project-list",r(document.getElementById("project-name").value)),function(){let t=document.getElementById("project-name").value;e.push(t),localStorage.setItem("Projects",JSON.stringify(e))}(),l(document.getElementById("project-name").value),document.getElementById("project-error").textContent="",c(),document.getElementById("project-name").value=""):document.getElementById("project-error").textContent="Please enter Project Name"}))})),{displaytasksinProject:u}}class c{constructor(e,t,n,o,r,c,a="Inbox"){this.title=e,this.description=t,this.duedate=n,this.priority=o,this.check=r,this.task_number=c,this.project=a}}function a(){const t=document.querySelector("#task-container"),n=document.querySelector("#update-task-container");let a;function l(){return""!=document.querySelector("#update-task-container").querySelector("#task-title-input").value&&""!=document.querySelector("#update-task-container").querySelector("#task-description-input").value&&""!=document.querySelector("#update-task-container").querySelector("#task-due-input").value&&""!=document.querySelector("#update-task-container").querySelector("#task-priority-input").value&&""!=document.querySelector("#update-task-container").querySelector("#project-selection-input-2").value&&{title:document.querySelector("#update-task-container").querySelector("#task-title-input").value,description:document.querySelector("#update-task-container").querySelector("#task-description-input").value,duedate:document.querySelector("#update-task-container").querySelector("#task-due-input").value,priority:document.querySelector("#update-task-container").querySelector("#task-priority-input").value,project:document.querySelector("#update-task-container").querySelector("#project-selection-input-2").value}}function u(e){localStorage.setItem(`${e.task_number}`,JSON.stringify(e))}function i(){document.querySelector("#task-title-input").value="",document.querySelector("#task-description-input").value="",document.querySelector("#task-due-input").value="",document.querySelector("#task-priority-input").value="",document.querySelector("#project-selection-input-1").value=""}function s(){document.querySelectorAll(".closeTaskBtn").forEach((e=>{e.addEventListener("click",(t=>{let n=e.id.split("-")[2];document.getElementById(`task-number-${n}`)&&(document.getElementById(`task-number-${n}`).remove(),function(e){localStorage.removeItem(e)}(n))}))}))}function d(){document.querySelectorAll(".updateTaskBtn")&&document.querySelectorAll(".updateTaskBtn").forEach((e=>{e.addEventListener("click",(t=>{let o=e.id.split("-")[2];(function(e){let t=document.getElementById(e).querySelector("#title").textContent,n=document.getElementById(e).querySelector("#description").textContent,o=document.getElementById(e).querySelector("#duedate").textContent,r=document.getElementById(e).querySelector("#priority").textContent,c=function(e){let t=JSON.parse(localStorage.getItem(`${e}`));return{title:t.title,description:t.description,duedate:t.duedate,priority:t.priority,check:t.check,num:t.task_number,project:t.project}}(e.split("-")[2]).project;document.querySelector("#update-task-container").querySelector("#task-title-input").value=t,document.querySelector("#update-task-container").querySelector("#task-description-input").value=n,document.querySelector("#update-task-container").querySelector("#task-due-input").value=o,document.querySelector("#update-task-container").querySelector("#task-priority-input").value=r,document.querySelector("#update-task-container").querySelector("#project-selection-input-2").value=c})(`task-number-${o}`),n.classList.add("show"),document.querySelector("#update-submit-task").addEventListener("click",(e=>{!1!==l()?(function(e,t){let n=JSON.parse(localStorage.getItem(`${e}`));n.title=t.title,n.description=t.description,n.duedate=t.duedate,n.priority=t.priority,n.project=t.project,localStorage.setItem(`${e}`,JSON.stringify(n))}(o,l()),function(e){let t=JSON.parse(localStorage.getItem(`${e}`));document.querySelector(`#task-number-${e}`).querySelector("#title").textContent=t.title,document.querySelector(`#task-number-${e}`).querySelector("#description").textContent=t.description,document.querySelector(`#task-number-${e}`).querySelector("#duedate").textContent=t.duedate,document.querySelector(`#task-number-${e}`).querySelector("#priority").textContent=t.priority}(o),p(),S("update-task-container")):k("update-task-container")}))}))}))}function m(){return JSON.parse(localStorage.getItem("task_number"))}function p(){n.classList.remove("show")}function y(){t.classList.remove("show")}function k(e){document.getElementById(e).querySelector("#error-message").textContent="Please enter all the fields"}function S(e){document.getElementById(e).querySelector("#error-message").textContent=""}function g(){document.querySelector("#clear-tasks").classList.add("show")}function q(){document.querySelectorAll(".check").forEach((e=>e.addEventListener("click",(t=>{let n=e.id.split("-")[1];document.getElementById(`task-number-${n}`).style["background-color"]="cyan",document.getElementById(`check-${n}`).textContent="",function(e){let t=JSON.parse(localStorage.getItem(`${e}`));t.check=!0,u(t)}(n)}))))}return a=localStorage.getItem("task_number")?m():1,s(),d(),document.querySelector("#add-taskBtn").addEventListener("click",(e=>{t.classList.add("show"),S("task-container")})),document.querySelector("#cancel-task").addEventListener("click",(e=>{y(),i()})),document.querySelector("#update-cancel-task").addEventListener("click",(e=>{p()})),setTimeout(q(),100),document.querySelector("#submit-task").addEventListener("click",(t=>{1==!!(document.querySelector("#task-title-input").value&&document.querySelector("#task-description-input").value&&document.querySelector("#task-due-input").value&&""!==document.querySelector("#task-priority-input").value&&""!==document.querySelector("#project-selection-input-1").value)?(u(function(){let e={title:document.querySelector("#task-title-input").value,task_description:document.querySelector("#task-description-input").value,task_due:document.querySelector("#task-due-input").value,task_priority:document.querySelector("#task-priority-input").value,project:document.querySelector("#project-selection-input-1").value},t=new c(e.title,e.task_description,e.task_due,e.task_priority,!1,a,e.project);return a++,localStorage.setItem("task_number",JSON.stringify(a)),t}()),y(),S("task-container"),e(),d(),q(),g(),i(),o(),r().displaytasksinProject()):k("task-container")})),g(),{updateTasks:d,deleteTask:s,getTaskNumber:m}}!function(){const c=document.querySelector("#submit-name"),l=document.querySelector("#modal-container");function u(){document.querySelector("#name").innerText=localStorage.username}localStorage.getItem("username")?u():(l.classList.add("show"),c.addEventListener("click",(e=>{let t=document.querySelector("#name-input").value;""==t&&(t="Guest"),localStorage.setItem("username",`${t}`),u(),l.classList.remove("show")}))),e(),document.getElementById("inbox").addEventListener("click",(t=>{e()})),document.getElementById("today-tasks").addEventListener("click",(e=>{!function(){let e=1,r=JSON.parse(localStorage.getItem("task_number")),c=(new Date).toISOString().slice(0,10);for(document.getElementById("display-tasks").innerHTML="";e<=r;){if(localStorage.getItem(`${e}`)){let o=JSON.parse(localStorage.getItem(`${e}`));o.duedate==c&&t("display-tasks",n(o))}e++}a().updateTasks(),a().deleteTask(),o()}()})),document.getElementById("weekly-tasks").addEventListener("click",(e=>{!function(){let e=1,r=JSON.parse(localStorage.getItem("task_number")),[c,l]=function(){let e=new Date,t=new Date;if(0==e.getDay())return t.setDate(e.getDate()-6),[t,e];for(;0!=e.getDay();)e.setDate(e.getDate()+1);return t.setDate(e.getDate()-6),[t,e]}();for(document.getElementById("display-tasks").innerHTML="";e<=r;){if(localStorage.getItem(`${e}`)){let o=JSON.parse(localStorage.getItem(`${e}`)),r=new Date(o.duedate);r.getTime()>=c.getTime()&&r.getTime()<=l.getTime()&&t("display-tasks",n(o))}e++}a().updateTasks(),a().deleteTask(),o()}()})),o(),a(),r()}()})();