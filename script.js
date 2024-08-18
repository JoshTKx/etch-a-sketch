const container = document.createElement("div");
container.classList.toggle("container");
const body = document.querySelector("body");


const header = document.createElement("h1");
header.textContent = "Etch-a-Sketch";
const buttons = document.createElement("div");
buttons.classList.toggle("buttons");
const size = document.createElement("button");
size.classList.toggle("size");
size.textContent = "Change Size";
const rainbow = document.createElement("button");
rainbow.classList.toggle("rainbow");
rainbow.textContent = "Rainbow";
const eraser = document.createElement("button");
eraser.classList.toggle("eraser");
eraser.textContent = "Erase/Draw";
const clear = document.createElement("button");
clear.classList.toggle("clear");
clear.textContent = "Clear";

const footer = document.createElement("p");
footer.classList.toggle("footer");
footer.textContent = "Copyright © 2024 JTKX";



buttons.append(size);
buttons.append(rainbow);
buttons.append(eraser);
buttons.append(clear);

body.appendChild(header);
body.append(buttons);
body.appendChild(container);
body.appendChild(footer);


let er = false;
let rgb = false;
let mdown = false;

function draw(box,c){
    
    
    box.addEventListener("mousedown",() =>{
        if (c == "rgb"){
            let random_color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
            box.setAttribute("style","background: " + random_color);
        }
        else{
            box.setAttribute("style","background: " + c);
        }
        mdown = true;
    });
    box.addEventListener("mouseup",()=>{
        mdown = false;
    });
    box.addEventListener("mouseenter",()=>{
        if (mdown){
            if (c == "rgb"){
                let random_color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
                box.setAttribute("style","background: " + random_color);
            }
            else{
                box.setAttribute("style","background: " + c);
            }
        }
    });
    
}

for (let j = 0;j < 16; j++){
    let row = document.createElement("div");
    row.classList.toggle("row");
    for(let i = 0; i < 16; i++){
        let box = document.createElement("div");
        box.classList.toggle("box");
        draw(box,"#272727");
        row.appendChild(box);
        
    }
    container.appendChild(row);
}

size.addEventListener("click", ()=>{
    let s = prompt("Choose new size (1-100): ");
    if (s == 0 || s == null){
        return;
    }
    s = Math.max(0,Math.min(100,s));
    

    while (container.lastChild){
        container.removeChild(container.lastChild);
    };
    
    
    for (let j = 0;j < s; j++){
        let row = document.createElement("div");
        row.classList.toggle("row");
        for(let i = 0; i < s; i++){
            let box = document.createElement("div");
            box.classList.toggle("box");
            draw(box,"#272727");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    
    
});
rainbow.addEventListener("click", () =>{
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((b) =>{
        if (rgb == false){
            draw(b,"rgb");
        }
        else{
            draw(b,"#272727");
        }
    });
    if (rgb == false){
        rgb = true;
    }
    else{
        rgb = false;
    }
});

eraser.addEventListener("click",() =>{
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((b) =>{
        if (er == false){
        draw(b,"white"); 
        }
        else {
            draw(b,"#272727"); 
        }
    });
    if (er==false){
        er = true;
    }
    else{
        er = false;
    }
});

clear.addEventListener("click",() =>{
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((b) =>{
        b.setAttribute("style", "background: white;");
    });
});


