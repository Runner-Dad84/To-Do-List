import { newTodo, addTask, findList, newList } from './console.js';
import { printList } from './DOM.js';

export const submitBtn = (() => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', event => {
        event.preventDefault();
        formTaskInput();

        //find the correct list
        let target = document.getElementById('table').title;
        let targetlist = findList(target);
        
        //push new item to list (console)
        targetlist.push(formTaskInput());
        
        //print list
        printList(targetlist);

        //clear
        formReset();

        //Toggle off the form
        let button = document.getElementById('addTask');
        let form = document.getElementById('todoForm');
        form.style.display="none";
    }
    )
}
)();

function formTaskInput (){
    const title = document.getElementById('title');
    const due = document.getElementById('due');
    const priority  = document.getElementById('priority');
    const notes = document.getElementById('notes');
    let newTask = newTodo(title.value, due.value, priority.value, notes.value);
    return newTask;
};

//reset form (DOM)
function formReset (){
    let form = document.getElementById('todoForm');
    return form.reset();

};


