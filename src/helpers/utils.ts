
/**
 * 获取缓存中的access;
 */
 export function access() {
	return localStorage.getItem('access');
}

/**
 * 清除 退出需要删除的缓存
 */
 export function clearLocalStorage() {
	localStorage.removeItem('access');
	localStorage.removeItem('username');
	localStorage.removeItem('is_admin');
	window.localStorage.removeItem("jobs");
	window.localStorage.removeItem("id");
}
