'use strict';
let department=["Administration","Marketing","Development","Finance"];
let level;

function Employee(fullName,department,level,imageUrl){
    this.employeeId=0;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    this.salary=0;

}
Employee.prototype.calculateSalary=function(){
        if (this.level=="Junior"){
           this.salary =((Math.random() * (1000 - 500) + 500)-(15/2));
        }else if(this.level=="Mid-Senior"){
            this.salary= (Math.random() * (1500 - 1000) + 1000)-(15/2);
        }else if (this.level=="Senior"){
            this.salary =(Math.random() * (2000 - 1500) + 1500)-(15/2);
        }
    }
    Employee.prototype.generateUniqueId =function(){
        this.employeeId= Math.floor(Math.random() * 9000 + 1000);
    }

Employee.prototype.render = function(){
  
   
    const container=document.getElementById('employee');
     //const containerh=document.getElementById('hh');
    const divEL=document.createElement('div');
    container.appendChild(divEL);
    divEL.classList.add("class");
    //display the empimge
    const imgEl = document.createElement('img');
    divEL.appendChild(imgEl);
    
    imgEl.setAttribute('src',this.imageUrl);
    imgEl.width = "150";
    imgEl.height = "150";

    // const spaceEl=document.createTextNode(" ");
    // divEL.appendChild(spaceEl);

    // display emp name 
    const nameEl = document.createElement('p');
    divEL.appendChild(nameEl);
    nameEl.textContent = ` Name:` +this.fullName;
  
    //display emp id
    const idEl = document.createElement('p');
    divEL.appendChild(idEl);
    idEl.textContent = `ID: ${this.employeeId}`;
    
//    display emp dep
   const depEl = document.createElement('p');
   divEL.appendChild(depEl);
   depEl.textContent = `Department: ${this.department}`;
    
//    display emp level
  const levelEl = document.createElement('p');
  divEL.appendChild(levelEl);
  levelEl.textContent = `Level: ${this.level}`;
   
 //  display emp salary
 const salaryEl = document.createElement('p');
 divEL.appendChild(salaryEl);
salaryEl.textContent =`Salary: ${this.salary}$`;


const hrEl = document.createElement('hr');
    divEl.appendChild(hrEl);

}
let employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', addNewEepHandler);

function addNewEepHandler(event) {
    event.preventDefault();
   
    
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level= event.target.level.value;
    let imageUrl = event.target.imagePath.value;

    let newEmp = new Employee(fullName,department,level,imageUrl);
    newEmp.calculateSalary();
    newEmp.generateUniqueId();
    newEmp.render();


}



// function generateUniqueId(){
// return Math.floor(Math.random() * 9000 + 1000);
// }
//  let emp1= new Employee("Ghazi Same","Administration","Senior","https://unsplash.com/photos/7YVZYZeITc8");
// let emp2=new Employee(1001,"Lana Ali","Finance","Senior","https://unsplash.com/photos/Zz5LQe-VSMY");
// let emp3=new Employee(1002,"Tamara Ayoub","Marketing","Senior","https://unsplash.com/photos/ttSRjiYG_WM");
// let emp4=new Employee(1003,"Safi Walid","Administration","Mid-Senior","https://unsplash.com/photos/c_GmwfHBDzk");
// let emp5=new Employee(1004,"Omar Zaid","Development","Senior","https://unsplash.com/photos/mjRwhvqEC0U");
// let emp6=new Employee(1005,"Rana Saleh","Development","Junior","https://unsplash.com/photos/IF9TK5Uy-KI");
// let emp7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://unsplash.com/photos/C8Ta0gwPbQg");
// emp1.generateUniqueId();
// emp1.calculateSalary();
// console.log(emp1.generateUniqueId());

// emp1.render();
// emp2.calculateSalary();
// emp2.render();
// emp3.calculateSalary();
// emp3.render();
// emp4.calculateSalary();
// emp4.render();
// emp5.calculateSalary();
// emp5.render();
// emp6.calculateSalary();
// emp6.render();
// emp7.calculateSalary();
// emp7.render();