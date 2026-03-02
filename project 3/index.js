document.getElementById("red").onclick = function(){
    document.body.style.backgroundColor = "red";
}
document.getElementById("blue").onclick = function(){
    document.body.style.backgroundColor = "blue";
}
document.getElementById("green").onclick = function(){
    document.body.style.backgroundColor = "green";
}
document.getElementById("ran").onclick = function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
document.getElementById("Send").onclick = function(){
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}


