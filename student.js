const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper");
if(student){
    infoStudentBox.innerHTML = 
    `
    <h1>${student.name} ${student.surname}</h1>
    <h2>ID: ${student.id}</h2>
    <h2>GROUP: | ${student.group}</h2>
    <h2>COIN: ${student.coin}</h2>
    <h2>TEACHER:  ${student.teacher}</h2>
    <h2>HP:${student.hp}</h2>
    `
}