let h=10;
h++;
console.log(h)


console.log(++h)

let name='saman'
let last='chauguthi'
name += last;
console.log(name)


let a=10
let b=11
console.log(a==b)

console.log(((a==b)) && ((a!=b)))

let user={
name:'username',
age:18
}
console.log((user.age <= 16)?'child':'adult')

let{name1,age}=user
console.log(age)


let obj1={
name:'saman',
address:'bhaktapur',
email:'xyz@email.com',
phone:9840414870,
language:'c,php'
}

let obj2=obj1;

obj2.name='new';

console.log(obj2.name)

let{name:name2,email,...obj3}=obj1;

console.log(obj3.language)
console.log(obj3.phone);


let username='saman'
let labno=10
let emailtemp='Dear ${username},your session is at ${labno}"
console.log(emailtemp)