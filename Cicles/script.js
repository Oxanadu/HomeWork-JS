//Задание 1
console.log('Задание 1');

let i = 0;
while(i < 50) {
    i++;
    console.log(i);
}
console.log('');

i = 35;
do {console.log(i);
    i--;} while(i >= 8);


//Задание 2
document.write('Задание 2 <br\/>')

let a = 89;
while(a >= 11) {
    document.write(a, '<br\/>');
    a--;
}

console.log('');

//Задание 3
console.log('Задание 3');

summ = 0;
for(let n = 0; n < 100; n++) {
    summ = summ + n; 
}
console.log(summ);

console.log('');

//Задание 4
console.log('Задание 4');

let arr = [];
for(let i = 0; i< 5; i++) { 
    arr[i] = i + 1;                    
    console.log(arr);
    let summ = 0;
    
    for(let a = 0; a < arr.length; a++) {         
        summ = summ + arr[a];
    }
   console.log(summ);
}

console.log('');

//Задание 5
console.log('Задание 5');

a = 8;
while (a <= 56) {
    if (a % 2 == 0) {
    console.log(a);
    } 
    a++;
};

console.log('');

for(a = 8; a <= 56; a++) {
    if (a % 2 == 0){
        console.log(a);
        }     
}

document.write('<br\/>');

//Задание 6
document.write('Задание 6');

for(let a = 2; a <= 10; a ++) { 
    document.write('<br\/>');
     for (let b = 1; b <=10; b++) { 
            document.write(a, '*' ,b, '=', a * b, '<br\/>');
     }
}

//Задание 7
console.log('Задание 7');

let num = 0;
let n;
for(n = 1000; n > 50;) {
    n = n/2;   
    num++;
}
console.log(n, num);


console.log('');

//Задание 8
console.log('Задание 8');

let x = prompt('Введите число');
summ = 0;
let i = 0;

while(x < 0, x >0) {//x = 1
    i++;            //i = 2
    summ = summ + Number(x); // summ = 1
    x = prompt('Введите число');

}
console.log(summ);
console.log(summ/i);*/

console.log('');

