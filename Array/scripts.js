//Задание 1
console.log('Задание 1');
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Задание 2
console.log('Задание 2');

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i< arr1.length; i++) {

        if (arr1[i] > -10 && arr1[i] < -3) {
            console.log(arr1[i]);
        }
}

//Задание 3
console.log('Задание 3');

let arr2 = [];
let i = 0;
let result = 0;
for (let n = 23; n <= 57; n++) {
    arr2[i] = n;
    i++;
    result += n;
}
    console.log(arr2);
    console.log('Сумма =', result);

arr2 = [];
let n = 23;
while(n <= 57) {
    arr2[n-23] = n;
    n++; 
}
    console.log(arr2);


//Задание 4
console.log('Задание 4');

let arr3 = ['10', '20', '30', '50', '235', '3000'];
let arr33;
for(let i = 0; i < arr3.length; i++) {
     arr33 = [arr3[i]];
    if (arr33[0][0] == 1 || arr33[0][0] == 2 || arr33[0][0] == 3) {
        console.log(arr3[i]);
    }
}

//Задание 5
document.write('Задание 5 <br\/>');

let arr4 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for(let i = 0; i < arr4.length; i++) {
       
    if( i < 5) {
        document.write(arr4[i])
    } else {
        document.write('<b>', arr4[i], '<b\>');
    }
}

//Задание 6
console.log('Задание 6');

let arr5 = ['Мышка', 'Кошка', 'Жучка', 'Внучка', 'Бабка', 'Дедка'];
    arr5.push('Репка');
    console.log(arr5);
 
    i = arr5.length-1;
    console.log(arr5[i]);


/*//Задание 7
console.log('Задание 7');

let arr6 = [];
    i=0;
for(n; n != ''; n) {
    n = prompt('Введите числовое значение');
    arr6[i] = n;
    i++;
    arr6.sort(function(a, b) {
        return a - b;
    });
}
console.log(arr6);*/

//Задание 8
console.log('Задание 8');

let arr7 = [12, false,'Текст', 4, 2, -5, 0];
let arr8 = [];
let x = 0;
i = arr7.length - 1;
    while (i >= 0) { 
        arr8[x] =  arr7[i];     
        x++;
        i--; 
    }
console.log(arr8); 

arr7.reverse()
console.log(arr7);


//Задание 9
console.log('Задание 9');

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
    x = 0;
for(let i = 0; i < arr9.length; i++) {
    if(arr9[i]>= 0 || arr9[i] < 0) {
    
       }else {x++;
       }
}
 console.log(x);


//Задание 10
console.log('Задание 10');

let arr10 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
let a1, a2;
let summ = 0;
for(let i = 0; i < arr10.length; i++) {

   if (arr10[i] == 0) {
       a1 = i;
    break; 
   } 
}   
for(let i = arr10.length; i >= 0; i--) {

    if (arr10[i] == 0) {
        a2 = i;
      break; 
    } 
 } 

let arr11 = arr10.slice(a1+1, a2);

for(let i = 0; i < arr11.length; i++) {
      summ = summ + arr11[i];
 }
console.log(summ);
