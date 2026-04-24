//two sum
function twoSum(nums, target) {
    let map=new Map();
    for(let i=0;i<nums.length;i++)
{
    let diff=target-nums[i];
    if(map.has(diff)){
        return [map.get(diff),i];
    }
    map.set(nums[i],i);
}}


console.log(twoSum([1,3,5,2,6,7],7));

//reverse a String
function reverseString(s){
    let char=s.split("");
    let reverse=char.reverse();
    return reverse.join("");
}
console.log(reverseString("hello world"));

//palindrome

function palindrome(s){
    let char=s.split("");
    let reverse=char.reverse();
    return reverse.join("")==s;
}

console.log(`is plaindrome: ${palindrome("mam")}`);
console.log(`is plaindrome: ${palindrome("hello")}`);

//max num in arr

function maxV(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        max=Math.max(max,arr[i]);
    }
    return max;
}
console.log(maxV([17,2,8,4]));

//removeduplicates from arr
function remDup(arr){
    let set=new Set();
    for(let i of arr){
        set.add(i);
    }
    return Array.from(set);
}
console.log(remDup([1,2,3,2,4,5,1]));

//valid anagram
function sort(s){
    return s.split("").sort().join("");
}
function validAnagram(s,t){
    return sort(s)===sort(t);
}
console.log(`is anagram: ${validAnagram("listen","silent")}`);
console.log(`is anagram: ${validAnagram("hello","world")}`);

//first non repeating char
function firstNonRepeatingChar(s){
    let map=new Map();
    for(let i=0;i<s.length;i++){
        let char=s[i];
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }
        else{
            map.set(char,1);
        }
    }
    for(let i=0;i<s.length;i++){
        if(map.get(s[i])===1){
            return i;
        }
    }
    return -1;
}
console.log(firstNonRepeatingChar("leetcode"));
console.log(firstNonRepeatingChar("aabb"));

//move zeros
function moveZeroes(nums){
    let i=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=0){
            nums[i]=nums[j];
            i++;
        }
    }
    while(i<nums.length){
        nums[i]=0;
        i++;
    }
    return nums;
}
console.log(moveZeroes([0,1,0,3,12]));

//find missing numbers
function findMissingNumbers(nums){
    nums=nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(i!=nums[i])return i;
    }
    return nums.length;
}
console.log(findMissingNumbers([3,0,1]));


//intersection of arrays
function intersection(nums1,nums2){
    let set=new Set(nums1);
    let result=new Set();
    for(let num of nums2){
        if(set.has(num)){
            result.add(num);
        }
    }
    return Array.from(result);
}
console.log(intersection([1,2,2,1],[2,2]));
//--------------------------------------------------------------------------------------------------------------------------

//pubsub (without events)
class pubSub{
     //let map1;
    constructor(){
        this.map1=new Map();
    }

    subscribe(ac,fn){
        if(this.map1.has(ac)){
            this.map1.get(ac).push(fn);
        }
        else{
            this.map1.set(ac,[fn]);
        }
    }

    publish(ac,data){
        if(this.map1.has(ac)){
            this.map1.get(ac).forEach(fn=>fn(data));
        }
    }

}

function login(name){
    console.log("Hello there "+name);
}
let pubsub=new pubSub();
pubsub.subscribe("login",login);
pubsub.publish("login","Alice");
pubsub.publish("login","Bob");



const { resolve } = require('dns');
//pubsub with events
let EventEmitter=require('events');
const { read } = require('fs');
class pubsubEmit{
    constructor(){
        this.emitter=new EventEmitter();
    }
    subscribe(eve,fn){
        this.emitter.on(eve,fn);
    }
    publish(eve,data){
        this.emitter.emit(eve,data);
    }
}
let pubsub2=new pubsubEmit();
pubsub2.subscribe("login",login);
pubsub2.publish("login","Charlie");
pubsub2.publish("login","Dave");


//---------------------------------------------------------------------------------------------------------------------

//debouncing


function debounce(fn,delay){
    let timer;
    return function(arg){
        clearTimeout(timer);
        timer=setTimeout(()=>fn(arg),delay);
    }
}

let d1=new debounce(login,500);
d1('hari');
setTimeout(()=>d1('money'),600);


