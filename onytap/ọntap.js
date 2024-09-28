
// //es6:2015 ESMAScript 6
// //1. let , const , var -----------------------------------------------------------------------------------------------
// // var a = 10; // toàn cục
// // for (var index = 0; index < array.length; index++) {
// //     console.log(index);
// // }
// // console.log("out"+index);


// // const pi ={name:"abc"};
// // pi.name="gfh";
// // console.log(pi);
// // const a=2;
// //a +=10; //error

// // 2. Template literal `$(var)`-------------------------------------------------------------------------------------------
// // const a ="abc";
// // console.log(`it is: ${a}`);
// // console.log(`this is special symbol: \${}`)

// // muti lines
// // const m ="line\nline\nline\n";
// // const n = `line
// // line 
// // line..`;
// // console.log(n);
// // console.log(m);


// // 3. arrow function ------------------------------------------------------------------------------------------
// //delaration function -named function
// // function message(message) {
// //     console.log(message);
// //     return message;
    
// // }

// // // expresion funtion 
// // const mess = function (m) {
// //     console.log(m);
// //     return m;
// //     }

// // //arrow function 
// // const messages=(m) => m;


// // arrow func ko viet dc context
// // const course={
// //     name:"JS",
// //     getName: function(){
// //         return this.name;//context
// //     },
// //     getNameArrowFunc:()=>this.name,

// // }
// // console.log(course.getName());
// // console.log(course.getNameArrowFunc());



// // 4. default paramter values---------------------------------
// // function sum(a,b) {
// //     if(!a||!b){
// //         return "123";

// //     }
// //     return a+b;

// // }

// // console.log(sum(1,2));

// // const sum_a =(a=0,b=0)=>a+b;
// // console.log(sum_a());

// // function sum_b(a=0,b=0){
// //     return a+b;
// // }
// // console.log(sum_b(1,2));


// // 5. array function--------------------------------------------------
// var data = [
//     { course: "a", name: "abc", price: 123 },
//     { course: "b", name: "def", price: 12 },
//     { course: "c", name: "gih", price: 1 },
//     { course: "d", name: "lmn", price: 87 },
//     { course: "e", name: "opq", price: 140 },
//     { course: "f", name: "rsu", price: 200 },
//     { course: "g", name: "xyz", price: 50 },
// ];
// // foreach
// for (let index = 0; index < array.length; index++) {
//     console.log(list[index]);

// }
// //kiem tra value = undefinr
// // list.forEach(element => {
// //     console.log("foreach: "element);
// // });

// // every()-----------------
// //return true neu tat ca element tm đk
// //some()-----------------
// //return true 1 hoặc nhiều element tm 
// //find()------------------
// //kiem tra có ptu ko => return element
// // function checkCourseName(course){
// //     if (course.course==="c"){
// //         return true;
// //     }

// // }
// // const item =data.find((element,index) => element.course==="c");

// // console.log(item):

// // filter()---------------------
// //return new list (cac item tm đk)
// const items =data.filter((element,index)=> element.price>150);
// console.log(items);)










// class Animal{
//     $count;

//     constructor(name="text",birthdate="1/1/1992",age=0){
//         this.name=name;
//         this.birthdate=birthdate;
//         this.age=age;
//         this.$count++;
//     }
//     speak(){
//         console.log("Animal is speaking!");
//     }
//     getName(){
//         return this.name;
//     }
// }
// //sub class => ke thua tu animal 
// class cat extends Animal{
//     constructor(name,birthdate,age){
//         super(name,birthdate,age);

//     }
//     speak(){
//         console.log("AAAAAAAAAAAAAAAAAaa có chuột!!!!!!")
//     }
// }
// const myPet=new cat("Doraemon");
// myPet.speak();
// console.log(myPet.getName());


// document.getElementById("").addEventListener("click",functionName)



class Parent {
    constructor() {
        this.value = 1;
    }

    increase() {
        this.value++;
    }
}

class Child extends Parent {
    increase() {
        this.value += 2;
    }
}

let obj = new Child();
obj.increase();
console.log(obj.value);
