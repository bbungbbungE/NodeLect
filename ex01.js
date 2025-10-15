/*console.log("hello world");
//코드순서---------------------------------------------------------
function first(){
    second();
    console.log("First");
}
function second(){
    third();
    console.log("Second");
}
function third(){
    console.log("Third");
}

function run(){
    console.log("3초");
}
setTimeout(run,3000);
first();
//백틱
let a = 1;
a = 0;

const b = 1;

let num1 = 1;
let num2 = 2;
let result = 3;
//1 더하기 2는 3
let str = `${num1} 더하기 ${num2}는 ${result}`;
console.log(str);
//객체리터럴 여러가지선언방식---------------------------------------------------------
const sayNode = function() {
    console.log('Node');
}
let es = 'ES';
const newObj = {
    saynode: sayNode,
    sayJS(){
        console.log('JS');
    },
    [es+6] : 'Fantastic'
}


newObj.sayJS();
newObj.saynode();
console.log(newObj.ES6);

var relationship1 = {
    name : 'zero',
    friends: ['nero','hero','xero'],
    add : ['한누리관','송백관'],
    logFriends: function(){
        var that = this;
        this.add.forEach(addlist=>{
            this.friends.forEach(friend=>{
                console.log(this.name,friends,addlist);
        })
        
        });
    },
};
//forEach---------------------------------------------------------
relationship1.logFriends();
var relationship1={
    name : ['zero','one'],
    friends:['nero','hero','xero'],
    add:['한누리관','송백관'],
    logFriends:function(){
        this.add.forEach(add=>{
        this.friends.forEach(friends=>{
            this.name.forEach(name=>{
                console.log(name,friends,add);
            })
        })
        })
    }

}
relationship1.logFriends();

//구조분해할당---------------------------------------------------------
var candyMachine = {
    status:{
        name:'node',
        count:5,
    },
    getCandy:function(){
        this.status.count--;
        return this.status.count;
    },
};


var getCandy=candyMachine.getCandy;
var count=candyMachine.status.count;



const {getCandy,status:{count}}=candyMachine;



var array = ['nodejs',{},10,true];
var node=array[0];
var obj=array[1];
var bool=array[2];

const array=['nodejs',{},10,true];
const[node,obj,,bool]=array;
//프로미스---------------------------------------------------------

const condition = true;
const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message)=>{
        console.log(error);
    })
    .catch((error)=>{
        console.error(error);
    })
    .finally(()=>{
        console.log('무조건');
    })
    

//프로미스체이닝---------------------------------------------------------
const condition = true;
const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});


promise
    .then((message)=>{
        return new Promise((resolve,reject)=>{
            resolve(message)
        })
    })
    .then((message2)=>{
        console.log(message2);
        return new Promise((resolve,reject)=>{
            resolve(message2)
        })
    })
    .then((message3)=>{
        
            console.log(message3)
            
        })
    .catch((error)=>{
        console.arror(error);
    });
    
   function findAndSaveUser(Users){
    Users.findOne({},(err,user)=>{
        if(err){
            return console.error(err);
        }
        user.name='zero';
        user.save((err)=>{
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m'},(err,user)=>{

            })
            
            
        })
    })
   }
    //콜백 헬을 프로미스 체이닝으로 바꾸는법법---------------------------------------------------------
   function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name='zero';
        return user.save();
    })
    .then((user)=>{
        return Users.fineOne({gender : 'm'});
    })
    .then((user)=>{

    })
    .catch((err)=>{
        console.error(err);
    })
   }
    
   //프로미스를 배열을 통해 2개실행---------------------------------------------------------
   const promise1 = Promise.resolve('성공');
   const promise2 = Promise.resolve('성공2');
   Promise.all([promise1,promise2])
   .then((result)=>{
    console.log(result);
   })
   .catch((error)=>{
    console.error(error)
   })
//async---------------------------------------------------------
   async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({})
    user.name='zero';
    user=await user.save();
    user=await Users.findOne({gender:'m'});

    }
    catch(error){
        console.log(error);
    }
}
    
//async화살표---------------------------------------------------------
const findAndSaveUser=async(Users)=>{
    try{
        let user = await Users.findOne({})
    user.name='zero';
    user=await user.save();
    user=await Users.findOne({gender:'m'});

    }
    catch(error){
        console.log(error);
    }
}
*/
//AJAX 서버로 요청을 보내는 코드


   
    
    
