/*$(function(){
    //$initDictionarySelect();
    //$initBudgetSelect();
    //$initChildMenu();
    $initMenu();
    $initFileUpload();
   // $initMulFileUpload();
    // $initUploadExcel();
});*/
var sign = "psmp_local_";
/**
 * 加载数字字典select(必须是select标签)
 * select元素添加component_type="select_dictionary"属性；
 * dictionary_name=""  值为sp_code_type表对应name值
 */

function $initDictionarySelect() {
    $("[component_type='select_dictionary']").each(function(i,target){
        //绑定click事件加载
        // if($(target).children().length < 1){
        //     $(target).append("<option value=''>" + "请选择" + "</option>");
        //     $(target).click(function(){
        //
        //         var name = $(this).attr("dictionary_name");
        //         var param = {name:name};
        //         $.postJSON("getDictionarySelectInfo",param,function(e){
        //             if(e&&e.success){
        //                 $.each(e.returnObject,function(key,values){
        //                     $(target).append('<option value="'+ values.name +'">' + values.title + '</option>');
        //                 });
        //             }
        //         });
        //     });
        // }

        // 一次加载
        var name = $(this).attr("dictionary_name");
        $(target).html("");
        $(target).append("<option value=''>" + "请选择" + "</option>");
        var dictionary = localStorage.getItem(sign+name);
        if (dictionary){
            // console.log("缓存");
            $.each(eval('('+dictionary+')'),function(key,values){
                $(target).append('<option value="'+ values.name +'">' + values.title + '</option>');
            });
        }else{
            // console.log("服务器获取");
            var param = {name:name};
            $.postJSON("getDictionarySelectInfo",param,function(e){
                if(e&&e.success){
                    localStorage.setItem(sign+name, JSON.stringify(e.returnObject));
                    $.each(e.returnObject,function(key,values){
                        $(target).append('<option value="'+ values.name +'">' + values.title + '</option>');
                    });
                }
            });
        }

    });
}


$('input[id=docFileUpload]').change(function() {
	alert("11111");
	$('#showDocFileName').val($(this).val());
});
/**
 * 文件上传
 * component_type = "file"  type="file" name="file" save_input_id="***"必须
 * multiple="multiple"  是否可以多文件
 * save_input_id="fileList" 隐藏文件id，以“,”分隔
 */
function $initFileUpload() {
    $("[component_type='file']").each(function(i,target){
    	debugger
        var save_input_id = $(this).attr("save_input_id");
        var elementId = [];
        elementId.push($(this).attr("id"));
        var show_input_id = $(this).attr("show_input_id");
        $(this).change(function() {
            var filePath = $(this).val();
            alert(filePath );
            var index = filePath.lastIndexOf('\\');
            //上传文件
            //layer.load(1);
            $.ajaxFileUpload({
                url: 'upFileToSftp',             //用于文件上传的服务器端请求地址
                type: 'post',
                data: {},
                secureuri: false,                   //是否需要安全协议，一般设置为false
                fileElementId: elementId,        //文件上传域的ID 在这里设置要上传的多个input的ID
                dataType: 'json',                   //返回值类型 一般设置为json
                success: function (data, status){
                    if (data.result == "0") {
                        var fileIds = "";
                        $(data.ftpIds).each(function(i,n){
                            fileIds = fileIds.concat(n+",");
                        });
                        if(fileIds.length > 0){
                            fileIds = fileIds.substring(0, fileIds.length - 1);
                        }
                        if (save_input_id){
                            $("#"+save_input_id).val(fileIds);
                        }
                        if (show_input_id){
                            $("#"+show_input_id).val(filePath.substring(index+1));
                        }
                        layer.msg("添加成功")
                        layer.closeAll('loading');
                    }else {
                        layer.msg(data.message);
                        layer.closeAll('loading');
                    }
                },
                error: function (data, status, e)//服务器响应失败处理函数
                {
                   // alert(e);
                }
            });
        });
    });
}



