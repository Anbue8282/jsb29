//spreed operator
let list_1=[1,2,3,4,5];

//problems
// let list_2=list_1;
// list_2.pop();
// console.log(list_1)
// console.log(list_2)  // cả 2 list đều bị ảnh hưởng (xoá mất số 5)

//...
// let list_3=[...list_1];
// list_3.pop();
// console.log(list_1);
// console.log(list_3);


//gop list
// let list_4=[5,4,3,2,1];
// let list_5=[...list_1, ...list_4];
// let list_6=list_1.concat(list_4);
// console.log(list_1);
// console.log(list_6);
// console.log(list_5);


//gop obj 
obj1 = {a:1,b:2};
obj2={c:2,d:4};
const obj3={...obj1,...obj2, a:5}
console.log(obj3);





//rest --------------------------

const arr_r = [1, 2, 3, 4, 5, 6];
const obj_r = [
  { a: 1, b: 10 },
  { a: 2, b: 9 },
  { a: 3, b: 4 },
  { a: 6, b: 5 },
];
//destrủing (obj/aray))
var [m,n,o,p]=obj_r;
console.table({m,n,o,p});
//lay phan con lai - last 
//aray --
var [fist_item,sec_item,...last_items]=arr_r;
console.log(last_items);

//obj 
var obj_rest ={
    a:1,
    b:{a:"b"},
    c:3,
};
var {a, ...last}=obj_rest;
console.log(last);
//cat obj +them ptu cho obj ms
var {a:parentA,b:{name:childrenB},...last}=obj_rest
console.log(parentA,childrenB);