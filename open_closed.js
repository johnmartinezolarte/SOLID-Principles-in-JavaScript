//It violates the Open Closed Principle
function showDataTypesOne(dataTypes) {
    dataTypes.forEach(dataType => {
        console.log(dataType.type);
        console.log(dataType.description);
        switch(dataType.type) {
            case 'Number':
                console.log(1234567890);
                break;
            case 'String':
                console.log('Hello World');
                break;
            case 'Boolean':
                dataType.options.forEach((option, index) => {
                    console.log(`${index+1}. ${option}`);
                });
                break;
        }
        console.log('');
    });
}

const dataTypesOne = [
    {
        type: 'Number',
        description: 'Numbers are any integer or decimal number created in the language.'
    },
    {
        type: 'String',
        description: 'A string is a collection of alphanumeric characters.'
    },
    {
        type: 'Boolean',
        description: 'Booleans have two values. True or false.',
        options: ['True', 'False']
    }
]

showDataTypesOne(dataTypesOne);



//This new code is following the Open Closed Principle
class NumberDataType {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    showExample() {
        console.log(1234567890);
    }
}

class StringDataType {
    constructor(name, description) {
        this.name =name;
        this.description = description;
    }
    
    showExample() {
        console.log('Hello World');
    }
}

class BooleanDataType {
    constructor(name, description, options) {
        this.name = name;
        this.description = description;
        this.options = options;
    }

    showExample() {
        this.options.forEach((option, index) => {
            console.log(`${index+1}. ${option}`);
        })
    }
}

function showDataTypesTwo(dataTypes) {
    dataTypes.forEach(dataType => {
        console.log(dataType.name);
        console.log(dataType.description);
        dataType.showExample();
        console.log('');
    })
}

const dataTypesTwo = [
    new NumberDataType('Number', 'Numbers are any integer or decimal number created in the language.'),
    new StringDataType('String', 'A string is a collection of alphanumeric characters.'),
    new BooleanDataType('Boolean', 'Booleans have two values. True or false.', ['True', 'False'])
]

class UndefinedDataType {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    showExample() {
        console.log('Undefined');
    }
}

dataTypesTwo.push(new UndefinedDataType('Undefined', 'Undefined exists when we haven’t given a value.'));

showDataTypesTwo(dataTypesTwo);