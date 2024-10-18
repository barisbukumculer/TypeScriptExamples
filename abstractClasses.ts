abstract class CreditBase {
  constructor() {}
  save(): void {
    console.log("Saved Successfully");
  }
  abstract calculate(): void;
}

class ConsumerCredit extends CreditBase {
  constructor() {
    super();
  }
  calculate(): void {
    console.log("Transactions were made based on consumer credit");
  }
}
class MortgageCredit extends CreditBase {
  constructor() {
    super();
  }
  calculate(): void {
    console.log("The transaction was made according to the housing loan");
  }
}

let consumerCredit = new ConsumerCredit();
consumerCredit.calculate();
consumerCredit.save();

let morgageCredit = new MortgageCredit();
morgageCredit.calculate();
morgageCredit.save();

let credit: CreditBase;

credit = new ConsumerCredit();
credit = new MortgageCredit();
