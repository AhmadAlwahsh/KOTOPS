/*
const h1 = document.querySelector("h1");

const user = {
  discount: true,
  getFullDis: function () {
    return `Your Are ${this.discount ? "Have" : "Have not"} Discount`;
  },
};

h1.innerHTML = user.getFullDis();

const user2 = Object.create(user);
user2.discount = false;
console.log(user2.getFullDis());

Object.assign(user, { love: true, eat: false });
console.log(user);

const myObject = Object.assign({}, user,{blablabla:`this is new OBJECT`});
console.log(myObject);


///////////////////////////////////////

const secUser = { name:'ahmad', }

console.log(secUser);
console.log(secUser.name);

delete secUser.name;

console.log(secUser);
console.log(secUser.name);

console.log('#'.repeat(15));


const userName = 'Ahmad Alwahsh'
console.log(userName);
console.log(delete userName);
console.log(userName);

console.log('#'.repeat(15));

const freezedObj = Object.freeze({age: 37,})

console.log(freezedObj);
console.log(freezedObj.age);

console.log(delete freezedObj.age);

console.log(freezedObj);
console.log(freezedObj.age);
///////////////////////////////////

const man = {
  name:`ahmad`,
  country:`jordan`,
  age:`14`,
};

for (const prop in man) {
  console.log(`The ${prop} Is ${man[prop]}`);
}
*/

/*

function Phone(serial,color,price){
  this.serial = serial;
  this.color = color;
  this.price = price / 2;
}

let phone1 = new Phone(123 , 'red' , 1000)

console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);


function User(name , email , age){
  this.name = name;
  this.email = email;
  this.age = age;
  this.updateName = function(newName){
    if (this.age > 18) {
      this.name = newName;
    }else{
      this.name = name;
    }
  }
}

let user1 = new User('Ahmad' , 'ahmadalwahsh2007@gmail.com' , '14');
console.log(user1.name);

user1.updateName('osama');

console.log(user1.name);

*/

/*
String.prototype.zfill = function(width){
  let theResult = this;
  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }
  return theResult.toString();
}

console.log('123'.zfill(7));
console.log('1234'.zfill(7));
console.log('12345'.zfill(7));
console.log('123456'.zfill(7));


String.prototype.sayloveyou = function(){
  return `I LOVE YOU ${this}`;
}
console.log('Ahmad'.sayloveyou());

console.log(Object.__proto__);
*/


class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  updateName(newName){
    if (this.age > 18) {
      this.name = newName;
    } else {
      this.name = this.name;
    }
  }
}

let user1 = new User('Ahmad' , 'ahmadalwahsh2007@gmail.com' , '14');
console.log(user1.name);

user1.updateName('osama');

console.log(user1.name);