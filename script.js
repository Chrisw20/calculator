function clr() {
    document.getElementById("result").value = "";
}

function dis(value) {
    document.getElementById("result").value += value;
} 


function solve() {
    let inputString = document.getElementById('result').value;
    const regex = /\b0+(\d+)/g;
    inputString = inputString.replace(regex, '$1');
    const result = eval(inputString);
    document.getElementById('result').value = result;
}