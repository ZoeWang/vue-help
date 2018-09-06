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
	}

}

export default WEB_CONFIG;