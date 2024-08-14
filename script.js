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


buttons.append(size);
buttons.append(rainbow);

body.appendChild(header);
body.append(buttons);
body.appendChild(container);



let mdown = false;
let rgb = false;
let eraser = false;
function draw(box){
    
    
    box.addEventListener("mousedown",() =>{
        box.setAttribute("style","background: #272727");
        mdown = true;
    });
    box.addEventListener("mouseup",()=>{
        mdown = false;
    });
    box.addEventListener("mouseenter",()=>{
        if (mdown){
            box.setAttribute("style","background: #272727");
        }
    });
    
}

for (let j = 0;j < 16; j++){
    const row = document.createElement("div");
    row.classList.toggle("row");
    for(let i = 0; i < 16; i++){
        const box = document.createElement("div");
        box.classList.toggle("box");
        draw(box);
        row.appendChild(box);
        
    }
    container.appendChild(row);
}

size.addEventListener("mousedown", ()=>{
    let s = prompt("Choose new size (1-100): ");
    s = Math.max(0,Math.min(100,s));
    

    while (container.lastChild){
        container.removeChild(container.lastChild);
    };
    let bsize = 40 * (16/s);
    
    for (let j = 0;j < s; j++){
        const row = document.createElement("div");
        row.classList.toggle("row");
        for(let i = 0; i < s; i++){
            let box = document.createElement("div");
            box.classList.toggle("box");
            box.setAttribute("style", "width: "+  bsize +"px;" + "height: "+  bsize +"px;");
            draw(box);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    
    draw();
    
});
