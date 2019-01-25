// CODE here for your Lambda Classes
const mint = new Person ({

});

const pepper = new Person ({

});

const cumin = new Person({

});


//Person//
class Person {
    constructor(Person) {
        this.name = Person.name;
        this.age = Person.age;
        this.location = Person.location;
        this.gender = Person.gender
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//instructor//
class Instructor extends Person {
    constructor(Instructor){
    super(Instructor);
    this.specialty = Instructor.specialty;
    this.favLanguage = Instructor.favLanguage;
    this.catchPhrase = Instructor.catchPhrase;
    }
    //insert method//
    demo(subject) {
        return `Today we are learning about ${this.subject}`;
    }
    //insert method//
    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${this.subject}`;
    }
}