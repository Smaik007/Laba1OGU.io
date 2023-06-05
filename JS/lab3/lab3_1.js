'use strict';
export function getDecimal(num) { //возвращает дробную часть числа num.
    if (Math.trunc(num) == num) {
        return 0;
    }
    else if (num < 0) {
        return num - (-Math.ceil(-num));
    }

    if (num > 1) {
        return +(num - Math.trunc(num)).toFixed(2);
    }
}

export function ucFirst(str) { //возвращает строку str с заглавным первым символом.
    if (!str) {
        return str;
    }
    else {
        return str[0].toUpperCase() + str.slice(1);
    }
}

export function checkSpam(str) { //возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру.
    let NewStr = str.toLowerCase();
    return NewStr.includes('viagra') || NewStr.includes('xxx');
}

export function truncate(str, maxlength) { //проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…"
    if (str.length < maxlength) {
        return str;
    }
    else {
        return str.slice(0, maxlength - 1) + '…';
    }
}

export function  camelize(str){ //преобразуйте строку вида 'var-test-text' в 'varTestText'. То есть, дефисы удаляются, а все слова после них получают заглавную букву. 
    let STR = str.split("-");
    let StrNew = "";
    for (let i = 0; i <= STR.length - 1; i++) {
        if (i == 0) StrNew = STR[0];
        else StrNew += ucFirst(STR[i]);
    }
    return StrNew;
}

import  {fib}  from './lab2.js';
export function fibs(n){  //для натурального n возвращает массив, заполненный числами Фибоначчи до n-го (не включая его).
        let mas=[];
        for(let i=0;i<n; i+=1){
          mas.push(fib(i));
        }
        return mas;
}
export function  arrReverseSorted(arr){ //принимает неупорядоченный массив чисел arr и возвращает массив из тех же элементов, но отсортированный по убыванию
    return arr.sort(function (a, b) {
        return b - a;
    })
}
  export function unique(arr){ //вернёт массив уникальных, не повторяющихся значений массива arr. Значения в массиве могут быть любого типа.
    return Array.from(new Set(arr));
  }