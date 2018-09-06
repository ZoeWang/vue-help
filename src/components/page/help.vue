<template>
	<div>
		<v-head @toggleNav="navToggle" class="m-head"  :class="[navFlag ? 'show' : '']"></v-head>
		<div class="help clearfix">
			<v-sidebar class="sidebar-flag" :class="[navFlag ? 'show' : '']" :items="items"></v-sidebar>
			
			<transition name="fade">
				<router-view  class="details"  :class="[navFlag ? 'show' : '']"></router-view>
			</transition>
		</div>
		
	</div>
</template>
<script>
	import vHead from '@/components/common/header'
	import vSidebar from '@/components/common/sidebar'
	import { getColumn } from '@/fetch/help'

	export default {
		data() {
			return {
				navFlag: false,		// 是否显示侧边栏

				items: [{
					name: "快速上手",
					isSubShow: true,
					subItems:[{
						name: '通化市兴化教育中心第一小学教研活动拉开序幕？',
					}, {
						name: '怎样使用文档微课？',
					}, {
						name: '怎样使用提问？',
					}, {
						name: '怎样使用拍照上墙？',
					}, {
						name: '怎样使用签到 ？'
					}]
				}, {
					name: "玩转班级",
					isSubShow: false,
					subItems:[{
						name: '通化市兴化教育中心第一小学教研活动拉开序幕？',
					}, {
						name: '怎样使用文档微课？',
					}, {
						name: '怎样使用提问？',
					}, {
						name: '怎样使用拍照上墙？',
					}, {
						name: '怎样使用签到 ？'
					}]
				}, {
					name: "报告导出报表",
					isSubShow: false,
					subItems:[{
						name: '通化市兴化教育中心第一小学教研活动拉开序幕？',
					}, {
						name: '怎样使用文档微课？',
					}, {
						name: '怎样使用提问？',
					}, {
						name: '怎样使用拍照上墙？',
					}, {
						name: '怎样使用签到 ？'
					}]
				}]
			}
		},
		computed: {
			type() {
				return this.$route.query.type;
			}
		},
		mounted() {
			this.getItems(this.type);
		},
		methods: {
			navToggle() {
				this.navFlag = !this.navFlag

				if(this.navFlag) {
					document.querySelector('body').setAttribute('style', 'overflow: hidden;')
				} else {
					document.querySelector('body').removeAttribute('style')
				}
			},
			getItems(type) {
				getColumn(type).then((res) => {
					console.log("then", res);
					if(res.data.status == 200) {
						this.items = res.data.data;
					}
				}).catch(err => {
					console.log(err);
				})

				
			}
			
		},
		components: {
			vHead,
			vSidebar
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
	}

	.sidebar-flag {
		box-sizing: content-box;
		position: fixed;
		z-index: 2;
		top: 0;
		bottom: 0;
		left: -1px;
		right: 0;
		padding-left: 20%;
		width: 80%;
		margin-left: -100%;

		min-height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		
		transition: transform .4s;
		

		&.show {
			transform: translateX(80%);
		}

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