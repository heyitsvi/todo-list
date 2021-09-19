import {appendDisplayElement,createDisplayElement} from "./dom.js";


class Project{
    constructor(name){
        this.name = name;
    }
}



function ProjectOperations(){
    let project_list = [];
    let project_number = 1;

    function createProject(title){
        let project = new Project(title);
        return project;
    }

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
        // console.log(name);
        project_list.push(name);
        // console.log(project_list);
        // console.log(project_list);
        localStorage.setItem('Projects', JSON.stringify(project_list));
    }

    function createProjectElement(title){
        let div = document.createElement("button");
        div.setAttribute("id", `project-number-${project_number}`);
        div.setAttribute("class","project-title");
        div.style.height = "30px";
        // div.style.border = "solid black";
        div.innerHTML = `<span class="material-icons">bookmarks </span> ${title}`;
        // div.textContent = title;
        return div;
    }

    function clearError(){
        document.getElementById("project-error").textContent = '';
    }

    // function clearupdateError(){
    //     document.getElementById("update-task-container").querySelector("#project-error").textContent = '';
    // }

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
        appendDisplayElement("project-data-list",div);
    }
    
    function clearallProjectDataList(){
        let data_list = document.querySelector("#project-data-list").children;
        for(let i = data_list.length - 1; i > 0; i--){
            data_list.item(i).remove();
        }
    }

    (function clearAllProjects(){
        document.getElementById("clear-projects").addEventListener("click", event => {
            // console.log("click");
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
                document.getElementById("display-tasks").textContent = "";
                let project_name = project.textContent.replace("bookmarks  ","");
                // console.log(project_name);
                let i = 1;
                while(localStorage.getItem(`${i}`)){
                    let object = JSON.parse(localStorage.getItem(`${i}`));
                    // console.log(object.project == "Inbox");
            
                    if (object.project == project_name){
                        let display_element = createDisplayElement(object);
                        // console.log(display_element);
                        appendDisplayElement("display-tasks",display_element);
                    }
                    i++;
                }
                })
        }) 
    }

    displaytasksinProject();
  

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
                // displaytasksinProject();
            }
            else{
                displayProjectError();
            }
        })
    })

    
}


export {ProjectOperations};




