//匿名函数,防止命名冲突
(function (window,undefind) {
	//21行到94行定义了一些变量和函数 jQuery=function(){}
	//96到283 給jQuery对象 添加方法和属性
	//285到347 jQuery的继承
	//349到817 扩展一些工具方法
	//877到2845 Sizzle: 复杂选择器的实现
	//2880到3042 Callbacks:回调对象,对函数的统一管理
	//3043到3183 Deferred:延迟对象,对异步的统一管理
	//3184到3295 support:功能检测
	//3308到3652 Data:数据缓存,防止内存泄露
	//3653到3797 queue,dequeue:队列管理
	//3803到4299 attr,prop,val,addClass等方法,对元素属性的操作
	//4323到5128 on,trigger等事件操作的方法
	//5140到6057 对DOM的操作(添加,删除,获取,筛选,包装等)
	//6058到6620 css()方法
	//6621到7854 提交的数据和ajax的实现 (ajax(),load(),getJson(),getScript()等)
	//7855到8584 运动的操作(animate,show,hide)
	//8585到8792 位置与尺寸的方法
	//8804到8821 jquery支持模块化
	//8826行 window.jQuery = window.$ = jQuery;
	
//	"use strict"//严格模式
	
	
})(window,undefined);//防止undefind被修改 ()

jQuery.fn = jQuery.prototype = {
	jquery: '版本',
	constructor: '构造函数',
	init: '初始化和参数管理',
	selector: '选择器',
	length: 'this对象的长度',
	toArray: '',
	get: '',
	pushStack: '',
	each: '',
	ready: '',
	slice: '',
	first: '',
	last: '',
	eq: '',
	map: '',
	end: '',
	push: '',
	sort: '',
	splice: ''
}

$(selector[,context]);
$(selector,json);//$('div',{title: 'hello',html: 'aaaa',css:{'background':'red'}})
