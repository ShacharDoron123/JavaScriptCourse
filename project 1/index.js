let selected;
document.getElementById("equles").onclick = function(){
    
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let result;

num1 = Number(num1);
num2 = Number(num2);

if(selected === "plus"){
    result = String( num1+num2);
}

if(selected === "minous"){
   result = String( num1-num2);
}

document.getElementById("result").textContent = result;

}

document.getElementById("plus").onclick = function(){
    selected = "plus"
}

document.getElementById("minous").onclick = function(){
    selected = "minous"
}


