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


 if(dialog.open == true){
  dialog.open = false;
 }
 else{dialog.open = true;}
 
});

add_it.addEventListener("click",()=>{
    
let ebook = new book();
    array.push(ebook);
    document.forms[0].reset();
    let container = document.createElement("dialog");


    for(let key in array[0]){
      if(key == "url"){break;}
      let div = document.createElement("div");
      let element = document.createTextNode(array[0][key]);
      div.appendChild(element);
      container.appendChild(div);
    }
    let img = document.createElement("img");
    img.src = ebook.url;
    let div = document.createElement("div");
    div.appendChild(container);
    div.appendChild(img);
    main.appendChild(div);

    let dialogbutton = document.createElement("button");
    dialogbutton.textContent = "Info";
    dialogbutton.classList.add("info");
    let div1 = document.createElement("div");
    div1.classList.add("div1");

    div1.appendChild(dialogbutton);
    div.appendChild(div1);


     dialogbutton.addEventListener("click",()=>{
     if(container.open == true){
      container.open = false;
     }
     else{container.open = true;}
    });
    
    let Delete = document.createElement("button");
    Delete.classList.add("delete");
    Delete.textContent = "Delete";
    div1.appendChild(Delete);
    div.appendChild(div1);

    Delete.addEventListener("click",()=>{
      div.remove();
    });
 let read = document.createElement("button");
 read.textContent = "read";
 read.addEventListener("click",()=>{
  if(read.textContent == "read"){
    read.textContent = "Didnt";
    read.style.backgroundColor = "red";
  }
  else{
    read.textContent = "read";
    read.style.backgroundColor = "cadetblue";
  }
 });
 div1.appendChild(read);


 });

