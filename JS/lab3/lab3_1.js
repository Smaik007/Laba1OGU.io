'use strict';
/**
 * Программа возвращает дробную часть числа
 * @param {number} num 
 * @returns дробную часть числа
 */
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
/**
 * Функция  возвращает строку str с заглавным первым символом
 * @param {string} str 
 * @returns  возвращает строку str с заглавным первым символом
 */
export function ucFirst(str) { //возвращает строку str с заглавным первым символом.
    if (!str) {
        return str;
    }
    else {
        return str[0].toUpperCase() + str.slice(1);
    }
}
/**
 * Функция возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
 * @param {string} str 
 * @returns возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
 */
export function checkSpam(str) { //возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру.
    let newstr = str.toLowerCase();
    return newstr.includes('viagra') || newstr.includes('xxx');
}
/**
 * Функция проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…"
 * @param {string} str 
 * @param {number} maxlength 
 * @returns отформатированная строка 
 */
export function truncate(str, maxlength) { //проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…"
    if (str.length < maxlength) {
        return str;
    }
    else {
        return str.slice(0, maxlength - 1) + '…';
    }
}
/**
 *  Функция преобразует строку вида 'var-test-text' в 'varTestText'
 * @param {string} str 
 * @returns строка вида'varTestText'
 */
export function camelize(str) { //преобразуйте строку вида 'var-test-text' в 'varTestText'. То есть, дефисы удаляются, а все слова после них получают заглавную букву. 
    let stroka = str.split("-");
    let strnw = "";
    for (let i = 0; i <= stroka.length - 1; i++) {
        if (i == 0) strnw = stroka[0];
        else strnw += ucFirst(stroka[i]);
    }
    return strnw;
}
/**
 * Функция  возвращает массив, заполненный числами Фибоначчи до n-го (не включая его)
 * @param {number} n 
 * @returns  массив, заполненный числами Фибоначчи до n-го (не включая его)
 */
import { fib } from './lab2.js';
export function fibs(n) {  //для натурального n возвращает массив, заполненный числами Фибоначчи до n-го (не включая его).
    let mas = [];
    for (let i = 0; i < n; i += 1) {
        mas.push(fib(i));
    }
    return mas;
}
/**
 * Функция возвращает массив из тех же элементов, но отсортированный по убыванию
 * @param {array} arr 
 * @returns  массив из тех же элементов, но отсортированный по убыванию
 */
 export function arrReverseSorted(arr) { //принимает неупорядоченный массив чисел arr и возвращает массив из тех же элементов, но отсортированный по убыванию
    let arr_copy = arr.slice();
    return arr_copy.sort(function (a, b) {
        return b - a;
    })
}
/**
 * Функция массив уникальных, не повторяющихся значений массива arr
 * @param {array} arr 
 * @returns массив уникальных, не повторяющихся значений массива arr
 */
export function unique(arr) { //вернёт массив уникальных, не повторяющихся значений массива arr. Значения в массиве могут быть любого типа.
    return Array.from(new Set(arr));
}