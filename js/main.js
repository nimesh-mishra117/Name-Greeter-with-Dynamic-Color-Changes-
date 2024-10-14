var inputBox = document.getElementById('name');

function mess() {
    var inputText = inputBox.value;
    document.getElementById("ans").innerHTML = "Hello, " + "" +inputText +"!";
}

function clickChange() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.getElementById("ans").style.color = rgbValue;
}

