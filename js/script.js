// --- CONSTANTS ---



// --- VARIABLES ---

let text;
let number;
let condition;
let letters = [];

// --- INPUT ---

text = prompt("Insere una parola");

do {
    number = prompt("Inserire un numero da 1 a 5");
    number = parseInt(number);
} while (number < 1 || number > 5);

condition = palindromo(text);
console.log(condition);

if (condition == true) {
    alert("La parola è palindroma");
}
else {
    alert("La parola non è palindroma");
}

condition = sum(number);

if (condition == true) {
    alert("la somma è pari");
}
else {
    alert("La somma è dispari");
}

// --- FUNCTIONS ---

function palindromo(word) {
    letters = word.split("");
    let after;
    letters = letters.reverse();
    after = letters.join("");
    
    if (after == word) {
        alert("La parola è palindroma");
    }
    else {
        alert("la parola non è palindroma");
    }
}

// --- ---

function sum(num) {
    let rand;
    do {
        rand = Math.floor(Math.random() * 10 +1);
    } while (rand < 1 || rand > 5)
    num = num + rand;
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}