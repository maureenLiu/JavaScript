// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//入口文件：引入Vue框架中Vue构造函数
import Vue from 'vue';
//上面的写法和“var vue = require('vue');”是同一个意思，这种写法是ES5的写法，上面是ES6的写法
//引入根组件
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
