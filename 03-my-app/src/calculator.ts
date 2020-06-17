export interface Calculator {
    add : (x : number, y:number) => number,
    subtract : (x : number, y:number) => number
}

export function add(x:number, y:number):number{
    return x + y;
}

export function subtract(x :number, y:number):number{
    return x - y;
}

const calculator : Calculator = { add, subtract };

export default calculator;