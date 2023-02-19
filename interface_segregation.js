//It violates the Interface Segregation Principle
class EntityOne {
    constructor(name, attackDamage, health) {
        this.name = name;
        this.attackDamage = attackDamage;
        this.health = health;
    }

    move() {
        console.log(`${this.name} moved`);
    }

    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}

class CharacterOne extends EntityOne {
}

class WallOne extends EntityOne {
    constructor(name, health) {
        super(name, 0, health);
    }

    move() {
        return null;
    }

    attack() {
        return null;
    }
}

class TurretOne extends EntityOne {
    constructor(name, attackDamage) {
        super(name, attackDamage, -1);
    }

    move() {
        return null;
    }
    
    takeDamage() {
        return null;
    }
}

const turretOne = new TurretOne('Turret', 5);
const characterOne = new CharacterOne('Character', 3, 100);
const wallOne = new WallOne('Wall', 200);

turretOne.attack(characterOne);
characterOne.move();
characterOne.attack(wallOne);



//This new code is following the Interface Segregation Principle
class EntityTwo {
    constructor(name) {
        this.name = name;
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`);
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}

class CharacterTwo extends EntityTwo {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

Object.assign(CharacterTwo.prototype, mover);
Object.assign(CharacterTwo.prototype, attacker);
Object.assign(CharacterTwo.prototype, hasHealth);

class WallTwo extends EntityTwo {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}

Object.assign(WallTwo.prototype, hasHealth);

class TurretTwo extends EntityTwo {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}

Object.assign(TurretTwo.prototype, attacker);

const turretTwo = new TurretTwo('Turret', 5);
const characterTwo = new CharacterTwo('Character', 3, 100);
const wallTwo = new WallTwo('Wall', 200);

turretTwo.attack(characterTwo);
characterTwo.move();
characterTwo.attack(wallTwo);