//---------------------------------------------------------------------------------------------------------------------
//Streams
const fs=require('fs');
const { set } = require('mongoose');
const rStream=fs.createReadStream('example.txt');
rStream.on('data',(chunk)=>{
    console.log(`Received chunk: ${chunk.length} bytes`);
});
rStream.on('end',()=>{
    console.log('Finished reading file');
});

//---------------------------------------------------------------------------------------------------------------------
//const fs = require("fs");

const readStream = fs.createReadStream("example.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);

//---------------------------------------------------------------------------------------------------------------------

//decorators

// function logger(target,key,descriptor){
//     const orig=descriptor.value;
//     descriptor.value=function(...args){
//         console.log(`Calling target ${target},key ${key} with arguments: ${args}`);
//         return orig.apply(this,args);
//     }
//     return descriptor;
// }

// class Example{
//     @logger
//     method1(arg){
//         console.log(`Inside method1 with argument: ${arg}`);
//     }

//     @logger 
//     add(a,b){
//         console.log(`Inside add with arguments: ${a}, ${b}`);
//         return a+b;
//     }
// }

// const example=new Example();
// example.method1("test");
// console.log(example.add(5,3));


//---------------------------------------------------------------------------------------------------------------------

//LRU Cache
class LRUCache{
    constructor(capacity){
        this.capacity=capacity;
        this.map=new Map();
    }
    get(key){
        if(this.map.has(key)){
            let value=this.map.get(key);
            this.map.delete(key);
            this.map.set(key,value);
            return value;
        }
        else{
            return -1;
        }
    }
    put (key,value){
        if(this.map.has(key)){
            //let value=this.map.get(key);
            
            this.map.delete(key);
            this.map.set(key,value);
            return;
        }
        else{
            if(this.capacity>this.map.size){
                this.map.set(key,value);
            }
            else{
                let firstKey=this.map.keys().next().value;
                this.map.delete(firstKey);
                this.map.set(key,value);
            }
            return;
        }
    }
}

let cache=new LRUCache(2);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
cache.put(3,3);
cache.map.forEach((value,key)=>{
    console.log(`key: ${key}, value: ${value}`);
});

//---------------------------------------------------------------------------------------------------------------------
//josephus problem
function josephus(n,k){
    let arr=[];
    for(let i=1;i<=n;i++){
        arr.push(i);
    }
    let i=0;
    while(arr.length>1){
        i=(i+k-1)%(arr.length);
        arr.splice(i,1);
    }
    return arr[0];
}
//----------------------------------------------------------------------------------------------------------------------
//throttling
function throttle(fn,delay){
    let lastCall=0;
    return function(...args){
        let now=Date.now();
        let interval=now-lastCall;
        if(delay<interval){
            
            lastCall=now;
            return fn.apply(this,args);
        }
    }
}

function throttle2(fn,delay){
    let flag=true;
    return function(...args){
        if(flag){
            fn.apply(this,args);
            flag=false;
            setTimeout(()=>flag=true,delay);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------
//rateLimiter
function RateLimiter(fn,interval,limit){
    let timestamps=[];
    return function(...args){
        let curTime=Date.now();
        let prevTime=curTime-interval;
        timestamps=timestamps.filter(t=>t>prevTime);
        if(timestamps.length<limit){
            timestamps.push(curTime);
            return fn.apply(this,args);
        }
    }
}
let rateFun=new RateLimiter(login,1000,2);
rateFun("Alice");
rateFun("Bob");
setTimeout(()=>rateFun("Charlie"),500);
setTimeout(()=>rateFun("Dave"),1500);



function deepClone(obj, seen = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;

    if (seen.has(obj)) return seen.get(obj);

    const clone = Array.isArray(obj) ? [] : {};
    seen.set(obj, clone);

    for (let key in obj) {
        clone[key] = deepClone(obj[key], seen);
    }

    return clone;
}


function removeCircular(obj, seen = new WeakSet()) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (seen.has(obj)) {
        return; // skip
    }

    seen.add(obj);

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = removeCircular(obj[key], seen);
        if (value !== undefined) {
            clone[key] = value;
        }
    }

    return clone;
}

//----------------------------------------------------------------------------------------------------------------------
//bind

Function.prototype.myBind=function (context,...args){
    let fn=this;
    return function(...args2){
        return fn.apply(context,[...args,...args2]);
    }
}

function greet(name){
    console.log(`Hello ${name},this is greeting`);
}
let greetAlice=greet.myBind(null,"Alice");
greetAlice();
//----------------------------------------------------------------------------------------------------------------------

//map

Array.prototype.myMap=function(fn){
    let arr=this;
   
    let res=[];
    for(let i=0;i<arr.length;i++){
        res.push(fn(arr[i],i,arr))
    }
    return res;
    
}
let mapFun=[1,2,3].myMap((x)=>x*2);
console.log(mapFun);

//----------------------------------------------------------------------------------------------------------------------
//filter

Array.prototype.myFilter=function(fn){
    let arr=this;
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i,arr)){
            res.push(arr[i]);
        }
    }
    return res;
}
let filterFun=[1,2,3,4].myFilter((x)=>x%2==0);
console.log(filterFun);

