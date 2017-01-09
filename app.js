/**
 * Created by admin on 2017/1/4.
 */
var Vue = require('vue');

var App = Vue.extend(require('./app.vue'));

Vue.component('app', App);

new Vue({
    el: '#demo'
})
