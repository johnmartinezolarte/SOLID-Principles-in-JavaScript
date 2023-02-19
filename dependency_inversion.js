//It violates the Dependency Inversion Principle
class StoreOne {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    purchaseBike(quantity) {
        this.stripe.makePayment(200 * quantity * 100);
    }

    purchaseHelmet(quantity) {
        this.stripe.makePayment(15 * quantity *100);
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`);
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`);
    }
}

const storeOne = new StoreOne('John');
storeOne.purchaseBike(2);
storeOne.purchaseHelmet(2);



//This new code is following the Dependency Inversion Principle
class StoreTwo {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100)
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars);
    }
}

const storeTwo = new StoreTwo(new StripePaymentProcessor('John'));
storeTwo.purchaseBike(2);
storeTwo.purchaseHelmet(2);

const storeThree = new StoreTwo(new PaypalPaymentProcessor('John'));
storeThree.purchaseBike(2);
storeThree.purchaseHelmet(2);