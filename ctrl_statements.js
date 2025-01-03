let day='monday';
if(day === 'sunday'){
console.log('Holiday');
}else{
    console.log('no holiday');
}


if(day==='sunday' || day==='saturday'){
    console.log("holiday");
}else if(day==='friday'){
    console.log('weekend');
}else{
    console.log('weekday');
}

let salary=3000000;
let totalTax=0;
if(salary<=500000){
    totalTax=salary*0.01
}else if(salary<=7000){
    totalTax=500000*0.01+(salary-500000)*0.15

}else if(salary<=1000000){
    totalTax=500000*0.01+200000*0.15+(salary-700000)*0.2

}else if(salary<=2000000){
    totalTax=500000*0.01+200000*0.15+300000*0.2+(salary-2000000)*0.3

}else{
    totalTax=500000*0.01+200000*0.15+300000*0.2+1000000*0.25+(salary-2000000)*0.3

}
console.log(totalTax)


let daynum=1
if(daynum=1){
    console.log('sunday');
}else if(daynum=2){
    console.log('monday')
}else if(daynum=3){
    console.log('tuesday')
}else if(daynum=4){
    console.log('wednesday')
}else{
    console.log('saturday')
}