
//CIT 281 
//Name: Mia Matheson     Date: May 25th, 2023
//part 3 
class Shape{ 
    constructor(side = []){ 
        this.side = side; 
    }
        perimeter = () => this.side.length > 0 ? this.side.reduce((total,side) => total + side,0): 0  
}

console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

//part 4
class Rectangle extends Shape{ 
    constructor (length = 0, width = 0){ 
        super([length,width,length,width]); 
        this.length = length;  
        this.width = width; 
    }
    area = () => this.length * this.width
}
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16  
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25  
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0 

//part 5
class Triangle extends Shape { 
    constructor(sideA = 0, sideB = 0, sideC = 0){ 
        super([sideA,sideB,sideC])
        this.sideA = sideA; 
        this.sideB = sideB; 
        this.sideC = sideC; 
    }
    area = (sideA,sideB,sideC) => { 
        let p = this.perimeter();
        let s = (p/2);
        return Math.sqrt(s*(s-(this.sideA))*(s-(this.sideB))*(s-(this.sideC)))
    }
} 

console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6 
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0 

//part 6 
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], []];
for(let sideArr of data){  
switch(sideArr.length){ 
    case 1: 
    console.log('Shape with 1 side unsupported') 
    break; 
    case 2: 
        let rec = [sideArr[0],sideArr[1],sideArr[0],sideArr[1]]
        const len = sideArr[0]; 
        const wid = sideArr[1]; 
        const perRec = new Shape([...rec]).perimeter(); 
        const recResult = new Rectangle(len,wid).area(); 
        if (sideArr[0] === sideArr[1]){ 
            console.log(`Square with sides ${rec[0]}, ${rec[1]} has a perimeter of ${perRec} and an area of ${recResult}`)
        } else { 
            console.log(`Rectangle with sides ${rec[0]}, ${rec[1]} has a perimeter of ${perRec} and an area of ${recResult}`)
        }
    break; 
    case 3: 
        let tri = [sideArr[0], sideArr[1], sideArr[2]]
        const A = tri[0]; 
        const B = tri[1]; 
        const C = tri[2]; 
        const perTri = new Shape([...tri]).perimeter(); 
        const triResult = new Triangle(A, B, C).area(); 
        console.log(`Triangle with sides ${sideArr[0]}, ${sideArr[1]}, ${sideArr[2]} has a perimeter of ${perTri} and an area of ${triResult}`) 
    break; 
    case 0: 
    console.log('Shape with 0 sides unsupported')
}
}