/**
 * 文件上传
 * component_type = "mulfile"  type="file" name="file" 必须
 */
function $initMulFileUpload() {
    $("[component_type='mulfile']").each(function(i,target){
        var save_area_ul = $(this).attr("save_area_ul");
        var elementId = [];
        elementId.push($(this).attr("id"));
        $(this).change(function() {
            var filePath = $(this).val();
            var index = filePath.lastIndexOf('\\');
            var filename = filePath.substring(index+1);
            //上传文件
            layer.load(1);
            $.ajaxFileUpload({
                url: 'ftpServlet',             //用于文件上传的服务器端请求地址
                type: 'post',
                data: {},
                secureuri: false,                   //是否需要安全协议，一般设置为false
                fileElementId: elementId,        //文件上传域的ID 在这里设置要上传的多个input的ID
                dataType: 'json',                   //返回值类型 一般设置为json
                success: function (data, status){
                    if (data.result == "0") {
                        var fileIds = "";
                        $(data.ftpIds).each(function(i,n){
                            fileIds = fileIds.concat(n+",");
                        });
                        var html = "<li><input file_id='file_id' style=\"display: none\" value="+fileIds+">" +
                            "<input type=\"text\" value="+filename+" readonly>" +
                            "<button type=\"button\" class=\"btn  land-btns\" onclick='psmp_core.deleteMulFile(this)'>删除</button>" +
                            "</li>"
                        $("#"+save_area_ul).append(html);
                        layer.msg("添加成功")
                        layer.closeAll('loading');
                    }else {
                        layer.msg(data.message);
                        layer.closeAll('loading');
                    }
                },
                error: function (data, status, e)//服务器响应失败处理函数
                {
                    alert(e);
                }
            });
        });
    });
}



function $initUploadExcel() {
    $("[component_type='upload_excel']").each(function(i,target){

        var url = $(this).attr("upload_url");
        $(target).uploadify({
            'swf': 'js/uploadify/uploadify.swf',  //FLash文件路径
            'buttonText': '浏  览',                                 //按钮文本
            'uploader': url,                       //处理文件上传Action
            'queueID': 'fileQueue',                        //队列的ID
            'queueSizeLimit': 10,                          //队列最多可上传文件数量，默认为999
            'auto': true,                                 //选择文件后是否自动上传，默认为true
            'multi': false,                                //是否为多选，默认为true
            'removeCompleted': true,                       //是否完成后移除序列，默认为true
            'fileSizeLimit': '10MB',                       //单个文件大小，0为无限制，可接受KB,MB,GB等单位的字符串值
            'fileTypeDesc': 'Image Files',                 //文件描述
            'fileTypeExts': '*.xls;*.xlsx',  //上传的文件后缀过滤器
            'onQueueComplete': function (event, data) {
                //所有队列完成后事件
//	          	ShowUpFiles($("#Attachment_GUID").val(), "div_files");
            },
            'onUploadStart' : function(file) {
//	              $("#file_upload").uploadify("settings", 'formData', { 'folder': '政策法规', 'guid': $("#Attachment_GUID").val() }); //动态传参数
            },
            'onUploadError': function (event, queueId, fileObj, errorObj) {
                //alert(errorObj.type + "：" + errorObj.info);
            },
            'onUploadSuccess':function(file, data, response){
                var json = $.parseJSON(data);
               alert("1");
            }
        });


    });
}

/**
 * 加载预算select(必须是select标签)
 * select元素添加component_type="select_budget"属性；
 */
function $initBudgetSelect() {
    $("[component_type='select_budget']").each(function(i,target){
        $(target).html("");
        $(target).append("<option value=''>" + "请选择" + "</option>");
        $.postJSON("getBudgetSelectInfo",null,function(e){
            if(e&&e.success){
                $.each(e.returnObject,function(key,values){
                    $(target).append('<option value="'+ values.id +'">' + values.pName + '</option>');
                });
            }
        });
    });
}

