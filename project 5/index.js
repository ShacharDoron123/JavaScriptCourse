let prv = -999;
document.getElementById("send").onclick = function(){
    let number = Number(document.getElementById("number").value);
    if(number > prv){
          document.getElementById("output").textContent = "המספר שהוכנס  גדול מקודמו";
    } else{
        document.getElementById("output").textContent = "המספר שהוכנס אינו גדול מקודמו";
    }
    prv = number;
}


