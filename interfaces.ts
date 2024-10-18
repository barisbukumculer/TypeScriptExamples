interface Product {
  id: number;
  name: string;
  unitPrice: number;
}

class Product2 {
  id: number;
  name: string;
  unitPrice: number;
}

function save(product: Product) {
  console.log(product.name + " saved successfully");
}

function save2(product2: Product2) {
  console.log(product2.name + " saved successfully");
}

save({ id: 1, name: "Laptop", unitPrice: 15000 });

let mouse = new Product2();
mouse.name = "Mouse 1";

save2(mouse);

interface IPersonService {
  save();
}

class CustomerService implements IPersonService {
  save() {
    console.log("Saved Successfully");
  }
}
