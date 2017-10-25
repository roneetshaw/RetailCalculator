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
		calSteel();
		calLayingBase();
		calSuperStructure();
		calSuperStructure_Steel()
		
		
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
		var Mt=data.SteelFoundation[0].Column_Concrete[0].Material[0].cubic_ft;
		//alert(Mt);
		var rate =data.SteelFoundation[0].Column_Concrete[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var colSteel=totalVal2*Mt;
		//alert(colSteel);
		$("#colSteelMat").text(colSteel+" Metric Tonne @");
		$("#colrateMat").text("₹ "+rate);
		var steelmat=colSteel*rate;
		$("#steelmat").text(steelmat);
		
		var Mt=data.SteelFoundation[0].Column_Concrete[0].Labour[0].cubic_mt;
		var rate=data.SteelFoundation[0].Column_Concrete[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var colSteelLab=totalVal2*Mt;
		$("#colSteelLab").text(colSteelLab+" Metric Tonne @");
		$("#rateSteelLab").text("₹ "+rate);
		var totSteelLab=colSteelLab*rate;
		// alert(totSteelLab);
		$("#totSteelLab").text(totSteelLab);
		
		var totSteelColumn=totSteelLab+steelmat;
		$("#totSteelColumn").text(totSteelColumn);
		return totSteelColumn;
	}
	
	function calSteelPlinth()
	{
		var Mt=data.SteelFoundation[0].Plinth_Beam[0].Material[0].MT;
		var rate=data.SteelFoundation[0].Plinth_Beam[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelPlint=totalVal2*Mt;
		var steelPlinth=steelPlint.toFixed(2);
		$("#steelPlinth").text(steelPlinth+" Metric Tonne @");
		$("#ratePlinth").text("₹ "+rate);
		var totStlPlinthMat=Math.ceil(steelPlinth*rate);
		$("#totStlPlinthMat").text(totStlPlinthMat);
		
		var Mt=data.SteelFoundation[0].Plinth_Beam[0].Labour[0].MT;
		var rate=data.SteelFoundation[0].Plinth_Beam[0].Labour[0].rate;
		var steelPlint=totalVal2*Mt;
		var steelPlintlab=steelPlint.toFixed(2);
		$("#steelPlintlab").text(steelPlintlab+" Metric Tonne @");
		$("#steelPlintLabrate").text("₹ "+rate);
		totSteelPlintLab=Math.floor(steelPlintlab*rate);
		$("#totSteelPlintLab").text(totSteelPlintLab);
		
		var totstlplinth=totSteelPlintLab+totStlPlinthMat;
		$("#totstlplinth").text(totstlplinth);
		return totstlplinth;
		
	}
	function calLayingBase()
	{
		var cubic_ft=data.Foundation[0].Laying_Base[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Laying_Base[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var baseMatft=totalVal2*cubic_ft;
		$("#baseMat").text(baseMatft+" cubic ft @");
		$("#baseRate").text(rate+" per unit");
		//alert(baseMatft+" "+rate);
		var totbaseMat=baseMatft*rate;
		$("#totbaseMat").text(totbaseMat);
		
		
		var cubic_ft=data.Foundation[0].Laying_Base[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Laying_Base[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var baseLab=totalVal2*cubic_ft;
		$("#baseLab").text(baseLab+" cubic ft @");
		$("#labrate").text(rate+" per unit");
		var totbaselab=baseLab*rate;
		$("#totbaselab").text(totbaselab);
		
		var totbase=totbaselab+totbaseMat;
		$("#totbase").text(totbase);
		return totbase;
	}
	function calsuperColumn()
	{
		var cubic_ft=data.SuperStructure[0].Column[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Column[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var columnact=totalVal2*cubic_ft;
		$("#columnact").text(columnact+" cubic ft @");
		$("#ratecol").text(rate+" per unit");
		var totcolstruct=columnact*rate;
		$("#totcolstruct").text(totcolstruct);
		
		var cubic_ft=data.SuperStructure[0].Column[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Column[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var columnLabact=totalVal2*cubic_ft;
		$("#columnLabact").text(columnLabact+" cubic ft @");
		$("#columnLabRate").text(rate+" per unit");
		var totcolumnLab=columnLabact*rate;
		$("#totcolumnLab").text(totcolumnLab);
		
		var totSuperColumn=totcolumnLab+totcolstruct;
		$("#totSuperColumn").text(totSuperColumn);
		
		return totSuperColumn;
	}
	
	function calsuperBeam()
	{
		
		var cubic_ft=data.SuperStructure[0].Beam[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Beam[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var beammmat=totalVal2*cubic_ft;
		$("#beammmat").text(beammmat+" cubic ft @");
		$("#beamRate").text(rate+" per unit");
		var totbeamMat=beammmat*rate;
		$("#totbeamMat").text(totbeamMat);
		
		var cubic_ft=data.SuperStructure[0].Beam[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Beam[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var beamlab=totalVal2*cubic_ft;
		$("#beamlab").text(beamlab+" cubic ft @");
		$("#beamRatelab").text(rate+" per unit");
		var totbeamlab=beamlab*rate;
		$("#totbeamlab").text(totbeamlab);
		
		var totSuperBeam=totbeamlab+totbeamMat;
		$("#totSuperBeam").text(totSuperBeam);
	}
	function calSuperSlab()
	{
		var cubic_ft=data.SuperStructure[0].Slab[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Slab[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var SlabcubicMat=totalVal2*cubic_ft;
		$("#SlabcubicMat").text(SlabcubicMat+" cubic ft @");
		$("#SlabRateMat").text(rate+" per unit");
		var totSlabMat=SlabcubicMat+rate;
		$("#totSlabMat").text(totSlabMat);
		
		var cubic_ft=data.SuperStructure[0].Slab[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Slab[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var SlabcubicLab=totalVal2*cubic_ft;
		$("#SlabcubicLab").text(SlabcubicLab+" cubic ft @");
		$("#SlabrateLab").text(rate+" per unit");
		var totSlabLab=SlabcubicLab*rate;
		$("#totSlabLab").text(totSlabLab);
		
		var totSlabprice=+totSlabMat+ +totSlabLab;
		$("#totSlabprice").text(totSlabprice);
		return totSlabprice;
	}
	
	function calSuperLintel()
	{
		var cubic_ft=data.SuperStructure[0].Lintel[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Lintel[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var LintelMat=totalVal2*cubic_ft;
		$("#LintelMat").text(LintelMat+" cubic ft @");
		$("#LintelRateMat").text(rate+" per unit");
		 var totLintelMat=LintelMat*rate;
		 $("#totLintelMat").text(totLintelMat);
		 
		 var cubic_ft=data.SuperStructure[0].Lintel[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Lintel[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var LintelLab=totalVal2*cubic_ft;
		$("#LintelLab").text(LintelLab+" cubic ft @");
		$("#LintelRate").text(rate+" per unit");
		var totLintelLab=LintelLab*rate;
		$("#totLintelLab").text(totLintelLab);
		
		var totSuperLintel=+totLintelLab+ +totLintelMat;
		$("#totSuperLintel").text(totSuperLintel);
		return totSuperLintel;
		
		
	}
	function calSuperChijja()
	{
		var cubic_ft=data.SuperStructure[0].Chijja[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Chijja[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var ChijjaMat=totalVal2*cubic_ft;
		var totChijjaMat=ChijjaMat*rate;
		$("#ChijjaMat").text(ChijjaMat+" cubic ft @");
		$("#ChijjaRate").text(rate+" per unit");
		$("#totChijjaMat").text(totChijjaMat);
		
		var cubic_ft=data.SuperStructure[0].Chijja[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Chijja[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var ChijjaLab=totalVal2*cubic_ft;
		var totChijjaLab=ChijjaLab*rate;
		$("#ChijjaLab").text(ChijjaLab+" cubic ft @");
		$("#ChijjaRateLab").text(rate+" per unit");
		$("#totChijjaLab").text(totChijjaLab);
		
		var totSuperChijja=+totChijjaMat + +totChijjaLab;
		$("#totSuperChijja").text(totSuperChijja);
		
	}
	function calSuperStaircase()
	{
		var cubic_ft=data.SuperStructure[0].Staircase[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Staircase[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var StaircaseMat=totalVal2*cubic_ft;
		var totStaircaseMat=StaircaseMat*rate;
		$("#StaircaseMat").text(StaircaseMat+" cubic ft @");
		$("#StaircaseRate").text(rate+" per unit");
		$("#totStaircaseMat").text(totStaircaseMat);
		
		var cubic_ft=data.SuperStructure[0].Staircase[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Staircase[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var StaircaseLab=totalVal2*cubic_ft;
		var totStaircaseLab=StaircaseLab*rate;
		$("#StaircaseLab").text(StaircaseLab+" cubic ft @");
		$("#StaircaseRateLab").text(rate+" per unit");
		$("#totStaircaseLab").text(totStaircaseLab);
		
		var totSuperStaircase=+totStaircaseMat + +totStaircaseLab;
		$("#totSuperStaircase").text(totSuperStaircase);
		return totSuperStaircase;
	}
	function calSuperStructure_steelColumn()
	{
		var Mt=data.SuperStructure_steel[0].Column[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Column[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelColumnMat=totalVal2*Mt;
		var totsteeelColumnMat=steelColumnMat*rate;
		$("#steelColumnMat").text(steelColumnMat+" Metric Tonne @");
		$("#steelMatRate").text(rate+" per unit");
		$("#totsteeelColumnMat").text(totsteeelColumnMat);
		
		var Mt=data.SuperStructure_steel[0].Column[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Column[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelColumnLabour=totalVal2*Mt;
		var totsteeelColumnLabour=steelColumnLabour*rate;
		//alert(steelColumnLabour+" "+totalVal2+ " "+Mt);
		$("#steelColumnLabour").text(steelColumnLabour+" Metric Tonne @");
		$("#steelLabourRate").text(rate+" per unit");
		$("#totsteeelColumnLabour").text(totsteeelColumnLabour);
		var totSuperStructure_steelColumn=+totsteeelColumnLabour+ +totsteeelColumnMat;
		$("#totSuperStructure_steelColumn").text(totSuperStructure_steelColumn);
		return totSuperStructure_steelColumn;
		
		
	}
	function calSuperStructure_steelBeam()
	{
		var Mt=data.SuperStructure_steel[0].Beam[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Beam[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelBeamMat=totalVal2*Mt;
		var totsteeelBeamMat=steelBeamMat*rate;
		$("#steelBeamMat").text(steelBeamMat+" Metric Tonne @");
		$("#steelMatRateBeam").text(rate+" per unit");
		$("#totsteeelBeamMat").text(totsteeelBeamMat);
		
		var Mt=data.SuperStructure_steel[0].Beam[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Beam[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelBeamLabour=totalVal2*Mt;
		var totsteeelBeamLabour=steelBeamLabour*rate;
		//alert(steelBeamLabour+" "+totalVal2+ " "+Mt);
		$("#steelBeamLabour").text(steelBeamLabour+" Metric Tonne @");
		$("#steelBeamRate").text(rate+" per unit");
		$("#totsteeelBeamLabour").text(totsteeelBeamLabour);
		var totSuperStructure_steelBeam=+totsteeelBeamLabour+ +totsteeelBeamMat;
		$("#totSuperStructure_steelBeam").text(totSuperStructure_steelBeam);
		return totSuperStructure_steelBeam;
		
		
	}
	function calSuperStructure_steelSlab()
	{
		var Mt=data.SuperStructure_steel[0].Slab[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Slab[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelSlabMat=totalVal2*Mt;
		var totsteeelSlabMat=steelSlabMat*rate;
		$("#steelSlabMat").text(steelSlabMat+" Metric Tonne @");
		$("#steelMatRateSlab").text(rate+" per unit");
		$("#totsteeelSlabMat").text(totsteeelSlabMat);
		
		var Mt=data.SuperStructure_steel[0].Slab[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Slab[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelSlabLabour=totalVal2*Mt;
		var totsteeelSlabLabour=steelSlabLabour*rate;
		//alert(steelSlabLabour+" "+totalVal2+ " "+Mt);
		$("#steelSlabLabour").text(steelSlabLabour+" Metric Tonne @");
		$("#steelSlabRate").text(rate+" per unit");
		$("#totsteeelSlabLabour").text(totsteeelSlabLabour);
		var totSuperStructure_steelSlab=+totsteeelSlabLabour+ +totsteeelSlabMat;
		$("#totSuperStructure_steelSlab").text(totSuperStructure_steelSlab);
		return totSuperStructure_steelSlab;
		
		
	}
	function calSuperStructure_steelLintel()
	{
		var Mt=data.SuperStructure_steel[0].Lintel[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Lintel[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelLintelMat=totalVal2*Mt;
		var totsteeelLintelMat=steelLintelMat*rate;
		$("#steelLintelMat").text(steelLintelMat+" Metric Tonne @");
		$("#steelMatRateLintel").text(rate+" per unit");
		$("#totsteeelLintelMat").text(totsteeelLintelMat);
		
		var Mt=data.SuperStructure_steel[0].Lintel[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Lintel[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelLintelLabour=totalVal2*Mt;
		var totsteeelLintelLabour=steelLintelLabour*rate;
		///alert(steelLintelLabour+" "+totalVal2+ " "+Mt);
		$("#steelLintelLabour").text(steelLintelLabour+" Metric Tonne @");
		$("#steelLintelRate").text(rate+" per unit");
		$("#totsteeelLintelLabour").text(totsteeelLintelLabour);
		var totSuperStructure_steelLintel=+totsteeelLintelLabour+ +totsteeelLintelMat;
		$("#totSuperStructure_steelLintel").text(totSuperStructure_steelLintel);
		return totSuperStructure_steelLintel;
		//335 changed value.
		
	}
	function calSuperStructure_steelChijja()
	{
		var Mt=data.SuperStructure_steel[0].Chijja[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Chijja[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelChijjaMat=totalVal2*Mt;
		var totsteeelChijjaMat=steelChijjaMat*rate;
		$("#steelChijjaMat").text(steelChijjaMat+" Metric Tonne @");
		$("#steelMatRateChijja").text(rate+" per unit");
		$("#totsteeelChijjaMat").text(totsteeelChijjaMat);
		
		var Mt=data.SuperStructure_steel[0].Chijja[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Chijja[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelChijjaLabour=totalVal2*Mt;
		var totsteeelChijjaLabour=steelChijjaLabour*rate;
		$("#steelChijjaLabour").text(steelChijjaLabour+" Metric Tonne @");
		$("#steelLabourRateChijja").text(rate+" per unit");
		$("#totsteeelChijjaLabour").text(totsteeelChijjaLabour);
		//351 changed value.
		var totSuperStructure_steelChijja=+totsteeelChijjaLabour+ +totsteeelChijjaMat;
		$("#totSuperStructure_steelChijja").text(totSuperStructure_steelChijja);
	}
	function calSuperStructure_steelStaircase()
	{
		var Mt=data.SuperStructure_steel[0].Staircase[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Staircase[0].Material[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelStaircaseMat=totalVal2*Mt;
		var totsteeelStaircaseMat=steelStaircaseMat*rate;
		$("#steelStaircaseMat").text(steelStaircaseMat+" Metric Tonne @");
		$("#steelMatRateStaircase").text(rate+" per unit");
		$("#totsteeelStaircaseMat").text(totsteeelStaircaseMat);
		
		var Mt=data.SuperStructure_steel[0].Staircase[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Staircase[0].Labour[0].rate;
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelStaircaseLabour=totalVal2*Mt;
		var totsteeelStaircaseLabour=steelStaircaseLabour*rate;
		$("#steelStaircaseLabour").text(steelStaircaseLabour+" Metric Tonne @");
		$("#steelLabourRateStaircase").text(rate+" per unit");
		$("#totsteeelStaircaseLabour").text(totsteeelStaircaseLabour);
		//351 changed value.
		var totSuperStructure_steelStaircase=+totsteeelStaircaseLabour+ +totsteeelStaircaseMat;
		$("#totSuperStructure_steelStaircase").text(totSuperStructure_steelStaircase);
	}
	function calSuperStructureGranite_slab()
	{
		var Mt=data.SuperStructure[0].Granite_slab[0].Material[0].sq_ft;
		var rate = data.SuperStructure[0].Granite_slab[0].Material[0].rate;
		alert(Mt+" "+rate);
		var totalVal=(parseInt($("#landArea").val()));
		var totalVal2=(parseInt(totalVal-200));
		var steelGranite_slabMat=totalVal2*Mt;
		var totsteeelGranite_slabMat=steelGranite_slabMat*rate;
		$("#steelGranite_slabMat").text(steelGranite_slabMat+" Metric Tonne @");
		$("#steelMatRateGranite_slab").text(rate+" per unit");
		$("#totsteeelGranite_slab").text(totsteeelGranite_slabMat);
		$("#totsteeelGranite_slabMat").text(totsteeelGranite_slabMat);
		
		
	}
	
	
	
	// function calBrickWork()
	// {
		// var amt=data.Foundation[0].Brick_Work[0].Cement[0].bags;
		// var rate = data.Foundation[0].Brick_Work[0].Cement[0].rate
		// var total=amt*rate;
		// amt=data.Foundation[0].Brick_Work[0].Sand[0].cubic_mt;
		// rate = data.Foundation[0].Brick_Work[0].Sand[0].rate
		// total=total + amt*rate;
		// amt=data.Foundation[0].Brick_Work[0].Bricks[0].nos;
		// rate = data.Foundation[0].Brick_Work[0].Bricks[0].rate
		// total=total + amt*rate;
		// return total;
	// }
	// function calDPC()
	// {
		// var cubic_ft=data.Foundation[0].DPC[0].Horizantal_DPC[0].sqft;
		// var rate = data.Foundation[0].DPC[0].Horizantal_DPC[0].rate
		// return cubic_ft*rate;
	// }
	// function calLabour()
	// {
		// var cubic_ft=data.Foundation[0].Labour[0].Labour_Cost_excl_Earthwork[0].man_days;
		// var rate = data.Foundation[0].Labour[0].Labour_Cost_excl_Earthwork[0].rate
		// return cubic_ft*rate;
	// }
	function calFoundation()
	{
		var EarthWork =calEarthWork();
		var CuringConcrete =calCuringConcrete();
		var SSM_Foundation=calSSM_Foundation();
		var ConcreteFooting=calConcreteFooting();
		var ColumnConcrete=calColumnConcrete();
		var PlinthConcrete=calPlinthConcrete();
		// var SteelFooting=calSteelFooting();
		// var SteelColumn=calSteelColumn();
		var totFoundation=EarthWork+CuringConcrete+SSM_Foundation+ConcreteFooting+ColumnConcrete+PlinthConcrete;
		$("#totFoundation").text(totFoundation);
	}
	function calSteel()
	{
		var SteelFooting=calSteelFooting();
		var SteelColumn=calSteelColumn();
		calSteelPlinth();
	}
	function calSuperStructure()
	{
		calsuperColumn();
		calsuperBeam();
		calSuperSlab();
		calSuperLintel();
		calSuperChijja();
		calSuperStaircase();
		calSuperStructureGranite_slab();
	}
	function calSuperStructure_Steel()
	{
		calSuperStructure_steelColumn();
		calSuperStructure_steelBeam();
		calSuperStructure_steelSlab();
		calSuperStructure_steelLintel();
		calSuperStructure_steelChijja();
		calSuperStructure_steelStaircase();
		
	}
	
	
	//alert(data.Foundation[0].Earthwork[0].Labour_and_Earth[0].cubic_ft)
});
