let a, b, c, d, e;
const arr = [5, 10, 15, 20, 25, 30, 45, 50];
[a, b, c, d, e, ...arr1] = arr;
console.log(a, b, c, d, e);
console.log(arr1);
console.log(arr1[0]);

let f, g, myObj;
// ({ f, g } = { f: 100, g: 200 });
({ f, g, ...myObj } = { f: 100, g: 200, h: 100, i: 200, j: 500 });
console.log(f, g);
console.log(myObj);

function fun() {
  return [10, 20, 30, 40, 50];
}

let h, i, j;
[h, , i, , j] = fun();
console.log(h, i, j);

// const people

const output = document.querySelector(".output");
const jsonFile = "data.json";
window.addEventListener("DOMContentLoaded", getData);
function getData() {
  fetch(jsonFile)
    .then((rep) => rep.json())
    .then((data) => {
      outputGen(data);
    });
}
function outputGen(people) {
  people.forEach((person) => {
    const { first, last, id } = person;
    const div = document.createElement("div");
    div.textContent = `First : ${first} / Last : ${last} ID(${id})`;
    output.append(div);
  });
}
