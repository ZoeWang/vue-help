import { fetch } from './fetch'
import API from './api'
import qs from 'qs'

// 查看栏目
export function getColumn(type) {
	return fetch({
		url: API.urls.helpColumn,
		method: 'get',
		params: {
			deposition: type
		}
	})
}