<template>
	<div class="help-details">
		<h1 class="title">{{det.title}}</h1>

		<article class="article" v-html="det.content">
			
			<!-- <p>原标题：网传北京地铁封站 相关部门表示已是三年前的旧消息，9月2日，网传一份涉及北京地铁多条线路部分站台封站、列车甩站通过的截图流出，记者向北京市地铁运营有限公司求证，北京地铁公司党委宣传部相关负责人表示，目前尚未接到上级通知，如果有封站消息会通过北京地铁公司...</p>

			<img src="http://res.shixunbao.cn/face2face-official/homepagepicimage/b75801deecaf4816ab818ae64cd35a7c.jpg" alt="">

			<p>网传北京地铁封站怎么回事?辟谣!网传北京地铁封站真相曝光!　【网传北京地铁多线路将封站 地铁公司：2015年旧闻】9月2日，网传一份涉及北京地铁多条线路部分站台封站、列车甩站通过的截图流出</p>

			<p><a href="">网传北京地铁封站怎么回事?辟谣!网传北京地铁封站真相曝光!　【网传北京地铁多线路将封站 地铁公司：2015年旧闻】9月2日，网传一份涉及北京地铁多条线路部分站台封站、列车甩站通过的截图流出</a></p> -->
		</article>
	</div>
</template>
<script>
	import { getDetails  } from '@/fetch/help'

	export default {
		data() {
			return {
				det: {}
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
			if(this.articleId) {
				this.getDet(this.articleId);
			}
			
		},
		methods: {
			getDet(id) {
				getDetails(id).then((res) => {
					// console.log("details",res);

					if(res.data.status == 200) {
						this.det = res.data.data;
					}
					
				}).catch(err => {
					console.log(err);
				})
			}
		},
		watch: {
			'articleId': 'getDet'
		}
	}
</script>
<style scoped lang="less">
@media screen and (min-width: 768px) { 
	.help-details {
		max-width: 800px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 80px 80px;
	}
	.title {
		font-size: 20px;
		color: #333333;
		line-height: 1em;
		margin: 25px 0 35px;
		text-align: center;
	}
	.article {
		font-size: 12px;
		color: #000000;
		line-height: 1.5em;
		p {
			margin-bottom: 10px;
		}
		a {
			color: #1077D7;
		}
		img, video {
			width: 100%;
			height: auto;
			margin: 10px 0;
		}
	}
}

@media screen and (max-width: 767px) {
	.help-details {
		min-width: 320px;
		padding: 36/2px 38/2px;
		margin-top: 60px;
	}

	.title {
		font-family: PingFangSC-Medium;
		font-size: 40/2px;
		color: #000000;
		letter-spacing: 0;
		line-height: 1.4em;
		text-align: center;
		margin-bottom: 32/2px;
	}
	.article {
		font-size: 32/2px;
		color: #333;
		line-height: 1.5em;
		p {
			margin-bottom: 10px;
		}
		a {
			color: #1077D7;
		}
		img, video {
			width: 100%;
			height: auto;
			margin: 10px 0;
		}
	}
}

</style>