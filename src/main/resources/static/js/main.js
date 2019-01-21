/*$(function () {
    $(".newTarget .sort .ex-round").bind("click",function () {
        $(this).find(".round").addClass("ex-active");
        $(this).siblings().find(".round").removeClass("ex-active");
    })
    $(".newTarget .newPro .ex-round").bind("click",function () {
        $(this).find(".round").addClass("ex-active");
        $(this).siblings().find(".round").removeClass("ex-active");
    })
})



$(function () {
	// left
	$('.lf-nav .nav-box').on('DOMNodeInserted',function(){
		var navLi = $(".nav-box li");
		navLi.each(function (index,val) {
			navLi.eq(index).click(function () {
				for(var i=0; i<navLi.length;i++){
					navLi.eq(i).removeClass("lf-active");
					navLi.eq(i).children('img:nth-child(2)').show();
					navLi.eq(i).children('img:nth-child(1)').hide();
				}
				navLi.eq(index).addClass("lf-active");
				navLi.eq(index).children('img:nth-child(1)').show();
				navLi.eq(index).children('img:nth-child(2)').hide();
			})
		})
	})
	

	//工作台选项卡
	var workLi = $('.work-con .table-box .workLi span');
	var workSon = $('.work-con .table-box .workSon');
	workLi.each(function(index,val){
		workLi.eq(index).click(function(){
			for(var i=0;i<workLi.length;i++){
				workLi.eq(i).removeClass('sli-active');
				workSon.eq(i).css('display','none');	
			}
			workLi.eq(index).addClass('sli-active');
			workSon.eq(index).css('display','block');
		})
	})
	// 工作台下拉框
	var pull=0;
	$('.pull-down').click(function(e){
		e.stopPropagation();
		pull++;
		if(pull%2==1){
			$('.pull-box').css('height',"auto");
			$('.pull-down .arrow-t').hide();
			$('.pull-down .arrow-b').show();
		}else{
			$('.pull-box').css('height',"0");
			$('.pull-down .arrow-t').show();
			$('.pull-down .arrow-b').hide();
		}
	})
	var pull=0;
	$('.pull-add').click(function(e){
		e.stopPropagation();
		pull++;
		if(pull%2==1){
			$('.pull-con').css('height',"auto");
			$('.pull-add .arrow-t').hide();
			$('.pull-add .arrow-b').show();
		}else{
			$('.pull-con').css('height',"0");
			$('.pull-add .arrow-t').show();
			$('.pull-add .arrow-b').hide();
		}
	})
	var navBoxLi = $('.nav-li .nav-box');
	setInterval(function(){
		navBoxLi.each(function(index,val){
			if(navBoxLi.eq(index).attr('aria-expanded')=="true"){
				navBoxLi.eq(index).find('.arrow-t').hide();
				navBoxLi.eq(index).find('.arrow-b').show();
			}else if(navBoxLi.eq(index).attr('aria-expanded')=="false"){
				navBoxLi.eq(index).find('.arrow-t').show();
				navBoxLi.eq(index).find('.arrow-b').hide();
			}
		})

		//监控文档的高度赋给左边导航
		$('.lf-nav').css('height',$(document).height());
	},100)
	
	//bud-inputFile
	$('input[id=lefile]').change(function() {
   		$('#photoCover').val($(this).val());
	});
	
	//点击是否，添加样式,方法
	function spot(spots){
		spots.each(function(index,val){
			spots.eq(index).click(function(){
				for( var i=0; i<spots.length;i++){
					spots.eq(i).children().removeClass('ex-active');
				}
				spots.eq(index).children().addClass('ex-active');
			})
		})
	}
	//土地-点击是否，添加样式
	var landExRound =  $('.expense-land .input-group .ex-round');
	spot(landExRound);
	//房屋-点击是否，添加样式
	var houseExRound =  $('.expense-house .input-group .ex-round');
	spot(houseExRound);
	//车辆-点击是否，添加样式
	var voitureExRound =  $('.expense-voiture .input-group .ex-round');
	spot(voitureExRound);
	//专属设备-点击是否，添加样式
	var deviceExRound =  $('.expense-device .input-group .ex-round');
	spot(deviceExRound);
	//图书档案-点击是否，添加样式
	var bookExRound =  $('.expense-book .input-group .ex-round');
	spot(bookExRound);
	//家具用具-点击是否，添加样式
	var furnitureExRound =  $('.expense-furniture .input-group .ex-round');
	spot(furnitureExRound);
	//通用设备及其他-点击是否，添加样式
	var messageExRound =  $('.expense-message .input-group .ex-round');
	spot(messageExRound);
	//文物和陈列品-点击是否，添加样式
	var relicExRound =  $('.expense-relic .input-group .ex-round');
	spot(relicExRound);
	//合同申报-涉密-点击是否，添加样式
	var contractSecretExRound = $('.expense-contract .secret .ex-round');
	spot(contractSecretExRound);
	//合同申报-备案-点击是否，添加样式
	var contractRecordExRound = $('.expense-contract .record .ex-round');
	spot(contractRecordExRound);
	//合同申报-保证金-点击是否，添加样式
	var contractDepositExRound = $('.expense-contract .deposit .ex-round');
	spot(contractDepositExRound);
	//合同申报-涉及固定资产-点击是否，添加样式
	var contractCapitalExRound = $('.expense-contract .capital .ex-round');
	spot(contractCapitalExRound);

	//采购报销-选中样式
	var reimburP = $('.expense-reimbur table tr td p');
	reimburP.each(function(index,val){
		reimburP.eq(index).click(function(){
			for(var i=0;i<reimburP.length;i++){
				reimburP.eq(i).removeClass('p-active');
			}
			reimburP.eq(index).addClass('p-active');
		})
	})

	//申报单-房屋，添加tr
	var houseAddBut = $('.expense-house .ul-but .house-add');
	var houseDelBut = $('.expense-house .ul-but .house-del');
	var houseTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td></tr>"
	houseAddBut.click(function(){
		$('.expense-house .house-box .table').append(houseTr);
	})
	// 申报单-房屋，删除tr
	$('.expense-house .house-box .table').on('DOMNodeInserted',function(){
		var houseCheck = $('.expense-house .house-box .table tr td input:checkbox');
		houseDelBut.click(function(){
			houseCheck.each(function(index,val){
				if(houseCheck.eq(index).prop('checked')){
					houseCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//申报单-车辆，添加tr
	var voitureAddBut = $('.expense-voiture .ul-but .voiture-add');
	var voitureDelBut = $('.expense-voiture .ul-but .voiture-del');
	var voitureTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td></tr>"
	voitureAddBut.click(function(){
		$('.expense-voiture .house-box .table').append(voitureTr);
	})
	//申报单-软件/文物/图书，删除tr
	$('.expense-voiture .house-box .table').on('DOMNodeInserted',function(){
		var voitureCheck = $('.expense-voiture .house-box .table tr td input:checkbox');
		voitureDelBut.click(function(){
			voitureCheck.each(function(index,val){
				if(voitureCheck.eq(index).prop('checked')){
					voitureCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//申报单-专属设备，添加tr
	var deviceAddBut = $('.expense-device .ul-but .device-add');
	var deviceDelBut = $('.expense-device .ul-but .device-del');
	var deviceTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td></tr>"
	deviceAddBut.click(function(){
		$('.expense-device .house-box .table').append(deviceTr);
	})
	//申报单-软件/文物/图书，删除tr
	$('.expense-device .house-box .table').on('DOMNodeInserted',function(){
		var deviceCheck = $('.expense-device .house-box .table tr td input:checkbox');
		deviceDelBut.click(function(){
			deviceCheck.each(function(index,val){
				if(deviceCheck.eq(index).prop('checked')){
					deviceCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//申报单-图书档案，添加tr
	var bookAddBut = $('.expense-book .ul-but .book-add');
	var bookDelBut = $('.expense-book .ul-but .book-del');
	var bookTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td></tr>"
	bookAddBut.click(function(){
		$('.expense-book .house-box .table').append(bookTr);
	})
	//申报单-图书档案，删除tr
	$('.expense-book .house-box .table').on('DOMNodeInserted',function(){
		var bookCheck = $('.expense-book .house-box .table tr td input:checkbox');
		bookDelBut.click(function(){
			bookCheck.each(function(index,val){
				if(bookCheck.eq(index).prop('checked')){
					bookCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//申报单-家用家具，添加tr
	var furnitureAddBut = $('.expense-furniture .ul-but .furniture-add');
	var furnitureDelBut = $('.expense-furniture .ul-but .furniture-del');
	var furnitureTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td></tr>"
	furnitureAddBut.click(function(){
		$('.expense-furniture .house-box .table').append(furnitureTr);
	})
	//申报单-家用家具，删除tr
	$('.expense-furniture .house-box .table').on('DOMNodeInserted',function(){
		var furnitureCheck = $('.expense-furniture .house-box .table tr td input:checkbox');
		furnitureDelBut.click(function(){
			furnitureCheck.each(function(index,val){
				if(furnitureCheck.eq(index).prop('checked')){
					furnitureCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//申报单-文物和陈列品，添加tr
	var relicAddBut = $('.expense-relic .ul-but .relic-add');
	var relicDelBut = $('.expense-relic .ul-but .relic-del');
	var relicTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td></tr>"
	relicAddBut.click(function(){
		$('.expense-relic .house-box .table').append(relicTr);
	})
	//申报单-文物和陈列品，删除tr
	$('.expense-relic .house-box .table').on('DOMNodeInserted',function(){
		var relicCheck = $('.expense-relic .house-box .table tr td input:checkbox');
		relicDelBut.click(function(){
			relicCheck.each(function(index,val){
				if(relicCheck.eq(index).prop('checked')){
					relicCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//填写结果集，添加tr
	var finallyAddBut = $('.expense-finally .ul-but .finally-add');
	var finallyDelBut = $('.expense-finally .ul-but .finally-del');
	var finallyTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><select name='' id=''><option value='1'>是合同</option><option value='2'>非合同</option></select></td><td><input type='text' class='tr-add'></td><td><input type='hidden' class='tr-add'></td></tr>"
	finallyAddBut.click(function(){
		$('.expense-finally .audit-bot .table').append(finallyTr);
	})
	//填写结果集，删除tr
	$('.expense-finally .audit-bot .table').on('DOMNodeInserted',function(){
		var finallyCheck = $('.expense-finally .audit-bot .table tr td input:checkbox');
		finallyDelBut.click(function(){
			finallyCheck.each(function(index,val){
				if(finallyCheck.eq(index).prop('checked')){
					finallyCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//合同申报-付款信息，添加tr
	var contractAddBut = $('.expense-contract .tab-first .contract-add');
	var contractDelBut = $('.expense-contract .tab-first .contract-del');
	var contractTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td></tr>"
	contractAddBut.click(function(){
		$('.expense-contract .tab-first .table').append(contractTr);
	})
	//合同申报-付款信息，删除tr
	$('.expense-contract .tab-first .table').on('DOMNodeInserted',function(){
		var contractCheck = $('.expense-contract .tab-first .table tr td input:checkbox');
		contractDelBut.click(function(){
			contractCheck.each(function(index,val){
				if(contractCheck.eq(index).prop('checked')){
					contractCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//合同申报-保证金，添加tr
	var bailAddBut = $('.expense-contract .only-one .bail-add');
	var bailDelBut = $('.expense-contract .only-one .bail-del');
	var bailTr = "<tr><td><input type='checkbox'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td><td><input type='text' class='tr-add'></td></tr>"
	bailAddBut.click(function(){
		$('.expense-contract .only-one .table').append(bailTr);
	})
	//合同申报-保证金，删除tr
	$('.expense-contract .only-one .table').on('DOMNodeInserted',function(){
		var bailCheck = $('.expense-contract .only-one .table tr td input:checkbox');
		bailDelBut.click(function(){
			bailCheck.each(function(index,val){
				if(bailCheck.eq(index).prop('checked')){
					bailCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//资产变动-基本信息-动态效果
	$(document).on('click','.expense-asset .basic-box .wire-box',function(){
		if($(this).children('img').attr('src')=="img/asset-wire2.jpg"){
			$(this).children('img').attr('src','img/asset-wire.jpg');
			$(this).next().slideDown(300);
		}else{
			$(this).children('img').attr('src','img/asset-wire2.jpg');
			$(this).next().slideUp(300);
		}
	});
	//资产减少-基本信息-动态效果
	$(document).on('click','.expense-write .basic-box .wire-box',function(){
		if($(this).children('img').attr('src')=="img/asset-wire2.jpg"){
			$(this).children('img').attr('src','img/asset-wire.jpg');
			$(this).next().slideDown(300);
		}else{
			$(this).children('img').attr('src','img/asset-wire2.jpg');
			$(this).next().slideUp(300);
		}
	});

	//资产减少审核-基本信息-动态效果
	$(document).on('click','.expense-reduce .basic-box .wire-box',function(){
		if($(this).children('img').attr('src')=="img/asset-wire2.jpg"){
			$(this).children('img').attr('src','img/asset-wire.jpg');
			$(this).next().slideDown(300);
		}else{
			$(this).children('img').attr('src','img/asset-wire2.jpg');
			$(this).next().slideUp(300);
		}
	});

	//信息变动-变动信息-效果
	$('.expense-infor .plain').click(function(){
		$('.expense-infor .plain-value').html($('.expense-infor .plain option:selected').html());
	})

	//信息变动-审核-效果
	$('.expense-incha .oscil').on('DOMNodeInserted',function(){
		$('.expense-incha .oscil-val').html($(this).val());
	})


	//资产管理-资产变动-基本信息-动态效果
	$(document).on('click','.expense-altera .basic-box .wire-box',function(){
		if($(this).children('img').attr('src')=="img/asset-wire2.jpg"){
			$(this).children('img').attr('src','img/asset-wire.jpg');
			$(this).next().slideDown(300);
		}else{
			$(this).children('img').attr('src','img/asset-wire2.jpg');
			$(this).next().slideUp(300);
		}
	});

	//资产管理-信息变动-基本信息-动态效果
	$(document).on('click','.expense-infor .basic-box .wire-box',function(){
		if($(this).children('img').attr('src')=="img/asset-wire2.jpg"){
			$(this).children('img').attr('src','img/asset-wire.jpg');
			$(this).next().slideDown(300);
		}else{
			$(this).children('img').attr('src','img/asset-wire2.jpg');
			$(this).next().slideUp(300);
		}
	});
	//资产管理审核-信息变动-基本信息-动态效果
	$(document).on('click','.expense-incha .basic-box .wire-box',function(){
		if($(this).children('img').attr('src')=="img/asset-wire2.jpg"){
			$(this).children('img').attr('src','img/asset-wire.jpg');
			$(this).next().slideDown(300);
		}else{
			$(this).children('img').attr('src','img/asset-wire2.jpg');
			$(this).next().slideUp(300);
		}
	});

	//采购报销-结果集列表-动态效果
	var reimburi = 0;
	$('.expense-pact .reim-box:last-child .arrow-box .reimbur-arrow').click(function(){
		reimburi ++;
		if(reimburi%2==1){
			$(this).attr('src','img/asset-wire.jpg');
			$(this).parent().next().slideUp(300);
		}else{
			$(this).attr('src','img/asset-wire2.jpg');
			$(this).parent().next().slideDown(300);
		}
	})
	//采购报销-判断是否关联固定资产
	$('.expense-pact .reim-box:last-child .arrow-box .radioChoose input').eq(0).click(function(){
		$(this).parent().parent().next().slideDown(300);
	})
	$('.expense-pact .reim-box:last-child .arrow-box .radioChoose input').eq(1).click(function(){
		$(this).parent().parent().next().slideUp(300);
	})

	//预算报销-判断是否关联固定资产
	$('.expense-pact .reim-box:nth-child(4) .arrow-box .radioChoose input').eq(0).click(function(){
		$(this).parent().parent().next().slideDown(300);
	})
	$('.expense-pact .reim-box:nth-child(4) .arrow-box .radioChoose input').eq(1).click(function(){
		$(this).parent().parent().next().slideUp(300);
	})

	//合同报销-结果集列表-动态效果
	var pacti = 0;
	$('.expense-pact .reim-box:nth-child(3) .arrow-box .reimbur-arrow').click(function(){
		pacti ++;
		if(pacti%2==1){
			$(this).attr('src','img/asset-wire.jpg');
			$(this).parent().next().slideUp(300);
		}else{
			$(this).attr('src','img/asset-wire2.jpg');
			$(this).parent().next().slideDown(300);
		}
	})
	//合同报销-判断是否关联固定资产
	$('.expense-pact .reim-box:nth-child(3) .arrow-box .radioChoose input').eq(0).click(function(){
		$(this).parent().parent().next().slideDown(300);
	})
	$('.expense-pact .reim-box:nth-child(3) .arrow-box .radioChoose input').eq(1).click(function(){
		$(this).parent().parent().next().slideUp(300);
	})

	//合同申报-付款信息，保证金click
	var contractClickspan = $('.expense-contract .house-box ul li em span');
	var contractClick =  $('.expense-contract .house-box ul .contract-click');
	contractClickspan.each(function(index,val){
		contractClickspan.eq(index).click(function(){
			for(var i=0;i<contractClickspan.length;i++){
				contractClickspan.eq(i).removeClass('psp-active');
				contractClick.eq(i).hide();
				$('.expense-contract .house-box .contract-only .li-tab').eq(i).hide();
			}
			contractClickspan.eq(index).addClass('psp-active');
			contractClick.eq(index).show();
			$('.expense-contract .house-box .contract-only .li-tab').eq(index).show();
		})
	})
	// 预算管理选项卡
	function budMove(){
		var budLi = $('.budget-box header span');
		var budSon =  $('.budget-box').children().not('.budget-box header');
		//判断二级菜单个数
		if(budLi.length==0){
			// $('.budget-box').css('display','none');
		}else if(budLi.length>=1){
			budLi.eq(0).addClass("head-active");
			for(var i=0;i<budSon.length;i++){
				if(budSon.eq(i).attr('data-attr')==budLi.eq(0).attr('data-attr')){
					budSon.eq(i).css('display','block');
				}
			}
			budLi.each(function(index,val){
				budLi.eq(index).click(function(){
					for(var i=0;i<budSon.length;i++){
						budLi.eq(i).removeClass("head-active");
						budSon.eq(i).css('display','none');
						if(budSon.eq(i).attr('data-attr')==budLi.eq(index).attr('data-attr')){
							budSon.eq(i).css('display','block');
						}
					}
					budLi.eq(index).addClass("head-active");
				})
			})
		}
	}
	$('.budget-box header').on('DOMNodeInserted',function(){
		budMove();
	})
	budMove();

	//预算管理-指标下达删除tr
	var normDelBut =  $('.budget-box .norm-con .norm-bottom .table-top .norm-del');
	var normCheck =  $('.budget-box .norm-con .norm-bottom table tr td input:checkbox');
	normDelBut.click(function(){
		normCheck.each(function(index,val){
			if(normCheck.eq(index).prop('checked')){
				normCheck.eq(index).parent().parent('tr').remove();
			}
		})
	})

	//预算管理-指标下达-核减
	$('.newTarget #item02').click(function(){
		$(this).children().addClass('ex-active');
		$('.newTarget #item03 div').removeClass('ex-active');
		$('.newTarget #item04 div').addClass('ex-active');
		$('.newTarget #item01 div').removeClass('ex-active');
		$('.newTarget #item03').click(function(){
			$('.newTarget #item03 div').removeClass('ex-active');
			$('.newTarget #item04 div').addClass('ex-active');
		})
	})
	$('.newTarget #item01').click(function(){
		$(this).children().addClass('ex-active');
		$('.newTarget #item02 div').removeClass('ex-active');
		$('.newTarget #item03').click(function(){
			$('.newTarget #item04 div').removeClass('ex-active');
			$('.newTarget #item03 div').addClass('ex-active');
		})
		$('.newTarget #item04').click(function(){
			$('.newTarget #item03 div').removeClass('ex-active');
			$('.newTarget #item04 div').addClass('ex-active');
		})
	})
	$('.newTarget #item03').click(function(){
		$('.newTarget #item04 div').removeClass('ex-active');
		$('.newTarget #item03 div').addClass('ex-active');
	})
	$('.newTarget #item04').click(function(){
		$('.newTarget #item03 div').removeClass('ex-active');
		$('.newTarget #item04 div').addClass('ex-active');
	})


	// 预算导入-数据包
	var leadLi = $('.budget-box .lead-con li:nth-child(2)').children().not('.budget-box .lead-con li:nth-child(2) span:nth-child(1)');
	leadLi.each(function(index,val){
		leadLi.eq(index).click(function(){
			for(var i=0;i<leadLi.length;i++){
				leadLi.eq(i).removeClass('span-active');
			}
			leadLi.eq(index).addClass('span-active');
		})
	})

	//经费管理-经费报销
	var outlayTop = $('.funds-box .outlay-con .table-top p span');
	outlayTop.each(function(index,val){
		outlayTop.eq(index).click(function(){
			for(var i=0;i<outlayTop.length;i++){
				outlayTop.eq(i).removeClass('psp-active');
			}
			outlayTop.eq(index).addClass('psp-active');
		})
	})
	//经费管理-保证金管理
	var bailTop = $('.funds-box .bail-con .bail-bot .table-top p span');
	bailTop.each(function(index,val){
		bailTop.eq(index).click(function(){
			for(var i=0;i<bailTop.length;i++){
				bailTop.eq(i).removeClass('psp-active');
			}
			bailTop.eq(index).addClass('psp-active');
		})
	})

	//经费管理-数据字典-表1，添加tr
	var recordLeftAddBut = $('.funds-box .record-con .table-top .recordLeft-add');
	var recordLeftDelBut = $('.funds-box .record-con .table-top .recordLeft-del');
	var recordLeftTr = '<tr><td><input type="checkbox"></td><td><input type="text" class="tr-add" value=""></td><td><input type="text" class="tr-add" value=""></td><td><input type="text" class="tr-add" value=""></td><td><input type="text" class="tr-add" value=""></td><td><input type="text" class="tr-add" value=""></td><td><button class="btn btn-default" type="submit">编辑</button></td></tr>';
	recordLeftAddBut.click(function(){
		$('.record-con ul li:first-child table').append(recordLeftTr);
	})
	//经费管理-数据字典-表1，删除tr
	$('.record-con ul li:first-child table').on('DOMNodeInserted',function(){
		var recordLeftCheck = $('.record-con ul li:first-child table tr td input:checkbox');
		recordLeftDelBut.click(function(){
			recordLeftCheck.each(function(index,val){
				console.log(recordLeftCheck.eq(index).is(':checked'))
				if(recordLeftCheck.eq(index).prop('checked')){
					recordLeftCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})

	//经费管理-数据字典-表2，添加tr
	var recordRightAddBut = $('.funds-box .record-con .table-top .recordRight-add');
	var recordRightDelBut = $('.funds-box .record-con .table-top .recordRight-del');
	var recordRightTr = '<tr><td><input type="checkbox"></td><td><input type="text" class="tr-add" value=""></td><td><input type="text" class="tr-add" value=""></td><td><input type="text" class="tr-add" value=""></td><td><input type="text" class="tr-add" value=""></td><td><input type="text" class="tr-add" value=""></td><td><button class="btn btn-default" type="submit">编辑</button></td></tr>';
	recordRightAddBut.click(function(){
		$('.record-con ul li:last-child table').append(recordRightTr);
	})
	//经费管理-数据字典-表2，删除tr
	$('.record-con ul li:last-child table').on('DOMNodeInserted',function(){
		var recordRightCheck = $('.record-con ul li:last-child table tr td input:checkbox');
		recordRightDelBut.click(function(){
			recordRightCheck.each(function(index,val){
				if(recordRightCheck.eq(index).prop('checked')){
					recordRightCheck.eq(index).parent().parent('tr').remove();
				}
			})
		})
	})
	
	//合同管理
	var pactTop = $(".pact-box .pact-bot .table-top p span");
	pactTop.each(function(index,val){
		pactTop.eq(index).click(function(){
			for(var i=0;i<pactTop.length;i++){
				pactTop.eq(i).removeClass('psp-active');
			}
			pactTop.eq(index).addClass('psp-active');
		})
	})

	// 经费管理选项卡
	function fundsMove(){
		var fundsLi = $('.funds-box header span');
		var fundsSon =  $('.funds-box').children().not('.funds-box header');
		//判断二级菜单个数
		if(fundsLi.length==0){
			// $('.funds-box').css('display','none');
		}else if(fundsLi.length>=1){
			fundsLi.eq(0).addClass("head-active");
			for(var i=0;i<fundsSon.length;i++){
				if(fundsSon.eq(i).attr('data-attr')==fundsLi.eq(0).attr('data-attr')){
					fundsSon.eq(i).css('display','block');
				}
			}
			fundsLi.each(function(index,val){
				fundsLi.eq(index).click(function(){
					for(var i=0;i<fundsSon.length;i++){
						fundsLi.eq(i).removeClass("head-active");
						fundsSon.eq(i).css('display','none');
						if(fundsSon.eq(i).attr('data-attr')==fundsLi.eq(index).attr('data-attr')){
							fundsSon.eq(i).css('display','block');
						}
					}
					fundsLi.eq(index).addClass("head-active");
				})
			})
		}
	}
	$('.funds-box header').on('DOMNodeInserted',function(){
		fundsMove();
	})
	fundsMove();

	//资产管理选项卡
	function assetMove(){
		var assetLi = $('.asset-box header span');
		var assetSon =  $('.asset-box').children().not('.asset-box header');
		//判断二级菜单个数
		if(assetLi.length==0){
			// $('.asset-box').css('display','none');
		}else if(assetLi.length>=1){
			assetLi.eq(0).addClass("head-active");
			for(var i=0;i<assetSon.length;i++){
				if(assetSon.eq(i).attr('data-attr')==assetLi.eq(0).attr('data-attr')){
					assetSon.eq(i).css('display','block');
				}
			}
			assetLi.each(function(index,val){
				assetLi.eq(index).click(function(){
					for(var i=0;i<assetSon.length;i++){
						assetLi.eq(i).removeClass("head-active");
						assetSon.eq(i).css('display','none');
						if(assetSon.eq(i).attr('data-attr')==assetLi.eq(index).attr('data-attr')){
							assetSon.eq(i).css('display','block');
						}
					}
					assetLi.eq(index).addClass("head-active");
				})
			})
		}
	}
	$('.asset-box header').on('DOMNodeInserted',function(){
		assetMove();
	})
	assetMove();

	//用户管理选项卡
	function userMove(){
		var userLi = $('.user-box header span');
		var userSon =  $('.user-box').children().not('.user-box header');
		// 判断二级菜单个数
		if(userLi.length==0){
			// $('.user-box').hide();
		}else if(userLi.length>=1){
			userLi.eq(0).addClass("head-active");
			for(var i=0;i<userSon.length;i++){
				if(userSon.eq(i).attr('data-attr')==userLi.eq(0).attr('data-attr')){
					userSon.eq(i).css('opacity',1);
					userSon.eq(i).css('zIndex',10);
				}
			}
			userLi.each(function(index,val){
				userLi.eq(index).click(function(){
					for(var i=0;i<userSon.length;i++){
						userLi.eq(i).removeClass("head-active");
						userSon.eq(i).css('opacity',0);
						userSon.eq(i).css('zIndex',0);
						if(userSon.eq(i).attr('data-attr')==userLi.eq(index).attr('data-attr')){
							userSon.eq(i).css('opacity',1);
							userSon.eq(i).css('zIndex',10);
						}
					}
					userLi.eq(index).addClass("head-active");
				})
			})
		}
	}
	$('.user-box header').on('DOMNodeInserted',function(){
		userMove()
	})
	userMove();


	//用户管理-密码重置
	var resetInput = $('.expense-reset .modal-content .reset-con input');
	var resetp = $('.expense-reset .modal-content .reset-con p');
	resetInput.each(function(index,val){
		resetInput.eq(index).click(function(){
			for(var i=0;i<resetInput.length;i++){
				resetp.eq(i).removeClass('p-active');
			}
			resetp.eq(index).addClass('p-active');
		})
	})

	//用户管理-组织架构
	// var orgStair = $('.user-box .organize-con .organize-bot table .organize-stair td:first-child img');
	// var orgSecond = $('.user-box .organize-con .organize-bot table .organize-secondary');
	// orgStair.each(function(index,val){
	// 	var org = 0;
	// 	orgStair.eq(index).click(function(){
	// 		org ++;
	// 		for(var j=0;j<orgSecond.length;j++){
	// 			if(org%2==1){
	// 				orgStair.eq(index).find('img').attr('src','img/user-del.png');
	// 				if(orgSecond.eq(j).attr('data-column')==orgStair.eq(index).attr('data-column')){
	// 					orgSecond.eq(j).show();
	// 				}
	// 			}else{
	// 				orgStair.eq(index).find('img').attr('src','img/user-add.png');
	// 				if(orgSecond.eq(j).attr('data-column')==orgStair.eq(index).attr('data-column')){
	// 					orgSecond.eq(j).hide();
	// 				}
	// 			}
	// 		}
	// 	})
	// })


	//工作台-采购申报表上传文件
	// var purUpload = $('.expense-purchase .tra-box .pur-upload');
	// var purFile = $('.expense-purchase .tra-box .pur-file');
	// purUpload.change(function(){
	// 	purFile.append('<img src="img/tab-del.jpg" alt=""><input type="text">');
	// })
	// purFile.on('DOMNodeInserted',function(){
	// 	var purFileSon = purFile.children('input:last-child');
	// 	var purDel = purFile.children('img');
	// 	var purinput = purFile.children('input');
	// 	purFileSon.val(purUpload.val());
	// 	purDel.each(function(index,val){
	// 		purDel.eq(index).click(function(){
	// 			purDel.eq(index).remove();
	// 			purinput.eq(index).remove();
	// 		})
	// 	})
	// })

	//工作台-信息化工程采购上传文件
	// var infoUpload = $('.expense-information .tra-box .pur-upload');
	// var infoFile = $('.expense-information .tra-box .pur-file');
	// infoUpload.change(function(){
	// 	infoFile.append('<img src="img/tab-del.jpg" alt=""><input type="text">');
	// })
	// infoFile.on('DOMNodeInserted',function(){
	// 	var infoFileSon = infoFile.children('input:last-child');
	// 	var infoDel = infoFile.children('img');
	// 	var infoinput = infoFile.children('input');
	// 	infoFileSon.val(infoUpload.val());
	// 	infoDel.each(function(index,val){
	// 		infoDel.eq(index).click(function(){
	// 			infoDel.eq(index).remove();
	// 			infoinput.eq(index).remove();
	// 		})
	// 	})
	// })

	//工作台-信息化工程采购上传文件
	// var meetUpload = $('.expense-meet .tra-box .pur-upload');
	// var meetFile = $('.expense-meet .tra-box .pur-file');
	// meetUpload.change(function(){
	// 	meetFile.append('<img src="img/tab-del.jpg" alt=""><input type="text">');
	// })
	// meetFile.on('DOMNodeInserted',function(){
	// 	var meetFileSon = meetFile.children('input:last-child');
	// 	var meetDel = meetFile.children('img');
	// 	var meetinput = meetFile.children('input');
	// 	meetFileSon.val(meetUpload.val());
	// 	meetDel.each(function(index,val){
	// 		meetDel.eq(index).click(function(){
	// 			meetDel.eq(index).remove();
	// 			meetinput.eq(index).remove();
	// 		})
	// 	})
	// })

	//工作台-土地-上传文件
	$('.land-upload').change(function(){
		$('.land-papers').val($(this).val());
	})
	$('.lang-crop').click(function(){
		$('.land-papers').val('');
	})

	//工作台-房屋-上传文件
	$('.house-upload').change(function(){
		$('.house-papers').val($(this).val());
	})
	$('.house-crop').click(function(){
		$('.house-papers').val('');
	})

	//工作台-文物和陈列品-上传文件
	$('.relic-upload').change(function(){
		$('.relic-papers').val($(this).val());
	})
	$('.relic-crop').click(function(){
		$('.relic-papers').val('');
	})

	//工作台-车辆-上传文件
	$('.voiture-upload').change(function(){
		$('.voiture-papers').val($(this).val());
	})
	$('.voiture-crop').click(function(){
		$('.voiture-papers').val('');
	})

	//工作台-图书档案-上传文件
	$('.book-upload').change(function(){
		$('.book-papers').val($(this).val());
	})
	$('.book-crop').click(function(){
		$('.book-papers').val('');
	})

	//工作台-家用家具-上传文件
	$('.furniture-upload').change(function(){
		$('.furniture-papers').val($(this).val());
	})
	$('.furniture-crop').click(function(){
		$('.furniture-papers').val('');
	})

	//工作台-专属设备-上传文件
	$('.device-upload').change(function(){
		$('.device-papers').val($(this).val());
	})
	$('.device-crop').click(function(){
		$('.device-papers').val('');
	})

	//工作台-合同申报-上传文件
	$('.contract-upload').change(function(){
		$('.contract-papers').val($(this).val());
	})
	$('.contract-crop').click(function(){
		$('.contract-papers').val('');
	})

	//工作台-指标申请-上传文件
	$('.target-upload').change(function(){
		$('.target-papers').val($(this).val());
	})
	$('.target-crop').click(function(){
		$('.target-papers').val('');
	})

	//综合管理-提交-上传文件
	$('.refer .uploadFile').change(function(){
		$('.refer-papers').val($(this).val());
	})
	$('.refer-crop').click(function(){
		$('.refer-papers').val('');
	})


	//用户管理下拉框树
	var defaultData = [
        {
            text:"Parent1",
            nodes:[
                {
                    text:"father1",
                    nodes:[
                        {
                            text:"child1"
                        },
                        {
                            text:"child2"
                        }
                    ]
                },
                {
                    text:"father2"
                }
            ]
        },
        {
            text:"Parent2",
            nodes:[
                {
                    text:"father3"
                },
                {
                    text:"father4"
                }
            ]
        },
        {
            text:"Parent3"
        }
    ]
    $('#tree-input').focus(function(e){
		$("#tree1").treeview({
	        data:defaultData,
	        color: "#428bca",
	        onNodeSelected:function (e, node) {
	            $('#tree-input').val(node.text);
	            $("#tree1").hide();
	        }
	    })
		$('#tree1').show();
		$(document).click(function(e){
			var treeid = e.target.getAttribute('id');
			if(treeid!='aa'){
	            $("#tree1").hide();
			}
		})
		$('#treeid').click(function(e){
			e.stopPropagation();
		})
	})

	//	新增审核合同
	$(".compactCheck .house-box .PayInfo span").bind("click",function () {
		var index = $(this).index();
		$(this).css("color","#44abf6").siblings().css("color","#000");
		$(".compactCheck .tabContent ol").hide().eq(index).show();
    })
    $(".examine .house-box .PayInfo span").bind("click",function () {
        var index = $(this).index();
        $(this).css("color","#44abf6").siblings().css("color","#000");
        $(".examine .tabContent ol").hide().eq(index).show();
    })

	//综合管理文件上传
	var file1 = document.getElementById("uploadFile");
    var file2 = document.getElementById("uploadFiles");
    // file1.onchange = function () {
		// var files = this.files[0];
		// console.log(files.name);
		// this.nextElementSibling.value = files.name
    // }
    // file2.onchange = function () {
    //     var files = this.files[0];
    //     console.log(files.name);
    //     this.nextElementSibling.value = files.name
    // }
	//综合管理
	// $(".res button").bind("click",function(){
	// 	$(".copyLeader").hide()
	// })
	//复选框读值
	// var res = [],result=[];
	// $(".forwardingDepartment .modal-footer .sure ").bind("click",function () {
 //        res = [];
 //        $(".forwardingDepartment .modal-body ul li input[type='checkbox']:checked").each(function () {
 //            res.push($(this).val())
 //        })
 //        $(".forwardingDepartment .modal-body ul li input[type='checkbox']:checked").prop("checked",false);
 //        $(".forwardingDepartment").modal("hide");
 //        $(".copyLeader").show();
 //        var li = "";
 //        for (var i in res){
 //        	li+= '<div>'+res[i]+'<i>'+"&times;"+'</i>'+'</div>'
	// 	}
	// 	$(".res").html(li);
 //        $(".copyLeader .input-group").html("<div>财务科科长<i>&times;</i></div>");
 //    })
	// $(".Department").on("click","i",function () {
	// 	$(this).parent().remove();
 //    });
	// $(".sures").bind("click",function(){
	// 	result = [];
 //        $(".copyleader .modal-body ul li input[type='checkbox']:checked").each(function () {
 //            result.push($(this).val())
 //        })
 //        $(".copyleader .modal-body ul li input[type='checkbox']:checked").prop("checked",false);
 //        $(".copyleader").modal("hide");
 //        var li = "";
 //        for (var i in result){
 //            li+= '<div>'+result[i]+'<i>'+"&times;"+'</i>'+'</div>'
 //        }
 //        $(".res").html(li);
 //        $(".copyLeader .input-group").html("<div>财务科科长<i>&times;</i></div>");
	// })
	//装备管理选项卡切换
	$('.sendCar-box header').on('DOMNodeInserted',function(){
		$(".equipmentBox .tabBar li").bind("click",function () {
			var index = $(this).index();
			$(this).addClass("current").siblings().removeClass("current");
			$(".equipmentBox .tabContent .content").eq(index).addClass("in").siblings().removeClass("in")
		})
	})
	$(".equipmentBox .tabBar li").bind("click",function () {
		var index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".equipmentBox .tabContent .content").eq(index).addClass("in").siblings().removeClass("in")
	})
	//派车选项卡
	$('.sendCar-box header').on('DOMNodeInserted',function(){
		$(".sendCar-box header span").bind("click",function () {
			var index = $(this).index();
			$(this).addClass("head-active").siblings().removeClass("head-active");
			$(".sendCar-box .tabContent .content").eq(index).addClass("in").siblings().removeClass("in")
	    })
	})
	$(".sendCar-box header span").bind("click",function () {
		var index = $(this).index();
		$(this).addClass("head-active").siblings().removeClass("head-active");
		$(".sendCar-box .tabContent .content").eq(index).addClass("in").siblings().removeClass("in")
    })
	//操作记录图标点击事件
	var flag = false;
	$(".operationRecord").find("img").bind("click",function () {
		if(flag){
			$(this).next().fadeIn(300);
			flag = !flag;
			$(this).attr("src","./img/asset-wire2.jpg")
		}
		else{
            $(this).next().fadeOut(300);
            flag = !flag;
            $(this).attr("src","./img/asset-wire.jpg")
		}
	})
	//派车管理选项卡切换事件
	$('.sendCar-box .tabContent .info .tabTop .rightNav ul li').bind("click",function(){
		var index = $(this).index();
		$(this).addClass("curr").siblings().removeClass("curr");
		$(".sendCar-box .tabContent .info .navContent .tableBox").eq(index).addClass("in").siblings().removeClass("in");
	});
	$('.sendCar-box .tabContent .car .tabTop .rightNav ul li').bind("click",function(){
		var index = $(this).index();
		$(this).addClass("curr").siblings().removeClass("curr");
		$(".sendCar-box .tabContent .car .navContent .tableBox").eq(index).addClass("in").siblings().removeClass("in");
	});
    $('.sendCar-box .tabContent .driver .tabTop .rightNav ul li').bind("click",function(){
        var index = $(this).index();
        $(this).addClass("curr").siblings().removeClass("curr");
        $(".sendCar-box .tabContent .driver .navContent .tableBox").eq(index).addClass("in").siblings().removeClass("in");
    })
	//用户管理-数据字典
	$(".user-box .record-con .tabContent .firNav ol li").bind("click",function(){
		$(this).addClass("curr").siblings().removeClass("curr");
	})
	$('.user-box .record-con .tabContent .firNav-right ol').on('DOMNodeInserted',function(){
		$(".user-box .record-con .tabContent .firNav-right ol li").bind("click",function(){
			$(this).addClass("curr").siblings().removeClass("curr");
		})
	})
	
	// $(".model .modal-body ul li:last-child").bind("click",function(){
	// 	var content = "<li><span class='gray'></span><input type='text' class='form-ctrol'></li>";
	// 	$(this).before(content);
	// 	$(".model .modal-body ul li input").focus();
	// });
	// $(".model .modal-footer .save").bind("click",function(){
	// 	$(".model .modal-body ul li span").removeClass("gray");
	// 	$(".model .modal-body ul li input").css("border","none");
	// 	$(".model .modal-body ul li input").attr("readonly","readonly");
	// })

	//解决模态框两次调用滚动条问题
	$('#aaaa').on('shown.bs.modal',function(){
		$('body').addClass('modal-open');
	})

	//审核-操作记录-选项卡
	function operate(h4,box){
		h4.children('span').on('click',function(){
			var index = $(this).index();
			$(this).addClass('operate-color').siblings().removeClass("operate-color");
			box.eq(index).show().siblings().hide();
		})
		box.eq(1).children('.modal-footer').children('.btn').on('click',function(){
			box.eq(0).show().siblings().hide();
			h4.children('span').eq(0).addClass('operate-color').siblings().removeClass("operate-color");
		})
	}
	//预算管理-指标下达-审核模态框选项卡
	operate($('.checkMessage .modal-title h4'),$('.checkMessage .modal-content .land-box'));
	//派车管理-审核
	$(".tabBox .modal-title p").bind("click",function () {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().next().find(".land-box").find(".content").eq(index).show().siblings().hide();
    })
    $(".tabBox .modal-body .land-box .content:last-child").find(".btn").bind("click",function () {
    	$(this).parent().parent().hide();
        $(this).parent().parent().prev().show();
        $(".tabBox .modal-title p:first-child").addClass("active").siblings().removeClass("active");
    })
	//预算管理-指标下达-详情模态框选项卡
	operate($('.details .modal-title h4'),$('.details .modal-content .land-box'));

	//预算管理-指标申请-审核模态框选项卡
	operate($('.expense-audit h4'),$('.expense-audit .modal-content .land-box'));

	//工作台-新增业务费报销单-审核模态框选项卡
	operate($('.expense-busreim h4'),$('.expense-busreim .modal-content .land-box'));

	//资产管理-审核操作-资产变动-审核模态框选项卡
	operate($('.expense-altera .modal-content h4'),$('.expense-altera .modal-content .land-box'));

	//资产管理-审核操作-资产减少-审核模态框选项卡
	operate($('.expense-reduce .modal-content h4'),$('.expense-reduce .modal-content .land-box'));

	//经费管理-审核操作-业务费报销单-审核模态框选项卡
	operate($('.expense-cost .modal-content h4'),$('.expense-cost .modal-content .land-box'));

	//经费管理-审核操作-差旅费报销单-审核模态框选项卡
	operate($('.expense-trip .modal-content h4'),$('.expense-trip .modal-content .land-box'));

	//采购管理-审核操作-新增业务报销单-审核模态框选项卡
	operate($('.expense-audit .modal-content h4'),$('.expense-audit .modal-content .land-box'));

	//合同管理-合同审核-审核模态框选项卡
	operate($('.compactCheck .modal-content h4'),$('.compactCheck .modal-content .house-box'));

	//资产管理-土地审核-审核模态框选项卡
	operate($('.expense-soil .modal-content h4'),$('.expense-soil .modal-content .land-box'))

	//资产管理-通讯设备审核-审核模态框选项卡
	operate($('.expense-auditing .modal-content h4'),$('.expense-auditing .modal-content .land-box'))

	//资产管理-房屋审核-审核模态框选项卡
	operate($('.house .modal-content h4'),$('.house .modal-content .house-box'));

	//资产管理-图书审核-审核模态框选项卡
	operate($('.book .modal-content h4'),$('.book .modal-content .house-box'));

	//资产管理-家具用具审核-审核模态框选项卡
	operate($('.furniture .modal-content h4'),$('.furniture .modal-content .house-box'));

	//资产管理-车辆审核-审核模态框选项卡
	operate($('.voiture .modal-content h4'),$('.voiture .modal-content .house-box'));

	//资产管理-文物审核-审核模态框选项卡
	operate($('.expense-culture .modal-content h4'),$('.expense-culture .modal-content .house-box'));

	//资产管理-设备审核-审核模态框选项卡
	operate($('.expense-exclusive .modal-content h4'),$('.expense-exclusive .modal-content .house-box'));

	//装备管理-出库单审核-审核模态框选项卡
	operate($('.newOutbreaksCheck .modal-content h4'),$('.newOutbreaksCheck .modal-content .land-box'));

	//综合管理-审核模态框选项卡
	operate($('.auditing .modal-content h4'),$('.auditing .modal-content .land-box'));

	//用户变动-审核模态框选项卡
	operate($('.user-check .modal-content h4'),$('.user-check .modal-content .land-box'));

	//信息变动-审核模态框选项卡
	operate($('.expense-incha .modal-content h4'),$('.expense-incha .modal-content .land-box'));
	//bootstarp-datetime
	$(".datetime").datetimepicker({
		format: 'yyyy-mm-dd',	//日期格式
		language:'zh-CN',	//中文
		minView: "month",	//只显示到月份
		autoclose:true,		//选中关闭
		// todayBtn: true,		//今日按钮
		// clearBtn: true      //清除按钮
	});
	$('.datetime').on('click',function(){
		var that = $(this);
		$('.modal').scroll(function(){
			$('.datetimepicker').css('top',(that.offset().top+35)+'px');
		})
	})
	//月份
	$(".monthtime").datetimepicker({
		format: 'yyyy-mm',	//日期格式
		language:'zh-CN',	//中文
		minView: "month",	//只显示到月份
		autoclose:true,		//选中关闭
		startView:3,
		minView:3,
		// todayBtn: true,		//今日按钮
		// clearBtn: true      //清除按钮
	});
	$('.monthtime').on('click',function(){
		var that = $(this);
		$('.modal').scroll(function(){
			$('.datetimepicker').css('top',(that.offset().top+35)+'px');
		})
	})

	//装备管理datetime
	$('.newEntry .table-striped,.newOutbreaks .table-striped').on('DOMNodeInserted',function(){
		$(".datetime").datetimepicker({
			format: 'yyyy-mm-dd',	//日期格式
			language:'zh-CN',	//中文
			minView: "month",	//只显示到月份
			autoclose:true,		//选中关闭
			// todayBtn: true,		//今日按钮
			// clearBtn: true      //清除按钮
		});
		$('.datetime').on('click',function(){
			var that = $(this);
			$('.modal').scroll(function(){
				$('.datetimepicker').css('top',(that.offset().top+35)+'px');
			})
		})
	})
    //    点击删除审批人
    $(".approval").on("click",".del-name",function () {
        var $this = $(this);
        $this.parent().remove();
    });

    //装备管理-库存盘点
    $('.equipmentBox .tabContent .check-box span').on('click',function(){
    	$(this).addClass('check-span').siblings().removeClass("check-span");
    })

    //合同报销修改
    // var reimBox = $('.expense-pact .modal-content .reim-box');
    // $('#reimChoice').on('change',function(){
    //     var reimChoiceItem = $(this).val();
    // 	reimBox.each(function(index){
    // 		if(reimChoiceItem == "合同报销"){
    // 			reimBox.eq(0).show();
    // 			reimBox.eq(1).hide();
    // 			reimBox.eq(2).hide();
    // 		}else if(reimChoiceItem == "预算报销"){
				// reimBox.eq(1).show();
    // 			reimBox.eq(0).hide();
    // 			reimBox.eq(2).hide();
    // 		}else{
    // 			reimBox.eq(2).show();
    // 			reimBox.eq(0).hide();
    // 			reimBox.eq(1).hide();
    // 		}
    // 	})
    // })

    //统计分析选项卡
	$('.statis-box .statis-con header').children('span').on('click',function(){
		var index = $(this).index();
		$(this).addClass('head-active').siblings().removeClass("head-active");
		$('.statis-box .statis-con .statis-li').eq(index).css({'opacity':1,zIndex:100}).siblings().css({'opacity':0,zIndex:1});
		$('.statis-box .statis-con header').css('opacity',1);
	})

})
    
	function stamp(stampBox){
		stampBox.print({
		    globalStyles: true,
		    mediaPrint: false,
		    stylesheet: null,
		    noPrintSelector: ".modal-title",
		    iframe: true,
		    append: null,
		    prepend: null,
		    manuallyCopyFormValues: true,
		    deferred: $.Deferred()
		});
	}

	// 综合管理转发模态框下拉问题
	$('.forwardingDepartment').on('hidden.bs.modal',function(){
		$('body').addClass('modal-open');
	})
	$('.copyleader').on('hidden.bs.modal',function(){
		$('body').addClass('modal-open');
	})
$(function () {
    var Img = $(".addMember .modal-body .left-navigation .fir-nav li.switch");
    var Img2 = $(".addMember .modal-body .left-navigation .fir-nav .switch1");
    var Img3 = $(".addMember .modal-body .left-navigation .fir-nav .switch2");
    var radio = $(".addMember .modal-body .left-navigation .sec-nav li");
    //图标切换事件
    Img2.on("click",function () {
        var targets = $(this).find(".fir");
        var $this = targets.attr("src");
        if($this == './img/i3.png'){
            targets.attr("src",'./img/i2.png');
            $(".sec-navs").slideDown(300);
        }
        else{
            targets.attr("src",'./img/i3.png');
            $(".sec-navs").slideUp(300);
        }
    })
    Img3.on("click",function () {
        var targets = $(this).find(".sec");
        var $this = targets.attr("src");
        if($this == './img/i3.png'){
            targets.attr("src",'./img/i2.png');
            $(".thir-nav").slideDown(300);
        }
        else{
            targets.attr("src",'./img/i3.png');
            $(".thir-nav").slideUp(300);
        }
    })
    Img.on("click",function () {
        var targets = $(this).find("img");
        var $this = $(this).find("img").attr("src");
        if ($this == "./img/i2.png"){
            targets.attr("src","./img/i3.png");
            targets.siblings(".sec-nav").slideUp(300);
            $(this).siblings().not(".bold").find("img").attr("src","./img/i3.png");
            $(this).siblings().find(".sec-nav").slideUp(300);
        }
        else{
            targets.attr("src","./img/i2.png");
            targets.siblings(".sec-nav").slideDown(300);
            $(this).siblings().not(".bold").find("img").attr("src","./img/i3.png");
            $(this).siblings().find(".sec-nav").slideUp(300);
        }
    });
    // 监听结果内容变化
    // setInterval(function () {
    //     var length = $(".rightResult .data").length;
    //     $(".rightResult .num").html(length);
    // },50);
    //单选按钮点击事件
    radio.on("click",function (e) {
        var $this = $(this);
        //获取所选人员数据
        var data = $this.find(".radio").attr("data-val");
        //所在部门
        var sectionData = $this.parent().parent().find(".section").text();
        var Sibling = $this.siblings().find(".radio");
        $this.find(".radio").addClass("active");
        Sibling.removeClass('active');
        var li = "<li><span class='data'>"+data+"</span><span class='cancel' data-val='"+sectionData+"-"+data+"'> x </span></li>";
        // if(sectionData == "财务室"){
        //     $(".section1").append(li)
        // }
        // else if(sectionData == "警保部"){
        //     $(".section2").html(li)
        // }
        // else if (sectionData == "侦查部"){
        //     $(".section3").html(li)
        // }
        // else if(sectionData == "综合部"){
        //     $(".section4").html(li)
        // }
        //阻止冒泡事件
       stopPagation(e);
    });

    //点击保存按钮
    $(".addMember .modal-footer .save").bind("click",function () {
        $(".addMember").modal('hide');
        var data = $(".rightResult .res .cancel");
        var li = "";
        $.each(data,function (index, val) {
            var datas = val.getAttribute("data-val");
            li += "<div class='chooseMember'>"+datas+"<i data-val='"+datas+"' class='del-name'>&times;</i></div>";
        });
        $(".approval .btn").before(li);
        //选择数据初始化为空
        $(".addMember .sections").empty();
        $(".radio").removeClass("active");
        $(".sec-nav").hide();
        $(".sec-nav").prev().prev().attr("src",'./img/i3.png');
        $(".addMember .modal-body .left-navigation .fir-nav .switch1").find('.fir').attr("src",'./img/i2.png');
        $(".addMember .modal-body .left-navigation .fir-nav .switch2").find('.sec').attr("src",'./img/i2.png');
        // $(".fir-nav img").attr("src","./img/i3.png");
    });
//    点击删除审批人
    $(".approval").on("click",".del-name",function () {
        var $this = $(this);
        $this.parent().remove();
    });
//    添加人员中删除
    $(".rightResult").on("click",".cancel",function () {
        var $this = $(this);
        $this.parent().remove();
        $(".left-navigation .radio").removeClass("active");
    });
//    完整结果保存
//     $(".addProcess .submit").bind("click",function () {
//         var li = "";
//        var data = $(".addProcess .chooseMember");
//        $(".addProcess").modal("hide");
//        // $.each(data,function (index, val) {
//        //     var res =val.getElementsByClassName("del-name")[0].getAttribute("data-val");
//        //     res = res.substr(res.indexOf("-")+1,res.length);
//        //     li += "<div><span class='member'>"+'审批流程'+"</span><span><img src='./img/arrow.jpg'></span></div>";
//        // });
//        // $(".purch-box .use .members .add").parent().before(li);
//     });
    //取消冒泡函数
    function stopPagation(e) {
        if(e && e.stopPropagation()){
            e.stopPropagation(); //非IE
        }
        else{
            //IE浏览器方式取消冒泡
            window.event.cancleBubble = true;
            return false;
        }
    }
});*/