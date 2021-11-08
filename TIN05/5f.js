class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }

    set fullName(name) {
        let splittedName = name.split(" ");
        this.name = splittedName[0] || "";
        this.surname = splittedName[1] || "";
    }
}

class Student extends Person {
    constructor(id, name, surname, grades) {
        super(name, surname);
        this.id = id;
        this.grades = grades;
    }

    get print() {
    	return (
                "Id - " + this.id + " | " +
                "Student - " + this.name +" " + this.surname + " | " +
                "Average grade - " + this.avgGrade
    	);
    }

    get avgGrade() {
      return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }

}
const st = new Student(0, "Tom", "Hook", [5, 4, 4, 5]);
st.fullName = "Tom Hook";
console.log("Student - " + st.fullName + " | Average grade - " + st.avgGrade);
console.log(st.print);