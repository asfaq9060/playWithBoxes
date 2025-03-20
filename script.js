let bx1 = document.getElementById("box-1");
let bx2 = document.getElementById("box-2");
let bx3 = document.getElementById("box-3");
let bx4 = document.getElementById("box-4");


bx1.addEventListener("mouseenter", () =>{
    let rdm = Math.floor(Math.random() * 100);
    bx1.innerHTML = `<h1>${rdm}</h1>`;
});
bx1.addEventListener("mouseleave", () =>{
     bx1.innerHTML = `<h1>1</h1>`;
})


let color = "red";
bx2.addEventListener("mouseenter", () =>{
    if(color == "red"){
        bx2.style.backgroundColor = "red";
        color = "green"
    } else if (color == "green")
    {
        bx2.style.backgroundColor = "yellow";
        color = "blue";
    }
    else {
        bx2.style.backgroundColor = "blue";
        color = "red";
    }
});
bx2.addEventListener("mouseleave", () =>{
     bx2.style.backgroundColor = "white";
});





bx3.addEventListener("mouseenter", () =>{
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    bx3.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
});
bx3.addEventListener("mouseleave", () =>{
    bx3.style.backgroundColor = "white";
});




bx4.addEventListener("mouseenter", () =>{
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    bx1.style.backgroundColor = `rgb(255, ${r2}, ${r3})`;
    bx2.style.backgroundColor = `rgb(${r1}, 255, ${r3})`;
    bx3.style.backgroundColor = `rgb(${r1}, ${r2}, 255)`;
});
bx4.addEventListener("mouseleave", () =>{
    bx1.style.backgroundColor = "white";
    bx2.style.backgroundColor = "white";
    bx3.style.backgroundColor = "white";
});




