document.write('hola mundo');

let num1 = 1;
let num2 = 1;
let result= 0;
for(i=0;i<=50;i++){
  result= num1 + num2;
   num1 = num2;
   num2 = result;
   console.log(result);
}
