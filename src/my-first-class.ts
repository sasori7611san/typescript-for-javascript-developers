export {};

class Parson {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile() : string{
        return `name: ${this.name}, age: ${this.age}`
    }
}
let taro = new Parson('taro', 30);
console.log(taro.profile());
// let hanako = new Parson();
