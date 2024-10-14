//1. feladat

//Egészítsd ki az isLeapYear() függvényt!
//A függvény egy évszámot kap paraméterül.
//Ha az évszám szökőév, akkor a visszatérési érték true, különben false.

//Az év szökőév, ha:
//Osztható 4-gyel, kivéve ha:
//Osztható 100-zal, akkor nem szökőév, kivéve ha:
//Osztható 400-zal, akkor mégis szökőév.

function isLeapYear(year) {
    if (year%4==0){
        return true;
    }
    if (year%100==0){
        if(year%400==0){
            return true;
        }
        else{
            return false;
        }
    }
    else {
        return false;
    }

}


//2.feladat
//Egészítsd ki az stonePaperScissorsWinner() függvényt!
//A függvény két nem negatív egész számot kap paraméterül, melyek
//0 - papír
//1 - kő
//2 - olló.

//A két szám rendre az első illetve második játékos értéke.
//El kell dönteni, hogy a játékban ki nyer, vagy döntetlen-e a játék.
//Ennek megfelelően a visszatérési értékek:
//'The second player wins.'
//'The game is a tie.'
//'The first player wins.'

function stonePaperScissorsWinner(player1, player2) {

    if(player1==0 && player2==1){
        console.log("The first player wins.");
    }
    else if(player1==0 && player2==2){
        console.log("The second player wins.");
    }
    else if(player1==1 && player2==2){
        console.log("The first player wins.");
    }
    else if(player1==1 && player2==0){
        console.log("The second player wins.");
    }
    else if(player1==2 && player2==0){
        console.log("The first player wins.");
    }
    else if(player1==2 && player2==1){
        console.log("The second player wins.");
    }
    else if(player1==player2){
        console.log("The game is a tie.");
    }
    

}

//3.feladat
//Egészítsd ki a fizzbuzz() függvényt!
//A függvény egy pozitív egész számot kap paraméterül.
//Visszatérési értéke
//'fizz', ha a szám osztható 3-mal
//'buzz', ha a szám osztható 5-tel
//'fizzbuzz', ha a szám osztható 3-mal és 5-tel is
//maga a szám, ha a szám nem osztható sem 3-mal, sem 5-tel
//Például:
//1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz, ...

function fizzbuzz(number) {
    let number = []; 

    for (let i = 1; i <= maxNumber; i++) {
        
        if (i % 3 == 0 && i % 5 == 0) {
            number.push("fizzbuzz"); 
        } else if (i % 3 == 0) {
            number.push("fizz"); 
        } else if (i % 5 == 0) {
            output.push("buzz");
        } else {
            number.push(i); 
        }
    }

   
    console.log(number.join(', '));
}

//4. feladat
//Egészítsd ki a factorial() függvényt!
//A függvény egy pozitív egész számot kap paraméterül.
//Visszatérési értéke a szám faktoriálisa.

function factorial(number) {
    let max=5;
    let number=[];
    for (let i = 1; i <= max; i++) {
        number.push(i); 
    }
    console.log(number);

}