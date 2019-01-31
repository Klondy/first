'use script';

var money,
    time,
    ans1,
    ans2;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

ans1 = prompt("Введите обязательную статью расходов в этом месяце");
ans2 = prompt("Во сколько обойдётся?");


var appData = {
    money : money,
    timeDate : time,
    expenses : {ans1 : ans2},
    optionalExpenses: null,
    income : [],
    savings : false
};

alert("Ваш бюджет на один день - ");

