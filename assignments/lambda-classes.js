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
        return `Hello my name is ${name}, I am from ${location}`;
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
        return `Today we are learning about ${subject}`;
    }
    //insert method//
    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`;
    }
}

//student//
class Student extends Person {
    constructor(Student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    //insert method//
    listSubjects() {
        return favList = this.favSubjects.map(subject => console.log(subject)); 
    }
    PRAssignment() {
        return `${name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${name}has begun sprint challenge on ${subject}`; 
    }
}

//projectmanager//
class ProjectManagers extends Instructor {
    constructor(ProjectManagers) {
        super(ProjectManagers);
        this.gradClassName = ProjectManagers.gradClassName;
        this.favInstructor = ProjectManagers.favInstructor;
    }
//insert methos//
    standUp(channel) {
        return `${name} announces to ${channel} @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    
    }
}