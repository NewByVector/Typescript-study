let a1: any = 'vector';
a1 = 6;

//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let a2;
a2 = 'vector';
a2 = 6;

//类型推断
let a3 = 'vector'; // 推断出a3是string类型
//a3 = 7; // Type '7' is not assignable to type 'string'