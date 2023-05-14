// // Generic Interface

// interface CrushInterface<T, U = null> {
//     name: string;
//     husband:T;
//     wife?:U;
// }

// const crush4:CrushInterface<{name:string, age:number}, {name: string, age: number}> = {
//     name: "Kate",
//     husband: {
//         name: "Persian",
//         age: 40,
//     },
//     wife: {
//         name: "Kate",
//         age: 20,
//     }
// }

// const crush1:CrushInterface<boolean, string> = {name: "Kate", husband: true, wife: "Cokina"};

// const crush2:CrushInterface<string, string> = {name: "Kate", husband: "persian", wife: "Cokina"};

// interface HusbandInterface {
//     name: string;
//     salary: number;
// }

// const crush3:CrushInterface<HusbandInterface, string> = {
//     name: "Persian",
//     wife: "Cokina",
//     husband: {
//         name: "persian",
//         salary: 0.0,
//     },
// }

// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["nuntu", "nuntu"];

// interface RelationWithSalaryInterface {
//     name: string;
//     salary: number;
// }
// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
//     {
//         name: "salary",
//         salary:10000000 
//     },
//     "Jan Moina Tiya"
// ]

// type GenericArray<T> = Array<T>

// const rollNumber: GenericArray<number> = [44, 12, 4]
// const rollNumber2: GenericArray<string> = ["44", "12", "4"]

// type NameRollType = {name: string, rollNumber: number}

// const userNameAndRollNumber: GenericArray<NameRollType> = [
//     {
//         name: "Mr. X",
//         rollNumber: 1,
//     }
// ]