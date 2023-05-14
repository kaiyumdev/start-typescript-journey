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