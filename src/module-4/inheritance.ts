// class Parent {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name:string, age:number, address:string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     makeSleep(hours:number):string {
//         return `This ${this.name} sleep for ${hours}`
//     }
// }

// class Student  extends Parent{

//     constructor(name:string, age:number, address:string){
//         super(name, age, address);
//     }
//     // name: string;
//     // age: number;
//     // address: string;

//     // constructor(name:string, age:number, address:string){
//     //     this.name = name;
//     //     this.age = age;
//     //     this.address = address;
//     // }

//     // makeSleep(hours:number):string {
//     //     return `This ${this.name} sleep for ${hours}`
//     // }
// }

// const student1 = new Student('Mr X', 18, 'Jashore');
// student1.makeSleep(18);

// class Teacher extends Parent{
//     designation:string;

//     constructor(name:string, age:number, address:string, designation:string){
//         super(name, age, address);
//         this.designation = designation;
//     }

//     makeClass(numOfClass:number){
//         return `This ${this.name} will take ${numOfClass} classes`
//     }
// }

// const teacher1 = new Teacher('Mr X', 20, 'New York', 'Professor');
// teacher1.