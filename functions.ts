function addition(x, y) {
  return x + y; //javascript
}

function addition2(x: number, y: number): number {
  return x + y; //typescript
}

let addition3 = function (x: number, y: number): number {
  return x + y;
};

console.log(addition(2, 3));
console.log(addition("Ankara", 3));
console.log(addition2(2, 3)); // 5
console.log(addition3(2, 3)); // 5

function addition4(x: number, y: number = 4): number {
  return x + y;
}

console.log(addition4(3));

function addition5(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}

console.log(addition5(3));

function Invitation(guest: string, ...others: string[]): string {
  return "Hello " + guest + " and " + others.join(" and ");
}

console.log(Invitation("Baris", "Onur", "Ali", "Ayten"));
