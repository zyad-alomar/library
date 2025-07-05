let add = document.getElementById("add");
let dialog = document.getElementById("dialog");
let add_it = document.getElementById("add-it");
let main = document.getElementById("main");


let array = [];

function book() {
 this.title = document.getElementById("title").value;
 this.author = document.getElementById("author").value;
 this.pages = document.getElementById("pages").value;
 this.url = document.getElementById("cover").value;
}

add.addEventListener("click",()=>{
 dialog.open = true;
 add_it.addEventListener("click",()=>{
    
let ebook = new book();
    array.push(ebook);
    document.forms[0].reset();
    let container = document.createElement("div");


    for(let key in array[0]){
      let div = document.createElement("div");
      let element = document.createTextNode(array[0][key]);
      div.appendChild(element);
      container.appendChild(div);

    }
    main.appendChild(container);
 });
});

