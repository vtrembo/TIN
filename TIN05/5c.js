const courses = ["GRK", "TIN", "PRO", "LEK", "BYT", "ZPR"];

function Student(name, surname, id) {
    this.name = name;
    this.surname = surname;
    this.id = id;
}
Student.prototype.courses = courses;

const st = new Student();
console.log(st.courses);