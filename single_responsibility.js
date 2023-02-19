//It violates the Single Responsibility Principle
class WaterTrackerOne {
    constructor(minWater, gender) {
        this.minWater = minWater;
        this.gender = gender;
        this.currentWater = 0;
    }

    trackWater(waterCount) {
        this.currentWater += waterCount;
        if(this.gender.toLowerCase() === 'male' && this.currentWater < this.minWater) {
            return this.logWaterMissing();
        }
        if(this.gender.toLowerCase() === 'female' && this.currentWater < this.minWater) {
            return this.logWaterMissing();
        }
    }

    logWaterMissing() {
        console.log('Drink more water');
    }
}

const martin = new WaterTrackerOne(3.7, 'Male');
const fernanda = new WaterTrackerOne(2.7, 'Female');

martin.trackWater(1);
martin.trackWater(2);
martin.trackWater(0.7);

fernanda.trackWater(1);
fernanda.trackWater(1);
fernanda.trackWater(0.7);



//This new code is following the Single Responsibility Principle
class WaterTrackerTwo {
    constructor(minWater, gender) {
        this.minWater = minWater;
        this.gender = gender;
        this.currentWater = 0;
    }

    trackWater(waterCount) {
        this.currentWater += waterCount;
        if(this.gender.toLowerCase() === 'male' && this.currentWater < this.minWater) {
            return logMessage('Drink more water');
        }
        if(this.gender.toLowerCase() === 'female' && this.currentWater < this.minWater) {
            return logMessage('Drink more water');
        }
    }
}

function logMessage(message) {
    console.log(message);
}

const andres = new WaterTrackerTwo(3.7, 'Male');
const karol = new WaterTrackerTwo(2.7, 'Female');

andres.trackWater(1);
andres.trackWater(2);
andres.trackWater(0.7);

karol.trackWater(1);
karol.trackWater(1);
karol.trackWater(0.7);