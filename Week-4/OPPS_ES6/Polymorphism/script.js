class Shape{
    calculateArea(para1, para2) {
       console.log(`calculating area ${para1 * para2}`);
    }
}

class Rectangle extends Shape{
    calculateArea(w, h) {
        super.calculateArea(w, h);
        let area = w*h;
        console.log(`recalculating area is ${area}`)
    }
}

class Triangle extends Shape{
    calculateArea(base, height){
        super.calculateArea(base, height);
        let area = (base * height) / 2;
        console.log(`Trianle area is ${area}`)
    }
}

class Circle extends Shape {
    calculateArea(radius){
        super.calculateArea(radius);
        let area = Math.PI * radius * radius;
        console.log(`Circle area is ${area}`)
    }
}

let rect = new Rectangle();
let tri  = new Triangle();
let cir = new Circle();

console.log(rect.calculateArea(2,2));
console.log(tri.calculateArea(2,2));
console.log(cir.calculateArea(2));