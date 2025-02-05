const container = document.createElement("div");
container.classList.add("container");

const toolbox = document.createElement("div");
toolbox.classList.add("toolbox");

const numberOfDiv = 58;

for (let i = 0; i < Math.pow(numberOfDiv,2); i++){
    const div = document.createElement("div");
    div.classList.add("box");

    div.addEventListener("mouseover",()=>{div.style.backgroundColor = penColor;})
    
    container.appendChild(div);
}

document.body.appendChild(container);

const boxes = document.querySelectorAll(".box");
let penColor = "black";


const reset = document.createElement("button");
reset.classList.add("reset")
reset.textContent = "Reset";
reset.addEventListener("click",()=>{
    
    boxes.forEach(box => (box.style.backgroundColor = "white"))
})
toolbox.appendChild(reset);

const black = document.createElement("button");
black.classList.add("black","color")
black.addEventListener("click",()=>{penColor = "black";
})
toolbox.appendChild(black);

const red = document.createElement("button");
red.classList.add("red", "color")
red.addEventListener("click",()=>{penColor = "red";
})
toolbox.appendChild(red);

const blue = document.createElement("button");
blue.classList.add("blue","color")
blue.addEventListener("click",()=>{penColor = "blue";
})
toolbox.appendChild(blue);

document.body.appendChild(toolbox)
