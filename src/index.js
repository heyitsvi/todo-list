import {createTaskElement, taskOperations} from "./tasks.js";
import {appendElementtoID,clearTasks} from "./dom.js";
import {displayInbox, InboxBtn} from "./inbox.js";
import {ProjectOperations} from "./project.js";
import {todayBtn} from "./today.js";
import{thisWeekBtn} from "./thisweek.js";

(function pageload(){
    const submitBtn = document.querySelector("#submit-name");
    const modalcontainer = document.querySelector("#modal-container");


    function getName(){
        submitBtn.addEventListener("click",event => {
            let _username = document.querySelector("#name-input").value;
            if (_username == ""){
                _username = "Guest";
            }
            localStorage.setItem("username",`${_username}`);
            setName();
            hideContainer();
        })
    }

    function showContainer(){
        modalcontainer.classList.add('show');
    }

    function hideContainer(){
        modalcontainer.classList.remove('show');
    }

    function setName(){
        document.querySelector("#name").innerText  = localStorage.username;
    }

    (function checkUsername(){
        if(!localStorage.getItem('username')){
            showContainer();
            getName();
        }
        else{
            setName();
        }

    })()

    displayInbox();

    InboxBtn();

    todayBtn();

    thisWeekBtn();

    clearTasks();

    taskOperations();

    ProjectOperations();

})()



