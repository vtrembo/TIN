function Student(id, grades) {
    this.name = "";
    this.surname = "";
    this.id = id;
    this.grades = grades;
}

Object.defineProperties(Student.prototype, {
    fullName: {
        get: function () {
            return this.name + " " + this.surname;
        },

        set: function (name) {
            let splitname = name.split(" ");
            this.name = splitname[0] || "";
            this.surname = splitname[1] || "";
        }
    },

    avgGrade: {
        get: function () {
            return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
        }
    },

    print: {
        get: function () {
            return (
                "Id - " + this.id + " | " +
                "Student - " + this.name +" " + this.surname + " | " +
                "Average grade - " + this.avgGrade
            );
        }
    }
});
const st = new Student(1, [5, 4, 4, 5]);
st.fullName = "Tom Hook";
console.log("Student - " + st.fullName + " | Average grade - " + st.avgGrade);
console.log(st.print);