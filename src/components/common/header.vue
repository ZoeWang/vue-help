<template>
	<div>
		<!-- pc -->
		<div class="header">
			<header class="clearfix">
				<a href="/">
					<img src="../../assets/logo.png" alt="师训宝">
				</a>

				<p class="tip">
					<i class="icon-help"></i>
					帮助
				</p>
			</header>
		</div>
		
		<!-- 移动 -->
		<section class="m-nav">

			<header class="m-header">
				<i class="icon-items" @click="sideToggle"></i>
				帮助中心
			</header>

		</section>

	</div>
</template>
<script>
	export default {
		methods: {
			sideToggle() {
				this.$emit('toggleNav');
			}
		}
	}
</script>
<style scoped lang="less"> 
@media screen and (min-width: 768px) {
	.header {
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: 80px;
		background-color: #fff;
		overflow: hidden;
		padding-top: 19px;

		>header {
			max-width: 1190px;
			margin: 0 auto;
		}

		.tip {
			float: right;
			font-size: 16px;
			color: #333;
			padding-top: 10px;
			line-height: 1em;
		}
		.icon-help {
			display: inline-block;
			width: 16px;
			height: 16px;
			background: url("../../assets/img/icon/icon-ques.png") 0 0 no-repeat;
			background-size: 100% 100%;
			vertical-align: -2px;
		}
	}

	.m-nav {
		display: none;
	}
}

@media screen and (max-width: 767px) {
	.header {
		display: none;
	}
	.m-nav {
		display: block;
		min-width: 320px;
	}
	.m-header {
		width: 100%;
		height: 120/2px;
		line-height: 120/2px;
		background: #FD7E23;
		font-size: 32/2px;
		color: #FFFFFF;
		letter-spacing: 0;
		padding: 0 42/2px;

		.icon-items {
			display: inline-block;
			width: 34/2px;
			height: 28/2px;
			background: url("../../assets/img/icon/icon-items.png") 0 0 no-repeat;
			background-size: 100% 100%;
			vertical-align: -1px;
			cursor: pointer;
		}
	}
}

</style>