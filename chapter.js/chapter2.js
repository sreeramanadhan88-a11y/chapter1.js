
// console.log('looping starting now');

dataSet=[
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
  
    
]


// for(let item=0; item<dataSet.length+1;item++){
//     console.log(dataSet[item]);
// }


// console.log('looping ending now');

// for (let i = 1; i <= 3; i++) {
//   console.log("i value before print:", i);
//   console.log("Number:", i);
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let num=5

// for(let item=1; item<15;item++){
//     console.log(`${num} ^${item} = ${num + item}`);

// }

// for (let i=1;i<=5; i++) {
//     console.log(i);
    
// }
// const animals=["cat","dog","bird"];
// for (let i=0; i < animals.length;i++) {
//     console.log(animals[i]);
    
// }

// let count=5;
// while (count >0) {
//     console.log(count);
//     count=count-1;
    
// }
// console.log("Blast off!");

// let count = 5;
// while(count>0) {
//     console.log(count);
//     count--;
    

// }
// console.log("Blast off!");

// let num=10;

// do {
//     console.log("num is:", num);
//     num +=10;

    
// } while (num<50);

// let input="";
// let attempts=0;
// do {
//     input=attempts === 0 ? "": "hello";
//     attempts++;
// }while (input ==="");
// console.log(`Got valid input after ${attempts} attempts`);

// const fruits=["apple","banana","mango"];

// for (const x of fruits){
//     console.log(x);
    
// }

// const word= "CODE";
// for (const char of word) {
//     console.log(char);
    
// }

// const nums =[10,20,30];
// let total = 0;
// for (const n of nums) total +=n;
// console.log("Total:",total);

// for (let i=0; i<5;i++) {
//     console.log(i);
    
// }

// let total=0;
// for (let i=1;i <=10; i++){
//     total +=i;
// }
// console.log("sum:",total);



// let word ="Hi";
// for (let i=0; i<word.length;i++){
//     console.log(word[i]);
    
// }

// for (let i =5; i>=1;i--){
//     console.log(i);
    
// }

// for (let i=2; i<=10;i+=2){
//     console.log(i);
    
// }
// let squares=[];
// for (let i=1;i<=5;i++){
//     squares.push(i*i);
// }
// console.log(squares);

// for (let row=0; row<3; row++){
//     let line="";
//     for (let col=0;col<3;col++){
//         line +="*";
//     }
//     console.log(line);
    
// }

// let n=1;
// while (n<=5){
//     console.log(n);
//     n++;
    

// }

// let sum=0;
// let num=1;
// while (sum<21){
//     sum +=num;
//     num++;

// }
// console.log("Sum:",sum);

// let x=0;
// while (x<10) {
//     x++;
//     if (x==4){
//         continue
//     }
//     else{
//     console.log(x);
//     }
    
// }
// console.log("First mutiple of 7:",x);

// const names=["Alice","Bob","Carol","Dave",];
// const target="Carol";
// let found=false;

// for (let i=0; i < names.length;i++) {
//     if (names[i]===target){
//         console.log(`Found ${target} at index ${i}!`);
//         found =true;
//         break;
//     }
// }

// if (!found) console.log("Not found.");


// const items=["apple","Banana","Blueberry","Mango"];
// for (const item of items) {
//     if (item.startsWith("B")) continue;
//     console.log(item);
    
// }

// const scores = [45, 72, 33, 91, 60, 88];

// for (let i = 0; i < scores.length; i++) {
//   // Skip scores below 50:
//   if (scores[i] < 50) {
//     console.log(`Skipping ${scores[i]}`);
//     continue;
//   }

//   // Stop if we hit a perfect score (>=90):
//   if (scores[i] >= 90) {
//     console.log(`Found top score: ${scores[i]} — stopping!`);
//     break;
//   }

//   console.log(`Valid score: ${scores[i]}`);
// }

// let a =10,b=20;
// console.log(a+b);

// let n=52;
// if (n % 2 ===0) console.log("even");
// else console.log("odd");

// let x=50,y=100;
// if(x >=y)console.log(x);
// else console.log(y);

// let num=17,div=5;
// let quotient=Math.floor(num/div);
// let remainder=num % div;
// console.log(quotient,remainder);

// let p=13,q=25,r=50;
// let avg=(p+q+r)/3;
// console.log(avg);


// let n=567;
// let sum=0;
// while(n > 0) {
//     sum += n % 10;
//     n=Math.floor(n/10);
// }
// console.log(sum);

// let n=10;
// if (n<2) {console.log(false); 
// } else{
//     let prime=true;
//     for (let i=2; i<=Math.sqrt(n); i++) {
//         if (n%i===0) { prime=false;break;}
//     }
//     console.log(prime);
    
// }

// let base =80,exp=5;
// let result=1;
// for (let i=0;i<exp;i++)result*=base
// console.log(result);

