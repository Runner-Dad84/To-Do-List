import { newList, addList, findList, addTask, removeTask } from './console.js'


//Project button
export const projectBtn = (() => {
    let button = document.getElementById('new');
   
    button.addEventListener('click', ()=> {
        //create list from prompt
        let message = prompt('What Is Your List Name?')
        let list = newList(message);
        projBtn();

        //add list to listArray
        addList(list);

         //stores this list position in listArray
         let listPos = listArray.length - 1;

        //create project button (DOME)
        const projectNameBtn= (()=> {
            const ul = document.getElementById('projectList');
            const li = document.createElement('li');
            const button = document.createElement('button');
            const table = document.getElementById('table');
            button.innerText = message;
            button.className = "projectBtn";
            
            //event listener for project button
            button.addEventListener('click', () => {
                //obtain current number
                let targetlist = findList(listPos);
                //print this list
                if (listArray.length === 1) {
                    table.title = listPos;
                } else if ((listArray.length > 1) && (targetlist.length === 0)) {
                    table.title = listPos;
                    clearTable();
                } else {
                    table.title = listPos;
                    clearTable();
                    printList(targetlist);
                };
            })
            li.appendChild(button);
            ul.appendChild(li);
        })();
    }
    )
})();

function projBtn (){
    let button = document.getElementById('addTask');
    let form = document.getElementById('todoForm');
    form.style.display="none";
    //toggle button
    button.addEventListener('click', () => {
    if (form.style.display==="none")
            {return form.style.display="grid"}
    })
    return button;
};


//print each task of the list to the table (first loop list row, second list details in td)
export function printList (list){
    const body = document.querySelector('tbody');
    let row;
    
    //clear prior data
    clearTable ();
    
    //print list with all items (loop is todo row, inner loop data td)
    const loop = (() => {
    for (let i = 0; i < list.length; i++){
        row = document.createElement('tr');
        row.className = "row";

        //create remove button for current row
        const rmvBtn = document.createElement('button');
        rmvBtn.classList = "rmvBtn";
        rmvBtn.innerText = "-";
        rmvBtn.onclick = "RemoveItem";
        const table = document.getElementById('table');

        rmvBtn.addEventListener('click', ()=> {
            //remove task from list (console)
            const targetList = table.title;
            const targetRow = rmvBtn.parentElement.rowIndex-1;
            removeTask(listArray[targetList], targetRow);
            //remove task from table (DOME)
            rmvBtn.parentElement.remove();
        });
        //inner loop for - print each cell with data (DOME)
        const keys = Object.keys(list[i]);
        for (let j = 0; j < keys.length-1; j++) {
            let cell = document.createElement('td');
            let cellText = document.createTextNode(list[i][keys[j]]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        row.appendChild(rmvBtn);
        body.appendChild(row);
    }
    })();
    
};

//clears rows and cells from tbody (DOME)
export function clearTable () {
    const rows = document.querySelectorAll('.row');
    for (const element of rows) {
        element.remove();
    }
};




