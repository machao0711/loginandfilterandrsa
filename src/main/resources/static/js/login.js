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
//使用ajax对数据进行 验证后 再提交
function login(){
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
        type: "POST",                  
        dataType: "json",              
        url: "/loginSubmit" ,          
        data: $('#form1').serialize(), //提交的数据
        success: function (result) {
            console.log(result);       //打印服务端返回的数据(调试用)
            if (result.resultCode == 200) {
                alert("提交成功");
            }
            ;
        },
		error:function(){
			layer.msg("服务器异常");
		}
	});
};
$(document).on('click','#login_sure_two',function(){
	var username=$("#username").val().trim();
	var password=$("#password").val().trim();
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
			console.log(e);
			console.log(e.token);
			$.cookie('token', e.token, { expires: 7, path: '/' }); 
			var token=$.cookie('token');
			console.log(token);
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			layer.msg("服务器异常");
		},
		complete:function(XMLHttpRequest, textStatus, errorThrown){
			testLocation();
		}
	});
});

function testLocation(){
	alert("1111");
	var token=$.cookie('token');
	$.ajax({ 
		type:"GET", 
		url:"test",
		contentType:"application/json",
		async: false,
		headers: {
			//Bearer是我的项目需要的,你可以按你的需求规范格式
			'Authorization': 'Bearer:' + token,
		},
		/*success:function(e){ 
		},*/
		error:function(XMLHttpRequest, textStatus, errorThrown){
			debugger
			 // 状态码
            console.log(XMLHttpRequest.status);
            // 状态
            console.log(XMLHttpRequest.readyState);
            // 错误信息   
            console.log(textStatus);
			layer.msg("服务器异常");
		}
	});
}



