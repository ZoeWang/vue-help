import { fetch } from './fetch'
import API from './api'
import qs from 'qs'

// get栏目
export function getColumn(type) {
	return fetch({
		url: API.urls.helpColumn,
		method: 'get',
		params: {
			deposition: type
		}
	})
}

// get 文章标题
export function getList(id) {
	return fetch({
		url: API.urls.helpArticleList,
		method: 'get',
		params: {
			columnId: id
		}
	})
}

// get 文章内容
export function getDetails(id) {
	return fetch({
		url: API.urls.helpArticleDet,
		method: 'get',
		params: {
			id: id
		}
	})
}