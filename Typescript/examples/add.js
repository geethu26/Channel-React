function addNumbers() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    var result1 = n1 + n2;
    console.log(result1);
    document.getElementById("result").innerHTML = "Addition:" + result1;
}