function $initMenu() {
	 $.postJSON("getMenu",null,function(e){
		 var menu="";
		 for(var i=0;i<e.length;i++){
			 menu = menu+ "<a href="+e[i].url+" target='mainIframe' style='text-decoration: none'>" +
             "<li><img class='lf-logo' src="+e[i].menuListSrc1+"><img class='lf-logo' src="+e[i].menuListSrc2+">" +
             "<p>"+e[i].menuListName+"</p><img class='lf-jiao' src='img/jiao.jpg'></li></a>";
		 }
		 $("#menu_menu").html(menu);
	 });
/*    $("[component_type='menu']").each(function(i,target){
        $(target).html("");
        $.postJSON("getMenu",null,function(e){
            $.each(e.returnObject,function(key,values){
                    var menu = "<a href="+value.url+" target='mainIframe' style='text-decoration: none'>" +
                        "<li><img class='lf-logo' src="+value.menuListSrc1+"><img class='lf-logo' src="+value.menuListSrc2+">" +
                        "<p>"+values.menuListName+"</p><img class='lf-jiao' src='img/jiao.jpg'></li></a>";
                $(target).append(menu);
            });
            setTimeout(function () {
                $(target).children("a:first-child")[0].click();
                $(target).children("a:first-child").find('li').addClass("lf-active");
                $(target).children("a:first-child").find('img:nth-child(1)').show();
                $(target).children("a:first-child").find('img:nth-child(2)').hide();
            },100);

        });
    });*/
}



function $initChildMenu(){
    $("[component_type='child_menu']").each(function(i,target){
        $(target).html("");
        var parentId = $(this).attr("parent_menu_id");
        var param = {parentId:parentId};
        $.postJSON("getChildMenu",param,function(e){
            if(e&&e.success){
                $.each(e.returnObject,function(key,values){
                    $(target).append("<span data-attr="+values.menuDesc+">"+values.menuName+"</span>");
                });
                $(target).children().eq(0).addClass("head-active");
            }
        });
    });
}

