let startCalculation = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0],
	  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	  levelValue = document.getElementsByClassName('level-value')[0],
	  expensesValue = document.getElementsByClassName('expenses-value')[0],
	  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	  incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
// console.log(expenses);

let expensesBtn = document.getElementsByTagName('button')[0],
	  optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
// console.log(optionalExpensesItem);

let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
		dayValue = document.querySelector('.day-value');



// 2) Если программа еще не запущена( не нажали кнопку "Начать расчет") - сделать кнопки неактивными.
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;		

let currentMonthBudget, userDate;

let appData = {
	budget: currentMonthBudget,
	timeData: userDate,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

startCalculation.addEventListener('click', function() {

	userDate = prompt("Введите дату в формате YYYY-MM-DD");
	currentMonthBudget = +prompt("Ваш бюджет на месяц?");

	while (isNaN(currentMonthBudget) || currentMonthBudget == "" || currentMonthBudget == null) {
		currentMonthBudget = +prompt("Ваш бюджет на месяц?", "0");
	}

	appData.budget = currentMonthBudget;
	appData.timeData = userDate;

	budgetValue.textContent = currentMonthBudget.toFixed();
	yearValue.value = new Date(Date.parse(userDate)).getFullYear();
	monthValue.value = new Date(Date.parse(userDate)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(userDate)).getDate();

	// 2) Если программа еще не запущена( не нажали кнопку "Начать расчет") - сделать кнопки неактивными.
	expensesBtn.disabled = false;
	optionalExpensesBtn.disabled = false;
	countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {

	let sum = 0;

	for(let i = 0; i < expensesItem.length; i++) {

		let a = expensesItem[i].value;
		let b = expensesItem[++i].value;

		if ( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != '' && a.length < 50  ) {
			console.log("done!");
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i = i - 1;
		}
	}

	expensesValue.textContent = sum;

});

optionalExpensesBtn.addEventListener('click', function() {
	for(let i = 0; i < optionalExpensesItem.length; i++) {

		let opt = optionalExpensesItem[i].value;

		appData.optionalExpenses[i] = opt;

		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click', function() {

	if (appData.budget != undefined ) {

		// appData.moneyPerDay = (appData.budget / 30).toFixed();

		// 3) Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат (т. e. от бюджета на месяц отнимаем общую сумму всех обяз. трат и ее делим на 30 дней)
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if( appData.moneyPerDay < 100 ) {
			levelValue.textContent = "Минимальный уровень достатка";
		} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if ( appData.moneyPerDay > 2000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		dayBudgetValue.textContent = "Запустите программу расчета нажав кнопку: 'Начать расчет'!";
	}
});

incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(", ");
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings === true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings === true) {
		let sum = +sumValue.value,
				percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 / 12 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function() {
	if (appData.savings === true) {
		let sum = +sumValue.value,
				percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 / 12 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

