'use strict';
//функция возвращает x в степени n (n - целое число).
function pow(x, n)
{
    return x**n; //возвращаем х в степени n
}
// функция вычисляет сумму чисел от 1 до n включительно.
function sumTo(n)
{
    return (n*(n+1))/2  //формула суммы арифметической прогрессии

}

/**
 * Возвращает факториал от n
 * @param {number} n факториал этого числа
 * @returns Факториал от n
 */
function factorial(n)
{
    if (n<=0)
    {
        return 1n; //возвращаем 1 для чисел, меньших 0
    }
    else{
        return ( BigInt (n) *  BigInt(factorial(n-1))); //использование рекурсии 
    }
}
/**
 * функция возвращает n-е число Фибоначи
 * @param {number} n 
 * @returns n-е число Фибоначи
 */
function fib(n){
    let a = BigInt(1); // первое число Фиббоначи
    let b=BigInt(1); //второе число Фиббоначи
    if (n== BigInt(0))
    {
        return BigInt(0); //возвращаем нуль при n=0
    }
    else
    {
        //алгоритм нахождения чисел Фиббоначи (базовый)
        for (let i = BigInt(3); i<=n; i++) 
        {
            let c = a+b;
            a=b;
            b=c;
        }
        return b;
    }
}
//функция принимает целочисленное значение x и возвращает 
//анонимную функцию. Анонимная функция возвращает 
//результат сравнения значений y и x
function compare(x)
{
return function(y)
{
    if (y>x) return true;
    else if (y<x) return false;
    else if (y==x) return null;
}
}
//функция возвращает сумму всех своих аргументов.
function sum()
{
    var result=0; //сумма
    for (var i=0; i<arguments.length; i++)
    {
        result+=arguments[i] //складываем элементы на соответствующих местах
    }
    return result;
}