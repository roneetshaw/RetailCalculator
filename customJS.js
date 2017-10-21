$( document ).ready(function() {
	$('#radioBtnBHK a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	$('#radioBtnFlooring a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	$('#radioBtnDoors a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	
	$('#radioBtnWindows a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	$('#radioBtnStructure a').on('click', function(){
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
		calFoundation();
		
		
	})
	
	function calEarthWork()
	{
		var cubic_ft=data.Foundation[0].Earthwork[0].Labour_and_Earth[0].cubic_ft;
		var totalVal=Math.ceil(parseInt($("#landArea").val())*parseInt(cubic_ft));
		var totalVal2=parseInt(totalVal-200);
		$("#FearthWork01").text(totalVal2+" cubic ft");
		var rate = data.Foundation[0].Earthwork[0].Labour_and_Earth[0].rate
	
		$("#FearthWork02").text("@ ₹"+rate+" per unit");
		var tot=totalVal2*rate;
		$("#EarthWorkTotalnnn").text(tot);
		$("#EarthTotal").text("₹ "+tot);
		return tot;
	}
	function calCuringConcrete()
	{
		var cubic_ft=data.Foundation[0].Bed_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Bed_Concrete[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		
		var totBags = totalVal2*cubic_ft;
		// alert(totBags);
		$("#totBags").text(totBags+" Bags @");
		$("#disprate").text("₹ "+rate+" per unit");
		var total=totBags*rate;
		$("#totalprice").text("₹ "+total)
		var cubic_ft=data.Foundation[0].Bed_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Bed_Concrete[0].Labour[0].rate;			
		var labour=totalVal2*cubic_ft;
		$("#labour").text(labour+" cubic ft @");
		$("#rate").text(rate+" per unit");
		var totalLabour=labour*rate;
		$("#totalLabour").text(totalLabour);
		var totalLayer=total+totalLabour;
		$("#totalLayer").text(totalLayer);
		// amt=data.Foundation[0].Cement_Concrete[0].Sand[0].cubic_mt;
		// rate = data.Foundation[0].Cement_Concrete[0].Sand[0].rate
		// total=total + amt*rate;
		// amt=data.Foundation[0].Cement_Concrete[0].Course_Aggregate[0].value;
		// rate = data.Foundation[0].Cement_Concrete[0].Course_Aggregate[0].rate
		// total=total + amt*rate;
		
		// $("#CCcement01").text( );
		return totalLayer;
	}
	function calSSM_Foundation()
	{
		var cubic_ft=data.Foundation[0].SSM_Construction[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].SSM_Construction[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var materialcost=totalVal2*cubic_ft;
		$("#materialcost").text(materialcost+"cubic ft @");
		$("#displayrate").text("₹ "+rate+" per unit");
		totalMaterial=materialcost*rate;
		$("#totalMaterial").text(totalMaterial);
		var cubic_ft=data.Foundation[0].SSM_Construction[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].SSM_Construction[0].Labour[0].rate;
		var labourCost=totalVal2*cubic_ft;
		$("#labourCost").text(materialcost+"cubic ft @");
		$("#displayrate2").text("₹ "+rate+" per unit");
		totalLabourCost=labourCost*rate;
		$("#totalLabourCost").text(totalLabourCost);
		totalCost=totalLabourCost+totalMaterial;
		$("#totalCost").text(totalCost);
		return totalCost;
	}
	function calConcreteFooting()
	{
		var cubic_ft=data.Foundation[0].Footing_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Footing_Concrete[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var totLayMat=totalVal2*cubic_ft;
		$("#totLayMat").text(totLayMat+" cubic ft @");
		$("#drate").text("₹ "+rate+" per unit");
		totLay=totLayMat*rate;
		$("#totLay").text(totLay);
		var cubic_ft=data.Foundation[0].Footing_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Footing_Concrete[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var totLayLabour=totalVal2*cubic_ft;
		$("#totLayLabour").text(totLayLabour+" cubic ft @");
		$("#ratelabour").text("₹ "+rate+" per unit");
		totlabour=totLayLabour*rate;
		$("#totlabour").text(totlabour);
		
		totLayConcrete=totlabour+totLay;
		$("#totLayConcrete").text(totLayConcrete);
		return totLayConcrete;
		
	}
	function calColumnConcrete()
	{
		var cubic_ft=data.Foundation[0].Column_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Column_Concrete[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var colconcrete=totalVal2*cubic_ft;
		$("#colconcrete").text(colconcrete+" cubic ft @");
		$("#colrate").text("₹ "+rate+" per unit");
		totlColMaterial=colconcrete*rate;
		$("#totlColMaterial").text(totlColMaterial);
		var cubic_ft=data.Foundation[0].Column_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Column_Concrete[0].Labour[0].rate;
		var colconcretelab=totalVal2*cubic_ft;
		$("#colconcretelab").text(colconcrete+" cubic ft @");
		$("#colratelabour").text("₹ "+rate+" per unit");
		totlCollabour=colconcrete*rate;
		$("#totlCollabour").text(totlCollabour);
		totColConcrete=totlCollabour+totlColMaterial;
		$("#totColConcrete").text(totColConcrete);
		return totColConcrete;
		
		
	}
	
	function calPlinthConcrete()
	{
		var cubic_ft=data.Foundation[0].Plinth_Beam[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Plinth_Beam[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var PlinthMat=totalVal2*cubic_ft;
		$("#PlinthMat").text(PlinthMat+" cubic ft @");
		$("#Plinthrate").text("₹ "+rate+" per unit");
		totalPlinthMat=PlinthMat*rate;
		$("#totalPlinthMat").text(totalPlinthMat);
		
		var cubic_ft=data.Foundation[0].Plinth_Beam[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Plinth_Beam[0].Labour[0].rate;
		var PlinthLab=totalVal2*cubic_ft;
		$("#PlinthLab").text(PlinthLab+" cubic ft @");
		$("#PlinthrateLab").text("₹ "+rate+" per unit");
		TotPlinthLab=PlinthLab*rate;
		$("#TotPlinthLab").text(TotPlinthLab);
		TotPlinth=TotPlinthLab+totalPlinthMat;
		$("#TotPlinth").text(TotPlinth);
		return TotPlinth;
	}
	function calSteelFooting()
	{
	var Mt=data.SteelFoundation[0].Footing_Concrete[0].Material[0].MT;
	var rate =data.SteelFoundation[0].Footing_Concrete[0].Material[0].rate;
	var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var footMat=totalVal2*Mt;
		$("#footMat").text(footMat+" Metric Tonne @");
		$("#footrate").text("₹ "+rate);
		var totalfootMat=footMat*rate;
		$("#totalfootMat").text(totalfootMat);
		
		var Mt=data.SteelFoundation[0].Footing_Concrete[0].Labour[0].MT;
		var rate =data.SteelFoundation[0].Footing_Concrete[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var SteelLab=totalVal2*Mt;
		$("#SteelLab").text(SteelLab+" Metric Tonne @");
		$("#Steelratelab").text("₹ "+rate);
		var totSteelLab=SteelLab*rate;
		$("#totSteelLab").text(totSteelLab);
		totSteelFoot=totSteelLab+totalfootMat;
		$("#totSteelFoot").text(totSteelFoot);
		return totSteelFoot;
	}
	function calSteelColumn()
	{
		var Mt=data.SteelFoundation[0].Column_Concrete[0].Material[0].MT;
	var rate =data.SteelFoundation[0].Column_Concrete[0].Material[0].rate;
	var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		//alert(totalVal2);
		
		var colSteel=totalVal2*Mt;
		alert(colSteel);
		$("#colSteelMat").text(colSteel+" Metric Tonne @");
		$("#colrateMat").text("₹ "+rate);
		var steelmat=colSteel*rate;
		$("#steelmat").text(steelmat);
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
		var EarthWork =calEarthWork();
		var CuringConcrete =calCuringConcrete();
		var SSM_Foundation=calSSM_Foundation();
		var ConcreteFooting=calConcreteFooting();
		var ColumnConcrete=calColumnConcrete();
		var PlinthConcrete=calPlinthConcrete();
		var SteelFooting=calSteelFooting();
		var SteelColumn=calSteelColumn();
		var totFoundation=EarthWork+CuringConcrete+SSM_Foundation+ConcreteFooting+ColumnConcrete+PlinthConcrete+SteelFooting;
		$("#totFoundation").text(totFoundation);
	}
	//alert(data.Foundation[0].Earthwork[0].Labour_and_Earth[0].cubic_ft)
});
