// let name="sreeram";
// let greeting="Hello,"+ name + "!";
// console.log(greeting);

// const birthYear=2001;
// let age=24;
// age=age+1;
// console.log("Next year you'll be:",age);

// console.log(score);
// var score=100;
// console.log(score);

// let city="Paris";

// function travel(){
//   let hotel="Grand";
//   console.log(city);
//   console.log(hotel);
// }
// travel();
// console.log(city);
// console.log(hotel);

// if (true){
//   var x=10;
//   let y=20;
// }
// console.log(x);
// console.log(y);

// console.log(typeof 42);
// console.log(typeof "hello");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof [1,2,3]);

// let strNum="42";
// let realNum=Number (strNum);
// console.log(realNum+8);

// let n=100;
// let s= String(n);
// console.log(s + "px");

// console.log("5" +3);
// console.log("5" -3);

// let price=80;
// let discount=15;
// let tax=0.1;

// let afterDiscount= price - discount;
// let taxamount= afterDiscount * tax;
// let total =afterDiscount + taxamount;
// let remainder= total % 3;

// console.log("Total:", total);
// console.log("Leftover cents remainder:", remainder);

// console.log(5 == "5");
// console.log(5 ==="5");
// console.log(5 === 5);
// console.log(0 == false);
// console.log(0 ===false);
// console.log("" == false);

// let isLoggedIn=true;
// let isAdmin=false;

// console.log(isLoggedIn && isAdmin);
// console.log(isLoggedIn || isAdmin);
// console.log(!isAdmin);

// let name=null;
// console.log(name || "Guest");

// let sentence = " Javascript is Awesome! ";
// console.log(sentence.trim());
// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());
// console.log(sentence.includes("Awesome"));
// console.log(sentence.replace("Awesome","cool"));
// console.log(sentence.length);

// let price=19.956;
// console.log(price.toFixed(2));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.max(3,9,1,7));
// console.log(Math.min(3,9,1,7));
// console.log(Math.random());

// let fruits=["apple","bananna","mango"];

// fruits.push("grape");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("kiwi");
// console.log(fruits);

// console.log(fruits.indexOf("banana"));
// console.log(fruits.includes("mango"));
// console.log(fruits.join("|"));
// console.log(fruits.reverse());


// let age=20

// if (age>=18){
//     console.log("Adult");

// } else {
//     console.log("Minor");
    
// }

// let status=age >= 18 ? "Adult":"Minor";
// console.log(status);

// let score=72;
// let result=score>=50
// console.log(result);

// const firstname="Sam";
// const lastname="Rivera";
// let age= 28;
// let score=87.456;

// let fullName=firstname + "" + lastname;
// console.log(fullName);

// let initials = firstname[0] + lastname[0];
// console.log(initials);

// let category= age>=18? "Adult":"Minor"
// console.log(category);

// let display = score.toFixed(1)
// console.log(display);

// console.log("Name:", fullName.toUpperCase());
// console.log("Initials:",initials);
// console.log("Category",category);
// console.log("score:",display);

// let product = "Laptop";
// let price=999;
// let qty=3;

// let msg1="Item:"+product+",Price:$"+price;

// let msg2= `Item:${product},Price:$${price*qty}`;

// let receipt = `Item: ${product}`
// console.log(msg2);
// console.log(receipt);

// let a="first";
// let b="second";

// let temp = a;
// a=b;
// b=temp;
// console.log(a,b);

// a="first"; b="second";
// [a,b]=[b,a];
// console.log(a,b);

// let counter=0;
// counter +=5;
// counter *=2;
// counter -=3;
// counter ++;
// counter --;
// console.log("Final:", counter);

// const user={name: "Alice", age:25};
// user.age=26;
// console.log(user.age);

// user.city="Paris";
// console.log(user.city);

// user={name:"Bob"};

// const PI=3.14159
// let lives=3;
// const MAX=100;
// let result=getstore();

// function getstore() {
//     let base=10;
//     return base*2;
// }
// console.log(result);



// let num=255;
// let big=9876543;

// console.log(num.toString());
// console.log(num.toString(2));
// console.log(num.toString(16));
// console.log(big.toExponential());
// console.log(big.toExponential(2));
// let word="JavaScript";
// console.log(word.length);
// console.log(num.toString().length);


// const colors =["red","green","blue","yellow"];

// console.log(colors.at(0));
// console.log(colors.at(-1));
// console.log(colors.at(-2));
// console.log(colors.join("\ "));
// console.log(Array.isArray(colors));
// console.log(Array.isArray("hello"));
// delete colors[1];
// console.log(colors);
// colors.splice(1,1);
// console.log(colors.length);

// let q= ["Alice","Bob","Carol"];

// q.push("Dave");console.log(q);
// let last=q.pop();console.log(last,q);

// q.unshift("Zara");
// console.log(q);
// let first=q.shift();console.log(first,q);


// let part=q.slice(0,3);
// console.log(part,q);

// q.splice(1,1,"Eve","Frank");
// console.log(q);

// let color="red";

// function paint() {
//     let color ="blue";
//     console.log(color);
    
// }
// paint();
// console.log(color);

// function noShadow(){
//     console.log(color);
    
// }
// noShadow();

// ----------------------------------------

// let x ="global";

// function outer(){
//     let x= "outer";

//     function inner(){
//         let x="inner";
//         console.log(x);
        
//     }
//     function middle(){
//         console.log(x);
        
//     }
//     inner();middle();
//     console.log(x);
    
// }
// outer();
// console.log(x);
// -----------------------------------------

