//It violates the Liskov Substitution Principle
class Bird {
    fly() {
        console.log('I can fly');
    }
}

class DuckOne extends Bird {
    quack() {
        console.log('I can quack');
    }
}

class PenguinOne extends Bird {
    fly() {
        console.log('Cannot fly');
    }

    swim() {
        console.log('I can swim');
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const duckOne = new DuckOne();
const penguinOne = new PenguinOne();

makeBirdFly(duckOne);
makeBirdFly(penguinOne);



//This new code is following the Liskov Substitution Principle
class FlyingBird {
    fly() {
        console.log('I can fly');
    }
}

class SwimmingBird {
    swim() {
        console.log('I can swim');
    }
}

class DuckTwo extends FlyingBird {
    quack() {
        console.log('I can quack');
    }
}

class PenguinTwo extends SwimmingBird {
}

function makeFlyingBirdFly(bird) {
    bird.fly();
}

function makeSwimmingBirdSwim(bird) {
    bird.swim();
}

const duckTwo = new DuckTwo();
const penguinTwo = new PenguinTwo();

makeFlyingBirdFly(duckTwo);
makeSwimmingBirdSwim(penguinTwo);