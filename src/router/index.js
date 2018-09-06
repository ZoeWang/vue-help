import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let defaultSuffixTitle = ' - 师训宝帮助中心';

const Help = resolve => require(['@/components/page/help'], resolve)
const HelpDetails = resolve => require(['@/components/page/helpdetails'], resolve)



export default new Router({
	linkActiveClass: 'active',
  	routes: [
	    {
	      	path: '/',
	      	name: 'help',
	      	component: Help,
	      	children: [
	      		{ 
	      			path: "/", 
	      			redirect: "/help/details"
	      		},
	      		{ 
	      			path: "/help/details", 
	      			component: HelpDetails,
	      			meta: {
	      				title: '帮助中心' + defaultSuffixTitle
	      			}
	      		}
	      	]
	    }
  	]
})
