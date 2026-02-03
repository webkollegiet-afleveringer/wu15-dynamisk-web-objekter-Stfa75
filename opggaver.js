let person = {
    firstname: "Steffen",
    lastname: "Fabricius",
    age: "50",
    hometown: "Frederiksberg",
}

console.log(person.firstname)
console.log(person.age)
console.log(person["hometown"])
console.log(person["firstname"])

/*******Opgave 2*****/

let mig = {
    firstname: "Steffen",
    lastname: "Fabricius",
    age: "50",
    hometown: "Frederiksberg",
    married: false,
    hobbies: ["webdesign", "computerspil", "historie"],
    pet: {
        petname: "Bobby",
        Type: "snail"
    }
}


mig.hobbies.forEach(function (hobby) {
    console.log(hobby)
})

/******Opgave 3***********/

let students = [
    { navn: "sofie", age: "25", course: "webdevelopment" },
    { navn: "Kallehans", age: "40", course: "plumbing" },
    { navn: "yrsa", age: "20", course: "cooking" },
]
let studentList = document.querySelector(".studenter")

students.forEach(function (student) {
    console.log(student.course)

    const studentDiv = document.createElement("div");
    studentDiv.textContent = student.navn + ",alder:"
        + student.age + ",uddannelse:" + student.course
    studentList.append(studentDiv)
})
/***********lille eksempel ******** */

const navn = "Kalle";
const alder = 900
const adr = "Frederiksberg"

const besked = `mit navn er ${navn}, og jeg er ${alder} år gammel. Jeg bor på ${adr}`;
console.log(besked)