//----------------------------------------------------------------------------------------------------------------------
//reduce

Array.prototype.myReduce=function(fn,initialValue){
    let arr=this;
    let acc=initialValue;
    for(let i=0;i<arr.length;i++){
        acc=fn(acc,arr[i],i,arr);
    }
    return acc;
}

let reduceVal=[1,2,3].myReduce((acc,curr)=>acc+curr,0);
console.log(reduceVal);

//----------------------------------------------------------------------------------------------------------------------
//promise.all implementation
function myPromiseAll(promises){
    let results=[];
    return function(){
        return new Promise((resolve,reject)=>{
            let count=0;
            for(let i=0;i<promises.length;i++){
                Promise.resolve(promises[i])
                .then((value)=>{
                    results[i]=value;
                    count++;
                    if(count===promises.length){
                        resolve(results);
                    }
                })
                .catch((err)=>{
                    reject(err);
                })
            }
        })
    }
}

function myPromiseAllSettled(promises){
    let results={};
    return new Promise((resolve,reject)=>{
        let count=0;
        for(let i=0;i<promises.length;i++){
            Promise.resolve(promises[i])
            .then((value)=>{
                count++;
                results[i]={status:"fulfilled",value:value};
            })
            .catch((err)=>{
                count++;
                results[i]={status:"rejected",reason:err};
            })
            .finally(()=>{
                if(count===promises.length){
                    console.log(results);
                    resolve(results);
                }
            })
        }
        
    })
}

function myPromiseRace(promises){
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            Promise.resolve(promises[i])
            .then((value)=>{
                resolve(value);
            })
            .catch((err)=>{
                reject(err);
            })
        }
    })
}

function myPromiseAny(promises){
    let errors=[];
    return new Promise((resolve,reject)=>{
        let count=0;
        for(let i=0;i<promises.length;i++){
            Promise.resolve(promises[i])
            .then((value)=>{
                resolve(value);
            })
            .catch((err)=>{
                errors.push(err);
                count++;
                if(count===promises.length){
                    reject(errors);
                }
            })
        }
    })
}

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 resolved"),1000);
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p2 rejected"),500);
});
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 resolved"),1500);
});

myPromiseAll([p1,p2,p3])().then((values)=>{
    console.log("Promise.all results:",values);
}).catch((err)=>{
    console.log("Promise.all error:",err);
});

myPromiseAllSettled([p1,p2,p3]).then((results)=>{
    console.log("Promise.allSettled results:",results);
});

myPromiseRace([p1,p2,p3]).then((value)=>{
    console.log("Promise.race result:",value);
}).catch((err)=>{
    console.log("Promise.r  ace error:",err);
});

myPromiseAny([p1,p2,p3]).then((value)=>{
    console.log("Promise.any result:",value);
}).catch((err)=>{
    console.log("Promise.any error:",err);
});

//----------------------------------------------------------------------------------------------------------------------

//flat object

function flatten(obj,parent='',res={}){
    for(let key in obj){
        let newKey=(parent!=='')?`${parent}.${key}`:key;
        if(typeof obj[key]=="object" && obj[key]!==null){
            flatten(obj[key],newKey,res);
        }
        else{
            res[newKey]=obj[key];
        }
    }
    return res;
}

let obj={
    a:{
        b:1,c:1,d:5
    },
    e:5,
    f:{h:{g:2},i:1}
}
console.log(flatten(obj));

//----------------------------------------------------------------------------------------------------------------------

