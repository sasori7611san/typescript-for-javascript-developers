export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Atsushi';
    static lastName: string = 'Ishida';

    static work() {
        // "Hey,guys! Are you interrested in TypeScript? Let's dive into TypeScript!";
        return `Hey,guys! This is ${this.firstName}! Are you interrested in TypeScript? Let's dive into TypeScript!`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());