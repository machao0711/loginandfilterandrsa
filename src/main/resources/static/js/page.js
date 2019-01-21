//分页4   
//totalpage  数据总页数
//pageIndex   数据当前页
//pageSize   数据总条数数
//num  分页标识
function setpage(totalpage,pageIndex,pageSize,num){
	var outstr = "";
	var count=0;
	outstr += "<nav class=\"page\">";
	if(totalpage==0){
		outstr+="<span>页</span><select><option>1</option></select><span>第</span><ul class=\"pagination\"><li class=\"disabled\"><a href=\"#\" class=\"left1\">&lt;&lt;</a></li><li class=\"disabled\"><a href=\"#\" class=\"left\">&lt;</a></li><li class=\"disabled\"><a href=\"#\">1</a></li><li class=\"disabled\"><a href=\"#\" class=\"right\">&gt;</a></li><li class=\"disabled\"><a href=\"#\" class=\"right1\">&gt;&gt;</a></li></ul><div>共有<span>0</span>条记录</div></nav>";
	}else{
		outstr += "<span>页</span><select style='width: 60px;' onchange=\"gotoThePage((parseInt(this.value)),'"+num+"')\">";
		for(var i=1;i<=parseInt(totalpage);i++){
			if(i == pageIndex){
				outstr += "<option value=\""+i+"\" selected = \"selected\">"+i+"</option>";
			}else{
				outstr += "<option value=\""+i+"\">"+i+"</option>";
			}
		}
		outstr += " </select><span>第</span>";
		if(parseInt(pageIndex)==1){//当前页为第一页
			outstr += "<ul class=\"pagination\"><li class=\"disabled\"><a href=\"#\" class=\"left1\">&lt;&lt;</a></li><li class=\"disabled\"><a href=\"#\" class=\"left\">&lt;</a></li>";
		}else{
			outstr += "<ul class=\"pagination\"><li  ><a href=\"javascript:gotoThePage("+(parseInt(1))+",'"+num+"')\" class=\"left1\">&lt;&lt;</a></li><li  ><a href=\"javascript:gotoThePage("+(parseInt(pageIndex)-1)+",'"+num+"')\" class=\"left\">&lt;</a></li>";
		}
		if(parseInt(totalpage)<5){//总页数小于5
			for (count=1;count<=parseInt(totalpage);count++){
		    	if(count!=parseInt(pageIndex)){ 
		    		outstr = outstr + "<li  ><a href='#' onclick=\"gotoThePage("+count+",'"+num+"')\">"+count+"</a></li>"; 
		        }else{ 
		            outstr = outstr + "<li  ><a>"+count+"</a></li>"; 
		        } 
			}
		}else{//总页数不小于5，但当前页小于等于3
			if(parseInt(pageIndex) <=3){
	    		for (count=1;count<=5;count++){
					if(count!=parseInt(pageIndex)){ 
						outstr = outstr + "<li  ><a href='#' onclick=\"gotoThePage("+count+",'"+num+"')\">"+count+"</a></li>"; 
					}else{ 
						outstr = outstr + "<li  ><a>"+count+"</a></li>"; 
					} 
				}
			}else{//当前页大于3
				var begin = parseInt(pageIndex) - 2;
				var end = parseInt(pageIndex) + 2;
				if(end > parseInt(totalpage)){
					end = parseInt(totalpage);
					begin = end - 4;
					}
				for(var i=begin;i<=end;i++){
					if(count!=parseInt(pageIndex)){ 
						outstr = outstr + "<li  ><a href='#' onclick=\"gotoThePage("+i+",'"+num+"')\">"+i+"</a></li>"; 
					}else{ 
						outstr = outstr + "<li  ><a>"+i+"</a></li>"; 
					} 
				}
			}
		}
		if(parseInt(pageIndex)==parseInt(totalpage)){
			outstr += "<li class=\"disabled\"><a href=\"#\" class=\"right\">&gt;</a></li><li class=\"disabled\"><a href=\"#\" class=\"right1\">&gt;&gt;</a></li></ul><div>共有<span>"+pageSize+"</span>条记录</div></nav>";
		}else{
			outstr += "<li  ><a href=\"#\" onclick=\"gotoThePage("+(parseInt(pageIndex)+1)+",'"+num+"')\" class=\"right\">&gt;</a></li><li  ><a href=\"#\" class=\"right1\"  onclick=\"gotoThePage("+(parseInt(totalpage))+",'"+num+"')\">&gt;&gt;</a></li></ul><div>共有<span>"+pageSize+"</span>条记录</div></nav>";
		}
		outstr +="</ul>";
	}
	document.getElementById("mypage_"+num).innerHTML =outstr;
}