function greeter(name) {
  return "Hello " + name;
}

let message = greeter("Baris");
console.log(message);

let number: number = 12;
number = 10;
number = 10.4;

let city: string = "Adana";
city = "Istanbul";
city = "Ankara";

let isMarried: boolean = true;
isMarried = true;

let numbers: number[] = [1, 2, 3, 4];
let numbers2: Array<number> = [1, 2, 3, 4];

let array: [number, string] = [2, "Bursa"];

array[0]; //2
array[1]; //"Bursa"

enum Color {
  Red = 1,
  Black,
  Blue,
}
let color: Color = Color.Red;

let value: any = "Bursa";
value = 10;
value = {};

let value2: void = undefined;

function Hello(): void {
  console.log("Hello Bro");
  return 5; // Error: void function cannot return a value
}

//undefined null

let age: number;
age = 51;

class Customer {}
