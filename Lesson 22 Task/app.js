const Side1 = 10
const Side2 = 20
const Side3 = 30

if (Side1 === Side2 && Side2 === Side3 && Side1 === Side3) {
    console.log('Equilateral triangle');
} else if (Side1 === Side2 || Side1 === Side3 || Side2 === Side3) {
    console.log('Isosceles triangle');
} else {
    console.log('Scalene triangle')
}