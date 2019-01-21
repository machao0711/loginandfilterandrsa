//初始化 
var pageSize,pageIndex; 
//初始化 
pageIndex = 1;//第几页
pageSize = 1; //每页10条数据

//分页
function setpage(totalpage,pageIndex,totalNum,pageSize,length,num) //length为返回的list长度
{
	var num=num;
	var startRow = parseInt((pageIndex-1))*parseInt(pageSize)+1;//当前页显示的起始记录
	var lastRow = parseInt(pageSize)*parseInt(pageIndex);//当前页显示的最后一条记录
/*	var gopage = $("#GOPAGE").val();*/
	var count ;
	var outstr = "";
	outstr += "<div class=\"total\">共<span>"+totalpage+"</span>页</div>";
	if(parseInt(pageIndex)==1){//当前页为第一页
		outstr += "<li><a href='javascript:void(0)' class=\"right\" style=\"display:none\">&lt;</a></li>";
	}else{
		outstr += "<li><a href='javascript:void(0)' onclick='gotopage("+(parseInt(pageIndex)-1)+")' class=\"right\" >&lt;</a></li>";
		
	}
	if(parseInt(totalpage)<5){//总页数小于10
		for (count=1;count<=parseInt(totalpage);count++){
	    	if(count!=parseInt(pageIndex)){ 
	            outstr = outstr + "<li><a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a></li>"; 
	        }else{ 
	            outstr = outstr + "<li class=\"active\"><a>"+count+"</a></li>"; 
	        } 
		}
	}else{//总页数不小于10，但当前页小于等于6
		if(parseInt(pageIndex) <=3){
    		for (count=1;count<=5;count++){
	        	if(count!=parseInt(pageIndex)){ 
	                outstr = outstr + "<li><a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a></li>"; 
	            }else{ 
	                outstr = outstr + "<li class=\"active\"><a class=\"fy-aa active\">"+count+"</a></li>"; 
	            } 
	        }

		}else{//当前页大于6
//    		-5  +4   -9
			var begin = parseInt(pageIndex) - 2;
			var end = parseInt(pageIndex) + 2;
			if(end > parseInt(totalpage)){
				end = parseInt(totalpage);
				begin = end - 4;
				}

			for(var i=begin;i<=end;i++){
				if(i!=parseInt(pageIndex)){ 
	                outstr = outstr + "<li><a href='javascript:void(0)' onclick='gotopage("+i+")'>"+i+"</a></li>"; 
	            }else{ 
	                outstr = outstr + "<li class=\"active\"><a>"+i+"</a></li>"; 
	            } 
			}

		}
	}
//	 outstr += "<a class=\"\" href='javascript:void(0)' onclick='gotopage1("+totalpage+")'>跳转</a>&nbsp";
//	 outstr += "<input id=\"GOPAGE\" class=\"form-control\"  onkeyup=\"this.value=this.value.replace(/\\D/g,'')\">&nbsp";
		 
	if(parseInt(pageIndex)==parseInt(totalpage)||totalpage==0){
		outstr += "";
		//outstr += "<li style=\"display:none\" ><a href='javascript:void(0)' class=\"right\"></a>&gt;</li>";
	}else{
		outstr += "<li><a class=\"right\" href='javascript:void(0)' onclick='gotopage("+(parseInt(pageIndex)+1)+")'>&gt;</a></li>";
	}
	
	
	outstr +="</ul>";
    outstr +="</div>"; 
    	document.getElementById("setpage").innerHTML = "<div  class=\"mypage\"><ul class=\"pag\">" + outstr;
    outstr = ""; 

}


