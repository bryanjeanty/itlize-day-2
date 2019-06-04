let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(student);
if (student.hasOwnProperty("rollno")) {
  delete student.rollno;
}
console.log(student);

console.log(Object.keys(student).length);
