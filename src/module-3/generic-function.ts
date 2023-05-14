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



// const addMeInMyCrushMine = <T>(myInfo: T) => {
//     const crush = "Kate WinsLate";
//     const newData = {...myInfo, crush}
//     return newData
// }

// const myInfo = {
//     name: "Bangladesh",
//     age: 28,
//     salary: 100000
// }

// const result5 = addMeInMyCrushMine(myInfo);