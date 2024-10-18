function value(x: number): number {
  return x;
}

function value2(x: string): string {
  return x;
}

let number = value(10);
let city = value2("Ankara");

console.log(number);
console.log(city);

function value3<T>(x: T): T {
  return x;
}

let type = value3<number>(10);
let type2 = value3<string>("Ankara");

class GenericClass<T> {
  variable: T;
  function(param: T): T {
    return param;
  }
}

let class1 = new GenericClass<number>();
class1.variable = 10;
