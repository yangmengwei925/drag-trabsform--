class Person1 {
  constructor(props){
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
new Person1 ().say()