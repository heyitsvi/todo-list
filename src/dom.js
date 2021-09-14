
function appendElementtoID(element,id){
    document.querySelector(`id`).appendChild(element);
}


function appendDisplayElement(id,object){
    document.getElementById(id).appendChild(object);
}


function createDisplayElement(object){
    let task = document.createElement('div');
    task.setAttribute("class","task-element");
    task.setAttribute("id",`task-number-${object["task_number"]}`)
    let check = document.createElement('button');
    check.setAttribute("id","check");
    check.innerHTML= `<span class="material-icons">
    done
    </span>`;
    let title = document.createElement('div');
    title.setAttribute("id","title");
    title.textContent=object["title"];
    let description = document.createElement('div');
    description.setAttribute("id","description");
    description.textContent=object["description"];
    let duedate = document.createElement('div');
    duedate.setAttribute("id","duedate");
    duedate.textContent = object["duedate"];
    let priority = document.createElement('div');
    priority.setAttribute("id","priority");
    priority.textContent = object["priority"];
    let close = document.createElement('button');
    close.setAttribute("id","update-task");
    close.innerHTML=`<span class="material-icons" style="font-size:20px;">
    edit
    </span>`;

    let list = [check,title,description,duedate,priority,close];

    list.forEach( child => {
        task.appendChild(child);
    })

    return task;
}





// function addTask

export {appendElementtoID,createDisplayElement,appendDisplayElement,};