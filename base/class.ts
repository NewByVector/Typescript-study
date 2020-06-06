// public申明的变量能被实例以及子类访问
// protected申明的变量能被子类访问
// private申明的变量只能在类内部使用

// constructor为public：可以实例化可以被继承
// constructor为private: 不可实例化不可被继承
// constructor为protected: 不可实例化可以被继承
class Animal {
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }
}

const a: Animal = new Animal('xx');