var psmp_core = new psmp_script();
function psmp_script() {
    
    this.deleteMulFile = function (e) {
        e.parentNode.remove();
    }

    this.getFileIds = function () {
        var fileIds = new Array();
        $("[file_id='file_id']").each(function(i,target){
            fileIds.push($(target).val());
        });
        return fileIds;
    }
    
    
    var _psmp = this;
    
    /**
     * 初始化部门
     * @param target
     * @param value
     * @param type 1 显示全部部门和科室（缺省显示部门）
     */
    this.initOrganizeTree = function (target,value,type) {
        var requestUrl = "";
        if (type){
            requestUrl = "showOrganizeTreeTable?type=1";
        }else{
            requestUrl = "showOrganizeTreeTable";
        }
        $(target).combotree({url:requestUrl,
            disable:true,
            onLoadSuccess:function(){
                if (value){
                    $(target).combotree('setValue',value);
                }
            }});
    }

    /**
     * 获取Combobox 人员select值
     * @param target
     */
    this.getComboboxValue = function(target){
        return $(target).combobox('getValue');
    }

    /**
     * Combobox赋值 人员select
     * @param target
     * @param value
     */
    this.setComboboxValue = function (target,value) {
        $(target).combobox('setValue', value);
        var text = $(target).combobox('getText');
        $(target).combobox('setText', text);

    }



    /**
     * 获取组织树值
     * @param target jquery选中id
     */
    this.getTreeValue = function (target) {
        return $(target).combotree("getValue")
    }


    /**
     * 设置组织树值
     * @param target jquery选中id
     * @param value  设置值
     */
    this.setTreeValue = function (target,value,type) {
        var requestUrl = "";
        if (type){
            requestUrl = "showOrganizeTreeTable?type=1";
        }else{
            requestUrl = "showOrganizeTreeTable";
        }
        $(target).combotree({url:requestUrl,
            panelHeight : 'auto',
            onLoadSuccess:function(){
                $(target).combotree('setValue',value);
            }});
    }

    /**
     * 获取checkbox选中值
     * @param target checkbox name
     */
    this.getCheckboxValues = function (target) {
        var result = new Array();
        $("input:checkbox[name='"+target+"']:checked").each(function() {
            if ($(this).is(":checked")) {
                result.push($(this).attr("value"));
            }
        });
        return result.join(",");
    }

    /**
     * 获取用户
     * @param target 元素标识
     * @param cross 是否跨部门，"1"为跨部门 "2"为本部门
     * @param onchangeFuncName onchange事件
     * @param userId 默认显示用户id
     */
    this.initUserCombobox = function (target,cross,onchangeFuncName,userId) {
        $(target).combobox({
            url:'getUserComboboxData?cross='+cross, //后台获取下拉框数据的url
            method:'get',
            panelHeight:200,//设置为固定高度，combobox出现竖直滚动条
            valueField:'CODE',
            textField:'NAME',
            multiple:false,
            onLoadSuccess: function () {  //下拉框数据加载成功调用
                var opts = $(this).combobox('options');
                var target = this;
                var values = $(target).combobox('getValues');//获取选中的值的values
                $.map(values, function (value) {
                    var el = opts.finder.getEl(target, value);
                    el.find('input.combobox-checkbox')._propAttr('checked', true);
                });
                if (userId){
                    $(target).combobox('setValue', userId);
                    var text = $(target).combobox('getText');
                    $(target).combobox('setText', text);
                }
            },
            onSelect: function (row) { //选中一个选项时调用
                var opts = $(this).combobox('options');
                //获取选中的值的values
                $(target).val($(this).combobox('getValues'));

                //设置选中值所对应的复选框为选中状态
                var el = opts.finder.getEl(this, row[opts.valueField]);
                el.find('input.combobox-checkbox')._propAttr('checked', true);
            },
            onUnselect: function (row) {//不选中一个选项时调用
                var opts = $(this).combobox('options');
                //获取选中的值的values
                $(target).val($(this).combobox('getValues'));

                var el = opts.finder.getEl(this, row[opts.valueField]);
                el.find('input.combobox-checkbox')._propAttr('checked', false);
            },
            onChange : function () {
                if(onchangeFuncName){
                    var func;
                    try {
                        //根据函数名得到函数类型
                        func = eval(onchangeFuncName);
                    } catch(e) {
                        alert(onchangeFuncName+'方法不存在！');
                    }
                    if (typeof func === 'function'){
                        func.call(this);
                    }
                }
            }
        });
    }

    this.initCombobox = function (target) {
        //加载下拉框复选框
        $(target).combobox({
            url:'getRoleComboboxData', //后台获取下拉框数据的url
            method:'post',
            panelHeight:200,//设置为固定高度，combobox出现竖直滚动条
            valueField:'CODE',
            textField:'NAME',
            multiple:true,
            editable:false,
            formatter: function (row) { //formatter方法就是实现了在每个下拉选项前面增加checkbox框的方法
                var opts = $(this).combobox('options');
                return '<input type="checkbox" class="combobox-checkbox">' + row[opts.textField]
            },
            onLoadSuccess: function () {  //下拉框数据加载成功调用
                var opts = $(this).combobox('options');
                var target = this;
                var values = $(target).combobox('getValues');//获取选中的值的values
                $.map(values, function (value) {
                    var el = opts.finder.getEl(target, value);
                    el.find('input.combobox-checkbox')._propAttr('checked', true);
                })
            },
            onSelect: function (row) { //选中一个选项时调用
                var opts = $(this).combobox('options');
                //获取选中的值的values
                $(target).val($(this).combobox('getValues'));

                //设置选中值所对应的复选框为选中状态
                var el = opts.finder.getEl(this, row[opts.valueField]);
                el.find('input.combobox-checkbox')._propAttr('checked', true);
            },
            onUnselect: function (row) {//不选中一个选项时调用
                var opts = $(this).combobox('options');
                //获取选中的值的values
                $(target).val($(this).combobox('getValues'));

                var el = opts.finder.getEl(this, row[opts.valueField]);
                el.find('input.combobox-checkbox')._propAttr('checked', false);
            }
        });
    }

    /**
     * 获取流程操作日志
     * @param businessId 业务id
     * @param target class="process" 元素id标识
     */
    this.initOerLogInfo = function (businessId,target) {
        var param = {businessId:businessId};
        $.postJSON("initOerLogInfo",param,function(e){
            if(e&&e.success){
            var html = "<ul class=\"schedule\">";
                $.each(e.returnObject,function(key,values){
                    html += "<li></li>";
                });
                html += "</ul><div class=\"proContent\">";
                $.each(e.returnObject,function(key,values){
                    html += "<div><div class=\"record\">申请人："+values.operUserName+"</div>";
                    // html += "<div class=\"record\">环节："+values.operName+"</div>";
                    if(values.result == '1'){
                        html += "<div class=\"record\">操作：审核通过</div>";
                    }else if(values.result == '2'){
                        html += "<div class=\"record\">操作：审核不通过</div>";
                    }else{
                        html += "<div class=\"record\">操作：</div>";
                    }
                    html += "<div class=\"record\">操作时间："+values.createTime+"</div></div>";
                });
                html += "</div>";
                $(target).html(html);
            }
        });
    }

    this.getNowFormatDate = function () {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }

    this.initDataGrid = function (html,target,totalCount,perPage,pageIndex,num) {
        $('#'+target).html(html);
        var totalRecord = parseInt(totalCount);
        var maxResult = parseInt(perPage);
        setpage((totalRecord + maxResult -1) / maxResult
            ,pageIndex,totalCount,num);
    }


    /**
     * 编号赋值
     * @param type NumberTypeNumber枚举类
     * @param target 标签标识
     * @param number 一级项目预算编号
     */
    this.initNumber = function (type,target,number) {
        var param = {type:type,number:number}
        $.postJSON("getNumber",param,function(e){
            if(e&&e.success){
                $(target).val(e.returnObject);
            }else{
               layer.msg("获取编号异常，请联系管理员")
            }
        });
    }

    /**
     * 获取编号
     * @param type type NumberTypeNumber枚举类
     * @param number 一级项目预算编号
     * @returns {string}
     */
    this.getNumber = function (type,number) {
        $.ajaxSetup({async: false});
        var newNumber = "";
        var param = {type:type,number:number}
        $.postJSON("getNumber",param,function(e){
            if(e&&e.success){
                newNumber = e.returnObject;
            }else{
                layer.msg("获取编号异常，请联系管理员")
            }
        });
        $.ajaxSetup({async: true});
        return newNumber;
    }
    
    
    this.download = function (id) {
        if(id){
            window.location.href = "ftpServlet?fileId="+id+"&operateType=02";
        }else{
            layer.msg("无可下载文件")
        }

    }
    
    this.showMessageInfo = function () {
        layer.load(1);
        $.postJSON("showMessageInfoList",null,function(e){
            if(e&&e.success){
                var data={"dataList":e.returnObject};
                var html = template('messageInfoHtml', data);
                $('#messageInfoUl').html(html);
                layer.closeAll('loading');
            }else{
                layer.msg("获取消息异常，请联系管理员");
                layer.closeAll('loading');
            }
        });
    }

    this.showMessage = function (id,topic,content) {
        layer.load(1);
        $.postJSON("showMessage",{id:id},function(e){
            if(e&&e.success){
                layer.alert(content, {
                    skin: 'layui-layer-molv'
                    ,closeBtn: 0
                });
                layer.closeAll('loading');
            }else{
                layer.msg("获取消息异常，请联系管理员");
                layer.closeAll('loading');
            }
        });
    }
}