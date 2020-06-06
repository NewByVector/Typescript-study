let union1: string | number;
union1 = 6;
union1 = '666';

//只能访问联合类型的所有类型里共有的属性或方法
// Property 'length' does not exist on type 'number'
// function getLength(something: string | number): number {
//     return something.length;
// }

function getString(something: string | number): string {
    return something.toString();
}