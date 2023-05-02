let age = prompt("Введите age: "),gender = prompt("Введиe gender: ");
if (age <= 17){
    alert("Вам работать еще рано - учитесь");
}
else if(gender = "male"){
    if (age <= 59) alert("Вам ещё работать и работать");
    if (age >= 60 && age <= 64) alert( "Скоро пенсия!");    
    if (age >= 65) alert("Да кто ты такой?")
    
}
else if(gender = "female"){
    if (age <= 54) alert("Вам ещё работать и работать");
    if (age >= 55 && age <= 59) alert( "Скоро пенсия!");    
    if (age >= 60) alert("Да кто ты такой?");
}

