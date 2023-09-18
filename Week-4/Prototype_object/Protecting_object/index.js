class Person {
    constructor(name, email, age){
        Object.defineProperty(this, name, {
            value: name,
            writable: false,
        });
        Object.defineProperty(this, email, {
            value: email,
            writable: false,
        });
        this.age = age;
    }

    getAge(){
        return this.age;
    }
    setAge(value){
        this.age = value;
    }
};


let P1 = new Person('aarif', 'exampl@gmail.com', 25);

console.log(P1.getAge());
P1.setAge(22);
console.log(P1.getAge());
