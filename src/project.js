import {appendDisplayElement,clearTasks,createDisplayElement} from "./dom.js";
import {taskOperations} from "./tasks.js";

function ProjectOperations(){
    let project_list = [];
    let project_number = 1;

    // function createProject(title){
    //     let project = new Project(title);
    //     return project;
    // }

    function checkProjectInput(){
        
        if (document.getElementById("project-name").value == ''){
            return false;
        } 
        else{
            return true;
        }
    }

    (function displayProjects(){
        if (localStorage.getItem("Projects")){
            document.getElementById("project-list").textContent = "";
            let list = JSON.parse(localStorage.getItem("Projects"));
            for(let i = 0; i < list.length; i++){
                appendDisplayElement("project-list",createProjectElement(list[i]));
            }
        }
    })()

    function storeProjectName(){
        let name = document.getElementById("project-name").value;
        project_list.push(name);
        localStorage.setItem('Projects', JSON.stringify(project_list));
    }

    function createProjectElement(title){
        let div = document.createElement("button");
        div.setAttribute("id", `project-number-${project_number}`);
        div.setAttribute("class","project-title");
        div.style.height = "30px";
        div.innerHTML = `<span class="material-icons">bookmarks </span> ${title}`;
        return div;
    }

    function clearError(){
        document.getElementById("project-error").textContent = '';
    }

    function displayProjectError(){
        document.getElementById("project-error").textContent = "Please enter Project Name";
    }

    function hideProjectContainer(){
        document.getElementById("project-container").classList.remove("show");
    }

    function clearInput(){
        document.getElementById("project-name").value = "";
    }

    (function cancelProjectBtn(){
        document.getElementById("cancel-project-Btn").addEventListener("click", event => {
            hideProjectContainer()});
    })()

    function showProjectContainer(){
        document.getElementById("project-container").classList.add("show");
    }

    (function displayProjectContainer(){
        document.getElementById("add-projectBtn").addEventListener("click", event => {
            showProjectContainer();
        })
    })()


    function createProjectDataList(value){
        let div = document.createElement('option');
        div.textContent = value;
        let div2 = document.createElement('option');
        div2.textContent = value;

        appendDisplayElement("project-selection-input-1",div);
        appendDisplayElement("project-selection-input-2",div2);

    }
    
    function clearallProjectDataList(){
        let data_list = document.querySelector("#project-selection-input-1").children;
        for(let i = data_list.length - 1; i > 0; i--){
            data_list.item(i).remove();
        }

        let data_list2 = document.querySelector("#project-selection-input-2").children;
        for(let i = data_list2.length - 1; i > 0; i--){
            data_list2.item(i).remove();
        }
    }

    (function clearAllProjects(){
        document.getElementById("clear-projects").addEventListener("click", event => {
            document.getElementById("project-list").textContent = "";
            project_list = [];
            localStorage.removeItem("Projects");
            clearallProjectDataList();
        })
    })()
    
    function getProjectDataList(){
        if (localStorage.getItem('Projects')){
            let projects = JSON.parse(localStorage.getItem('Projects'));
            for(let i = 0; i < projects.length; i++){
                createProjectDataList(projects[i]);
            }
        }
    }

    setTimeout(getProjectDataList,100);



    function displaytasksinProject(){
        document.querySelectorAll(".project-title").forEach(project => {
            project.addEventListener("click", event => {
                let task_number = JSON.parse(localStorage.getItem("task_number"));
                document.getElementById("display-tasks").textContent = "";
                let project_name = project.textContent.replace("bookmarks  ","");
                let i = 1;

                while(i <= task_number){
                    if (localStorage.getItem(`${i}`)){
                        let object = JSON.parse(localStorage.getItem(`${i}`));      
                        if (object.project == project_name){
                            let display_element = createDisplayElement(object);
                            appendDisplayElement("display-tasks",display_element);
                        }
                    }
                    i++;
                }
                taskOperations().updateTasks();
                taskOperations().deleteTask();
                // taskOperations().clearAllProjects();
                clearTasks();
                })
        }) 
    }

    displaytasksinProject();
    let addProjectBtn = () => {
        document.querySelector("#add-projectBtn").addEventListener("click", e => {
            document.querySelector("#add-project-Btn").addEventListener("click", event => {
                if (checkProjectInput() === true){
                    let title = document.getElementById("project-name").value
                    appendDisplayElement("project-list",createProjectElement(title));
                    storeProjectName();
                    createProjectDataList(document.getElementById("project-name").value);
                    clearError();
                    hideProjectContainer();
                    clearInput();
                }
                else{
                    displayProjectError();
                }
            })
        })
    }

    addProjectBtn();


}


export {ProjectOperations};




