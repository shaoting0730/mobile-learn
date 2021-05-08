const event = require("./event.js");


// 发

event.$emit({
    name: "XXXXX",
    data: {'a':23,'b':[1,2,3]}
})


// 其他页面 监听 收到则执行

event.$on({
    name:"XXXXX",
    tg:this,
    success:(res)=>{
        const { a, b } = res;
        。。。。。
    }
  })