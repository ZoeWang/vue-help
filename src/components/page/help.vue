<template>
	<div>
		<v-head @toggleNav="navToggle" class="m-head"  :class="[navFlag ? 'show' : '']"></v-head>
		<div class="help clearfix">
			
			<v-sidebar id="sideBar" class="sidebar-flag" 
				:class="[navFlag ? 'show' : '']" 
				:sideItems="items" 
				v-if="items.length && id"
				:id = id 
				></v-sidebar>
			<transition name="fade">
				<router-view id="details"  class="details"  :class="[navFlag ? 'show' : '']"></router-view>
			</transition>
		</div>
		
	</div>
</template>
<script>
	import vHead from '@/components/common/header'
	import vSidebar from '@/components/common/sidebar'
	import { getColumn,getList  } from '@/fetch/help'

	export default {
		data() {
			return {
				navFlag: false,		// 是否显示侧边栏
				items: [],
				id: '',			// 文章id
				// items: [{
				// 	name: "快速上手",
				// 	isSubShow: true,
				// 	subItems:[{
				// 		title: '通化市兴化教育中心第一小学教研活动拉开序幕？',
				// 	}, {
				// 		title: '怎样使用文档微课？',
				// 	}, {
				// 		title: '怎样使用提问？',
				// 	}, {
				// 		title: '怎样使用拍照上墙？',
				// 	}, {
				// 		title: '怎样使用签到 ？'
				// 	}]
				// }, {
				// 	name: "玩转班级",
				// 	isSubShow: false,
				// 	subItems:[{
				// 		title: '通化市兴化教育中心第一小学教研活动拉开序幕？',
				// 	}, {
				// 		title: '怎样使用文档微课？',
				// 	}, {
				// 		title: '怎样使用提问？',
				// 	}, {
				// 		title: '怎样使用拍照上墙？',
				// 	}, {
				// 		title: '怎样使用签到 ？'
				// 	}]
				// }, {
				// 	name: "报告导出报表",
				// 	isSubShow: false,
				// 	subItems:[{
				// 		title: '通化市兴化教育中心第一小学教研活动拉开序幕？',
				// 	}, {
				// 		title: '怎样使用文档微课？',
				// 	}, {
				// 		title: '怎样使用提问？',
				// 	}, {
				// 		title: '怎样使用拍照上墙？',
				// 	}, {
				// 		title: '怎样使用签到 ？'
				// 	}]
				// }]
			}
		},
		computed: {
			type() {
				return this.$route.query.type;
			},
			
			articleId() {
				return this.$route.query.id;
			}

		},
		mounted() {
			if(this.type) {
				this.setType();
			}
			this.getSideBar();
			// this.getItems(this.type);
		},
		methods: {
			getSideBar() {
				let jsonItems = sessionStorage.getItem('whelp-sidedata');
				let items = JSON.parse(jsonItems);
				this.items = items || [];
				this.id = sessionStorage.getItem('whelp-articleId') || '';

				if(!jsonItems) {
					this.getItems(this.type);
				}
				console.log("this.items====", this.items);
			},
			setType() {
				sessionStorage.setItem('whelp-type', this.type);
			},
			navToggle() {
				this.navFlag = !this.navFlag
				// console.log("navFlag", this.navFlag);
				if(this.navFlag) {
					document.getElementsByTagName("html")[0].setAttribute("style","overflow: hidden")
					document.body.style.overflow='hidden';
				} else {
					document.getElementsByTagName("html")[0].setAttribute("style","overflow: auto")
					document.body.style.overflow='auto';
				}
			},
			
			getItems(type) {
				getColumn(type).then((res) => {
					
					if(res.data.status == 200) {
						this.items = this.items.concat(res.data.data);
					}
					this.formatData(this.items);
					
				}).catch(err => {
					console.log(err);
				})

				
			},
			formatData(items) {

				this.items = items.map((item, index, array) => {
					item.isSubShow = false;

					return item;
				})

				console.log("formatData", this.items);

				this.items.forEach((val, index, arr) => {
					// console.log("val.id", val.id);
					this.getTitle(val.id).then((res) => {

						val.subItems = res.data.data;

					}).catch(err => {
						console.log(err);
					});
					
				})
				this.getFirstId();
				console.log("组装后的items ", this.items)
			},

			getTitle(id) {
				return new Promise((resolve, reject) => {
					getList(id).then((success) => {
						resolve(success);
					}).catch(err => {
						reject(err);
						console.log(err);
					})
				})
				
				// console.log("", data)
			},
			getFirstId() {
				// this.items.forEach((val, index) => {
				// 	if(val.isSubShow == true) {
				// 		this.id = val.subItemsid
				// 	} else {

				// 	}
				// })

				this.getTitle(this.items[0].id).then((res) => {
					this.id = res.data.data[0].id;

					// console.log("ididididii=====",  this.id);
				})
			}
		},
		components: {
			vHead,
			vSidebar
		},
		watch: {
			'$route': function() {
				this.navFlag = false;
				if(this.navFlag) {
					document.getElementsByTagName("html")[0].setAttribute("style","overflow: hidden")
					document.body.style.overflow='hidden';
				} else {
					document.getElementsByTagName("html")[0].setAttribute("style","overflow: auto")
					document.body.style.overflow='auto';
				}
			}
		}
	}
</script>
<style scoped lang="less">
@media screen and (min-width: 768px) { 
	.help {
		
		max-width: 1190px;
		margin: 0 auto;
		.details {
			float: right;
			width: 70%;
			margin-top: 20px; 
		}
	}
}

@media screen and (max-width:767px) {
	
	html,body {
		height: 100%;
		overflow: hidden;
		touch-action: none;
	}

	.sidebar-flag {
		box-sizing: content-box;
		position: fixed;
		z-index: 9999;
		top: 0;
		bottom: 0;
		left: -1px;
		right: 0;
		padding-left: 20%;
		width: 80%;
		margin-left: -100%;

		// min-height: 100%;
		overflow-x: hidden;
		overflow-y: hidden;
		height: 100%;
		
		transition: transform .4s;
		

		&.show {
			transform: translateX(80%);
		}

	}
	
	.m-head {
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		right: 0;
	}

	.m-head,
	.details {
		transition: transform .4s;

		&.show {
			transform: translateX(80%);
		}
	}
}
</style>