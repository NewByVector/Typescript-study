// 函数申明
function add(x1: number, x2: number): number {
    return x1 + x2;
}

// 函数表达式
// const sub: (x1: number, x2: number) => number
const sub = function(x1: number, x2: number): number {
    return x1 - x2;
}

// 可选参数
const func2 = function (a: string, b?: string): string {
    return a + b;
} 

// 默认参数
const func3 = function (a: string, b: string = 'hello' ): string {
    return a + b;
}

// 剩余参数
const func4 = function (a: string, ...rest: Array<string>): string {
    return a + rest.join(',');
} 

// 函数重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return x;
}