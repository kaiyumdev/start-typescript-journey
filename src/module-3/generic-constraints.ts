// // Arrow Function

// const createArrow = (param: string): string[] => {
//     return[param];
// }

// const createArrow1 = <X,Y>(param1: X, param2:Y): [X,Y]=> {
//     return [param1, param2];
// }

// function createArrow2 <X,Y>(param1: X, param2:Y): [X,Y]{
//     return [param1, param2];
// }

// const result1 = createArrow1<string, string>("Bangladesh", "I Love Bangladesh")
// const result2 = createArrow1<boolean, Array<string>>(true, ["USA"])

// type Name = {name: string}
// const result3 = createArrow1<Name, boolean>({name: "Bangladesh"}, false)

// // spread operator


// type MyInfoType = {
//     name: string;
//     age: number;
//     salary: number;
//     other1: boolean;
//     other2: null;
// }

// const addMeInMyCrushMine = <T extends {name:string, age:number, salary:number}>(myInfo: T) => {
//     const crush = "Kate WinsLate";
//     const newData = {...myInfo, crush}
//     return newData
// }

// const myInfo:MyInfoType = {
//     name: "Bangladesh",
//     age: 28,
//     salary: 100000,
//     other1: false,
//     other2: null
// }

// const result5 = addMeInMyCrushMine<MyInfoType>(myInfo);