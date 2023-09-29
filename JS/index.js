 let input = document.getElementById("form");
 let section = document.getElementById("todo");

 let render = (todos) => {

     section.innerText = ""
     todos.map((todo, index) => {
         section.innerHTML += `
            <div class="chat">
            <h3>${todo}</h3>
            <div class="btn">
            <a href="#" class="btn-1" onclick="editval(${index})">EDIT</a>
       <a href="#" class="btn-2" onclick="deleteval(${index})">DELETE </a>

       </div>
       </div>`

     })

 }


 let deleteval = (index) => {
     addtodo.splice(index, 1);
     render(addtodo);
     
 }


 let editval = (id) => {
     let edit = addtodo[id];
     let editpro = prompt("Upadting...", edit);
     addtodo.splice(id, 1, editpro)
     render(addtodo);

 }
 let addtodo = [];


 input.addEventListener("submit", (e) => {
     e.preventDefault()
     let todo = e.target.search.value;

     addtodo.push(todo);
     render(addtodo)
     input.reset()


     let btn = document.getElementById("btn2");
     btn.addEventListener("click", () => {
         section.innerHTML = "";
     })

 })