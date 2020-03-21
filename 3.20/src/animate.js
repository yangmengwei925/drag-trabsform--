class Animate {
    constructor(parent, arr) {
            this.parent=document.querySelector(parent);
            this.arr=arr;
            //节点创建出来
           this.render()
          
    }
    render(){
          this.domDiv= this.arr.map((item,index)=>{
            let div=document.createElement('div');
            div.classList.add('animated');
            // div.classList.add('blue');
            div.classList.add(`color${index}`)
            div.classList.add(item.className);
            return div;
        });
        this.action(); 
    }
    listen (div){
        //动画监听 异步执行
       return  new Promise((resolve,reject)=>{
            this.parent.appendChild(div)
            div.addEventListener("animationend",()=>{
                resolve()
            })
        })
    }
     async action (){
        for(let val of this.domDiv){
            //等待得到的结果
           await this.listen(val);
        }
    }
}
// 创建 dom 节点 在render 中创建dom节点 
//父节点添加 动画依次结束
// 1.创建节点 reducer 
// 监听回调 listen
// 执行动画 action
new Animate('.wrap',[
    {
        title:"动画1",className:"rotateInDownRight"
    },{
        title:"动画2",className:"bounceInLeft"
    },{
        title:"动画3",className:"bounceInDown" 
    }
]);