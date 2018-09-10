<template>
	<div class="sidebar">
		<nav class="nav">
			<!-- m端 -->
			<h1 class="logo">
				<img src="../../assets/logo-white.png" alt="师训宝">
			</h1>
			

			<ul class="menu">
				<li v-for="item in items">
					<h2 class="clearfix" @click="showToggle(item)">{{item.name}}  <i :class="[item.isSubShow ? 'icon-greyline-up' : 'icon-greyline-down']"></i></h2>
					<ul class="sub-menu" v-show="item.isSubShow">
						<li class="" v-for="subItem in item.subItems">
							<router-link :to="{ path: 'helpdetails', query: { type: item.deposition, id: item.id }}">{{subItem.name}}</router-link>
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
				
			}
		},
		props: {
			items: {
				type: Array,
				required: true
			}
		},

		methods: {
			showToggle(item) {
				console.log("toggle", item);
				item.isSubShow = !item.isSubShow
			}
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
		min-width: 200px;
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
			a {
				display: block;
				padding: 10px 24px;
			}
			a.active {

				background: #F7FBFB;
				border-left: 3px solid #37AEA9;
				color: #009791;
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
			a {
				display: block;
				padding: 13/2px 61/2px;
			}
			a.active {

				background: #FD7E23;
				border-left:0;
				color: #FFFFFF;
			}
		}
	}
}

</style>