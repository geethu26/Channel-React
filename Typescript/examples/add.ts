function addNumbers(): void {
  let n1 = Number((document.getElementById("num1") as HTMLInputElement).value); //conversion must be done because by default it takes vales as string
  let n2 = Number((document.getElementById("num2") as HTMLInputElement).value);
  var result1: number = n1 + n2;
  console.log(result1);
  document.getElementById("result")!.innerHTML = "Addition:" + result1;
}
