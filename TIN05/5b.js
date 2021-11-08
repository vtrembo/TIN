function Student(firstName, surname, id, grades){
    this.firstName = firstName;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
}
function printStudentInfo(student){
    const reducer = (a,b) => a+b;
    const avgGrade = student.grades.reduce(reducer,0) / student.grades.length;
    return `Student: ${student.firstName} ${student.surname}, Average grade: ${avgGrade}`;
}

var student = new Student("Tom", "Hook", "0", [3,5,4,3,5,5]);
console.log(printStudentInfo(student));