// let r1=10/0;
// let r2= -10/0;
// let r3=0/0;
// let r4=parseInt("hello");

// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log(r4===NaN);
// console.log(isNaN(r4));

// const movie={
//     title: "Inception" ,
//     year:2010,
//     director:"Nolan" ,
//     rating:8.8
// };

// const{title,rating}=movie;
// const{director:dir}=movie;
// const{genre = "Unknown"}=movie;
// console.log(title,rating,dir,genre);

// const[a,b]=[10,20];
// console.log(a,b);

// const person ={name:"Sam",age:25};
// console.log(person.name);
// console.log(person["age"]);

// const obj={} ;
// obj.key="value";
// obj.name="JS";
// obj.count=1;
// obj.count=2;
// console.log(obj);

// const user={name:"alex",address:{city:"NYC",zip:"10001"}};
// const city=user.address.city;
// console.log(city);

// const product={name:"Laptop",price:999,
//     info() { console.log(this.price,this.name);}
        
//     };
//     product.info();

// const obj={a:1,b:2,c:3};
// const keys=Object.keys(obj);
// const vals=Object.values(obj);
// console.log(keys);
// console.log(vals);

// const scores={math:90,eng:85,sci:88}
// const subject="math";
// const score=scores[subject];
// console.log(score);
// console.log(subject);

// const calc={x:10,y:5,
//     sum() { return this.x + this.y}
// };
// console.log(calc.sum());

// let a=5;
// let b=5;

// console.log(a++);
// console.log(a);

// console.log(++b);
// console.log(b);

//  let i=3;
// let x=i++ + ++i;
//  console.log(x);

// // // const employees = [
// // //   { id: 1, name: "Sree", role: "Developer", salary: 40000 },
// // //   { id: 2, name: "Ram", role: "Tester", salary: 35000 },
// // //   { id: 3, name: "Anu", role: "Designer", salary: 38000 },
// // //   { id: 4, name: "Kiran", role: "Manager", salary: 55000 },
// // //   { id: 5, name: "Meera", role: "HR", salary: 30000 }
// // // ];

// // // console.log(employees[0]);
// // // console.log(employees[0].name);
// // // console.log(employees[4]["role"]);



// // // console.log(employees[3]["role"]);
// // // console.log(employees[2]["name"]);
// // // console.log(
// // //   employees[1].name,
// // //   employees[1]["role"],
// // //   employees[1].salary
// // // );
// // // console.log(employees[4].salary);

// // // const person = { name: "Sree", age: 24 };

// // // console.log(person);
// // // console.log("person:"+ person);



// //  let o=20;
// // let p=10;
// // console.log(o-p);

// // let c=20;
// // let d=10;
// // console.log(c+d);

// // let e=50;
// // let f=50;
// // console.log(e*f);

// // var g=100;
// // let h=200;
// // const i=300;
// // console.log(g/h/i);

// // const k=500;
// // let l=500;
// // console.log(k%l);

// // let m=20;
// // let n=50;
// // console.log(20**50);

// // let z=5;
// // z++;
// // console.log(z);

// // let y=5;
// // y--;
// // console.log(y);

// // let a=5;
// // a += 3;
// // console.log(a);

// // let b=50;
// // b-=10;
// // console.log(b);

// // // let x =10;
// // // x +=5;
// // // x *=2;
// // // x -=4;
// // // console.log(x);


// // // console.log(5 =="5");
// // // console.log(5 ==="5");
// // // console.log(10 !=5);
// // // console.log(10 !=="10");
// // // console.log(10 >5);
// // // console.log(5<3);
// // // console.log(10>=10);
// // // console.log(7<=5);

// // let age=24;
// // let hasID=true;
// // console.log(age >= 18 && hasID);
// // x=5;
// // x=7;
// // console.log(x);

// // let marks=35;
// // console.log(marks >=40 || marks ===35);

// // let isLoggedIn=false;
// // console.log(!isLoggedIn);

// // console.log(Number.MAX_VALUE);
// // console.log(Number.MAX_SAFE_INTEGER);

// const mySet = new Set();

// mySet.add(10);
// mySet.add(50);
// mySet.add(50);

// console.log(mySet);

// const myset = new Set([50,60,80]);
// console.log(mySet.has(20)); 
// console.log(mySet.has(50)); 

// let result ="Total: " + 50;
// console.log(result);

// let x ="5" -2;
// console.log(x);

// let y=true+1;
// console.log(y);

// let Number=30
// let numberConvert=String(Number)
// console.log(numberConvert);
// console.log(typeof numberConvert);

// let number =30
// let numberConvert=Boolean(number)
// console.log(numberConvert);
// console.log(typeof numberConvert);

// let boolean=false
// let booleanConvert=String(boolean)
// console.log(booleanConvert)
// console.log(typeof booleanConvert);

// let num=100
// let convert = String(num)
// console.log(convert);
// console.log(typeof convert);

// let amount=5
// let convert=Boolean(amount)
// console.log(convert);
// console.log(typeof convert);

// let status=true
// let convert = String(status)
// console.log(convert);
// console.log(typeof convert);

// let z=true
// let convert=String(z)
// console.log(convert);
// console.log(typeof convert);

// let value="250"
// let result=value+50
// console.log(result);
// console.log(typeof result);

// let x=true+2
// console.log(x);
// console.log(typeof x);

// let variable1=20
// let variable2="20"
// console.log(variable1 === variable2);
// let variable3=false
// let variable4=""
// console.log(variable3===variable4);
















































 





















            
         


      
 




















    


















































































  
  




