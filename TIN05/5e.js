class Student {
    constructor(id, grades) {
        this.name = "";
        this.surname = "";
        this.id = id;
        this.grades = grades;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }

    set fullName(name) {
        let splittedName = name.split(" ");
        this.name = splittedName[0] || "";
        this.surname = splittedName[1] || "";
    }

    get avgGrade() {
		return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }

    get print() {
         return (
                "Id - " + this.id + " | " +
                "Student - " + this.name +" " + this.surname + " | " +
                "Average grade - " + this.avgGrade
        );
    }
}
const st = new Student(1, [5, 4, 4, 5]);
st.fullName = "Tom Hook";
console.log("Student - " + st.fullName + " | Average grade - " + st.avgGrade);
console.log(st.print);