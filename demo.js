class Person {
    constructor(name) {
        this.name = name;
    }
}

class PolitePerson extends Person {
    constructor(name) {
        super(name);
        this.greetColleagues(); // This is disallowed, read below why
    }

    greetColleagues() {
        console.log('tets');
        // alert('Good morning folks!');
    }
}


const person = new PolitePerson()
person.greetColleagues