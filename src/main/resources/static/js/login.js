$(function(){

});
function getCookie(cookieName){ 
	var cookieValue="";  
	if (document.cookie && document.cookie != '') {   
		var cookies = document.cookie.split(';');  
		for (var i = 0; i < cookies.length; i++) {   
			var cookie = cookies[i];  
			if (cookie.substring(0, cookieName.length + 2).trim() == cookieName.trim() + "=") {  
				cookieValue = cookie.substring(cookieName.length + 2, cookie.length);   
				break;  
			}  
		}  
	}   
	return cookieValue;  
}
//不能用
$(document).on('click','#login_sure_one',function(){
	//var publicKey='<%=session.ge %>'
	debugger
	var username=$("#username").val().trim();
	var password=$("#password").val().trim();
	var publicKey=$("#publicKey").val().trim();
	var encrypt=new JSEncrypt();
	encrypt.setPublicKey(publicKey);
	var entryUsername=encrypt.encrypt(username);
	var entryPassword=encrypt.encrypt(password);
	var param={entryUsername:entryUsername,entryPassword:entryPassword}
	$.ajax({ 
		type:"POST", 
		url:"loginSubmit",
		dataType:"json",      
		contentType:"application/json",
		data:JSON.stringify(param), 
	/*	headers: {
			//Bearer是我的项目需要的,你可以按你的需求规范格式
			'Authorization': 'Bearer:' + token,
		},*/
		//(async默认: true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
		async: false,
		success:function(e){ 
			debugger
			console.log(e);
			$.cookie('username', e.username, { expires: 7, path: '/' }); 
			$.cookie('password', e.password, { expires: 7, path: '/' }); 
			var username=$.cookie('username');
			var password=$.cookie('password');
		},
		error:function(){
			layer.msg("服务器异常");
		}
	});
});
$(document).on('click','#login_sure_two',function(){
	var username=$("#username").val().trim();
	var password=$("#password").val().trim();
	var publicKey=$("#publicKey").val().trim();
	var encrypt=new JSEncrypt();
	encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCcd+0zTY9Gn94iqkQJTlxYnEnCeFsLkk0a7hoAvi2B74VzDVV3xH0ZO9RkXvo1SgCB+uzbEWdrgQkzTqyjfTtgOguu3OnkVxIMJF34ibchTY0LWHGxq1m2gLGuVVqrlu1LtdV0X7xo/5zc8Mr+46veWb86kSpqe6rOAm69WWo5GwIDAQAB");
	var entryUsername=encrypt.encrypt(username);
	var entryPassword=encrypt.encrypt(password);
	var param={entryUsername:entryUsername,entryPassword:entryPassword}
	$.ajax({ 
		type:"POST", 
		url:"loginFixSubmit",
		dataType:"json",      
		contentType:"application/json",
		data:JSON.stringify(param), 
		success:function(e){ 
			debugger
			console.log(e);
		},
		error:function(){
			layer.msg("服务器异常");
		}
	}); 	
});