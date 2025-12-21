document.getElementById("send").onclick = function(){
  let min = Number(document.getElementById("min").value);
  let max = Number(document.getElementById("max").value);

  let output = Math.floor(Math.random()*(max-min+1))+min;
  document.getElementById("output").textContent = output;
}