//分页2
function setpagejg(totalpage,pageIndex,totalNum,pageSize,length,num) //length为返回的list长度
{ debugger  
	var startRow = parseInt((pageIndex-1))*parseInt(pageSize)+1;//当前页显示的起始记录
	var lastRow = parseInt(pageSize)*parseInt(pageIndex);//当前页显示的最后一条记录
/*	var gopage = $("#GOPAGE").val();*/
	var count ;
	var outstr = "";
	outstr += "<div class=\"total\">共<span>"+totalpage+"</span>页</div>";
	if(parseInt(pageIndex)==1){//当前页为第一页
		outstr += "<li><a href='javascript:void(0)' class=\"right\" style=\"display:none\">&lt;</a></li>";
	}else{
		outstr += "<li><a href='javascript:void(0)' onclick='gotopagejg("+(parseInt(pageIndex)-1)+")' class=\"right\" >&lt;</a></li>";
		
	}
	if(parseInt(totalpage)<5){//总页数小于10
		for (count=1;count<=parseInt(totalpage);count++){
	    	if(count!=parseInt(pageIndex)){ 
	            outstr = outstr + "<li><a href='javascript:void(0)' onclick='gotopagejg("+count+")'>"+count+"</a></li>"; 
	        }else{ 
	            outstr = outstr + "<li class=\"active\"><a>"+count+"</a></li>"; 
	        } 
		}
	}else{//总页数不小于10，但当前页小于等于6
		if(parseInt(pageIndex) <=3){
    		for (count=1;count<=5;count++){
	        	if(count!=parseInt(pageIndex)){ 
	                outstr = outstr + "<li><a href='javascript:void(0)' onclick='gotopagejg("+count+")'>"+count+"</a></li>"; 
	            }else{ 
	                outstr = outstr + "<li class=\"active\"><a class=\"fy-aa active\">"+count+"</a></li>"; 
	            } 
	        }

		}else{//当前页大于6
//    		-5  +4   -9
			var begin = parseInt(pageIndex) - 2;
			var end = parseInt(pageIndex) + 2;
			if(end > parseInt(totalpage)){
				end = parseInt(totalpage);
				begin = end - 4;
				}

			for(var i=begin;i<=end;i++){
				if(i!=parseInt(pageIndex)){ 
	                outstr = outstr + "<li><a href='javascript:void(0)' onclick='gotopagejg("+i+")'>"+i+"</a></li>"; 
	            }else{ 
	                outstr = outstr + "<li class=\"active\"><a>"+i+"</a></li>"; 
	            } 
			}

		}
	}
//	 outstr += "<a class=\"\" href='javascript:void(0)' onclick='gotopage1("+totalpage+")'>跳转</a>&nbsp";
//	 outstr += "<input id=\"GOPAGE\" class=\"form-control\"  onkeyup=\"this.value=this.value.replace(/\\D/g,'')\">&nbsp";
		 
	if(parseInt(pageIndex)==parseInt(totalpage)){
		outstr += "";
		//outstr += "<li style=\"display:none\" ><a href='javascript:void(0)' class=\"right\"></a>&gt;</li>";
	}else{
		outstr += "<li><a class=\"right\" href='javascript:void(0)' onclick='gotopagejg("+(parseInt(pageIndex)+1)+")'>&gt;</a></li>";
	}
	
	
	outstr +="</ul>";
    outstr +="</div>"; 
    document.getElementById("setpagejg").innerHTML = "<div  class=\"mypage\"><ul class=\"pag\">" + outstr;
  
    outstr = ""; 

}


//分页3
function setpage3(totalpage,pageIndex,pageSize,num){
	var outstr = "";
	var count=0;
	outstr += "<ul class=\"pag\">";
	if(totalpage==0){
		outstr+="<div class=\"total\">共<span>0</span>页</div></ul>";
	}else{
		outstr+="<div class=\"total\">共<span>"+totalpage+"</span>页</div>";
		if(parseInt(pageIndex)==1){//当前页为第一页
			outstr += "<li style=\"display:none\"><a href=\"javascript:void(0)\" class=\"left\">&lt;</a></li>";
		}else{
			outstr += "<li><a href=\"javascript:gotoThePage("+(parseInt(pageIndex)-1)+",'"+num+"')\" class=\"left\">&lt;</a></li>";
			
		}
		if(parseInt(totalpage)<5){//总页数小于5
			for (count=1;count<=parseInt(totalpage);count++){
		    	if(count!=parseInt(pageIndex)){ 
		    		outstr = outstr + "<li><a onclick=\"gotoThePage("+count+",'"+num+"')\">"+count+"</a></li>"; 
		        }else{ 
		            outstr = outstr + "<li class=\"active\"><a>"+count+"</a></li>"; 
		        } 
			}
		}else{//总页数不小于5，但当前页小于等于3
			if(parseInt(pageIndex) <=3){
	    		for (count=1;count<=5;count++){
		        	if(count!=parseInt(pageIndex)){ 
		                outstr = outstr + "<li><a href='javascript:void(0)' onclick=\"gotoThePage("+count+",'"+num+"')\">"+count+"</a></li>"; 
		            }else{ 
		                outstr = outstr + "<li class=\"active\"><a class=\"fy-aa active\">"+count+"</a></li>"; 
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
					if(i!=parseInt(pageIndex)){ 
		                outstr = outstr + "<li><a href='javascript:void(0)' onclick=\"gotoThePage("+i+",'"+num+"')\">"+i+"</a></li>"; 
		            }else{ 
		                outstr = outstr + "<li class=\"active\"><a>"+i+"</a></li>"; 
		            } 
				}

			}
		}
		if(parseInt(pageIndex)==parseInt(totalpage)){
			outstr += " <li style=\"display:none\"><a href=\"javascript:void(0)\" class=\"right\">&gt;</a></li>";
		}else{
			outstr += "<li><a class=\"right\" href='javascript:void(0)' onclick=\"gotoThePage("+(parseInt(pageIndex)+1)+",'"+num+"')\">&gt;</a></li>";
		}
		outstr +="</ul>";
	}
	document.getElementById("mypage_"+num).innerHTML =outstr;
	
	

}
