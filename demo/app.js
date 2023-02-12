'use strict';
let department=["Administration","Marketing","Development","Finance"];
let level;

function Employee(employeeId,fullName,department,level,imageUrl){
    this.employeeId=employeeId;
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

Employee.prototype.render=function(){
    document.write(`${this.fullName} ${this.salary} `);
    document.write("<br>");
}

let emp1= new Employee(1000,"Ghazi Same","Administration","Senior","https://unsplash.com/photos/7YVZYZeITc8");
let emp2=new Employee(1001,"Lana Ali","Finance","Senior","https://unsplash.com/photos/Zz5LQe-VSMY");
let emp3=new Employee(1002,"Tamara Ayoub","Marketing","Senior","https://unsplash.com/photos/ttSRjiYG_WM");
let emp4=new Employee(1003,"Safi Walid","Administration","Mid-Senior","https://unsplash.com/photos/c_GmwfHBDzk");
let emp5=new Employee(1004,"Omar Zaid","Development","Senior","https://unsplash.com/photos/mjRwhvqEC0U");
let emp6=new Employee(1005,"Rana Saleh","Development","Junior","https://unsplash.com/photos/IF9TK5Uy-KI");
let emp7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://unsplash.com/photos/C8Ta0gwPbQg");

emp1.calculateSalary();
emp1.render();
emp2.calculateSalary();
emp2.render();
emp3.calculateSalary();
emp3.render();
emp4.calculateSalary();
emp4.render();
emp5.calculateSalary();
emp5.render();
emp6.calculateSalary();
emp6.render();
emp7.calculateSalary();
emp7.render();