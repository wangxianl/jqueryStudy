function 管理函数() {
	function a() {
		alert('a');
	}

	function b() {
		alert('b');
	}
	var cb = $.Callbacks();
	cb.add(a);
	cb.add(b);
	cb.fire();
}

function 管理延迟对象() {
	var df = $.Deferred();
	setTimeout(function() {
		alert(1);
		df.resolve();
	}, 1000);
	df.done(function() {
		alert(2);
	});
}

function 管理延迟对象() {
	//data对象(jQuery中数据并不是直接挂到对象上的)
	$('#input').data('name', 'hello');
	alert($('#input').data('name'));
}

function 修改undefind () {
	//在某些环境下,undefind会被修改
	var undefind=10;
	alert(undefind);
}

function typeOfUndefind () {
	alert(typeof undefined);
}

function jquery调用方式(){
	function AA(){
		return new AA.prototype.init();
	}
	AA.prototype.init=function(){alert('init')}
	AA.prototype.css=function(){alert('css');}
	AA.prototype.init.prototype=AA.prototype;
	
	var a=new AA();
	a.css();
}

function 获取jq版本 () {
	alert($().jquery);//2.0.3
}

function 正则 () {
	var m=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
	var str='#div input';
	var str2='<input>hhh';
	console.log(m.exec(str));
	console.log(m.exec(str2));	
}

function jqueryParse(){
	var str='<li>1</li><li>1</li><li>3</li>';
	var arr=$.parseHTML(str,document,true);
	$.each(arr,function (i) {
		$('ul').append(i);
	});
}
$(function () {
	jqueryParse();
});
