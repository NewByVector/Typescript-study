interface Person {
    name: string,
    age: number
}
let vector: Person = {
    name: 'vector',
    age: 27
};

// 可选属性
interface Person2 {
    name: string,
    age?: number
}
let vector2: Person2 = {
    name: 'vector'
};

//任意属性
interface Person3 {
    name: string,
    age: number,
    [prop: string]: string | number
}
let vector3: Person3 = {
    name: 'vector',
    age: 27,
    createTime: 43
}

//只读属性
interface Person4 {
    readonly name: string,
    age: number
}
let vector4: Person4 = {
    name: 'vector',
    age: 27
}
//vector4.name = 'hh'; //Cannot assign to 'name' because it is a read-only property