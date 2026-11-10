// 2. Write an algorithm to calculate
// a. area of a triangle
// b. area of a square
// c. area of a circle
// d. area of a Quadrilateral
// e. area of a Rhombus
// f. area of a Trapezium
// g. area of a Parallelogram
// h. the body mass index (BMI).
// rad to deg (rad*π)/180
// deg to rad (deg * 180)/π
// let w = (90*Math.PI)/180
// let v = Math.sin(w)
// console.log(v);

// a. area of a triangle right angled tri... 1/2 * (height * base) sin 90
// let height = 4
// let base = 6;
// let area = 1/2 * (height * base)
// console.log(area + "" +"cm^2");


// b. area of a square
// let lenght = 12
// let breadth = 12
// let squareArea =lenght * breadth
// console.log(squareArea + "" + "cm^2");

// c. area of a circle 
// let π = Math.PI
// console.log(π);
// let radius = 12
// let circleArea = Math.round(π*(radius**2))
// console.log(circleArea + "" + "cm^2");


// d. area of a Quadrilateral a kite
// let firstDiagonal = 20
// let secondDiagonal = 8
// let kiteArea = (firstDiagonal*secondDiagonal)/2
//   console.log(kiteArea + "" + "cm^2");

// e. area of a Rhombus
// let verticalDiagonal = 18
// let horizontalDiagonal = 12
// let rumbousArea = (verticalDiagonal*horizontalDiagonal)/2
//   console.log(rumbousArea + "" + "cm^2");

// f. area of a Trapezium
// let parallelTop = 16
// let parallelButtom = 22
// let theHeight = 8
// let trapeziumArea = ((parallelTop*parallelButtom)/2)*theHeight
//   console.log(trapeziumArea + "" + "cm^2");

// g . area of a Parallelogram
// let parallellogramlenght = 13
// let parallellogrambreadth = 25
// let parallelogramArea = parallellogramlenght * parallellogrambreadth
// console.log(parallelogramArea + "" + "cm^2");

// h . the body mass index (BMI).
// let weight = 70
// let myHeight = 6 
// let BMI = Math.round(weight / myHeight ** 2)
// console.log(BMI+"kg/m^2");

      function show() {
        let triHeight, triBase, area, displayAnswer;
        triHeight = document.getElementById("height").value;
        triBase = document.getElementById("base").value;
        area = (1 / 2) * (triHeight * triBase);
        displayAnswer = document.getElementById("display");
        displayAnswer.innerHTML = `<p> ${area + "" + "cm^2"} </p>`;
      }

      function square() {
        let sqLenght, sqbreath, squareArea, displaySqArea;
        sqLenght = document.getElementById("lenght").value;
        sqbreadth = document.getElementById("breath").value;
        squareArea = sqLenght * sqbreadth;
        displaySqArea = document.getElementById("squareDisplay");
        displaySqArea.innerHTML = `<p>${squareArea + "" + "cm^2"}</p>`;
      }

      function circle() {
        let r = document.getElementById("circleRadius").value;
        let area = Math.PI * (r ** 2);
        document.getElementById("circleDisplay").innerHTML = `<p>${Math.round(area)} cm^2</p>`;
      }

      function quadrilateral() {
        let d1 = document.getElementById("quadDiag1").value;
        let d2 = document.getElementById("quadDiag2").value;
        let area = (d1 * d2) / 2;
        document.getElementById("quadDisplay").innerHTML = `<p>${area} cm^2</p>`;
      }

      function rhombus() {
        let d1 = document.getElementById("rhomDiag1").value;
        let d2 = document.getElementById("rhomDiag2").value;
        let area = (d1 * d2) / 2;
        document.getElementById("rhomDisplay").innerHTML = `<p>${area} cm^2</p>`;
      }

      function trapezium() {
        let top = Number(document.getElementById("trapTop").value);
        let bottom = Number(document.getElementById("trapBottom").value);
        let h = Number(document.getElementById("trapHeight").value);
        
        let area = ((top + bottom) / 2) * h;
        document.getElementById("trapDisplay").innerHTML = `<p>${area} cm^2</p>`;
      }

      function parallelogram() {
        let length = document.getElementById("paraLength").value;
        let breadth = document.getElementById("paraBreadth").value;
        let area = length * breadth;
        document.getElementById("paraDisplay").innerHTML = `<p>${area} cm^2</p>`;
      }

      function bmi() {
        let weight = document.getElementById("bmiWeight").value;
        let height = document.getElementById("bmiHeight").value;
        let result = weight / (height ** 2);
        document.getElementById("bmiDisplay").innerHTML = `<p>${Math.round(result)} kg/m^2</p>`;
      }
    