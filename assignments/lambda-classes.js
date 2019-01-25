// CODE here for your Lambda Classes

//Person//
class Person {
    constructor(Person) {
        this.name = Person.name;
        this.age = Person.age;
        this.location = Person.location;
        this.gender = Person.gender
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}