<style>
	#son {
		width:400px;
		height:50px;
		background:yellow;
	}
</style>

<template>
  <!--书写标签-->
  <div id="son"> 
  		<h1>儿子收到父亲的数据~~~{{car }}</h1>
  		<button @click="send">给父亲传递数据</button>
  </div>
</template>

<script>
export default {
	props:["car"],
	data() {
		return {
			msg:"我有一个亿"
		}
	},
	methods: {
		send() {
			//自定义事件
			this.$emit("sendMoney", this.msg);
		}
	}
};
</script>