// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop(2);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
const copyOfCats = [...cats,"Broom"];
function appendCat(Broom){
    cats.slice("Broom")
    return copyOfCats
}
const prependCat = (Arnold) => {
    let Cat2 = [...cats];
    Cat2.unshift(Arnold);
    return Cat2
}
const removeLastCat = (Garfield) =>{
    let Cat3 = [...cats];
    Cat3.pop(Garfield);
    return Cat3
}
const removeFirstCat = (Milo) =>{
    let Cat4 = [...cats];
    Cat4.shift(Milo);
    return Cat4;
}