////Tworzymy zmienną, która uchwyci nam button z html
const button = document.getElementById("button");
//
////Tworzymy tablicę, do której będą wrzycane wylosowane liczby
const result = [];
//
////Tworzymy funkcję losującą
const drawNumber = function () {
////    Losowanych będzie 6 liczb, nie więcej
    if (result.length === 6)return;
//       
////    Wylosowana liczba to liczba od 1 do 49, uzyskujemy to poprzez wykorzystanie metody Math();
    const liczba = Math.floor(Math.random() * 49 + 1);
//    
////    Tworzymy pętlę, która sprawdzi, czy liczby się nie powtarzają, jeśli tak, to losowanie będzie odbywało się do skutku, póki nie wylosujemy 6 różnych liczb
    for(let i=0; i<result.length; i++){
        if (liczba === result[i]){
            console.log(liczba + " - "+ "ta liczba się powtórzyła. Na jej miejsce program losuje nową liczbę.")
            return drawNumber();
        };
    };
////    Tworzymy element html, który będzie zawierał wylosowane liczby na stronie a w następnej kolejności pokazywał je na stronie www
    const container = document.createElement('div');
//    
////Wylosowaną liczbę przypisujemy do kontenera na stronie www
    container.textContent = liczba;
//    
////Kolejne wylosowane liczby wrzucamy do tablicy, aby ta mogła wykonać instrukcję warunkową i sprawdzić pętlę
    result.push(liczba);
    
////Wyświetlamy kontener z losowanymi liczbami na stronie
    document.body.appendChild(container);
};
//
//
////Robimy obsługę buttona (przypisujemy mu zdarzenie) na click
button.addEventListener("click", drawNumber);























