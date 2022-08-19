require('./bootstrap');

window.Vue = require('vue');
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 전역으로 뷰 컴포넌트를 설정하였다.
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('create-post', require('./components/CreatePost.vue').default);
Vue.component('all-posts', require('./components/AllPosts.vue').default);

const app = new Vue({
    store,
    el: '#app',
});
