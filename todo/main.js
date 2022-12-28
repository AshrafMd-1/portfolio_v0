let taskList = []


function removeList() {
    let btndl = document.getElementsByClassName("delete-btn");
    for (let i = 0; i < btndl.length; i++) {
        btndl[i].addEventListener("click", function () {
                this.parentNode.remove();
            }
        );
    }
}

function checkb() {
    let checkbox = document.getElementsByClassName("checks");
    let spn = document.getElementsByClassName("task");
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("change", e => {
                if (e.target.checked) {
                    spn[i].style.textDecoration = "line-through";
                } else {
                    spn[i].style.textDecoration = "none";
                }
            }
        );
    }
}

function addTask() {
    if (document.getElementById('input-task').value === "") {
    } else {
        let txt=document.getElementById('input-task').value;
        let data = document.createTextNode(txt);
        document.getElementById('input-task').value = "";

        let unord = document.getElementById('task-list');
        let list = document.createElement('li');
        let chk = document.createElement('input');

        chk.type = "checkbox";
        chk.className = "checks";

        let span = document.createElement('span');
        span.className = "task";

        let delb = document.createElement('button');
        delb.className = "delete-btn";
        let x = document.createTextNode("X");

        span.appendChild(data);
        list.appendChild(chk);
        list.appendChild(span);
        delb.appendChild(x);
        list.appendChild(delb);
        unord.appendChild(list);

        removeList();
        checkb();
        taskList.push(txt);
        console.log(taskList);
    }
}

let inputTask = document.getElementById('add-task-button');
inputTask.addEventListener('click', addTask);
document.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "enter") {
        addTask();
    }
})
