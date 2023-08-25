let randomNumberOne;
let randomNumberTwo;
let startPoints = 0;


document.getElementById('res').onclick = function () {
    randomNumberOne = Math.floor(Math.random() * 100) + 1; // genererer ett tilfelig tall mellom 1-100.
    randomNumberTwo = Math.floor(Math.random() * 100) + 1; // genererer ett tilfeldig tall mellom 1-100.

    document.getElementById('firstNumber').innerHTML = randomNumberOne; //Setter det tilfelige tallet i firstNumber sin innerHTML.  
    document.getElementById('secondNumber').innerHTML = randomNumberTwo;//Setter det tilfelige tallet i secondNumber sin innerHTML. 
    document.getElementById('inputLine').value = "";
    document.getElementById('textFieldForPoints').innerHTML = '';
}



document.getElementById('sub').onclick = function () {

    //henter informasjonen om hva brukeren har skrevet i tekstboksen.
    const userWriting = document.getElementById('inputLine').value;

    //Hvis det øverste tallet er større en det nederste og man skriver < så vil man få et poeng.
    //Den vil fjerne innholdet i tekstboksen, og legge til en tekst hvor det står at det er riktig.
    if (userWriting === '<' && parseInt(randomNumberOne) > parseInt(randomNumberTwo)) {
        startPoints++;
        document.getElementById('points').innerHTML = 'Poeng:' + startPoints;
        document.getElementById('textFieldForPoints').innerHTML = 'Riktig!';
        document.getElementById('inputLine').value = "";

        console.log('Riktig svar1');
    }

    //Hvis det øverste tallet er minde en det nederste og man skriver > så vil man få et poeng.
    //Den vil fjerne innholdet i tekstboksen, og legge til en tekst hvor det står at det er riktig.
    else if (userWriting === '>' && parseInt(randomNumberOne) < parseInt(randomNumberTwo)) {
        startPoints++;
        document.getElementById('points').innerHTML = 'Poeng:' + startPoints;
        document.getElementById('textFieldForPoints').innerHTML = 'Riktig, du får et poeng!';
        document.getElementById('inputLine').value = "";
        console.log('Riktig svar2');
    }

    //Hvis tallene er like og man skriver = så vil man få et poeng.
    //Den vil fjerne innholdet i tekstboksen, og legge til en tekst hvor det står at det er riktig.
    else if (userWriting === '=' && parseInt(randomNumberOne) == parseInt(randomNumberTwo)) {
        startPoints++;
        document.getElementById('points').innerHTML = 'Poeng:' + startPoints;
        document.getElementById('textFieldForPoints').innerHTML = 'Riktig, du får et poeng!';
        document.getElementById('inputLine').value = "";
        console.log('Riktig svar3');
    }

    //Hvis ingen av de over stemmer overens med svaret, så vil man få et minus poeng.
    //Den vil fjerne innholdet i tekstboksen, og legge til en tekst hvor det står at det er feil.
    else {
        startPoints--;
        document.getElementById('points').innerHTML = 'Poeng:' + startPoints;
        document.getElementById('textFieldForPoints').innerHTML = 'Det var desverre feil, du mistet et poeng.';
        document.getElementById('inputLine').value = "";
        console.log('Feil svar');
    }
}

// Når man trykker på knappen så vil teksten med reglene for spillet komme opp.
// Hvis man trykker på knappen igjen så vil teksten bli borte.
document.getElementById('rules').onclick = function () {
    const rulesElement = document.getElementById('rulesText');

    if (rulesElement.style.display === 'none') {
        rulesElement.style.display = 'block';
    }
    else {
        rulesElement.style.display = 'none';
    }
    console.log('det funker');
}



