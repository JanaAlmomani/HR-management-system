'use strict';
let department = ["Administration", "Marketing", "Development", "Finance"];
let level;
let employeeArr = [];
function Employee(fullName, department, level, imageUrl) {
    this.employeeId = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = 0;
    employeeArr.push(this);
}
Employee.prototype.calculateSalary = function () {
    if (this.level == "Junior") {
        this.salary = ((Math.random() * (1000 - 500) + 500) - (15 / 2));
    } else if (this.level == "Mid-Senior") {
        this.salary = (Math.random() * (1500 - 1000) + 1000) - (15 / 2);
    } else if (this.level == "Senior") {
        this.salary = (Math.random() * (2000 - 1500) + 1500) - (15 / 2);
    }
}
Employee.prototype.generateUniqueId = function () {
    this.employeeId = Math.floor(Math.random() * 9000 + 1000);
}

function render() {


    const container = document.getElementById('employee');
    //const containerh=document.getElementById('hh');
    container.innerHTML = '';

    getEmp();
    console.log(employeeArr);
    if (employeeArr == null) {
        employeeArr = [];
    }
    for (let i = 0; i < employeeArr.length; i++) {

        const divEL = document.createElement('div');
        container.appendChild(divEL);
        divEL.classList.add("class");
        //display the empimge
        const imgEl = document.createElement('img');
        divEL.appendChild(imgEl);

        imgEl.setAttribute('src', employeeArr[i].imageUrl);
        imgEl.width = "150";
        imgEl.height = "150";


        // display emp name 
        const nameEl = document.createElement('p');
        divEL.appendChild(nameEl);
        nameEl.textContent = ` Name:` + employeeArr[i].fullName;

        //display emp id
        const idEl = document.createElement('p');
        divEL.appendChild(idEl);
        idEl.textContent = `ID: ${employeeArr[i].employeeId}`;

        //    display emp dep
        const depEl = document.createElement('p');
        divEL.appendChild(depEl);
        depEl.textContent = `Department: ${employeeArr[i].department}`;

        //    display emp level
        const levelEl = document.createElement('p');
        divEL.appendChild(levelEl);
        levelEl.textContent = `Level: ${employeeArr[i].level}`;

        //  display emp salary
        const salaryEl = document.createElement('p');
        divEL.appendChild(salaryEl);
        salaryEl.textContent = `Salary: ${employeeArr[i].salary}$`;

    }
}


let employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', addNewEepHandler);

function addNewEepHandler(event) {
    event.preventDefault();


    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageUrl = event.target.imagePath.value;

    let newEmp = new Employee(fullName, department, level, imageUrl);
    newEmp.calculateSalary();
    newEmp.generateUniqueId();

    let jsonArr = JSON.stringify(employeeArr);
    localStorage.setItem("allEmp", jsonArr);

    render();


}

function getEmp() {

    let jsonArr = localStorage.getItem("allEmp");
    employeeArr = JSON.parse(jsonArr);
}

getEmp();

render();
