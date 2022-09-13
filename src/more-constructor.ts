export {};

class Parson {
    constructor(public name: string, protected age: number) {}
}

const me = new Parson('はむさん', 43);
console.log(me);