//// Zadanie 1 ///

function analyzeString(str) {
    let letters = 0;
    let digits = 0;
    let others = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (/[a-zA-Z]/.test(char)) {
            letters++; 
        } else if (/[0-9]/.test(char)) {
            digits++; 
        } else {
            others++; 
        }
    }
    console.log(`Количество букв: ${letters}`);
    console.log(`Количество цифр: ${digits}`);
    console.log(`Количество других символов: ${others}`);
}

analyzeString("Привет123!!!");




//// Zadanie 2 ///

function numberToText(num) {
    if (num < 10 || num > 99) {
        return "Введите двузначное число";
    }

    const ones = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    const teens = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    const tens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];

    if (num >= 10 && num < 20) {
        return teens[num - 10]; 
    }

    let ten = Math.floor(num / 10); 
    let one = num % 10; 
    return `${tens[ten]} ${ones[one]}`.trim(); 
}

console.log(numberToText(35));  
console.log(numberToText(89));  
console.log(numberToText(12));  
console.log(numberToText(99));  
console.log(numberToText(5));   





//// Zadanie 3 ///

function swapCaseAndReplaceDigits(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (/[A-Z]/.test(char)) {
            result += char.toLowerCase(); 
        } else if (/[a-z]/.test(char)) {
            result += char.toUpperCase(); 
        } else if (/[0-9]/.test(char)) {
            result += "_"; 
        } else {
            result += char; 
        }
    }

    return result;
}

console.log(swapCaseAndReplaceDigits("Hello123World!"));  
console.log(swapCaseAndReplaceDigits("JavaScript2021")); 


//// Zadanie 4 ///

function toCamelCase(cssProperty) {
    return cssProperty
        .split('-') 
        .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) // Преобразуем каждое слово, кроме первого
        )
        .join(''); 
}

console.log(toCamelCase('font-size'));        
console.log(toCamelCase('background-color')); 
console.log(toCamelCase('text-align'));       
console.log(toCamelCase('border-radius'));    






//// Zadanie 5 ///

function toAbbreviation(phrase) {
    return phrase
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase()) 
        .join(''); 
}


console.log(toAbbreviation('cascading style sheets')); 
console.log(toAbbreviation('объектноориентированное программирование')); 
console.log(toAbbreviation('hyper text markup language')); 





//// Zadanie 6  ///

function concatenateStrings(...strings) {
    return strings.join(''); 
}


console.log(concatenateStrings('Hello', ' ', 'World', '!')); 
console.log(concatenateStrings('JavaScript', ' is ', 'fun')); 
console.log(concatenateStrings('This', 'is', 'a', 'test')); 




//// Zadanie 7  ///


function calculate(expression) {

    let trimmedExpr = expression.replace(/\s+/g, '');
    let operatorMatch = trimmedExpr.match(/[\+\-\*\/]/); 

    let operator = operatorMatch[0];
    let operands = trimmedExpr.split(operator); 

    let num1 = parseFloat(operands[0]);
    let num2 = parseFloat(operands[1]);


    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            throw new Error('Неподдерживаемый оператор');
    }
}


console.log(calculate('12 + 34'));  
console.log(calculate('56 - 22'));  
console.log(calculate('7 * 8'));    
console.log(calculate('45 / 9'));   
console.log(calculate('15 / 0'));   



