let a = +prompt("выбери первое число");
let b = +prompt("выбери второе число");
let plus = prompt("что ты хочешь сделать + , - , х , % , ");

if (plus == "+") {
  alert(a + b);
} else if (plus == "-") {
  alert(a - b);
} else if (plus == "x") {
  alert(a * b);
} else if (plus == "%") {
  alert(a / b);
}else alert("ты че дурак выбери одну действию")
