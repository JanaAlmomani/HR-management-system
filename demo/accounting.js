'use strict';

let depInfo = [
    {
        depName: "Administration",
        numEmp: 0,
        totalSalary: 0,
        avg: 0,

    },
    {
        depName: "Marketing",
        numEmp: 0,
        totalSalary: 0,
        avg: 0,
    },
    {
        depName: "Development",
        numEmp: 0,
        totalSalary: 0,
        avg: 0,
    },
    {
        depName: "Finance",
        numEmp: 0,
        totalSalary: 0,
        avg: 0,
    }

];

let jsonArr = localStorage.getItem("allEmp");
let employeeArr = JSON.parse(jsonArr);
if (employeeArr == null) {
    employeeArr = [];
}

console.log(employeeArr);


for (let i = 0; i < depInfo.length; i++) {

    depInfo[i].numEmp = numOfEmp(depInfo[i].depName);
    depInfo[i].totalSalary = totalSalary(depInfo[i].depName);
    depInfo[i].avg = (depInfo[i].totalSalary) / (depInfo[i].numEmp);

}

function totalSalary(department) {
    let sum=0;
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].department == department) {
            sum += employeeArr[i].salary;
        }
     }
            return sum;
}

function numOfEmp(department) {
    let count = 0;
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].department == department)
            count++;
    }
    return count;
}

console.log(depInfo);

function render() {

    const tableEl = document.getElementById('table');
    const trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    const thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = "Department Name";


    const thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = " # of employees ";

    const thEl3 = document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent = " Total Salary";

    const thEl4 = document.createElement('th');
    trEl.appendChild(thEl4);
    thEl4.textContent = "Average ";


for (let i = 0; i < depInfo.length; i++) {

const trEl1 = document.createElement('tr');
    tableEl.appendChild(trEl1);
        //dep name
        const depName = document.createElement('td');
        trEl1.appendChild(depName);
        depName.textContent = depInfo[i].depName;
        // num emp
        const numEmp = document.createElement('td');
        trEl1.appendChild(numEmp);
        numEmp.textContent =depInfo[i].numEmp;
        // total Salary
        const totalS = document.createElement('td');
        trEl1.appendChild(totalS);
        totalS.textContent =depInfo[i].totalSalary;
        // avg
        const avg = document.createElement('td');
        trEl1.appendChild(avg);
        avg.textContent =depInfo[i].avg;

        }
       
   }






render();

