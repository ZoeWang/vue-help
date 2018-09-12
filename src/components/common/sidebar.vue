<template>
	<div class="sidebar">
		<nav class="nav">
			<!-- m端 -->
			<h1 class="logo">
				<img src="../../assets/logo-white.png" alt="师训宝">
			</h1>
			

			<ul class="menu">
				<li v-for="(item,index) in items" :key="index">
					<h2 class="clearfix" @click.stop="showToggle(item,index)">{{item.name}}  <i :class="[item.isSubShow ? 'icon-greyline-up' : 'icon-greyline-down']"></i></h2>
					<ul class="sub-menu" v-show="item.isSubShow">
						<li class="" v-for="(subItem,ind) in item.subItems" :key="subItem.id">

							<!-- <span class="link" 
								:class="{'active': item.active}"
								@click="appToggle(subItem.id,ind)"
								>{{subItem.title}}</span> -->
							<router-link class="link" 
								:to="{ path: 'details', query: { type: type, columnId: item.id, id: subItem.id }}"
								
								>{{subItem.title}}</router-link>
						</li>
					</ul>
				</li>
				<!-- <li>
					<h2 class="clearfix">玩转班级  <i class="icon-greyline-down"></i></h2>
					<ul class="sub-menu">
						<li>通化市兴化教育中心第一小学教研活动拉开序幕？</li>
						<li>怎样使用文档微课？</li>
						<li>怎样使用提问？</li>
						<li>怎样使用拍照上墙？</li>
						<li>怎样使用签到 ？</li>
					</ul>
				</li> -->
			</ul>
		</nav>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				items: this.sideItems
			}
		},
		props: {
			sideItems: {
				type: Array,
				required: true
			},
			ids: [String, Number],
			columnIds: [String, Number],
		},
		computed: {
			type() {
				return sessionStorage.getItem('whelp-type')
			},
			articleId() {
				return this.$route.query.id;
			},
			columnId() {
				return this.$route.query.columnId;
			}
		},
		mounted(){
			// console.log("id---------", this.id)
			if(!this.articleId) {
				// 默认选第一个
				this.showToggle(this.items[0], 0);
				this.$router.push({
					path: 'details',
					query: {
						type: this.type,
						columnId: this.columnIds,
						id: this.ids
					}
				})
			} 

			// if(this.articleId){
			// 	let n;
			// 	this.items.forEach((val,index) => {
			// 		if(val.id == this.columnId) {
			// 			n = index;
			// 		}
			// 	})
			// 	console.log("nnn===", n);
			// 	this.items[n].isSubShow = true; 
			// 	this.items.splice(n, 1, this.items[n]);
			// }

		},
		methods: {
			showToggle(item,index) {

				item.isSubShow = !item.isSubShow;
				this.items.splice(index, 1, item);

				// console.log("toggle", item);
				// console.log("items======", this.items);
			},
			
			
			setSideBar() {
				let strItems = JSON.stringify(this.items);
				let aid = this.articleId || this.id;
				sessionStorage.setItem('whelp-sidedata', strItems);
				sessionStorage.setItem('whelp-articleId', aid);
			}
		},
		watch: {
			'$route': 'setSideBar'
		}
	}
</script>
<style scoped lang="less">
@media screen and (min-width: 768px) { 
	html, body {
		overflow: auto;
	}
	.logo {
		width: 100%;
		display: none;
	}
	.sidebar {
		position: fixed;
		top: 80px;
		bottom: 0;

		box-sizing: border-box;
		display: block;
		float: left;
		max-width: 280px;
		min-width: 280px;
		background-color: #fff;
		padding-top: 30px;

		min-height: calc(~'100vh - 80px');
		overflow-y: auto;
	}
	

	.menu {
		width: 100%;
		>li {
			>h2 {
				height: 58px;
				font-size: 18px;
				color: #333333;
				line-height: 18px;
				padding: 20px 12px;
				cursor: pointer;

				> i {
					float: right;
				}
				.icon-greyline-down,
				.icon-greyline-up {
					display: inline-block;
					width: 12px;
					height: 7px;
					background: url("../../assets/img/icon/icon-greyline-down.png") 0 0 no-repeat;
					background-size: 100% 100%;
					vertical-align: text-bottom;
				}
				.icon-greyline-up {
					background: url("../../assets/img/icon/icon-greyline-up.png") 0 0 no-repeat;
				}

				
			}
		}
	}

	.sub-menu {
		>li {
			
			font-size: 14px;
			color: #666666;
			letter-spacing: 0;
			line-height: 17px;
			border-left: 3px solid #fff;
			.link {
				display: block;
				padding: 10px 24px;
				cursor: pointer;

				&.router-link-exact-active {

					background: #F7FBFB;
					border-left: 3px solid #37AEA9;
					color: #009791;
				}
			}
		}
	}

	
}

@media screen and (max-width: 767px) {
	.logo {
		display: block;
		width: 100%;
		height: 120/2px;
		box-sizing: border-box;
		padding-top: 22/2px;
		text-align: center;
		background-color: #2C3E50;
		border-bottom: 1px solid  #3D4C5B;
		> img {
			display: inline-block;
			height: 64/2px;
			width: auto;
		}
	}

	.sidebar {
		display: block;
		background: #2C3E50;
	}
	.nav {
		height: 100%;
		overflow-y: auto;
	}

	.menu {
		>li {
			>h2 {
				height: 84/2px;
				font-size: 34/2px;
				color: #FFFFFF;
				padding: 27/2px 39/2px;
				line-height: 1em;
				> i {
					float: right;
				}
				.icon-greyline-down,
				.icon-greyline-up {
					display: inline-block;
					width: 17/2px;
					height: 12/2px;
					background: url("../../assets/img/icon/icon-white-down.png") 0 0 no-repeat;
					background-size: 100% 100%;
					vertical-align: text-bottom;
				}
				.icon-greyline-up {
					background: url("../../assets/img/icon/icon-white-up.png") 0 0 no-repeat;
					background-size: 100% 100%;
				}

				
			}
		}
	}

	.sub-menu {
		>li {
			
			font-size: 32/2px;
			color: #D5D5D5;
			letter-spacing: 0;
			line-height: 1.3em;
			border-left: 0;
			.link {
				display: block;
				padding: 13/2px 61/2px;
				color: #D5D5D5;
				cursor: pointer;

				&.router-link-exact-active {
					background: #FD7E23;
					border-left:0;
					color: #FFFFFF;
				}
			}

		}
	}
}

</style>