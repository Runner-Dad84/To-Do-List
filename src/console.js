//BASIC UTILITIES

//create new list
export const newList = (list) => {
    return list = [];
};

//push list to the array of lists
export function addList (list) {
    listArray.push(list);
    return listArray;
};

//create a task
export const newTodo = (Title, Due, Priority, Notes, Completed) => {
    return { Title, Due, Priority, Notes, Completed };
};

 //add task to list
export function addTask (list, item) {
     list.push(item);
     return list;
 };
 
 //remove item from list (console)
    export function removeTask (list, item) {
     list.splice(item, 1);
     return list;
 };

 //BASIC FUNCTIONS

 //pull list from array of lists by position
export function findList (i) {
    let target = listArray[i];
    return target;
};

//MAY not need: return existing list and replace within the array
function updateListArray (list) {
    let target = listArray.indexOf(list);
    listArray[target] = list;
};