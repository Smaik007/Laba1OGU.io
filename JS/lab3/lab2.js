'use strict';
/**
 * Возводит х в степень n 
 * @param {number} x основание степени
 * @param {number} n степень
 * @returns x  в степени n
 */
function pow(x, n) {
    return x ** n;
}
/**
 * Возвращает сумму от 1 до n
 * @param {number} n максимальное число
 * @returns сумму от 1 до n
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}

/**
 * Считает факториал числа n
 * @param {number} n основание факториала
 * @returns факториал  n
 */
function factorial(n) {
    if (n <= 1) return 1n;
    else {
        return BigInt(n) * factorial(n - 1);
    }
}
/**
 * n-ый член ряда Фибоначчи
 * @param {number} n 
 * @returns  n-ый член ряда Фибоначчи
 */
function fib(n) {
    let a = BigInt(1);
    let b = BigInt(1);
    if (n == BigInt(0)) {
        return BigInt(0);
    }
    else {
        for (let i = BigInt(3); i <= n; i++) {
           let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}
/**
 * Возвращает анонимную булеву функцию результата сравнения числа с x
 * @param {number} x число для сравнения
 * @returns возвращает анонимную булеву функцию результата сравнения числа с x
 */
function compare(x) {
    return function (y) {
        if (y > x) return true;
        else if (y < x) return false;
        else if (y == x) return null;
    }
}
/**
 * Сумма всех принятых аргументов функцией 
 * @returns сумму всех принятых аргументов функцией 
 */
function sum() {
    var result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result;
}