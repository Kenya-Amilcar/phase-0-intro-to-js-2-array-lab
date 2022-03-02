const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function appendCat(name){
    let copyofCats = [...cats, name];
    return copyofCats
}
appendCat("Broom");

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function prependCat(name){
    let copyofCats = [name, ...cats];
    return copyofCats
}
prependCat("Arnold");

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeLastCat() {
    let copyofCats = cats.slice(0,cats.length -1);
    return copyofCats
}
 
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  }); 

function removeFirstCat() {
    let copyofCats = cats.slice(1);
    return copyofCats
}