$( document ).ready(function() {
	$('#radioBtnBHK a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	$('#radioBtnPaint a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	$('#radioBtnDoor a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	$('#radioBtnFloor a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	$("#dwnCity li").on('click',function(){
		$("#dwnText").html($(this).text()+'  '+'<span class="caret"></span></button>');
	})
	$("#dwnMeter li").on('click',function(){
		$("#dwnLand").html($(this).text()+'  '+'<span class="caret"></span></button>');
	})
	$("#dwnFloorUl li").on('click',function(){
		$("#dwnFloortext").html($(this).text()+'  '+'<span class="caret"></span></button>');
	})
	$("#calcost").on('click',function(){
		//alert("start");
		calEarthWork();
	})
	
	function calEarthWork()
	{
		var cubic_ft=data.Foundation[0].Earthwork[0].Labour_and_Earth[0].cubic_ft;
		var totalVal=Math.ceil(parseInt($("#landArea").val())*parseInt(cubic_ft));
		$("#FearthWork01").text(totalVal+" cubic ft");
		var rate = data.Foundation[0].Earthwork[0].Labour_and_Earth[0].rate
		$("#FearthWork02").text(rate+" per unit");
		var tot=totalVal*rate;
		$("#EarthWorkTotalnnn").text(tot);
		$("#EarthTotal").text(tot);
		return tot;
	}
	function calCementConcrete()
	{
		var amt=data.Foundation[0].Cement_Concrete[0].Cement[0].bags;
		var rate = data.Foundation[0].Cement_Concrete[0].Cement[0].rate
		var total=amt*rate;
		amt=data.Foundation[0].Cement_Concrete[0].Sand[0].cubic_mt;
		rate = data.Foundation[0].Cement_Concrete[0].Sand[0].rate
		total=total + amt*rate;
		amt=data.Foundation[0].Cement_Concrete[0].Course_Aggregate[0].value;
		rate = data.Foundation[0].Cement_Concrete[0].Course_Aggregate[0].rate
		total=total + amt*rate;
		
		$("#CCcement01").text( );
		return total;
	}
	function calBrickWork()
	{
		var amt=data.Foundation[0].Brick_Work[0].Cement[0].bags;
		var rate = data.Foundation[0].Brick_Work[0].Cement[0].rate
		var total=amt*rate;
		amt=data.Foundation[0].Brick_Work[0].Sand[0].cubic_mt;
		rate = data.Foundation[0].Brick_Work[0].Sand[0].rate
		total=total + amt*rate;
		amt=data.Foundation[0].Brick_Work[0].Bricks[0].nos;
		rate = data.Foundation[0].Brick_Work[0].Bricks[0].rate
		total=total + amt*rate;
		return total;
	}
	function calDPC()
	{
		var cubic_ft=data.Foundation[0].DPC[0].Horizantal_DPC[0].sqft;
		var rate = data.Foundation[0].DPC[0].Horizantal_DPC[0].rate
		return cubic_ft*rate;
	}
	function calLabour()
	{
		var cubic_ft=data.Foundation[0].Labour[0].Labour_Cost_excl_Earthwork[0].man_days;
		var rate = data.Foundation[0].Labour[0].Labour_Cost_excl_Earthwork[0].rate
		return cubic_ft*rate;
	}
	function calFoundation()
	{
		
	}
	//alert(data.Foundation[0].Earthwork[0].Labour_and_Earth[0].cubic_ft)
});
