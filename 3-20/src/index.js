require('@babel/polyfill')
let arr = [1, 2, 3];
let [x, y, z, k] = arr;
Array.prototype.aaa=function(){
 console.log(aaa)
};
let {
    length,
    pop,
    push,
    slice
} = arr;
console.log(k) //undefined
console.log(pop) //undefined
console.log(k) //undefined
aaa();
class Person {
    constructor (props){
            let {name,like} =props;
            this.name=name;
            this.like=like;
    }
// 方法
say (){
    console.log(`${this.name} like ${this.like}`)
}
}
// 调用方法
new Person ().say();
let res=arr.reduce((pre,next)=>pre+next);
console.log(res)
async function fn(){
    let res = await new Promise(((resolve,reject)=>{
        // resolve(aaa)
    }))
}