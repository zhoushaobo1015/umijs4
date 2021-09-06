
export const constant = {
	// 阿里云oss基础信息
	ossConfig: <{ [key: string]: any }>{
		region: 'oss-accelerate',
		bucket: 'yiwanghutong',
		timeout: 10 * 60 * 1000,
		secure: true
	},
	// 阿里云oss上传文件存放的目录
	uploadDir: 'publish',
	baseUrl: 'https://yiwanghutong.oss-accelerate.aliyuncs.com',
	PLATFORM_FUXI: 1,
	WORLDWIDE: 'worldwide', //创建广告全球的key,
	PROD: 'prod', //正式环境type
	DEV: 'dev',//测试环境type
}

export const pageUrl = {
	LOGINPATH: '/login', //登录页面
	DATA_BOARD: '/data-board', //数据看板
	CUSTOMER_MANAGE: '/CustomerList', //客户管理
	TRY_APPLY: '/apply/list', //试用申请
	ORDER_MANAGE: '/order/list', //订单管理
	SALES_CONSULTANT: '/sales-consultant', //销售咨询
	INVOICE_MANAGE: '', //发票管理
	DATA_COLLECTED: '', //数据收录申请
	// 订单管理
	ORDER_LIST: '/order/list', //订单列表
	ORDER_DETAIL: '/order/detail', //订单详情
	ORDER_EDIT: '/order/edit', //订单编辑
	ORDER_ADD: '/order/add', //新增订单
	EMPLOYEE_LIST: '/employeelist', //员工列表
	DATA_FORMS: '/data-forms', //数据报表,
	PRODUCTMANAGE_MARKETING_CALENDAR: '/ProductManage/MarketingCalendar', //产品管理-营销日历
	YOUTUBE_MANAGA: '/youtubeManage', //utb 应用管理
	TWITTER_MANAGA: '/twitterManage', //tw 应用管理
	POST_DETAIL: '/post-details', //发帖明细
	INVALID_PAGE: '/invalid-page', //失效主页
	REMOOVE_AUTH: '/remove-auth', //解除授权

}