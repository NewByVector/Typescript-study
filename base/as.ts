function getLen(something: string | number): number {
    if (something > 100) {
        return 1;
    }
    return (something as string).length;
}

// 不能滥用 as any，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡
// window.foo = 1; //Property 'foo' does not exist on type 'Window & typeof globalThis'
(window as any).foo = 1;