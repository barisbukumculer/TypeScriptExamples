class Home {
  roomCount: number;
  windowCount: number;
  floorCount: number;

  constructor(roomCount: number, windowCount: number, floorCount: number) {
    this.roomCount = roomCount;
    this.windowCount = windowCount;
    this.floorCount = floorCount;
  }

  eating() {
    console.log(this.floorCount + "Dinner Finished");
  }
}

let home = new Home(3, 5, 2);

home.eating();

class Person {
  //   protected name: string;
  //   public name: string;
  private _name: string;
  get name(): string {
    return "Mr. /Mrs." + this._name;
  }
  set name(valueName: string) {
    this._name = valueName;
  }
  save() {
    console.log("Saved Successfull");
  }
}

class Customer extends Person {
  sellItem() {
    this.name;
    console.log("Selled Successfull");
  }
}

class Employee extends Person {
  salaryPayment() {
    console.log("Payment is Successfull");
  }
}

let customer = new Customer();
customer.name = "Abuzer";
console.log(customer.name);
customer.save();
customer.sellItem();

let employee = new Employee();
employee.save();
employee.salaryPayment();