// let a= 12,b=18;
// while(b !==0) {
//     let temp=b;
//     b=a%b;
//     a=temp;
// }
// console.log(a);

// let n=10;
// let count=0;
// for (let i=1; i<=n;i++) {
//     if (n % i ===0) count++;
// }
// console.log(count);

// let str="sreeram"
// console.log(str.length);
// console.log(str[0] || str.charAt(0));

// let s= "Fullstack Developer";
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// let text="python developer at edure";
// console.log(text.slice(2,5));
// console.log(text.slice(1));

// let str="sreeram",sub="ram";
// let idx=str.indexOf(sub);
// console.log(str.includes(sub) ? idx: -1 );

// let s = "Bootsrap";
// let t = s.trim();
// console.log(t.repeat(3));

// let str="apple grape",oldStr="mango",newStr="grape";
// console.log(str.replace(oldStr,newStr));

// let csv='apple,grape,mango'
// let arr=csv.split(',');
// console.log(arr.join('-'));

// let s="welcome";
// let rev=s.split("").reverse().join("");
// console.log(rev);

// let str="Javascript",prefix="",suffix=""
// console.log(str.startsWith(prefix),str.endsWith(suffix));

// let s="a1b2c3";
// let digits="";
// for (let i=0;i<s.length;i++){
//     if (s[i]>="0" &&s[i] <="9") digits +=s[i];
// }
// console.log(digits);

// let str="kalyani Priyadharshan";
// let i=0;
// while (str[i]!==undefined) i++;
// console.log(i);

// let str="Mechanical Engineering";
// let i=0;
// while(str[i+1] !== undefined) i++;
// console.log(str[i]);

// let str=" S Sree Ramanadhan",ch="a";
// let count=0;
// for (let i = 0; str[i] !== undefined; i++) {
//   if (str[i] === ch)count++;
// }
// console.log(count);

// let str="sreeram",start=2,end=5;
// let result="";
// for (let i=start;i<=end;i++) result+=str[i]
// console.log(result);

// let str1="sree",str2="ram";
// let result="";
// for (let i=0;str1[i] !==undefined;i++) result+=str1[i];
// for (let j=0;str2[j] !==undefined;j++) result+=str2[j];
// console.log(result);

// let row ="sreeram";
// for(let i=0;i<5;i++){
//     row +="*";
// }
// console.log(row);

// for (let r=0;r<3;r++) {
//     let line="";
//     for (let c=0;c<5;c++) line +="*";
//     console.log(line);
    
// }

// for (let r=1; r<=5;r++) {
//     let line="";
//     for (let c=0;c<r;c++) line +="*";
//     console.log(line);
    
// }

// for (let r=5;r>=1;r--) {
//     let line="";
//     for (let c=0;c<r;c++) line +="*";
//     console.log(line);
    
// }

// let out="";
// for (let i=1;i<=5;i++) {
//     out +=i+",";
// }
// console.log(out.trim());

// const n=4;
// for (let r=0;r<n;r++) {
//     let spaces = " ".repeat(n - 1 - r);
//   let stars = "*".repeat(2 * r + 1);
//   console.log(spaces + stars);
// }

// let num=5;
// for (let r=0;r<5;r++) {
//     let line="";
//     for (let c=0;c<3;c++) {
//         line +=num + "";
//     }
//     console.log(line);
    
// }

// let count=1;
// for (let r=1;r<=4;r++){
//     let line="";
//     for (let c=0;c<r;c++){
//         line +=count + "";
//         count++;
//     }
//     console.log(line);
    
// }

// for (let r=1;r<=4;r++){
//     let line="";
//     for (let c=0;c<5;c++) line +=r;
//     console.log(line);
    
// }

// for (let r=0;r<4;r++){
//     let line="";
//     for (let c=0;c<4;c++){
//         line +=(r+c) % 2;
//     }
//     console.log(line);
    
// }

// for (let r=1;r<=4;r++) {
//     let line="";
//     for (let c=1;c<=r;c++) line +=c;
//     console.log(line);
    
// }

// const rows=4,cols=5;
// for(let r=0;r<rows;r++) {
//     let line="";
//     for (let c=0;c<cols;c++) {
//         if (r===0 || r===rows - 1 || c ===0|| c===cols-1)
//             line +="*";
//         else line +="";
//     }
//     console.log(line);
    
// }

// for (let r=1;r<=4;r++) {
//     let line="";
//     for (let k=0;k<r;k++) {
//         line +=(2 * k+1) +;
//     }
//     console.log(line);
    

// }

let out ="";
for (let i=5;i>=1;i--) {
    out +=i+"";
}
console.log(out.trim());

const chars="ABCD";
for (let i=0;i<4;i++) {
console.log(chars[i].repeat(i+1));

}

    














    
    
    




