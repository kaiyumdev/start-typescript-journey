const arrayofNumbers = [1, 2, 3, 4, 5]
const arrayofString = arrayofNumbers.map((number )=> number.toString());
console.log(arrayofString);

type AreaNumber = {
    height: number;
    width: number;
}

const rectangularArea: AreaNumber = {
    height: 10,
    width: 12
}

rectangularArea.width = 10

type B = AreaNumber['height'];  //look up types
type C = keyof AreaNumber;

type AreaString = {
    height: string;
    width: string;
}

type Volume = {
    height: string;
    width: string;
    depth: string;
}

type Area<T> = {
    // [key in keyof Volume]: Volume[key];
    readonly[key in keyof T]: T[key];
};

const area1: Area<{height:number, width:string}>={height:80, width:'80'};
