const todo = require('./todo.json');

// 1. Write a function that takes an array of todo objects and returns an array of the todo titles
//   (i.e. the `title` property of each todo object).
//  The returned array should be sorted alphabetically.

const myfun = (user) =>{
    const id = user.forEach(element => {
        element.id;
    });
     const data = id.sort((a,b) => a.id - b.id);
    return data;
}
console.log(myfun(todo))
