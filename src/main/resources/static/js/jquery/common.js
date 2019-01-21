if (!this.JSON)
	this.JSON = {};
(function() {
	function k(a) {
		return a < 10 ? "0" + a : a
	}
	function n(a) {
		o.lastIndex = 0;
		return o.test(a) ? '"' + a.replace(o, function(c) {
			var d = q[c];
			return typeof d === "string" ? d : "\\u"
					+ ("0000" + c.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + a + '"'
	}
	function l(a, c) {
		var d, f, i = g, e, b = c[a];
		if (b && typeof b === "object" && typeof b.toJSON === "function")
			b = b.toJSON(a);
		if (typeof j === "function")
			b = j.call(c, a, b);
		switch (typeof b) {
		case "string":
			return n(b);
		case "number":
			return isFinite(b) ? String(b) : "null";
		case "boolean":
		case "null":
			return String(b);
		case "object":
			if (!b)
				return "null";
			g += m;
			e = [];
			if (Object.prototype.toString.apply(b) === "[object Array]") {
				f = b.length;
				for (a = 0; a < f; a += 1)
					e[a] = l(a, b) || "null";
				c = e.length === 0 ? "[]" : g ? "[\n" + g + e.join(",\n" + g)
						+ "\n" + i + "]" : "[" + e.join(",") + "]";
				g = i;
				return c
			}
			if (j && typeof j === "object") {
				f = j.length;
				for (a = 0; a < f; a += 1) {
					d = j[a];
					if (typeof d === "string")
						if (c = l(d, b))
							e.push(n(d) + (g ? ": " : ":") + c)
				}
			} else
				for (d in b)
					if (Object.hasOwnProperty.call(b, d))
						if (c = l(d, b))
							e.push(n(d) + (g ? ": " : ":") + c);
			c = e.length === 0 ? "{}" : g ? "{\n" + g + e.join(",\n" + g)
					+ "\n" + i + "}" : "{" + e.join(",") + "}";
			g = i;
			return c
		}
	}
	if (typeof Date.prototype.toJSON !== "function") {
		Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-"
					+ k(this.getUTCMonth() + 1) + "-" + k(this.getUTCDate())
					+ "T" + k(this.getUTCHours()) + ":"
					+ k(this.getUTCMinutes()) + ":" + k(this.getUTCSeconds())
					+ "Z" : null
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf()
		}
	}
	var p = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, g, m, q = {
		"\u0008" : "\\b",
		"\t" : "\\t",
		"\n" : "\\n",
		"\u000c" : "\\f",
		"\r" : "\\r",
		'"' : '\\"',
		"\\" : "\\\\"
	}, j;
	if (typeof JSON.stringify !== "function")
		JSON.stringify = function(a, c, d) {
			var f;
			m = g = "";
			if (typeof d === "number")
				for (f = 0; f < d; f += 1)
					m += " ";
			else if (typeof d === "string")
				m = d;
			if ((j = c) && typeof c !== "function"
					&& (typeof c !== "object" || typeof c.length !== "number"))
				throw new Error("JSON.stringify");
			return l("", {
				"" : a
			})
		};
	if (typeof JSON.parse !== "function")
		JSON.parse = function(a, c) {
			function d(f, i) {
				var e, b, h = f[i];
				if (h && typeof h === "object")
					for (e in h)
						if (Object.hasOwnProperty.call(h, e)) {
							b = d(h, e);
							if (b !== undefined)
								h[e] = b;
							else
								delete h[e]
						}
				return c.call(f, i, h)
			}
			p.lastIndex = 0;
			if (p.test(a))
				a = a.replace(p, function(f) {
					return "\\u"
							+ ("0000" + f.charCodeAt(0).toString(16)).slice(-4)
				});
			if (/^[\],:{}\s]*$/
					.test(a
							.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
							.replace(
									/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
									"]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
				a = eval("(" + a + ")");
				return typeof c === "function" ? d( {
					"" : a
				}, "") : a
			}
			throw new SyntaxError("JSON.parse");
		}
})();
$(function() {
	$("input").focus(function() {
		$(this).addClass("focus");
	}).blur(function() {
		$(this).removeClass("focus");
	});
});
$.fn.serializeObject = function() {
	var o = {};
	var formid = this.attr("id");
	var a = this.serializeArray();
	$
			.each(
					a,
					function() {
						if (o[this.name]) {
							if (!o[this.name].push) {
								o[this.name] = [ o[this.name] ];
							}
							o[this.name].push(this.value || '');
						} else {
							var isSetValue = false;
							$("#" + formid + " #" + this.name)
									.each(
											function() {
												var elemType = $(this).attr(
														"type") == undefined ? this.type
														: $(this).attr("type");
												if (elemType == "checkbox"
														&& !isSetValue) {
													o[this.name] = [];
													o[this.name]
															.push(this.value || '');
													isSetValue = true;
													return false;
												}
											});
							if (!isSetValue) {
								o[this.name] = this.value || '';
							}
						}
					});
	return o;
};

$.postJSON = function(url, data, callback) {
	return jQuery.ajax( {
		'type' : 'POST',
		'url' : url,
		'contentType' : 'application/json;charset=UTF-8',
		'data' : JSON.stringify(data),
		'dataType' : 'json',
		'success' : callback
	});
};
$.postJSONSync = function(url, data, callback) {
	return jQuery.ajax( {
		'type' : 'POST',
		'url' : url,
		'contentType' : 'application/json;charset=UTF-8',
		'data' : JSON.stringify(data),
		'dataType' : 'json',
		'success' : callback,
		'async':false
	});
};

/**
 * 表单提交
 * @param target formID
 * @param type
 * @param clearForm
 * @param restForm
 * @param url
 * @param callback
 */
$.postJSONForm = function(target, type,clearForm,restForm, url, callback){
    var options={
        url:url, //form提交数据的地址
        type:type, //form提交的方式(method:post/get)
        // target:target, //服务器返回的响应数据显示在元素(Id)号确定
        success:callback, //提交成功后执行的回调函数
        dataType:null, //服务器返回数据类型
        clearForm:clearForm, //提交成功后是否清空表单中的字段值
        restForm:restForm, //提交成功后是否重置表单中的字段值，即恢复到页面加载时的状态
        timeout:6000 //设置请求时间，超过该时间后，自动退出请求，单位(毫秒)。
    }
    $("#"+target).ajaxSubmit(options);
}

$.postJSONFormSimple = function(target, url, callback){
    var f = $("#"+target);
    f.form('submit', {
        url : url,
        success : callback
    });
}



// /**
//  * 自动将form表单封装成json对象
//  */
// $.fn.serializeObject = function() {
//     var o = {};
//     var a = this.serializeArray();
//     $.each(a, function() {
//         if (o[this.name]) {
//             if (!o[this.name].push) {
//                 o[this.name] = [ o[this.name] ];
//             }
//             o[this.name].push(this.value || '');
//         } else {
//             o[this.name] = this.value || '';
//         }
//     });
//     return o;
// };







$.fn.jsontoform = function(data) {
	var elem = this.attr("id");
	$("#" + elem + " input,select,textarea").each(
			function() {
				var elemType = $(this).attr("type") == undefined ? this.type
						: $(this).attr("type");
				var elemName = $(this).attr("name");
				var elemData = data[elemName];
				if (elemData) {//text password hidden button reset textarea submit checkbox
					if (elemType == "radio") {
						if (elemData == $(this).val()) {
							$(this).attr("checked", "checked");
						} else {
							$(this).attr("checked", "");
						}
					} else if (elemType == "checkbox") {
						if (elemData.constructor == Array) {//checkbox multiple value is Array
							$(this).attr("checked", false);
							for ( var elemen in elemData) {
								if (elemData[elemen] == $(this).val()) {
									$(this).attr("checked", true);
								}
							}
						} else {

						}
					} else {
						$(this).attr("value", elemData);
					}
				}
			});
};
$.fn.addSelectData = function(selectData, idKey, textKey) {
	if (this[0] && this[0].type) {
		var elemType = this[0].type;
		var selector = this;
		if (elemType == "select-one") {
			var idkeytemp = idKey ? idKey : "id";
			var textkeytemp = textKey ? textKey : "text";
			if (selectData && selectData.length > 0) {
				$.each(selectData, function(i, n) {
					selector.append("<option value='" + n[idkeytemp] + "'>"
							+ n[textkeytemp] + "</option>");
				});
			}
		}
	}
}
function getFinalErrorMessage(errorData) {
	var reMessage = "";
	if (errorData && errorData.length && errorData.length > 0) {
		$.each(errorData, function(i, data) {
			reMessage = reMessage + data.errorMessage;
		});
	}
	return reMessage;
}
function showProcess(isShow, title, msg) {
	if (!isShow) {
		$.messager.progress('close');
		return;
	}
	msg = msg ? msg : "请等待......";
	var win = $.messager.progress( {
		title : title,
		msg : msg
	});
}
function removeTreeChild(treeId, node) {
	if (node != null) {
		var childs = $('#' + treeId).tree('getChildren', node.target);
		if (childs != null || childs.length > 0) {
			$.each(childs, function(i, data) {
				$('#' + treeId).tree('remove', data.target);
			});
		}
	}
}
function removeGridAllData(gridId) {
	var empyData = {
		total : 0,
		rows : []
	};
	$('#' + gridId).datagrid("loadData", empyData);
}
function initSelectData(selectId, arrayData) {
	if (arrayData != null) {
		$.each(arrayData, function(i, data) {
			$("#" + selectId).append(
					"<option value='" + data.code + "'>" + data.text
							+ "</option>");
		});
	}
}　　
function trim(str){ //删除左右两端的空格
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
}
function fillsize(percent) {
    var bodyWidth = document.body.clientWidth;
    return (bodyWidth - 90) * percent;
}
function isNotNull(str){
	if(str==null || str=='' || str=='undefiend' || typeof(str) == null || typeof(str) == "undefined" ){
		return false;
	}
	if(typeof(str) == 'string' && trim(str)==''){
		return false;
	}
	return true;
}
function addInputFocus(){
	$("input").focus(function() {
		$(this).addClass("focus");
	}).blur(function() {
		$(this).removeClass("focus");
	});
}
function getSelectOptionData(arrayData) {
	var selectHtml="";
	if (arrayData != null) {
		$.each(arrayData, function(i, data) {
			selectHtml=selectHtml+"<option value='" + data.code + "'>" + data.text
							+ "</option>";
		});
	}
	return selectHtml;
}　
function getGridUpFileDisplayHtml(label){
	//GRID中按钮获取上传文件时显示HTML
	return "<div style='margin-top:0px'><span class='l-btn-left'><span class='l-btn-text icon-excel' style='padding-left:20px'>"+label+"</span></span><div>";
	
}