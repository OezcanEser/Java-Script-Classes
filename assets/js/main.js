// Lev1_2_js - vertiefung_classes_constructor_argument_person

class Person {
    constructor(namePara, agePara, passedPara) {
        this.name = namePara
        this.age = agePara

        this.passed = passedPara
    }

    info() {
        return `${this.name} is ${this.age} years old!`
    }

    write() {
        document.querySelector('section').innerHTML += `<p style = color:${!this.passed ? "red" : ""}>${this.name}, ${this.age}</p>`
    }
}

// document.querySelector('ul').innerHTML += `<li class=${!this.exam ? 'red' : ''
//     }>${this.name}, ${this.age}</li>`;

let emanuela = new Person("Emanuela", 18)

console.log(emanuela.info())


// Lev1_3_js-vertiefung_classes_constructor_argument_person

// Aufgabenstellung

// Erweitere die Klasse Person aus der vorherigen Aufgabe.
// Füge die Methode write() hinzu. Diese soll die Eigenschaften der Person ins HTML schreiben
// Erstelle ein HTML-Formular mit den Feldern Name, Alter und Prüfung bestanden? 
// und einen Button Person erstellen
// Beim Abschicken des Formulars soll ein neues Objekt erstellt werden und die write() Methode aufgerufen werden.
// Hat eine Person die Prüfung nicht bestanden, soll der Name in roter Schrift angezeigt werden

document.querySelector('[type="button"]').addEventListener('click', (event) => {
    let newPerson = new Person(event.target.form[0].value, event.target.form[1].value * 1, event.target.form[2].checked);
    newPerson.write()
})