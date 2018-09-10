'use strict'
let api = "";
if(process.env.NODE_ENV === "development") {
	api = '/api'
}

let WEB_CONFIG = {
	intServiceReqTimeout: 30000,
	accessflag: new Date().getTime(),  //随机标签

	urls: {
		// help
		helpColumn: api + '/help/columnList',	// 获取帮助栏目
		helpArticleList: api + '/help/helpArticleList',		// 根据帮助栏目ID,获得帮助文章列表
		helpArticleDet: api + '/help/helpArticleDetail',	// 根据文章ID，获得帮助文章详情
	}

}

export default WEB_CONFIG;