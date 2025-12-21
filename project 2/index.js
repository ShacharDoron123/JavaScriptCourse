const decreaseBth = document.getElementById("decreaseBth");
const resetBtn = document.getElementById("resetBth");
const increaseBtn = document.getElementById("increaseBth");
const countLabel = document.getElementById("CountLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBth.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}