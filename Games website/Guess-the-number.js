let random;
let attempts;

document.getElementById("send1").onclick = function () {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);

    random = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = max-min; 
    document.getElementById("output").textContent = "המשחק התחיל! תתחיל לנחש...";
};

document.getElementById("send2").onclick = function () {
    let guess = Number(document.getElementById("guess").value);
    attempts--;

    if (guess === random) {
        document.getElementById("output").textContent =
            "המשחק נגמר - הצלחת לנחש! נשארו לך " + attempts + " ניסיונות";
        return;
    }

    if (attempts === 0) {
        document.getElementById("output").textContent =
            "הפסדת! המספר היה " + random;
        return;
    }

    if (guess > random)  {
        document.getElementById("output").textContent =
            "גבוה מדי! נשארו " + attempts + " ניסיונות";
    } else {
        document.getElementById("output").textContent =
            "נמוך מדי! נשארו " + attempts + " ניסיונות";
    }
};