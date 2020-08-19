<style>
/*书写样式的地方*/
  h1 {
    color:black;
    font-size: 30px;
  }
  #box {
    width: 80%;
    height: 400px;
    background: red;
  }
</style>

<template>
  <!--书写标签-->
  <div id="box"> 
    <h1>我是父亲~~{{money}}</h1>
    <!--接收父亲传过来的数据-->
    <son :car="car"></son> 
    <son></son> 
    <son></son> 
    <son @sendMoney="receiveMoney($event)"></son> 
    <son1></son1>
  </div>
</template>

<script>

//引入其他组件
import son from "./components/son";
//引入调色板组件
import son1 from "./components/son1";

export default {
  //当前组件的数据
  data() {
    return {
        count: 1,
        car:"奔驰",
        money:''
    };
  },
  //事件处理函数
  methods: {
      receiveMoney(money) {
        this.money = money;
      }
  },
  //当前组件挂载的子组件
  components:{
    son,
    son1
  }
};
</script>