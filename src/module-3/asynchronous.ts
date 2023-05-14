// // json place holder
// interface IToDo {
//         userId: number;
//         id: number;
//         title: string;
//         completed: boolean;
//       }


// const getToDO = async():Promise<IToDo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     return await response.json()
// }

// const getToDoData = async ():Promise<void> => {
//     const result = getToDO();
//     console.log(result)
// }

// getToDoData();
 
// // string er jonno
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = "Data is fetched"
//         if(data){
//             resolve(data)
//         }else {
//             reject("Failed to fetch data")
//         }
//     })
// }
// // boolean er jonno
// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         const data: boolean = true;
//         if(data){
//             resolve(data)
//         }else {
//             reject("Failed to fetch data")
//         }
//     })
// }

// type DataType = {
//     data: string;
// }

// // object er jonno
// const makePromiseObject = (): Promise<DataType> => {
//     return new Promise<DataType>((resolve, reject) => {
//         const data: DataType = {data: "data is fetched"};
//         if(data){
//             resolve(data)
//         }else {
//             reject("Failed to fetch data")
//         }
//     })
// }


// // string
// const getPromiseData = async():Promise<string> => {
//     const data = await makePromise();
//     return data;
// };

// // boolean
// const getPromiseDataBoolean = async():Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     return data;
// };

// // object
// const getPromiseDataObject = async():Promise<DataType> => {
//     const data = await makePromiseObject();
//     return data;
// };