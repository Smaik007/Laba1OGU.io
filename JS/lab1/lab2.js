let num = prompt("Введите num: ");
var end, numCheck;

if (typeof num !== "number") return;
var stringNum = "" + num;
if (stringNum.length > 1) {
if (+stringNum[0] > 1) {
numCheck = +stringNum.slice(-1);
}
} else {
numCheck = num;
}

switch (numCheck) {
case 1:
end = "нa";
break;
case 2:
case 3:
case 4:
end = "ны";
break;
default:
end = "н";
}

alert("На ветке сидит " + num + " воро" + end);
