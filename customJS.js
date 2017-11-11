$( window ).load(function() {
  // alert("loaded")
   $("#dwnFloorUl li:nth-child(1)").click();
   $("#dwnCity li:nth-child(1)").click();
   $("#landAreatext").val("1200");
   $("#calcost").click();
});

$( document ).ready(function() {
	$('.panel').on('hidden.bs.collapse', function (e) {
		$(this).find(".f_close").show();
		$(this).find(".f_open").hide();
	})
	$('.panel').on('shown.bs.collapse', function (e) {
		$(this).find(".f_close").hide();
		$(this).find(".f_open").show();
	})
	
	$('#siteArea').attr("checked", "checked");
	$("input[name='optradio']").click(function() {
		$("#siteLabel").text($(this).parent().text().trim())
		var radioVal=$(this).val();
		if(radioVal==1)
		{
			$("#landTextBox").show();
			$("#dwnSiteDimension").hide();
			$("#dwnSqFT").hide();
		}
		else if(radioVal == 2)
		{
			$("#landTextBox").hide();
			$("#dwnSiteDimension").show();
			$("#dwnSqFT").hide();
		}
		else
		{
			$("#landTextBox").hide();
			$("#dwnSiteDimension").hide();
			$("#dwnSqFT").show();
		}
	});

	$('#radioBtnBHK a').on('click', function(){
    var sel = $(this).data('title');
		var tog = $(this).data('toggle');
		$('#'+tog).prop('value', sel);
		
		$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	
	$('#radioBtnHouse a').on('click', function(){
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
		$("#dwnText").val($(this).text().trim());
	})
	$( function() {
    var availableTags = [
     // "Aalada Mara Road ",
// "Aavalahal ",
// "Abbigere",
"Adugodi",
"AECS Layout ",
"Akshayanagar",
"Amrutha Hal ",
"Anagalapura",
"Ananth Nagar ",
"Andrahal",
"Anekal ",
"Anjanapura",
"Annapurneshwari Nagar",
"Arasanakunte",
"Architects in Bangalore",
"Arekere",
"Ashirvad Colony",
"Ashok Nagar",
"Attibele Anekal Road",
"Attibele",
"Attiguppe",
"Austin Town",
"Avenue Road ",
"Azad Nagar ",
"Babusa Palya ",
"Bagalakunte",
"Bagalur  ",
"Bagalur Road ",
"Bagaluru",
"Bagepal  ",
"Baiyyappanahal",
"Balagere Balagere",
"Balepet Balepet",
"Ballur Ballur",
"Banashankari 3rd Street",
"Banashankari ",
"Banasvadi",
"Banaswadi ",
"Bangalore Central ",
"Bangalore East",
"Bangalore North ",
"Bangalore South ",
"Bangalore West",
"Bannerghatta ",
"Bannerghatta Jigani",
"Bannerghatta Road ",
"Bapuji Nagar",
"Basapura ",
"Basavanagar ",
"Basavanagudi",
"Basavanna Nagar",
"Basaveshwara Nagar",
"Battarahal  ",
"Begur Begur",
"Belatur",
"Bellandur",
"Bellary Road",
"Bel Road ",
"BEML  Layout ",
"BEML Layout",
"Bengaluru ",
"Bennigana Hal ",
"Benson Town",
"Bhaktharahal",
"Bhoganhal",
"Bhoopasandra",
"Bhovi Palya",
"Bhuvaneshwari Nagar",
"Bidadi",
"Bidrahal",
"Bikasipura",
"Bikkanahal",
"Bilekahal",
"Bileshivale",
"Binny Pete",
"B Narayanapura ",
"Bommanahal  ",
"Bommasandra ",
"Boyalahal  ",
"Brigade Road ",
"Brookefield ",
"Btm layout",
"Budigere Road ",
"Budihal",
"Byatarayanapura",
"Byrathi ",
"Cambridge  Layout ",
"Carmelaram ",
"Chadalapura",
"Chamarajendra Nagar",
"Chamarajpet",
"Chamundi Nagar ",
"Chandapura ",
"Chandra Layout ",
"Chansandra ",
"Chatram Road ",
"Chelekare",
"Chickpet",
"Chikbanavara",
"Chikkaballapura",
"Chikkaballapura Road",
"Chikkaballapur",
"Chikkaballapur Road",
"Chikkabasavanapura",
"Chikkabellandur",
"Chikkabidarakallu ",
"Chikkagubbi ",
"Chikkakannal ",
"Chikkalasandra ",
"Chikkanahal",
"Chikkathoguru",
"Chikka Tirupathi ",
"Chikka Tirupathi Road",
"Chinnapa Garden ",
"Chinnapanna Hal  ",
"Chokkanahal  ",
"Cholanayakanahal  ",
"Choodasandra ",
"Church Street ",
"Commercial Street ",
"Cooke Town",
"Cox Town ",
"CQAL Layout",
"Craig Park Layout ",
"Crescent Road ",
"Cunningham road ",
"CV Raman Nagar ",
"Dabaspete",
"Dasarahal ",
"Dasarahal  Main Road",
"Dayananda Nagar ",
"Defence Colony ",
"Devanahal  ",
"Devanahal  Road ",
"Devarachikkanahal ",
"Devasthanagalu ",
"Devinagar ",
"Dickenson Road",
"Doddaballapur",
"Doddaballapur Road",
"Dodda Banasvadi ",
"Doddabele ",
"Doddabommasandra ",
"Doddakallasandra",
"Doddakammanahal",
"Doddakannal  ",
"Doddamaval  ",
"Doddathoguru ",
"Doddenahal  ",
"Doddenakundi ",
"Dodsworth Layout ",
"Dollars Colony ",
"Domlur ",
"Dommasandra ",
"Donnenahal ",
"Dooravani Nagar ",
"Ejipura",
"Electronic City ",
"Electronic City Phase 2",
"Electronic City Phase 1",
"Essel Gardens ",
"Frazer Town ",
"Ganapathihal  ",
"Gandhi Nagar ",
"Ganga Nagar ",
"Garden Layout ",
"Garudachar Palya",
"Garvebhavi Palya ",
"Gattahal ",
"Gauribidanur",
"Gavipuram",
"Girinagar ",
"GM Palya ",
"Gollahal  ",
"Gottigere",
"Gunjur ",
"Gunjur Mugalur Road",
"Guttahal  Guttahal",
"Hal Hal",
"HAL Layout ",
"Hancharahal  ",
"Hanumantha Nagar ",
"Hanumanthanagar ",
"Haragadde ",
"Haralur Road ",
"Harlur ",
"Harohal",
"Haudin Road ",
"Hbr layout",
"Hebbal ",
"Hegde Nagar ",
"Hennur ",
"Hennur Road ",
"Hesaraghatta ",
"Hombegowda Nagar ",
"Hongasandra ",
"Hoodi ",
"Horamavu Agara ",
"Horamavu ",
"Hosakerehal",
"Hosapalaya",
"Hosa Road ",
"Hoskote ",
"Hosur Road ",
// "House Architects ",
"HRBR Layout ",
"Hsr layout ",
"HSR Layout Sector 1",
"Hullahal  ",
"Hulimavu",
"Huskur ",
"Huttanahal ",
"Immadihal  ",
"Infantry Road ",
"International Airport",
"ISRO Layout ",
"ITPL ",
"IVC Road  ",
"Jagadish Nagar ",
"Jagajeevanram Nagar",
"Jakkasandra ",
"Jakkuru ",
"Jakkuru Layout  ",
"Jalahal  Cross ",
"Jalahal  East  ",
"Jalahal  ",
"Jalahal  West",
"Jangamakote ",
"Jayamahal Road ",
"Jayanagar ",
"Jeevanbheema Nagar",
"Jeevan Bheema Nagar",
"Jigani",
"Jnana Ganga Nagar",
"JP nagar ",
"JP Nagar Phase 1 2 3",
"JP Nagar Phase 6 ",
"JP Nagar Phase 9 ",
"Kacharakanahal  ",
"Kadabagere",
"Kadubeesanahal ",
"Kadugodi ",
"Kadugondanahal ",
"Kadusonnappanahal",
"Kaggadasapura ",
"Kagga pura ",
"Kalasipalayam",
"Kalena Agrahara ",
"Kalkere ",
"Kallumantapa ",
"Kalyan Nagar",
"Kamaksipalya ",
"Kamala Nagar ",
"Kammanahal  ",
"Kammasandra Agrahar",
"Kammasandra",
"Kanaka Nagar ",
"Kanakapura",
"Kanakapura road ",
"Kannamangala",
"Kartik Nagar",
"Karuna Nagar",
"Kasavanahal ",
"Kasturba Road",
"Kasturi Nagar",
"Kathriguppe",
"Kattigenahal  ",
"Kaval Byrasandra",
"K Channasandra Malu",
"Kempapura ",
"Kempegowda Nagar ",
"Kempe Gowda Road",
"Kengeri ",
"Kengeri Satel te To",
"Kithiganur",
"Kodathi",
"Kodichikkanahal ",
"Kodigehal ",
"Kodihal ",
"Kogilu ",
"Kolar",
"Kolar Road",
"Kommaghatta ",
"Konanakunte ",
"Koppa ",
"Koralur",
"Koramangala ",
"Kothanoor ",
"Kothanur ",
"Koti Hosahal ",
"Krishnaraja Puram ",
"K R Puram  ",
"KR puram ",
"Kudlu Gate ",
"Kudlu ",
"Kumara Krupa Road K",
"Kumaraswamy Layout",
"Kumbalgodu ",
"Kundalahal  ",
"Kunigal Road ",
"Kuthaganahal ",
"Lady Curzon Road ",
"Laggere ",
"Lake City ",
"Lakshmamma Layout ",
"lal bagh",
"Langford Road ",
"Langford Town ",
"Lavelle Road ",
"LB Shastri Nagar ",
"Madhava Nagar ",
"Madivala ",
"Magadi Road ",
"Magrath Road ",
"Mahadevapura ",
"Mahalakshmi Layout",
"Mahalakshmipuram",
"Majestic ",
"Mallathahal  ",
"Malleshpalya ",
"Malleshwaram",
"Marathahal  ",
"Margondanahal  ",
"Maruthi Nagar",
"Maruthi Sevanagar ",
"Medihal  ",
"Meenakunte",
"MG Road",
"Mico Layout ",
"Millers Road ",
"Mission Road",
"MS Palya",
"Munireddy Layout",
"Munireddypalya ",
"Munnekollal ",
"Murugeshpalya  ",
"Museum Road ",
"Mysore Road ",
"Nagadevanahal  ",
"Nagarathpet ",
"Nagarbhavi Circle",
"Nagarbhavi",
"Nagasandra ",
"Nagashetty Hal  ",
"Nagavara",
"Nagondanahal",
"Nallurhal ",
"Nandi  Hills",
"Nandini Layout ",
"Nanjappa Garden",
"Narasapura ",
"Nayanda Hal ",
"Neeladri Nagar",
"Neelasandra ",
"Nehru Nagar",
"Nelamangala ",
"New BEL Road",
"ngadheeranahal",
"ngarajapuram ",
"Nobo Nagar ",
"NRI Layout",
"Old Airport Road ",
"OMBR Layout ",
"Outer Ring Road ",
"Padmanabhanagar ",
"Padmanabha Nagar ",
"Pai Layout",
"Palace Road ",
"Panathur ",
"Panduranga Nagar ",
"Pattandur Agrahara",
"Peenya Peenya",
"Prashanth Naga",
"Race Course Road",
"Ragavendra Nagar",
"Raghavendra Colony",
"Rajaji Nagar ",
"Rajanukunte ",
"Rajarajeshwari nagar",
"Raj Bhavan Road ",
"Rajiv Gandhi Nagar",
"Rajpet ",
"Ramagondanahal  ",
"Ramamurthy Nagar ",
"Rayasandra ",
"Residency Road Residency",
// "Residential Architects",
"Rest House Road",
"Richard's Park ",
"Richards Town ",
"Richmond Town ",
"RK Hegde Nagar ",
"RMV 2nd Stage ",
"RMV Extension",
"RMV ",
"Roopena Agrahara",
"RT Nagar ",
"Sadashiva Nagar",
"Sadashivanagar",
"Sadduguntepalya",
"Sahakara Nagar",
"Sampangi Rama Nagar",
"Sampangiram",
"Sampigehal",
"Sanjay Nagar",
"Sankey Road ",
"Sarjapura",
"Sarjapur Attibele Road",
"Sarjapur Road ",
"Sarjapur",
"Sathanur",
"Seegehal  ",
"Seenappa Layout",
"Seshadripuram ",
"Seshadri Road ",
"Shankarapura ",
"Shanthala Nagar ",
"Shanthi Nagar",
"Shanthi Pura",
"Shanti Nagar",
"Shettihal",
"Shigehal",
"Shivajinagar",
"Shivaji Nagar",
"Siddapura",
"Sidlaghatta",
"Silk Board",
"Silver Springs Layo",
"Singanahal",
"Singasandra",
"S Medihal",
"Solur ",
"Somashetti Hal ",
"Sompura ",
"Sonnenahal",
"Soukya Road ",
"Soundarya Layout ",
"Srinagar ",
"Srinivasa Nagar ",
"Srirampuram",
"Srirampura ",
"St. Mark's Road ",
"St. Thomas Town ",
"St Johns Road",
"Subramanyapura ",
"Sudhama Nagar ",
"Sunkadakatte ",
"Suryanagar ",
"Talaghattapura",
"Tavarekere",
"TC Palya",
"T Dasarahal  ",
"Teachers Colony ",
"Thanisandra",
"Tharabal",
"Tharabanahal",
"Thavarekere",
"Thippasandra",
"Thubarahal",
"Thurahal",
"Tilak Nagar ",
"Tippenahal",
"Tumkur Road ",
"Ullal ",
"Ulsoor ",
"Uttarahal  Main Road",
"Uttarahal ",
"Varthur Road",
"Varthur",
"Vasanthapura",
"Vasanth Nagar ",
"Vehlo  ",
"Venkatagiri Kote ",
"Venkatapura ",
"Venkateshpuram ",
"Victoria Layout ",
"Vidyaranyapura",
"Vignana Nagar",
"Vijay bank layout",
"Vijay Nagar",
"Vijaypura ",
"Vimanapura ",
"Vinayaka Layout ",
"Virupakshapura",
"Vishweshwaraiah Lay",
"Vittal Mallya Road",
"Vittal Nagar ",
"Viveka Nagar",
"Vivek Nagar ",
"VV Puram ",
"Vya kaval",
"Weavers Colony ",
"Wheeler Road ",
"Whitefield ",
"Wil ams Town ",
"Wilson Garden ",
"Wind Tunnel Road",
"Yelachena Hal ",
"Yelahanka New Town",
"Yelahanka",
"Yemalur ",
"Yeshwanthpur",
"Wil ams Town ",
"Wilson Garden ",
"Wind Tunnel Road ",
"Yelachena Hal ",
"Yelahanka New Town",
"Yelahanka ",
"Yemalur ",
"Yeshwanthpur"

    ];
    $("#dwnText").autocomplete({
      source: availableTags
    }).autocomplete('widget').removeClass('ui-corner-all');
	} );
	$("#dwnMeter li").on('click',function(){
		$("#dwnLand").html($(this).text()+'  '+'<span class="caret"></span></button>');
	})
	$("#dwnFloorUl li").on('click',function(){
		$("#dwnFloortext").html($(this).text()+'  '+'<span class="caret"></span></button>');
		$("#floorDropdwnval").val($(this).find("a").attr("value").trim());
	})
	$("#dwnSiteDimUl li").on('click',function(){
		$("#siteDimText").html($(this).text()+'  '+'<span class="caret"></span></button>');
		$("#landAreatext").val($(this).find("a").attr("value").trim());
	})
	$("#dwnsqFtUl li").on('click',function(){
		$("#sitesqftText").html($(this).text()+'  '+'<span class="caret"></span></button>');
		$("#landAreatext").val($(this).find("a").attr("value").trim());
	})
	
	$("#calcost").on('click',function(){
		
		var textVal=parseInt($("#landAreatext").val());
		var totalVal1=parseInt(textVal-(textVal*0.20));
		if($("#floorDropdwnval").val().trim() == "0")
			alert("Please select Floors")
		else
		{
			$("#landArea").val(parseInt($("#floorDropdwnval").val().trim())*totalVal1);
			mainHouse_Cost();
		}
	})
	
	
	function calEarthWork()
	{
		var cubic_ft=data.Foundation[0].Earthwork[0].Labour_and_Earth[0].cubic_ft;
		var totalVal2=(0.8*(parseInt($("#landAreatext").val()))*cubic_ft).toFixed(2);
		$("#FearthWork01").text(totalVal2+" cubic ft");
		var rate = data.Foundation[0].Earthwork[0].Labour_and_Earth[0].rate
		$("#FearthWork02").text("@ ₹"+rate+" per cubic ft");
		var tot=Math.ceil(totalVal2*rate);
		$("#EarthWorkTotalnnn").text(tot.toLocaleString('en-IN'));
		$("#EarthTotal").text("₹ "+tot.toLocaleString('en-IN'));
		return tot;
	}
	function calCuringConcrete()
	{
		var cubic_ft=data.Foundation[0].Bed_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Bed_Concrete[0].Material[0].rate;
		var totalVal2=(0.8*(parseInt($("#landAreatext").val()))).toFixed(2);;
		//var totalVal2=(parseInt(totalVal-200));
		
		var totBags =Math.ceil(totalVal2*cubic_ft);
		// //alert(totBags);
		$("#totBags").text(totBags+" Bags @");
		$("#disprate").text("₹ "+rate+" per Bags");
		var total=totBags*rate;
		$("#totalprice").text("₹ "+total.toLocaleString('en-IN'))
		var cubic_ft=data.Foundation[0].Bed_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Bed_Concrete[0].Labour[0].rate;			
		var labour=Math.ceil(totalVal2*cubic_ft);
		$("#labour").text(labour+" cubic ft @");
		$("#rate").text(rate+" per cubic ft");
		var totalLabour=labour*rate;
		$("#totalLabour").text(totalLabour.toLocaleString('en-IN'));
		var totalLayer=total+totalLabour;
		$("#totalLayer").text(totalLayer.toLocaleString('en-IN'));
		return totalLayer;
	}
	function calSSM_Foundation()
	{
		var cubic_ft=data.Foundation[0].SSM_Construction[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].SSM_Construction[0].Material[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val())).toFixed(2);
		//var totalVal2=(parseInt(totalVal-200));
		var materialcost=totalVal2*cubic_ft;
		$("#materialcost").text(materialcost+"cubic ft @");
		$("#displayrate").text("₹ "+rate+" per cubic ft");
		totalMaterial=materialcost*rate;
		$("#totalMaterial").text(totalMaterial.toLocaleString('en-IN'));
		var cubic_ft=data.Foundation[0].SSM_Construction[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].SSM_Construction[0].Labour[0].rate;
		var labourCost=totalVal2*cubic_ft;
		$("#labourCost").text(materialcost+"cubic ft @");
		$("#displayrate2").text("₹ "+rate+" per cubic ft");
		totalLabourCost=labourCost*rate;
		$("#totalLabourCost").text(totalLabourCost.toLocaleString('en-IN'));
		totalCost=totalLabourCost+totalMaterial;
		$("#totalCost").text(totalCost.toLocaleString('en-IN'));
		return totalCost;
	}
	function calConcreteFooting()
	{
		var cubic_ft=data.Foundation[0].Footing_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Footing_Concrete[0].Material[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val())).toFixed(2);
		//var totalVal2=(parseInt(totalVal-200));
		var totLayMat=totalVal2*cubic_ft;
		$("#totLayMat").text(totLayMat+" cubic ft @");
		$("#drate").text("₹ "+rate+" per cubic ft");
		totLay=totLayMat*rate;
		$("#totLay").text(totLay.toLocaleString('en-IN'));
		var cubic_ft=data.Foundation[0].Footing_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Footing_Concrete[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totLayLabour=totalVal2*cubic_ft;
		$("#totLayLabour").text(totLayLabour+" cubic ft @");
		$("#ratelabour").text("₹ "+rate+" per cubic ft");
		totlabour=totLayLabour*rate;
		$("#totlabour").text(totlabour.toLocaleString('en-IN'));
		
		totLayConcrete=totlabour+totLay;
		$("#totLayConcrete").text(totLayConcrete.toLocaleString('en-IN'));
		return totLayConcrete;
		
	}
	function calColumnConcrete()
	{
		var cubic_ft=data.Foundation[0].Column_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Column_Concrete[0].Material[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val())).toFixed(2);
		//var totalVal2=(parseInt(totalVal-200));
		var colconcrete=Math.ceil(totalVal2*cubic_ft);
		$("#colconcrete").text(colconcrete+" cubic ft @");
		$("#colrate").text("₹ "+rate+" per cubic ft");
		totlColMaterial=colconcrete*rate;
		$("#totlColMaterial").text(totlColMaterial.toLocaleString('en-IN'));
		var cubic_ft=data.Foundation[0].Column_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Column_Concrete[0].Labour[0].rate;
		var colconcretelab=Math.ceil(totalVal2*cubic_ft);
		$("#colconcretelab").text(colconcrete+" cubic ft @");
		$("#colratelabour").text("₹ "+rate+" per cubic ft");
		totlCollabour=colconcrete*rate;
		$("#totlCollabour").text(totlCollabour.toLocaleString('en-IN'));
		totColConcrete=totlCollabour+totlColMaterial;
		$("#totColConcrete").text(totColConcrete.toLocaleString('en-IN'));
		return totColConcrete;
		
		
	}
	
	function calPlinthConcrete()
	{
		var cubic_ft=data.Foundation[0].Plinth_Beam[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Plinth_Beam[0].Material[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var PlinthMat=(totalVal2*cubic_ft).toFixed(2);
		$("#PlinthMat").text(PlinthMat+" cubic ft @");
		$("#Plinthrate").text("₹ "+rate+" per cubic ft");
		totalPlinthMat=Math.ceil(PlinthMat*rate);
		$("#totalPlinthMat").text(totalPlinthMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.Foundation[0].Plinth_Beam[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Plinth_Beam[0].Labour[0].rate;
		var PlinthLab=(totalVal2*cubic_ft).toFixed(2);
		$("#PlinthLab").text(PlinthLab+" cubic ft @");
		$("#PlinthrateLab").text("₹ "+rate+" per cubic ft");
		TotPlinthLab=Math.ceil(PlinthLab*rate);
		$("#TotPlinthLab").text(TotPlinthLab.toLocaleString('en-IN'));
		TotPlinth=TotPlinthLab+totalPlinthMat;
		$("#TotPlinth").text(TotPlinth.toLocaleString('en-IN'));
		return TotPlinth;
	}
	function calSteelFooting()
	{
		var Mt=data.SteelFoundation[0].Footing_Concrete[0].Material[0].MT;
		var rate =data.SteelFoundation[0].Footing_Concrete[0].Material[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal=totalVal2*Mt;
		var footMat=totalVal.toFixed(2);
		$("#footMat").text(footMat+" Metric Tonne @");
		$("#footrate").text("₹ "+rate+" per Metric Tonne");
		var totalfootMat=footMat*rate;
		$("#totalfootMat").text(totalfootMat.toLocaleString('en-IN'));
		
		var Mt=data.SteelFoundation[0].Footing_Concrete[0].Labour[0].MT;
		var rate =data.SteelFoundation[0].Footing_Concrete[0].Labour[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val()));
		var totalVal=totalVal2*Mt;
		var SteelLab=totalVal.toFixed(2);
		
		$("#SteelLab").text(SteelLab+" Metric Tonne @");
		$("#Steelratelab").text("₹ "+rate+" per Metric Tonne");
		var totSteelLab1=SteelLab*rate;
		$("#totSteelLab1").text(totSteelLab1.toLocaleString('en-IN'));
		totSteelFoot=totSteelLab1+totalfootMat;
		$("#totSteelFoot").text(totSteelFoot.toLocaleString('en-IN'));
		return totSteelFoot;
	}
	function calSteelColumn()
	{
		var Mt=data.SteelFoundation[0].Column_Concrete[0].Material[0].cubic_ft;
		////alert(Mt);
		var rate =data.SteelFoundation[0].Column_Concrete[0].Material[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*Mt;
		var colSteel=totalVal.toFixed(2);
		////alert(colSteel);
		$("#colSteelMat").text(colSteel+" Metric Tonne @");
		$("#colrateMat").text("₹ "+rate+" per Metric Tonne ");
		var steelmat=colSteel*rate;
		$("#steelmat").text(steelmat.toLocaleString('en-IN'));
		
		var Mt=data.SteelFoundation[0].Column_Concrete[0].Labour[0].cubic_mt;
		var rate=data.SteelFoundation[0].Column_Concrete[0].Labour[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*Mt;
		var colSteelLab=totalVal.toFixed(2);
		$("#colSteelLab").text(colSteelLab+" Metric Tonne @");
		$("#rateSteelLab").text("₹ "+rate+" per Metric Tonne ");
		var totSteelLab=colSteelLab*rate;
		// //alert(totSteelLab);
		$("#totSteelLab").text(totSteelLab.toLocaleString('en-IN'));
		
		var totSteelColumn=totSteelLab+steelmat;
		$("#totSteelColumn").text(totSteelColumn.toLocaleString('en-IN'));
		return totSteelColumn;
	}
	
	function calSteelPlinth()
	{
		var Mt=data.SteelFoundation[0].Plinth_Beam[0].Material[0].MT;
		var rate=data.SteelFoundation[0].Plinth_Beam[0].Material[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val()));
		////var totalVal2=(parseInt(totalVal-200));
		var steelPlint=totalVal2*Mt;
		var steelPlinth=steelPlint.toFixed(2);
		$("#steelPlinth").text(steelPlinth+" Metric Tonne @");
		$("#ratePlinth").text("₹ "+rate+" per Metric Tonne ");
		var totStlPlinthMat=Math.ceil(steelPlinth*rate);
		$("#totStlPlinthMat").text(totStlPlinthMat.toLocaleString('en-IN'));
		
		var Mt=data.SteelFoundation[0].Plinth_Beam[0].Labour[0].MT;
		var rate=data.SteelFoundation[0].Plinth_Beam[0].Labour[0].rate;
		var totalVal2=(0.8*parseInt($("#landAreatext").val()));
		var steelPlint=totalVal2*Mt;
		var steelPlintlab=steelPlint.toFixed(2);
		$("#steelPlintlab").text(steelPlintlab+" Metric Tonne @");
		$("#steelPlintLabrate").text("₹ "+rate+" per Metric Tonne ");
		totSteelPlintLab=Math.floor(steelPlintlab*rate);
		$("#totSteelPlintLab").text(totSteelPlintLab.toLocaleString('en-IN'));
		
		var totstlplinth=totSteelPlintLab+totStlPlinthMat;
		$("#totstlplinth").text(totstlplinth.toLocaleString('en-IN'));
		return totstlplinth;
		
	}
	function calLayingBase()
	{
		var cubic_ft=data.Foundation[0].Laying_Base[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Laying_Base[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var baseMatft=(totalVal2*cubic_ft).toFixed(2);
		$("#baseMat").text(baseMatft+" cubic ft @");
		$("#baseRate").text(rate+" per cubic ft");
		////alert(baseMatft+" "+rate);
		var totbaseMat=Math.ceil(baseMatft*rate);
		$("#totbaseMat").text(totbaseMat.toLocaleString('en-IN'));
		
		
		var cubic_ft=data.Foundation[0].Laying_Base[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Laying_Base[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var baseLab=(totalVal2*cubic_ft).toFixed(2);
		$("#baseLab").text(baseLab+" cubic ft @");
		$("#labrate").text(rate+" per cubic ft");
		var totbaselab=Math.ceil(baseLab*rate);
		$("#totbaselab").text(totbaselab.toLocaleString('en-IN'));
		
		var totbase=totbaselab+totbaseMat;
		$("#totbase").text(totbase.toLocaleString('en-IN'));
		return totbase;
	}
	function calsuperColumn()
	{
		var cubic_ft=data.SuperStructure[0].Column[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Column[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var columnact=(totalVal2*cubic_ft).toFixed(2);
		$("#columnact").text(columnact+" cubic ft @");
		$("#ratecol").text(rate+" per cubic ft");
		var totcolstruct=Math.ceil(columnact*rate);
		$("#totcolstruct").text(totcolstruct.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Column[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Column[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var columnLabact=(totalVal2*cubic_ft).toFixed(2);
		$("#columnLabact").text(columnLabact+" cubic ft @");
		$("#columnLabRate").text(rate+" per cubic ft");
		var totcolumnLab=Math.ceil(columnLabact*rate);
		$("#totcolumnLab").text(totcolumnLab.toLocaleString('en-IN'));
		
		var totSuperColumn=totcolumnLab+totcolstruct;
		$("#totSuperColumn").text(totSuperColumn.toLocaleString('en-IN'));
		
		return totSuperColumn;
	}
	
	function calsuperBeam()
	{
		
		var cubic_ft=data.SuperStructure[0].Beam[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Beam[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*cubic_ft;
		var beammmat=totalVal.toFixed(2);
		$("#beammmat").text(beammmat+" cubic ft @");
		$("#beamRate").text(rate+" per cubic ft");
		var totbeamMat=beammmat*rate;
		$("#totbeamMat").text(totbeamMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Beam[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Beam[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*cubic_ft;
		var beamlab=totalVal.toFixed(2);
		$("#beamlab").text(beamlab+" cubic ft @");
		$("#beamRatelab").text(rate+" per cubic ft");
		var totbeamlab=beamlab*rate;
		$("#totbeamlab").text(totbeamlab.toLocaleString('en-IN'));
		
		var totSuperBeam=totbeamlab+totbeamMat;
		$("#totSuperBeam").text(totSuperBeam.toLocaleString('en-IN'));
		return totSuperBeam;
	}
	function calSuperSlab()
	{
		var cubic_ft=data.SuperStructure[0].Slab[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Slab[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var SlabcubicMat=(totalVal2*cubic_ft).toFixed(2);
		$("#SlabcubicMat").text(SlabcubicMat+" cubic ft @");
		$("#SlabRateMat").text(rate+" per cubic ft");
		var totSlabMat=Math.ceil(SlabcubicMat+rate);
		$("#totSlabMat").text(totSlabMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Slab[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Slab[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var SlabcubicLab=(totalVal2*cubic_ft).toFixed(2);
		$("#SlabcubicLab").text(SlabcubicLab+" cubic ft @");
		$("#SlabrateLab").text(rate+" per cubic ft");
		var totSlabLab=Math.ceil(SlabcubicLab*rate);
		$("#totSlabLab").text(totSlabLab.toLocaleString('en-IN'));
		
		var totSlabprice=+totSlabMat+ +totSlabLab;
		$("#totSlabprice").text(totSlabprice.toLocaleString('en-IN'));
		return totSlabprice;
	}
	
	function calSuperLintel()
	{
		var cubic_ft=data.SuperStructure[0].Lintel[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Lintel[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var LintelMat=(totalVal2*cubic_ft).toFixed(2);
		$("#LintelMat").text(LintelMat+" cubic ft @");
		$("#LintelRateMat").text(rate+" per cubic ft");
		 var totLintelMat=Math.ceil(LintelMat*rate);
		 $("#totLintelMat").text(totLintelMat.toLocaleString('en-IN'));
		 
		 var cubic_ft=data.SuperStructure[0].Lintel[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Lintel[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var LintelLab=(totalVal2*cubic_ft).toFixed(2);
		$("#LintelLab").text(LintelLab+" cubic ft @");
		$("#LintelRate").text(rate+" per cubic ft");
		var totLintelLab=Math.ceil(LintelLab*rate);
		$("#totLintelLab").text(totLintelLab.toLocaleString('en-IN'));
		
		var totSuperLintel=+totLintelLab+ +totLintelMat;
		$("#totSuperLintel").text(totSuperLintel.toLocaleString('en-IN'));
		return totSuperLintel;
		
		
	}
	function calSuperChijja()
	{
		var cubic_ft=data.SuperStructure[0].Chijja[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Chijja[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var ChijjaMat=(totalVal2*cubic_ft).toFixed(2);
		var totChijjaMat=Math.ceil(ChijjaMat*rate);
		$("#ChijjaMat").text(ChijjaMat+" cubic ft @");
		$("#ChijjaRate").text(rate+" per cubic ft");
		$("#totChijjaMat").text(totChijjaMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Chijja[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Chijja[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var ChijjaLab=(totalVal2*cubic_ft).toFixed(2);
		var totChijjaLab=Math.ceil(ChijjaLab*rate);
		$("#ChijjaLab").text(ChijjaLab+" cubic ft @");
		$("#ChijjaRateLab").text(rate+" per cubic ft");
		$("#totChijjaLab").text(totChijjaLab.toLocaleString('en-IN'));
		
		var totSuperChijja=+totChijjaMat + +totChijjaLab;
		$("#totSuperChijja").text(totSuperChijja.toLocaleString('en-IN'));
		return totSuperChijja;
		
	}
	function calSuperStaircase()
	{
		var cubic_ft=data.SuperStructure[0].Staircase[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Staircase[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var StaircaseMat=(totalVal2*cubic_ft).toFixed(2);
		var totStaircaseMat=StaircaseMat*rate;
		$("#StaircaseMat").text(StaircaseMat+" cubic ft @");
		$("#StaircaseRate").text(rate+" per cubic ft");
		$("#totStaircaseMat").text(totStaircaseMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Staircase[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Staircase[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var StaircaseLab=(totalVal2*cubic_ft).toFixed(2);
		var totStaircaseLab=Math.ceil(StaircaseLab*rate);
		$("#StaircaseLab").text(StaircaseLab+" cubic ft @");
		$("#StaircaseRateLab").text(rate+" per cubic ft");
		$("#totStaircaseLab").text(totStaircaseLab.toLocaleString('en-IN'));
		
		var totSuperStaircase=+totStaircaseMat + +totStaircaseLab;
		$("#totSuperStaircase").text(totSuperStaircase.toLocaleString('en-IN'));
		return totSuperStaircase;
	}
	function calSuperStructure_steelColumn()
	{
		var Mt=data.SuperStructure_steel[0].Column[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Column[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(steelColumnMat-200));
		var totalVal = totalVal2*Mt;
		var steelColumnMat=totalVal.toFixed(2);
		var totsteeelColumnMat=Math.ceil(steelColumnMat*rate);
		$("#steelColumnMat").text(steelColumnMat+" Metric Tonne @");
		$("#steelMatRate").text(rate+" per Metric Tonne");
		$("#totsteeelColumnMat").text(totsteeelColumnMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Column[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Column[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*Mt;
		var steelColumnLabour= totalVal.toFixed(2);
		var totsteeelColumnLabour=steelColumnLabour*rate;
		////alert(steelColumnLabour+" "+totalVal2+ " "+Mt);
		$("#steelColumnLabour").text(steelColumnLabour+" Metric Tonne @");
		$("#steelLabourRate").text(rate+" per Metric Tonne");
		$("#totsteeelColumnLabour").text(totsteeelColumnLabour.toLocaleString('en-IN'));
		var totSuperStructure_steelColumn=+totsteeelColumnLabour+ +totsteeelColumnMat;
		$("#totSuperStructure_steelColumn").text(totSuperStructure_steelColumn.toLocaleString('en-IN'));
		return totSuperStructure_steelColumn;
		
		
	}
	function calSuperStructure_steelBeam()
	{
		var Mt=data.SuperStructure_steel[0].Beam[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Beam[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*Mt;
		
		var steelBeamMat= totalVal.toFixed(2);
		var totsteeelBeamMat=steelBeamMat*rate;
		$("#steelBeamMat").text(steelBeamMat+" Metric Tonne @");
		$("#steelMatRateBeam").text(rate+" per Metric Tonne");
		$("#totsteeelBeamMat").text(totsteeelBeamMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Beam[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Beam[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelBeamLabour= totalVal.toFixed(2);
		var totsteeelBeamLabour=steelBeamLabour*rate;
		////alert(steelBeamLabour+" "+totalVal2+ " "+Mt);
		$("#steelBeamLabour").text(steelBeamLabour+" Metric Tonne @");
		$("#steelBeamRate").text(rate+" per Metric Tonne");
		$("#totsteeelBeamLabour").text(totsteeelBeamLabour.toLocaleString('en-IN'));
		var totSuperStructure_steelBeam=+totsteeelBeamLabour+ +totsteeelBeamMat;
		$("#totSuperStructure_steelBeam").text(totSuperStructure_steelBeam.toLocaleString('en-IN'));
		return totSuperStructure_steelBeam;
		
		
	}
	function calSuperStructure_steelSlab()
	{
		var Mt=data.SuperStructure_steel[0].Slab[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Slab[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelSlabMat= totalVal.toFixed(2);
		var totsteeelSlabMat=Math.ceil(steelSlabMat*rate);
		$("#steelSlabMat").text(steelSlabMat+" Metric Tonne @");
		$("#steelMatRateSlab").text(rate+" per Metric Tonne");
		$("#totsteeelSlabMat").text(totsteeelSlabMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Slab[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Slab[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelSlabLabour= totalVal.toFixed(2);
		var totsteeelSlabLabour=steelSlabLabour*rate;
		////alert(steelSlabLabour+" "+totalVal2+ " "+Mt);
		$("#steelSlabLabour").text(steelSlabLabour+" Metric Tonne @");
		$("#steelSlabRate").text(rate+" per Metric Tonne");
		$("#totsteeelSlabLabour").text(totsteeelSlabLabour.toLocaleString('en-IN'));
		var totSuperStructure_steelSlab=+totsteeelSlabLabour+ +totsteeelSlabMat;
		$("#totSuperStructure_steelSlab").text(totSuperStructure_steelSlab.toLocaleString('en-IN'));
		return totSuperStructure_steelSlab;
		
		
	}
	function calSuperStructure_steelLintel()
	{
		var Mt=data.SuperStructure_steel[0].Lintel[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Lintel[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelLintelMat=totalVal.toFixed(2);
		var totsteeelLintelMat=Math.ceil(steelLintelMat*rate);
		$("#steelLintelMat").text(steelLintelMat+" Metric Tonne @");
		$("#steelMatRateLintel").text(rate+" per Metric Tonne");
		$("#totsteeelLintelMat").text(totsteeelLintelMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Lintel[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Lintel[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelLintelLabour=totalVal.toFixed(2);
		var totsteeelLintelLabour=Math.ceil(steelLintelLabour*rate);
		/////alert(steelLintelLabour+" "+totalVal2+ " "+Mt);
		$("#steelLintelLabour").text(steelLintelLabour+" Metric Tonne @");
		$("#steelLintelRate").text(rate+" per Metric Tonne");
		$("#totsteeelLintelLabour").text(totsteeelLintelLabour.toLocaleString('en-IN'));
		var totSuperStructure_steelLintel=+totsteeelLintelLabour+ +totsteeelLintelMat;
		$("#totSuperStructure_steelLintel").text(totSuperStructure_steelLintel.toLocaleString('en-IN'));
		return totSuperStructure_steelLintel;
		//335 changed value.
		
	}
	function calSuperStructure_steelChijja()
	{
		var Mt=data.SuperStructure_steel[0].Chijja[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Chijja[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelChijjaMat= totalVal.toFixed(2);
		var totsteeelChijjaMat=Math.ceil(steelChijjaMat*rate);
		$("#steelChijjaMat").text(steelChijjaMat+" Metric Tonne @");
		$("#steelMatRateChijja").text(rate+" per Metric Tonne");
		$("#totsteeelChijjaMat").text(totsteeelChijjaMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Chijja[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Chijja[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelChijjaLabour=totalVal.toFixed(2);
		var totsteeelChijjaLabour=Math.ceil(steelChijjaLabour*rate);
		$("#steelChijjaLabour").text(steelChijjaLabour+" Metric Tonne @");
		$("#steelLabourRateChijja").text(rate+" per Metric Tonne");
		$("#totsteeelChijjaLabour").text(totsteeelChijjaLabour.toLocaleString('en-IN'));
		//351 changed value.
		var totSuperStructure_steelChijja=+totsteeelChijjaLabour+ +totsteeelChijjaMat;
		$("#totSuperStructure_steelChijja").text(totSuperStructure_steelChijja.toLocaleString('en-IN'));
		return totSuperStructure_steelChijja;
	}
	function calSuperStructure_steelStaircase()
	{
		var Mt=data.SuperStructure_steel[0].Staircase[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Staircase[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelStaircaseMat= totalVal.toFixed(2);
		var totsteeelStaircaseMat=Math.ceil(steelStaircaseMat*rate);
		$("#steelStaircaseMat").text(steelStaircaseMat+" Metric Tonne @");
		$("#steelMatRateStaircase").text(rate+" per Metric Tonne");
		$("#totsteeelStaircaseMat").text(totsteeelStaircaseMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Staircase[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Staircase[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal=totalVal2*Mt;
		var steelStaircaseLabour=totalVal.toFixed(2);
		var totsteeelStaircaseLabour=steelStaircaseLabour*rate;
		$("#steelStaircaseLabour").text(steelStaircaseLabour+" Metric Tonne @");
		$("#steelLabourRateStaircase").text(rate+" per Metric Tonne");
		$("#totsteeelStaircaseLabour").text(totsteeelStaircaseLabour.toLocaleString('en-IN'));
		//351 changed value.
		var totSuperStructure_steelStaircase=+totsteeelStaircaseLabour+ +totsteeelStaircaseMat;
		$("#totSuperStructure_steelStaircase").text(totSuperStructure_steelStaircase.toLocaleString('en-IN'));
		return totSuperStructure_steelStaircase;
	}
	function calSuperStructureGranite_slab()
	{
		var Mt=data.SuperStructure[0].Granite_slab[0].Material[0].sq_ft;
		var rate = data.SuperStructure[0].Granite_slab[0].Material[0].rate;
		////alert(Mt+" "+rate);
		var totalVal2=(parseInt($("#landArea").val()));
		var totalVal=totalVal2*Mt;
		var steelGranite_slabMat=totalVal.toFixed(2);
		var totsteeelGranite_slabMat=steelGranite_slabMat*rate;
		$("#steelGranite_slabMat").text(steelGranite_slabMat+" Metric Tonne @");
		$("#steelMatRateGranite_slab").text(rate+" per Metric Tonne");
		$("#totsteeelGranite_slab").text(totsteeelGranite_slabMat.toLocaleString('en-IN'));
		$("#totsteeelGranite_slabMat").text(totsteeelGranite_slabMat.toLocaleString('en-IN'));
		return totsteeelGranite_slabMat;
		
		
	}
	function calWall_construction()
	{
		var value=$("#radioBtnStructure").find(".active").attr("value");
		if(value == 1)
		{			
			$("#Wall_BrickSize1").text("6 inch Thick Cement Block");
			$("#Wall_BrickSize2").text("4 inch Thick Cement Block");			
			var square_ft=data.Walls[0].Six[0].Material[0].sq_ft;
			var rate = data.Walls[0].Six[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallSix_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallSix_Mat=Math.ceil(WallSix_Mat*rate);
			$("#Bricksixrate").text(rate+" per sq ft");
			$("#WallSix_Mat").text(WallSix_Mat+" sq ft@");
			$("#totWallSix_Mat").text("₹"+totWallSix_Mat.toLocaleString('en-IN'));
			
			var square_ft=data.Walls[0].Six[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Six[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallSix_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallSix_Labour=Math.ceil(WallSix_Labour*rate);
			$("#Bricksixrate2").text(rate+" per sq ft");
			$("#WallSix_Labour").text(WallSix_Labour+" sq ft@");
			$("#totWallSix_Labour").text(totWallSix_Labour.toLocaleString('en-IN'));
			
			var totSix_Cost =totWallSix_Labour+totWallSix_Mat;
			$("#totSix_Cost").text(totSix_Cost.toLocaleString('en-IN'));
			
			
			var square_ft=data.Walls[0].Four[0].Material[0].sq_ft;
			var rate = data.Walls[0].Four[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFour_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFour_Mat=Math.ceil(WallFour_Mat*rate);
			$("#BrickFourrate").text(rate+" per sq ft");
			$("#WallFour_Mat").text(WallFour_Mat+" sq ft@");
			$("#totWallFour_Mat").text("₹"+totWallFour_Mat.toLocaleString('en-IN'));
			
			
			
			var square_ft=data.Walls[0].Four[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Four[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFour_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFour_Labour=Math.ceil(WallFour_Labour*rate);
			$("#BrickFourrate2").text(rate+" per sq ft");
			$("#WallFour_Labour").text(WallFour_Labour+" sq ft@");
			$("#totWallFour_Labour").text(totWallFour_Labour.toLocaleString('en-IN'));
			
				var totFour_Cost =totWallFour_Labour+totWallFour_Mat;
				$("#totFour_Cost").text(totFour_Cost.toLocaleString('en-IN'));
				return totFour_Cost+totSix_Cost;
			
		}
		else if(value == 2){
			$("#Wall_BrickSize1").text("8 inch Thick Cement Block");
			$("#Wall_BrickSize2").text("4 inch Thick Cement Block");
			
			var square_ft=data.Walls[0].Eight[0].Material[0].sq_ft;
			var rate = data.Walls[0].Eight[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallEight_Mat=Math.ceil(parseInt(totalVal2*square_ft));
			////alert(square_ft+" "+totalVal2);
			var totWallEight_Mat=WallEight_Mat*rate;
			$("#Bricksixrate").text(rate+" per sq ft");
			$("#WallSix_Mat").text(WallEight_Mat+" sq ft@");
			$("#totWallSix_Mat").text("₹"+totWallEight_Mat.toLocaleString('en-IN'));
			
			var square_ft=data.Walls[0].Eight[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Eight[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallEight_Labour=Math.ceil(parseInt(totalVal2*square_ft));
			////alert(square_ft+" "+totalVal2);
			var totWallEight_Labour=WallEight_Labour*rate;
			$("#Bricksixrate2").text(rate+" per sq ft");
			$("#WallSix_Labour").text(WallEight_Labour+" sq ft@");
			$("#totWallSix_Labour").text(totWallEight_Labour.toLocaleString('en-IN'));
			
			var totEight_Cost =totWallEight_Labour+totWallEight_Mat;
			$("#totSix_Cost").text(totEight_Cost.toLocaleString('en-IN'));
			
			
			var square_ft=data.Walls[0].Four[0].Material[0].sq_ft;
			var rate = data.Walls[0].Four[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFour_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFour_Mat=Math.ceil(WallFour_Mat*rate);
			$("#BrickFourrate").text(rate+" per sq ft");
			$("#WallFour_Mat").text(WallFour_Mat+" sq ft@");
			$("#totWallFour_Mat").text(totWallFour_Mat.toLocaleString('en-IN'));
			
			
			
			var square_ft=data.Walls[0].Four[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Four[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFour_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFour_Labour=Math.ceil(WallFour_Labour*rate);
			$("#BrickFourrate2").text(rate+" per sq ft");
			$("#WallFour_Labour").text(WallFour_Labour+" sq ft@");
			$("#totWallFour_Labour").text(totWallFour_Labour.toLocaleString('en-IN'));
			
				var totFour_Cost =totWallFour_Labour+totWallFour_Mat;
				$("#totFour_Cost").text(totFour_Cost.toLocaleString('en-IN'));
				return  totFour_Cost+totEight_Cost;
				
		}
		else if(value == 3)
		{
		
			$("#Wall_BrickSize1").text("9 inch Thick Burnt Brick");
			$("#Wall_BrickSize2").text("4.5 inch Thick Burnt Brick");
			
			var square_ft=data.Walls[0].Nine[0].Material[0].sq_ft;
			var rate = data.Walls[0].Nine[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallNine_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallNine_Mat=Math.ceil(WallNine_Mat*rate);
			$("#Bricksixrate").text(rate+" per sq ft");
			$("#WallSix_Mat").text(WallNine_Mat+" sq ft@");
			$("#totWallSix_Mat").text("₹"+totWallNine_Mat.toLocaleString('en-IN'));
			
			var square_ft=data.Walls[0].Nine[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Nine[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallNine_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallNine_Labour=Math.ceil(WallNine_Labour*rate);
			$("#Bricksixrate2").text(rate+" per sq ft");
			$("#WallSix_Labour").text(WallNine_Labour+" sq ft@");
			$("#totWallSix_Labour").text(totWallNine_Labour.toLocaleString('en-IN'));
			
			var totNine_Cost =totWallNine_Labour+totWallNine_Mat;
			$("#totSix_Cost").text(totNine_Cost.toLocaleString('en-IN'));
			
			
			var square_ft=data.Walls[0].Fourpointfive[0].Material[0].sq_ft;
			var rate = data.Walls[0].Fourpointfive[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFourpointfive_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFourpointfive_Mat=Math.ceil(WallFourpointfive_Mat*rate);
			$("#BrickFourrate").text(rate+" per sq ft");
			$("#WallFour_Mat").text(WallFourpointfive_Mat+" sq ft@");
			$("#totWallFour_Mat").text(totWallFourpointfive_Mat.toLocaleString('en-IN'));
			
			
			
			var square_ft=data.Walls[0].Fourpointfive[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Fourpointfive[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFourpointfive_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFourpointfive_Labour=Math.ceil(WallFourpointfive_Labour*rate);
			$("#BrickFourrate2").text(rate+" per sq ft");
			$("#WallFour_Labour").text(WallFourpointfive_Labour+" sq ft@");
			$("#totWallFour_Labour").text(totWallFourpointfive_Labour.toLocaleString('en-IN'));
			
				var totFourpointfive_Cost =totWallFourpointfive_Labour+totWallFourpointfive_Mat;
				$("#totFour_Cost").text(totFourpointfive_Cost.toLocaleString('en-IN'));
				
				var tot3 = totNine_Cost+totFourpointfive_Cost;
				return tot3;
		}
		
		// return totcalWall_construction();
	}
	
	function calFlooring()
	{
		var value=$("#radioBtnFlooring").find(".active").attr("value");
		////alert(value);
		if(value == 1)
		{
			$("#flooringId").text("Vetrified Tiles");
			 var square_ft=data.Flooring[0].Vitrified[0].Tiles[0].sq_ft;
			 var rate=data.Flooring[0].Vitrified[0].Tiles[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var VetrifiedTiles = (totalVal2 * square_ft).toFixed(2);
			 ////alert(totalVal2+" "+square_ft);
			 $("#VetrifiedTiles").text(VetrifiedTiles+" sq ft@");
			 $("#VetrifiedTilesRate").text(rate+" per sq ft");
			 var totVetrifiedTiles = VetrifiedTiles*rate;
			 $("#totVetrifiedTiles").text(totVetrifiedTiles.toLocaleString('en-IN'));
			 
			 var square_ft=data.Flooring[0].Vitrified[0].Material[0].sq_ft;
			 var rate=data.Flooring[0].Vitrified[0].Material[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var VetrifiedTilesMaterial = (totalVal2 * square_ft).toFixed(2);
			  $("#VetrifiedTilesMaterial").text(VetrifiedTilesMaterial+" sq ft@");
			 $("#VetrifiedTilesMaterialRate").text(rate+" per sq ft ");
			 var totVetrifiedTilesMaterial = Math.ceil(VetrifiedTilesMaterial*rate);
			 $("#totVetrifiedTilesMaterial").text(totVetrifiedTilesMaterial.toLocaleString('en-IN'));
			 
			  var square_ft=data.Flooring[0].Vitrified[0].Labour[0].sq_ft;
			 var rate=data.Flooring[0].Vitrified[0].Labour[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var VetrifiedTilesLabour = (totalVal2 * square_ft).toFixed(2);
			  $("#VetrifiedTilesLabour").text(VetrifiedTilesLabour+" sq ft@");
			 $("#VetrifiedTilesLabourRate").text(rate+" per sq ft ");
			 var totVetrifiedTilesLabour = Math.ceil(VetrifiedTilesLabour*rate);
			 $("#totVetrifiedTilesLabour").text(totVetrifiedTilesLabour.toLocaleString('en-IN'));
			 
			 var totVetrifiedFloor=totVetrifiedTilesLabour+totVetrifiedTilesMaterial+totVetrifiedTiles;
			 $("#totVetrifiedFloor").text(totVetrifiedFloor.toLocaleString('en-IN'));
			  $("#totVetrifiedFloor1").text(totVetrifiedFloor.toLocaleString('en-IN'));
			  return totVetrifiedFloor;
			 
			 
		}
		if(value == 2)
		{
			$("#flooringId").text("Granite");
			
			var square_ft=data.Flooring[0].Granite[0].Tiles[0].sq_ft;
			 var rate=data.Flooring[0].Granite[0].Tiles[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var GraniteTiles = (totalVal2 * square_ft).toFixed(2);
			 ////alert(totalVal2+" "+square_ft);
			 $("#VetrifiedTiles").text(GraniteTiles+" sq ft@");
			 $("#VetrifiedTilesRate").text(rate+" per sq ft ");
			 var totGraniteTiles = Math.ceil(GraniteTiles*rate);
			 $("#totVetrifiedTiles").text(totGraniteTiles.toLocaleString('en-IN'));
			 
			 var square_ft=data.Flooring[0].Granite[0].Material[0].sq_ft;
			 var rate=data.Flooring[0].Granite[0].Material[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var GraniteTilesMaterial = (totalVal2 * square_ft).toFixed(2);
			  $("#VetrifiedTilesMaterial").text(GraniteTilesMaterial+" sq ft@");
			 $("#VetrifiedTilesMaterialRate").text(rate+" per sq ft ");
			 var totGraniteTilesMaterial = Math.ceil(GraniteTilesMaterial*rate);
			 $("#totVetrifiedTilesMaterial").text(totGraniteTilesMaterial.toLocaleString('en-IN'));
			 
			  var square_ft=data.Flooring[0].Granite[0].Labour[0].sq_ft;
			 var rate=data.Flooring[0].Granite[0].Labour[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var GraniteTilesLabour =(totalVal2 * square_ft).toFixed(2);
			  $("#VetrifiedTilesLabour").text(GraniteTilesLabour+" sq ft@");
			 $("#VetrifiedTilesLabourRate").text(rate+" per sq ft ");
			 var totGraniteTilesLabour =Math.ceil(GraniteTilesLabour*rate);
			 $("#totVetrifiedTilesLabour").text(totGraniteTilesLabour.toLocaleString('en-IN'));
			 
			 var totGraniteFloor=totGraniteTilesLabour+totGraniteTilesMaterial+totGraniteTiles;
			 $("#totVetrifiedFloor").text(totGraniteFloor.toLocaleString('en-IN'));
			  $("#totVetrifiedFloor1").text(totGraniteFloor.toLocaleString('en-IN'));
			return totGraniteFloor;
			
		}
		if(value == 3)
		{
			$("#flooringId").text("Premium Flooring Marble and Wooden Basic rate Rs 200");
			
			var square_ft=data.Flooring[0].Marble[0].Tiles[0].sq_ft;
			 var rate=data.Flooring[0].Marble[0].Tiles[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var MarbleTiles = (totalVal2 * square_ft).toFixed(2);
			 ////alert(totalVal2+" "+square_ft);
			 $("#VetrifiedTiles").text(MarbleTiles+" sq ft@");
			 $("#VetrifiedTilesRate").text(rate+" per sq ft ");
			 var totMarbleTiles = Math.ceil(MarbleTiles*rate);
			 $("#totVetrifiedTiles").text(totMarbleTiles.toLocaleString('en-IN'));
			 
			 var square_ft=data.Flooring[0].Marble[0].Material[0].sq_ft;
			 var rate=data.Flooring[0].Marble[0].Material[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var MarbleTilesMaterial = (totalVal2 * square_ft).toFixed(2);
			  $("#VetrifiedTilesMaterial").text(MarbleTilesMaterial+" sq ft@");
			 $("#VetrifiedTilesMaterialRate").text(rate+" per sq ft ");
			 var totMarbleTilesMaterial = Math.ceil(MarbleTilesMaterial*rate);
			 $("#totVetrifiedTilesMaterial").text(totMarbleTilesMaterial.toLocaleString('en-IN'));
			 
			  var square_ft=data.Flooring[0].Marble[0].Labour[0].sq_ft;
			 var rate=data.Flooring[0].Marble[0].Labour[0].rate;
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var MarbleTilesLabour =(totalVal2 * square_ft).toFixed(2);
			  $("#VetrifiedTilesLabour").text(MarbleTilesLabour+" sq ft@");
			 $("#VetrifiedTilesLabourRate").text(rate+" per sq ft ");
			 var totMarbleTilesLabour =Math.ceil(MarbleTilesLabour*rate);
			 $("#totVetrifiedTilesLabour").text(totMarbleTilesLabour.toLocaleString('en-IN'));
			 
			 var totMarbleFloor=totMarbleTilesLabour+totMarbleTilesMaterial+totMarbleTiles;
			 $("#totVetrifiedFloor").text(totMarbleFloor.toLocaleString('en-IN'));
			  $("#totVetrifiedFloor1").text(totMarbleFloor.toLocaleString('en-IN'));
			return totMarbleFloor;
			
		}
		
	}
	
	function calWoodWorkDoors()
	{
		var value=$("#radioBtnDoors").find(".active").attr("value");
		////alert(value);
		if(value == 1)
		{	
			$("#doors").text("TeakWood Doors");
			var square_ft=data.Woodwork[0].Doors[0].Teakwood[0].Material[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].Teakwood[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var TeakWoodMaterial=(totalVal2*square_ft).toFixed(2);
			var totTeakWoodMaterial=Math.ceil(TeakWoodMaterial*rate);
			$("#MaterialDoor").text(TeakWoodMaterial);
			$("#WoodMaterialrate").text(rate+" per ft");
			$("#totMaterialCost").text(totTeakWoodMaterial.toLocaleString('en-IN'));
			
			var square_ft=data.Woodwork[0].Doors[0].Teakwood[0].Labour[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].Teakwood[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var TeakWoodLabour=(totalVal2*square_ft).toFixed(2);
			var totTeakWoodLabour=Math.ceil(TeakWoodLabour*rate);
			$("#LabourDoor").text(TeakWoodLabour);
			$("#WoodLabourrate").text(rate+" per ft");
			$("#totLabourCost").text(totTeakWoodLabour.toLocaleString('en-IN'));
			////alert("teakWood");
			var totTeakDoorPrice = totTeakWoodLabour+totTeakWoodMaterial;
			////alert(totTeakDoorPrice);
			$("#totDoorPrice").text(totTeakDoorPrice.toLocaleString('en-IN'));
			return totTeakDoorPrice;
		
		}else if(value == 2)
		{
			$("#doors").text("HonneWood Doors");
			var square_ft=data.Woodwork[0].Doors[0].HonneWood[0].Material[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].HonneWood[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			var HonneWoodMaterial=(totalVal2*square_ft).toFixed(2);
			var totHonneWoodMaterial=Math.ceil(HonneWoodMaterial*rate);
			$("#MaterialDoor").text(HonneWoodMaterial);
			$("#WoodMaterialrate").text(rate+"  per ft");
			$("#totMaterialCost").text(totHonneWoodMaterial.toLocaleString('en-IN'));
			
			var square_ft=data.Woodwork[0].Doors[0].HonneWood[0].Labour[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].HonneWood[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			var HonneWoodLabour=(totalVal2*square_ft).toFixed(2);
			var totHonneWoodLabour=Math.ceil(HonneWoodLabour*rate);
			$("#LabourDoor").text(HonneWoodLabour);
			$("#WoodLabourrate").text(rate+"  per ft");
			$("#totLabourCost").text(totHonneWoodLabour.toLocaleString('en-IN'));
			var totHonneWoodPrice = totHonneWoodLabour+totHonneWoodMaterial;
			$("#totDoorPrice").text(totHonneWoodPrice.toLocaleString('en-IN'));
			return totHonneWoodPrice;
		}else if(value == 3)
		{
			$("#doors").text("SalWood Doors");
			
			var square_ft=data.Woodwork[0].Doors[0].SalWood[0].Material[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].SalWood[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var SalWoodMaterial=(totalVal2*square_ft).toFixed(2);
			var totSalWoodMaterial=Math.ceil(SalWoodMaterial*rate);
			$("#MaterialDoor").text(SalWoodMaterial);
			$("#WoodMaterialrate").text(rate+"  per ft");
			$("#totMaterialCost").text(totSalWoodMaterial.toLocaleString('en-IN'));
			
			var square_ft=data.Woodwork[0].Doors[0].SalWood[0].Labour[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].SalWood[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var SalWoodLabour=(totalVal2*square_ft).toFixed(2);
			var totSalWoodLabour=Math.ceil(SalWoodLabour*rate);
			$("#LabourDoor").text(SalWoodLabour);
			$("#WoodLabourrate").text(rate+" per  ft");
			$("#totLabourCost").text(totSalWoodLabour.toLocaleString('en-IN'));
			////alert("teakWood");
			var totSalWoodPrice = totSalWoodLabour+totSalWoodMaterial;
			////alert(totSalWoodPrice);
			$("#totDoorPrice").text(totSalWoodPrice.toLocaleString('en-IN'));
			return totSalWoodPrice;
		}else if(value == 4)
		{
			$("#doors").text("OST Doors");
			//$("#Material").text("Material + Labour");
			// $("#wood").find(".table-borderless").id("labour").remove();
			//$("#labour").remove();
			var square_ft=data.Woodwork[0].Doors[0].OSTDoors[0].Material[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].OSTDoors[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var OSTDoorsMaterial=(totalVal2*square_ft).toFixed(2);
			var totOSTDoorsMaterial=Math.ceil(OSTDoorsMaterial*rate);
			$("#MaterialDoor").text(OSTDoorsMaterial);
			$("#WoodMaterialrate").text(rate+"  per ft");
			$("#totMaterialCost").text(totOSTDoorsMaterial.toLocaleString('en-IN'));
			
			 var square_ft=data.Woodwork[0].Doors[0].OSTDoors[0].Labour[0].sq_ft;
			 var rate=data.Woodwork[0].Doors[0].OSTDoors[0].Labour[0].rate;
			 ////alert(square_ft+""+rate);
			 var totalVal2=(parseInt($("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var OSTDoorsLabour=(totalVal2*square_ft).toFixed(2);
			 var totOSTDoorsLabour=Math.ceil(OSTDoorsLabour*rate);
			 $("#LabourDoor").text(OSTDoorsLabour);
			 $("#WoodLabourrate").text(rate+" per  ft");
			 $("#totLabourCost").text(totOSTDoorsLabour.toLocaleString('en-IN'));
			 ////alert("teakWood");
			var totOSTDoorsPrice =totOSTDoorsMaterial+totOSTDoorsLabour;
			////alert(totSalWoodPrice);
			$("#totDoorPrice").text(totOSTDoorsPrice.toLocaleString('en-IN'));
			return totOSTDoorsPrice;
		}
		
	}
	
	function calMainWoodWork()
	{
		var sq_ft=data.Woodwork[0].Doors[0].MainTeakwood[0].Material[0].sq_ft;
		var rate=data.Woodwork[0].Doors[0].MainTeakwood[0].Material[0].rate;
		
		var totalVal2=(parseInt($("#landArea").val()));
		var MainTeakWoodArea =(totalVal2*sq_ft).toFixed(2);
		var MainTeakWoodMat=Math.ceil(MainTeakWoodArea*rate);
			$("#MainWindowMat").text(MainTeakWoodArea);
			$("#MainWindowRate").text(rate+" per ft");
			$("#MainWindowMatPrice").text(MainTeakWoodMat.toLocaleString('en-IN'));
			
			var sq_ft=data.Woodwork[0].Doors[0].MainTeakwood[0].Labour[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].MainTeakwood[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var MainTeakWoodArea =(totalVal2*sq_ft).toFixed(2);
			var MainTeakWoodlab=Math.ceil(MainTeakWoodArea*rate);
			$("#MainWindowLabour").text(MainTeakWoodArea);
			$("#MainWindowRateLabour").text(rate+" per ft");
			$("#MainWindowLabourPrice").text(MainTeakWoodlab.toLocaleString('en-IN'));
			
			var MaintotWindowPrice = MainTeakWoodlab+MainTeakWoodMat;
			$("#MaintotWindowPrice").text(MaintotWindowPrice.toLocaleString('en-IN'));
			return MaintotWindowPrice;
	}
	function calGrills()
	{
		var square_ft = data.Woodwork[0].Grills[0].MS_Grill[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Grills[0].MS_Grill[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var MS_GrillArea =(totalVal2*square_ft).toFixed(2);
			var MS_GrillMat=Math.ceil(MS_GrillArea*rate);
			$("#WindowMatMS_Grill").text(MS_GrillArea);
			$("#WindowRateMS_Grill").text(rate+" per  ft");
			$("#WindowMatPriceMS_Grill").text(MS_GrillMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Grills[0].MS_Grill[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Grills[0].MS_Grill[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var MS_GrillArea =(totalVal2*square_ft).toFixed(2);
			var MS_Grilllab=Math.ceil(MS_GrillArea*rate);
			$("#WindowLabourMS_Grill").text(MS_GrillArea);
			$("#WindowRateLabourMS_Grill").text(rate+" per  ft");
			$("#WindowLabourPriceMS_Grill").text(MS_Grilllab.toLocaleString('en-IN'));
			
			var totWindowPriceMS_Grill = MS_Grilllab+MS_GrillMat;
			$("#totWindowPriceMS_Grill").text(totWindowPriceMS_Grill.toLocaleString('en-IN'));
			return totWindowPriceMS_Grill;
			
	}
	function calWoodWorkWindows()
	{
		var value=$("#radioBtnWindows").find(".active").attr("value");
		
		

		if(value == 1)
		{
			//var square_ft=data.Woodwork[0].Doors[0].Teakwood[0].Material[0].sq_ft;
			$("#WindowName").text("TeakWood Windows");
			var square_ft = data.Woodwork[0].Windows[0].Teakwood[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].Teakwood[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var TeakWoodArea =(totalVal2*square_ft).toFixed(2);
			var TeakWoodMat=Math.ceil(TeakWoodArea*rate);
			$("#WindowMat").text(TeakWoodArea);
			$("#WindowRate").text(rate+" per ft");
			$("#WindowMatPrice").text(TeakWoodMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].Teakwood[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].Teakwood[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var TeakWoodArea =(totalVal2*square_ft).toFixed(2);
			var TeakWoodlab=Math.ceil(TeakWoodArea*rate);
			$("#WindowLabour").text(TeakWoodArea);
			$("#WindowRateLabour").text(rate+" per ft");
			$("#WindowLabourPrice").text(TeakWoodlab.toLocaleString('en-IN'));
			
			var totWindowPrice = TeakWoodlab+TeakWoodMat;
			$("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
			
		}else if(value == 2)
		{
			$("#WindowName").text("HonneWood Windows");
			var square_ft = data.Woodwork[0].Windows[0].HonneWood[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].HonneWood[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var HonneWoodArea =(totalVal2*square_ft).toFixed(2);
			var HonneWoodMat=Math.ceil(HonneWoodArea*rate);
			$("#WindowMat").text(HonneWoodArea);
			$("#WindowRate").text(rate+" per ft");
			$("#WindowMatPrice").text(HonneWoodMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].HonneWood[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].HonneWood[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var HonneWoodArea =(totalVal2*square_ft).toFixed(2);
			var HonneWoodlab=Math.ceil(HonneWoodArea*rate);
			$("#WindowLabour").text(HonneWoodArea);
			$("#WindowRateLabour").text(rate+" per ft");
			$("#WindowLabourPrice").text(HonneWoodlab.toLocaleString('en-IN'));
			
			var totWindowPrice = HonneWoodlab+HonneWoodMat;
			$("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
			
		}else if(value == 3)
		{
			$("#WindowName").text("SalWood Windows");
			var square_ft = data.Woodwork[0].Windows[0].SalWood[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].SalWood[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var SalWoodArea =(totalVal2*square_ft).toFixed(2);
			var SalWoodMat=Math.ceil(SalWoodArea*rate);
			$("#WindowMat").text(SalWoodArea);
			$("#WindowRate").text(rate+"  per ft");
			$("#WindowMatPrice").text(SalWoodMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].SalWood[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].SalWood[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var SalWoodArea =(totalVal2*square_ft).toFixed(2);
			var SalWoodlab=Math.ceil(SalWoodArea*rate);
			$("#WindowLabour").text(SalWoodArea);
			$("#WindowRateLabour").text(rate+" per ft");
			$("#WindowLabourPrice").text(SalWoodlab.toLocaleString('en-IN'));
			
			var totWindowPrice = SalWoodlab+SalWoodMat;
			$("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
		}else if(value == 4)
		{ 
			$("#WindowName").text("UPVC Windows");
			var square_ft = data.Woodwork[0].Windows[0].UPVC[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].UPVC[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var UPVCArea = (totalVal2*square_ft).toFixed(2);
			var UPVCMat=Math.ceil(UPVCArea*rate);
			$("#WindowMat").text(UPVCArea);
			$("#WindowRate").text(rate+" per ft");
			$("#WindowMatPrice").text(UPVCMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].UPVC[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].UPVC[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var UPVCArea =(totalVal2*square_ft).toFixed(2);
			var UPVClab=Math.ceil(UPVCArea*rate);
			$("#WindowLabour").text(UPVCArea);
			$("#WindowRateLabour").text(rate+" per ft");
			$("#WindowLabourPrice").text(UPVClab.toLocaleString('en-IN'));
			
			var totWindowPrice = UPVClab+UPVCMat;
			$("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
			
		}
		else if(value == 5)
		{ 
			$("#WindowName").text("AluminumumWindows");
			var square_ft = data.Woodwork[0].Windows[0].Aluminumum[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].Aluminumum[0].Material[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var AluminumumArea = (totalVal2*square_ft).toFixed(2);
			var AluminumumMat=Math.ceil(AluminumumArea*rate);
			$("#WindowMat").text(AluminumumArea);
			$("#WindowRate").text(rate+"  per ft");
			$("#WindowMatPrice").text(AluminumumMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].Aluminumum[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].Aluminumum[0].Labour[0].rate;
			var totalVal2=(parseInt($("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var AluminumumArea =(totalVal2*square_ft).toFixed(2);
			var Aluminumumlab=Math.ceil(AluminumumArea*rate);
			$("#WindowLabour").text(AluminumumArea);
			$("#WindowRateLabour").text(rate+" per ft");
			$("#WindowLabourPrice").text(Aluminumumlab.toLocaleString('en-IN'));
			
			var totWindowPrice = Aluminumumlab+AluminumumMat;
			$("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
			
		}
		
	}
	
	function calTilesKitchen()
	{
		var square_ft=data.Tiling[0].Kitchen[0].Tiles[0].sq_ft;
		var rate = data.Tiling[0].Kitchen[0].Tiles[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var TilesCost =  (totalVal2 * square_ft).toFixed(2);
		var totTilesCost = Math.ceil(TilesCost*rate);
		$("#TilesCost").text(TilesCost+" sq ft @");
		$("#Tilesrate").text(rate+" per sq ft ");
		$("#TotTilesCost").text(totTilesCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Kitchen[0].Material[0].sq_ft;
		var rate = data.Tiling[0].Kitchen[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var MaterialCost = (totalVal2 * square_ft).toFixed(2);
		var totMaterialCost = Math.ceil(MaterialCost*rate);
		$("#MaterialCost").text(MaterialCost+" sq ft @");
		$("#Materialrate").text(rate+" per sq ft ");
		$("#TotMaterialCost").text(totMaterialCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Kitchen[0].Labour[0].sq_ft;
		var rate = data.Tiling[0].Kitchen[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var LabourCost =  (totalVal2 * square_ft).toFixed(2);
		var totLabourCost = Math.ceil(LabourCost*rate);
		$("#LabourCost").text(LabourCost+" sq ft @");
		$("#Labourrate").text(rate+" per sq ft ");
		$("#TotLabourCost").text(totLabourCost.toLocaleString('en-IN'));
		
		var totTilesPrice=totLabourCost+totMaterialCost+totTilesCost;
		$("#totTilesPrice").text(totTilesPrice.toLocaleString('en-IN'))
		return totTilesPrice;
		
	}
	function calTilesToilet()
	{
		var square_ft=data.Tiling[0].Toilet[0].Tiles[0].sq_ft;
		var rate = data.Tiling[0].Toilet[0].Tiles[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		////alert(totalVal2);
		var TilesCost =  (totalVal2 * square_ft).toFixed(2);
		var totTilesCost = Math.ceil(TilesCost*rate);
		$("#TilesCostToilet").text(TilesCost+" sq ft @");
		$("#TilesrateToilet").text(rate+" per sq ft ");
		$("#TotTilesCostToilet").text(totTilesCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Toilet[0].Material[0].sq_ft;
		var rate = data.Tiling[0].Toilet[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		////alert(totalVal2);
		var MaterialCost = (totalVal2 * square_ft).toFixed(2);
		var totMaterialCost = Math.ceil(MaterialCost*rate);
		$("#MaterialCostToilet").text(MaterialCost+" sq ft @");
		$("#MaterialrateToilet").text(rate+" per sq ft ");
		$("#TotMaterialCostToilet").text(totMaterialCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Toilet[0].Labour[0].sq_ft;
		var rate = data.Tiling[0].Toilet[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		////alert(totalVal2);
		var LabourCost =  (totalVal2 * square_ft).toFixed(2);
		var totLabourCost = Math.ceil(LabourCost*rate);
		$("#LabourCostToilet").text(LabourCost+" sq ft @");
		$("#LabourrateToilet").text(rate+" per sq ft ");
		$("#TotLabourCostToilet").text(totLabourCost.toLocaleString('en-IN'));
		
		var totTilesPrice=totLabourCost+totMaterialCost+totTilesCost;
		$("#totTilesPriceToilet").text(totTilesPrice.toLocaleString('en-IN'));
		return totTilesPrice;
	}
	
	function calTilesBathroom()
	{
		var square_ft=data.Tiling[0].Bathroom[0].Tiles[0].sq_ft;
		var rate = data.Tiling[0].Bathroom[0].Tiles[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		////alert(totalVal2);
		var TilesCost =  (totalVal2 * square_ft).toFixed(2);
		var totTilesCost = Math.ceil(TilesCost*rate);
		$("#TilesCostBathroom").text(TilesCost+" sq ft @");
		$("#TilesrateBathroom").text(rate+" per sq ft ");
		$("#TotTilesCostBathroom").text(totTilesCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Bathroom[0].Material[0].sq_ft;
		var rate = data.Tiling[0].Bathroom[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		////alert(totalVal2);
		var MaterialCost =  (totalVal2 * square_ft).toFixed(2);
		var totMaterialCost = Math.ceil(MaterialCost*rate);
		$("#MaterialCostBathroom").text(MaterialCost+" sq ft @");
		$("#MaterialrateBathroom").text(rate+" per sq ft ");
		$("#TotMaterialCostBathroom").text(totMaterialCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Bathroom[0].Labour[0].sq_ft;
		var rate = data.Tiling[0].Bathroom[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		//alert(totalVal2);
		var LabourCost = (totalVal2 * square_ft).toFixed(2);
		var totLabourCost = Math.ceil(LabourCost*rate);
		$("#LabourCostBathroom").text(LabourCost+" sq ft @");
		$("#LabourrateBathroom").text(rate+" per sq ft ");
		$("#TotLabourCostBathroom").text(totLabourCost.toLocaleString('en-IN'));
		
		var totTilesPrice=totLabourCost+totMaterialCost+totTilesCost;
		$("#totTilesPriceBathroom").text(totTilesPrice.toLocaleString('en-IN'));
		return totTilesPrice;;
		
	}
	
	function calExteriorPainting()
	{	
	var value=$("#radioBtnPaint").find(".active").attr("value");
	if(value == 1)
	{
		
		var square_ft=data.Painting[0].ExteriorWalls[0].Basic[0].Material[0].sq_ft;
		var rate = data.Painting[0].ExteriorWalls[0].Basic[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var extPaintcost = (totalVal2 * square_ft).toFixed(2);
		var totextPaintcost = Math.ceil(extPaintcost *rate);
		$("#extPaintcost").text(extPaintcost);
		$("#extPaintRate").text(rate+" per sq ft");
		$("#totextPaintcost").text(totextPaintcost.toLocaleString('en-IN'));
		
		
		var square_ft=data.Painting[0].ExteriorWalls[0].Basic[0].Labour[0].sq_ft;
		var rate = data.Painting[0].ExteriorWalls[0].Basic[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var extPaintcostLabour = (totalVal2 * square_ft).toFixed(2);
		var totextPaintcostLabour = Math.ceil(extPaintcostLabour *rate);
		$("#extPaintcostLabour").text(extPaintcostLabour);
		$("#extPaintRateLabour").text(rate+" per sq ft");
		$("#totextPaintcostLabour").text(totextPaintcostLabour.toLocaleString('en-IN'));
		
		var totIntPaint =totextPaintcostLabour+totextPaintcost;
		$("#totIntPaint").text(totIntPaint);
		return totIntPaint;
		}else if(value == 2)
		{
			var square_ft=data.Painting[0].ExteriorWalls[0].Premium[0].Material[0].sq_ft;
		var rate = data.Painting[0].ExteriorWalls[0].Premium[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PremiumextPaintcost = (totalVal2 * square_ft).toFixed(2);
		var PremiumtotextPaintcost = Math.ceil(PremiumextPaintcost *rate);
		$("#extPaintcost").text(PremiumextPaintcost);
		$("#extPaintRate").text(rate+" per sq ft");
		$("#totextPaintcost").text(PremiumtotextPaintcost.toLocaleString('en-IN'));
		
		
		var square_ft=data.Painting[0].ExteriorWalls[0].Premium[0].Labour[0].sq_ft;
		var rate = data.Painting[0].ExteriorWalls[0].Premium[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PremiumextPaintcostLabour = (totalVal2 * square_ft).toFixed(2);
		var PremiumtotextPaintcostLabour = Math.ceil(PremiumextPaintcostLabour *rate);
		$("#extPaintcostLabour").text(PremiumextPaintcostLabour);
		$("#extPaintRateLabour").text(rate+" per sq ft");
		$("#totextPaintcostLabour").text(PremiumtotextPaintcostLabour.toLocaleString('en-IN'));
		
		var totIntPaint =PremiumtotextPaintcostLabour+PremiumtotextPaintcost;
		$("#totIntPaint").text(totIntPaint);
		return totIntPaint;
		}
	}
	
	
	function calInteriorPainting()
	{
		var value=$("#radioBtnPaint").find(".active").attr("value");
		if(value == 1)
	{
		var square_ft=data.Painting[0].InteriorWalls[0].Basic[0].Material[0].sq_ft;
		var rate = data.Painting[0].InteriorWalls[0].Basic[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var intPaintcost = (totalVal2 * square_ft).toFixed(2);
		var totintPaintcost = Math.ceil(intPaintcost *rate);
		$("#intPaintcost").text(intPaintcost);
		$("#intPaintRate").text(rate+" per sq ft");
		$("#totintPaintcost").text(totintPaintcost.toLocaleString('en-IN'));
		
		
		var square_ft=data.Painting[0].InteriorWalls[0].Basic[0].Labour[0].sq_ft;
		var rate = data.Painting[0].InteriorWalls[0].Basic[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var intPaintcostLabour = (totalVal2 * square_ft).toFixed(2);
		var totintPaintcostLabour = Math.ceil(intPaintcostLabour *rate);
		$("#intPaintcostLabour").text(intPaintcostLabour);
		$("#intPaintRateLabour").text(rate+" per sq ft");
		$("#totintPaintcostLabour").text(totintPaintcostLabour.toLocaleString('en-IN'));
		
		var totIntPaint =totintPaintcostLabour+totintPaintcost;
		$("#totInttotIntPaintPaint").text(totIntPaint.toLocaleString('en-IN'));
		return totIntPaint;
		}else if(value == 2)
		{
		var square_ft=data.Painting[0].InteriorWalls[0].Premium[0].Material[0].sq_ft;
		var rate = data.Painting[0].InteriorWalls[0].Premium[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PremiumintPaintcost = (totalVal2 * square_ft).toFixed(2);
		var PremiumtotintPaintcost = Math.ceil(PremiumintPaintcost *rate);
		$("#intPaintcost").text(PremiumintPaintcost);
		$("#intPaintRate").text(rate+" per sq ft");
		$("#totintPaintcost").text(PremiumtotintPaintcost.toLocaleString('en-IN'));
		
		
		var square_ft=data.Painting[0].InteriorWalls[0].Premium[0].Labour[0].sq_ft;
		var rate = data.Painting[0].InteriorWalls[0].Premium[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PremiumintPaintcostLabour = (totalVal2 * square_ft).toFixed(2);
		var PremiumtotintPaintcostLabour = Math.ceil(PremiumintPaintcostLabour *rate);
		$("#intPaintcostLabour").text(PremiumintPaintcostLabour);
		$("#intPaintRateLabour").text(rate+" per sq ft");
		$("#totintPaintcostLabour").text(PremiumtotintPaintcostLabour.toLocaleString('en-IN'));
		
		var totIntPaint =PremiumtotintPaintcostLabour+PremiumtotintPaintcost;
		$("#totInttotIntPaintPaint").text(totIntPaint.toLocaleString('en-IN'));
		return totIntPaint;
		}
	}
	
	function calPlasteringCeiling()
	{
		var cubic_ft=data.Plastering[0].Ceiling[0].Material[0].cubic_ft;
		var rate = data.Plastering[0].Ceiling[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PlasteringCeiling = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterCeiling =Math.ceil(PlasteringCeiling * rate);
		$("#PlasteringCeiling").text(PlasteringCeiling);
		$("#PlasteringRate").text(rate+" per sq ft");
		$("#totPlasterCeiling").text(totPlasterCeiling.toLocaleString('en-IN'));
		
		var cubic_ft=data.Plastering[0].Ceiling[0].Labour[0].cubic_ft;
		var rate = data.Plastering[0].Ceiling[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PlasteringCeilingLabour = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterCeilingLabour =Math.ceil(PlasteringCeilingLabour * rate);
		$("#PlasteringCeilingLabour").text(PlasteringCeilingLabour);
		$("#PlasteringRateLabour").text(rate+" per sq ft");
		$("#totPlasterCeilingLabour").text(totPlasterCeilingLabour.toLocaleString('en-IN'));
		
		var totPlasterCeilingwhole=totPlasterCeilingLabour+totPlasterCeiling;
		$("#totPlasterCeilingwhole").text(totPlasterCeilingwhole.toLocaleString('en-IN'));
		return totPlasterCeilingwhole;
	}
	
	function calPlasteringInternalWall()
	{
		var cubic_ft=data.Plastering[0].InternalWall[0].Material[0].cubic_ft;
		var rate = data.Plastering[0].InternalWall[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PlasteringInternalWall = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterInternalWall =Math.ceil(PlasteringInternalWall * rate);
		$("#PlasteringInternalWall").text(PlasteringInternalWall);
		$("#PlasteringRateInternalWall").text(rate+" per sq ft");
		$("#totPlasterInternalWall").text(totPlasterInternalWall.toLocaleString('en-IN'));
		
		var cubic_ft=data.Plastering[0].InternalWall[0].Labour[0].cubic_mt;
		var rate = data.Plastering[0].InternalWall[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PlasteringInternalWallLabour =(totalVal2*cubic_ft).toFixed(2);
		var totPlasterInternalWallLabour =Math.ceil(PlasteringInternalWallLabour * rate);
		$("#PlasteringInternalWallLabour").text(PlasteringInternalWallLabour);
		$("#PlasteringRateLabourInternalWall").text(rate+" per sq ft");
		$("#totPlasterInternalWallLabour").text(totPlasterInternalWallLabour.toLocaleString('en-IN'));
		
		var totPlasterInternalWallwhole=totPlasterInternalWallLabour+totPlasterInternalWall;
		$("#totPlasterInternalWallwhole").text(totPlasterInternalWallwhole.toLocaleString('en-IN'));
		return totPlasterInternalWallwhole;
	}
	
	function calPlasteringExternalSurfaces()
	{
		var cubic_ft=data.Plastering[0].ExternalSurfaces[0].Material[0].cubic_ft;
		var rate = data.Plastering[0].ExternalSurfaces[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PlasteringExternalSurfaces = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterExternalSurfaces =Math.ceil(PlasteringExternalSurfaces * rate);
		$("#PlasteringExternalSurfaces").text(PlasteringExternalSurfaces);
		$("#PlasteringRateExternalSurfaces").text(rate+" per sq ft");
		$("#totPlasterExternalSurfaces").text(totPlasterExternalSurfaces.toLocaleString('en-IN'));
		
		var cubic_ft=data.Plastering[0].ExternalSurfaces[0].Labour[0].cubic_mt;
		var rate = data.Plastering[0].ExternalSurfaces[0].Labour[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var PlasteringExternalSurfacesLabour = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterExternalSurfacesLabour =Math.ceil(PlasteringExternalSurfacesLabour * rate);
		$("#PlasteringExternalSurfacesLabour").text(PlasteringExternalSurfacesLabour);
		$("#PlasteringRateLabourExternalSurfaces").text(rate+" per sq ft");
		$("#totPlasterExternalSurfacesLabour").text(totPlasterExternalSurfacesLabour.toLocaleString('en-IN'));
		
		var totPlasterExternalSurfaceswhole=totPlasterExternalSurfacesLabour+totPlasterExternalSurfaces;
		$("#totPlasterExternalSurfaceswhole").text(totPlasterExternalSurfaceswhole.toLocaleString('en-IN'));
		
		return totPlasterExternalSurfaceswhole;
	}
	
	function calMiscellaneousElectrification()
	{
		var square_ft=data.Miscellaneous[0].Electrification[0].Material[0].sq_ft;
		var rate = data.Miscellaneous[0].Electrification[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var Electricneeds = (totalVal2*square_ft).toFixed(2);
		var totElectricneeds =Math.ceil(Electricneeds*rate);
		$("#Electricneeds").text(Electricneeds);
		$("#ElelctricRate").text(rate);
		$("#totElectricneeds").text(totElectricneeds.toLocaleString('en-IN'));
		$("#totElectricneeds2").text(totElectricneeds.toLocaleString('en-IN'));
		return totElectricneeds;
		
	}
	function calMiscellaneousSanitary()
	{
		var square_ft=data.Miscellaneous[0].Sanitary[0].Material[0].sq_ft;
		var rate = data.Miscellaneous[0].Sanitary[0].Material[0].rate;
		var totalVal2=(parseInt($("#landArea").val()));
		var Sanitaryneeds = (totalVal2*square_ft).toFixed(2);
		var totSanitaryneeds =Math.ceil(Sanitaryneeds*rate);
		$("#Sanitaryneeds").text(Sanitaryneeds);
		$("#SanitaryRate").text(rate);
		$("#totSanitaryneeds").text(totSanitaryneeds.toLocaleString('en-IN'));
		$("#totSanitaryneeds2").text(totSanitaryneeds.toLocaleString('en-IN'));
		return totSanitaryneeds;
		
	}
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
		$("#totFoundation2").text(totFoundation.toLocaleString('en-IN'));
		$("#totFoundationall").text(totFoundation.toLocaleString('en-IN'));
		return totFoundation;
		
	}
	function calSteel()
	{
		var SteelFooting=calSteelFooting();
		var SteelColumn=calSteelColumn();
		var SteelPlinth = calSteelPlinth();
		var totSteel = SteelFooting+SteelColumn+SteelPlinth;
		$("#totSteel").text(totSteel.toLocaleString('en-IN'));
		$("#totSteelall").text(totSteel.toLocaleString('en-IN'));
		return totSteel;
	}
	function calSuperStructure()
	{
		var LayingBase=calLayingBase();
		var superColumn=calsuperColumn();
		var superBeam=calsuperBeam();
		var superSlab=calSuperSlab();
		var SuperLintel=calSuperLintel();
		var SuperChijja=calSuperChijja();
		var SuperStaircase=calSuperStaircase();
		var SuperStructureGranite_slab= calSuperStructureGranite_slab();
		var totSuperStructure = superColumn+superBeam+superSlab+SuperLintel+SuperChijja+SuperStaircase+SuperStructureGranite_slab;
		$("#totSuperStructure").text(totSuperStructure.toLocaleString('en-IN'));
		$("#totSuperStructureall").text(totSuperStructure.toLocaleString('en-IN'));
		return totSuperStructure;
	}
	
	function calSuperStructure_Steel()
	{
		var SuperStructure_steelColumn= calSuperStructure_steelColumn();
		var SuperStructure_steelBeam=calSuperStructure_steelBeam();
		var SuperStructure_steelSlab=calSuperStructure_steelSlab();
		var SuperStructure_steelLintel=calSuperStructure_steelLintel();
		var SuperStructure_steelChijja = calSuperStructure_steelChijja();
		var Structure_steelStaircase= calSuperStructure_steelStaircase();
		var SuperStructure_Steel=SuperStructure_steelColumn+SuperStructure_steelBeam+SuperStructure_steelSlab+SuperStructure_steelLintel+SuperStructure_steelChijja+Structure_steelStaircase;
		$("#SuperStructure_Steel").text(SuperStructure_Steel.toLocaleString('en-IN'));
		$("#SuperStructure_Steelall").text(SuperStructure_Steel.toLocaleString('en-IN'));
		return SuperStructure_Steel;
		
	}
	
	function calWoodWork()
	{
		var WoodWorkDoors = calWoodWorkDoors();
		var WoodWorkWindows=calWoodWorkWindows();
		var MainWoodWork=calMainWoodWork();
		var Grills= calGrills();
		var totWoodWork = WoodWorkDoors+WoodWorkWindows+MainWoodWork+Grills;
			$("#totWoodWork").text(totWoodWork.toLocaleString('en-IN'));
			$("#totWoodWorkall").text(totWoodWork.toLocaleString('en-IN'));
			return totWoodWork;
	}
	function callWallTiles()
	{
		var TilesToilet= calTilesToilet();
		var TilesKitchen=calTilesKitchen();
		var  TilesBathroom=calTilesBathroom();
		var WallTiles = TilesToilet+TilesKitchen+TilesBathroom;
			$("#WallTiles").text(WallTiles.toLocaleString('en-IN'));
			$("#WallTilesall").text(WallTiles.toLocaleString('en-IN'));
			return WallTiles;
		
	}
	function calPainting()
	{
		var interior =calInteriorPainting();
		 var exterior =calExteriorPainting();
		 var totPainting =interior+exterior;
		 $("#totPaintingall").text(totPainting.toLocaleString('en-IN'));
		 $("#totPainting2").text(totPainting.toLocaleString('en-IN'));
		 return totPainting;
	}
	function calPlastering()
	{
		var ceiling = calPlasteringCeiling();
		var Internal= calPlasteringInternalWall();
		 var External=calPlasteringExternalSurfaces();
		 var totPlastering = ceiling+Internal+External;
		 $("#totPlastering").text(totPlastering.toLocaleString('en-IN'));
		 $("#totPlasteringall").text(totPlastering.toLocaleString('en-IN'));
		 return totPlastering;
	}	
	function calMiscellaneous()
	{
		var electricity = calMiscellaneousElectrification();
		var plumbing = calMiscellaneousSanitary();
		var totMisc =electricity+plumbing;
		$("#totMiscall").text(totMisc.toLocaleString('en-IN'));
		$("#totplumb").text(totMisc.toLocaleString('en-IN'));
		$("#totMiscq1").text(totMisc.toLocaleString('en-IN'));
		//alert(totMisc);
		return totMisc;
	}
	function calmainFlooring()
	{
		var Flooring =calFlooring();
		$("#Flooring").text(Flooring.toLocaleString('en-IN'));
		return Flooring;
	}
	function Wall_Construction()
	{
		var totWallconstruct=calWall_construction();
		$("#totWallconstruct").text(totWallconstruct.toLocaleString('en-IN'));
		$("#totWallconstructall").text(totWallconstruct.toLocaleString('en-IN'));
		return totWallconstruct;
	}
	function mainHouse_Cost()
	{
		var wallconstruction = Wall_Construction();
		var flooring = calmainFlooring();
		var misc = calMiscellaneous();
		var Plastering = calPlastering();
		var paint = calPainting();
		var tiles = callWallTiles();
		var wood = calWoodWork();
		var supersteel = calSuperStructure_Steel();
		var superstructure = calSuperStructure();
		var  steelnorm = calSteel();
		var foundation =  calFoundation();
		var tothomecost = wallconstruction+flooring+misc+Plastering+paint+tiles+wood+supersteel+superstructure+steelnorm+foundation;
		$("#tothomecost").text(tothomecost.toLocaleString('en-IN'));
		var floorval=$("#floorDropdwnval").val().trim();
		$("#totalConstHomeText").text("Total construction cost for your home ("+$("#landAreatext").val()+"sq.ft and "+$("#dwnFloortext").text().trim()+")");
	}
	
		
});
data ={
  "Foundation": [
	{
		"Earthwork": [
			{
				"Labour_and_Earth":[
					{
						"cubic_ft":"2.2",
						"rate":"12"
					}
				]
			}
		],
		"Bed_Concrete": [
			{
				"Material":[
					{
						"cubic_ft":"0.22",
						"rate":"100"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.22",
						"rate":"20"
					}
				]
			}
		],
		"SSM_Construction": [
			{
				"Material":[
					{
						"cubic_ft":"0.45",
						"rate":"120"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.45",
						"rate":"20"
					}
				]
			}
		],
		"Footing_Concrete": [
			{
				"Material":[
					{
						"cubic_ft":"0.45",
						"rate":"235"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.45",
						"rate":"15"
					}
				]
			}
		],
		"Plinth_Beam": [
			{
				"Material":[
					{
						"cubic_ft":"0.10",
						"rate":"220"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.10",
						"rate":"15"
					}
				]
			}
		],
		"Column_Concrete": [
			{
				"Material":[
					{
						"cubic_ft":"0.06",
						"rate":"235"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.06",
						"rate":"30"
					}
				]
			}
		],
		"Laying_Base": [
			{
				"Material":[
					{
						"cubic_ft":"0.40",
						"rate":"100"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.40",
						"rate":"20"
					}
				]
			}
		]
    },
  ],
  "SteelFoundation": [
    {
		"Footing_Concrete": [
			{
				"Material":[
					{
						"MT":"0.00075",
						"rate":"47000.00"
					}
				],
				"Labour":[
					{
						"MT":"0.00075",
						"rate":"5000"
					}
				]
			}
		],
		"Plinth_Beam": [
			{
				"Material":[
					{
						"MT":"0.00028",
						"rate":"47000.00"
					}
				],
				"Labour":[
					{
						"MT":"0.00028",
						"rate":"5000"
					}
				]
			}
		],
		"Column_Concrete": [
			{
				"Material":[
					{
						"cubic_ft":"0.00022",
						"rate":"47000.00"
					}
				],
				"Labour":[
					{
						"cubic_mt":"0.00022",
						"rate":"5000"
					}
				]
			}
		]
    }
  ],
  "SuperStructure": [
    {
		"Column": [
			{
				"Material":[
					{
						"cubic_ft":"0.101",
						"rate":"235"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.101",
						"rate":"30"
					}
				]
			}
		],
		"Beam": [
			{
				"Material":[
					{
						"cubic_ft":"0.100",
						"rate":"235"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.100",
						"rate":"30"
					}
				]
			}
		],
		"Slab": [
			{
				"Material":[
					{
						"cubic_ft":"0.421",
						"rate":"215"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.421",
						"rate":"20"
					}
				]
			}
		],
		"Lintel": [
			{
				"Material":[
					{
						"cubic_ft":"0.055",
						"rate":"235"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.055",
						"rate":"30"
					}
				]
			}
		],
		"Chijja": [
			{
				"Material":[
					{
						"cubic_ft":"0.140",
						"rate":"100"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.140",
						"rate":"20"
					}
				]
			}
		],
		"Staircase": [
			{
				"Material":[
					{
						"cubic_ft":"0.120",
						"rate":"235"
					}
				],
				"Labour":[
					{
						"cubic_ft":"0.120",
						"rate":"40"
					}
				]
			}
		],
		"Granite_slab": [
			{
				"Material":[
					{
						"sq_ft":"0.03",
						"rate":"400"
					}
				]
			}
		]
    }
  ],
  "SuperStructure_steel": [
		{
			"Column": [
				{
					"Material":[
						{
							"cubic_ft":"0.0006",
							"rate":"47000"
						}
					],
					"Labour":[
						{
							"cubic_mt":"0.0006",
							"rate":"5000"
						}
					]
				}
			],
			"Beam": [
				{
					"Material":[
						{
							"cubic_ft":"0.0009",
							"rate":"47000"
						}
					],
					"Labour":[
						{
							"cubic_mt":"0.0009",
							"rate":"5000"
						}
					]
				}
			],
			"Slab": [
				{
					"Material":[
						{
							"cubic_ft":"0.0012",
							"rate":"47000"
						}
					],
					"Labour":[
						{
							"cubic_mt":"0.0012",
							"rate":"5000"
						}
					]
				}
			],
			"Lintel": [
				{
					"Material":[
						{
							"cubic_ft":"0.0003",
							"rate":"47000"
						}
					],
					"Labour":[
						{
							"cubic_mt":"0.0003",
							"rate":"4000"
						}
					]
				}
			],
			"Chijja": [
				{
					"Material":[
						{
							"cubic_ft":"0.00015",
							"rate":"47000"
						}
					],
					"Labour":[
						{
							"cubic_mt":"0.00015",
							"rate":"4000"
						}
					]
				}
			],
			"Staircase": [
				{
					"Material":[
						{
							"cubic_ft":"0.0009",
							"rate":"47000"
						}
					],
					"Labour":[
						{
							"cubic_mt":"0.0009",
							"rate":"5000"
						}
					]
				}
			]		
		}
	],
  "Walls": [
    {
		"Six": [
			{
				"Material":[
					{
						"sq_ft":"1.1",
						"rate":"70"
					}
				],
				"Labour":[
					{
						"sq_ft":"1.1",
						"rate":"25"
					}
				]
			}
		],
		"Four": [
			{
				"Material":[
					{
						"sq_ft":"0.8",
						"rate":"40"
					}
				],
				"Labour":[
					{
						"sq_ft":"0.8",
						"rate":"20"
					}
				]
			}
		],
		"Eight": [
			{
				"Material":[
					{
						"sq_ft":"1.1",
						"rate":"80"
					}
				],
				"Labour":[
					{
						"sq_ft":"1.1",
						"rate":"50"
					}
				]
			}
		],
		"Fourpointfive": [
			{
				"Material":[
					{
						"sq_ft":"0.8",
						"rate":"50"
					}
				],
				"Labour":[
					{
						"sq_ft":"0.8",
						"rate":"15"
					}
				]
			}
		],
		"Nine": [
			{
				"Material":[
					{
						"sq_ft":"1.1",
						"rate":"100"
					}
				],
				"Labour":[
					{
						"sq_ft":"1.1",
						"rate":"20"
					}
				]
			}
		],
    }
  ],
  "Woodwork": [
    {
		"Doors": [
			{
				"MainTeakwood":[
					{
						"Material":[
							{
								"sq_ft":"0.05",
								"rate":"2200"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.05",
								"rate":"250"
							}
						]
					}
				],
				"Teakwood":[
					{
						"Material":[
							{
								"sq_ft":"0.08",
								"rate":"2200"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.08",
								"rate":"250"
							}
						]
					}
				],
				"HonneWood":[
					{
						"Material":[
							{
								"sq_ft":"0.08",
								"rate":"1200"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.08",
								"rate":"200"
							}
						]
					}
				],
				"SalWood":[
					{
						"Material":[
							{
								"sq_ft":"0.100",
								"rate":"900"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.100",
								"rate":"200"
							}
						]
					}
				],
				"OSTDoors":[
					{
						"Material":[
							{
								"sq_ft":"0.100",
								"rate":"200"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.100",
								"rate":"150"
							}
						
						]
					}
				]
			}
		],
		"Windows": [
			{
				"Teakwood":[
					{
						"Material":[
							{
								"sq_ft":"0.3",
								"rate":"2000"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.3",
								"rate":"250"
							}
						]
					}
				],
				"HonneWood":[
					{
						"Material":[
							{
								"sq_ft":"0.3",
								"rate":"1200"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.3",
								"rate":"200"
							}
						]
					}
				],
				"SalWood":[
					{
						"Material":[
							{
								"sq_ft":"0.3",
								"rate":"900"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.3",
								"rate":"200"
							}
						]
					}
				],
				"Aluminumum":[
					{
						"Material":[
							{
								"sq_ft":"0.3",
								"rate":"200"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.3",
								"rate":"150"
							}
						]
					}
				],
				"UPVC":[
					{
						"Material":[
							{
								"sq_ft":"0.3",
								"rate":"600"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.3",
								"rate":"200"
							}
						]
					}
				]
			}
		],
		"Grills": [
			{
				"MS_Grill":[
					{
						"Material":[
							{
								"sq_ft":"0.25",
								"rate":"120"
							}
						],
						"Labour":[
							{
								"sq_ft":"0.25",
								"rate":"70"
							}
						]
					}
				]
			}
		]
	}
  ],
  "Flooring": [
    {
		"Vitrified": [
			{
				"Tiles":[
					{
						"sq_ft":"1.1",
						"rate":"60"
					}
				],
				"Material":[
					{
						"sq_ft":"1.1",
						"rate":"40"
					}
				],
				"Labour":[
					{
						"sq_ft":"1.1",
						"rate":"20"
					}
				]
			}
		],
		"Granite": [
			{
				"Tiles":[
					{
						"sq_ft":"1.1",
						"rate":"120"
					}
				],
				"Material":[
					{
						"sq_ft":"1.1",
						"rate":"60"
					}
				],
				"Labour":[
					{
						"sq_ft":"1.1",
						"rate":"30"
					}
				]
			}
		],
		"Marble": [
			{
				"Tiles":[
					{
						"sq_ft":"1.1",
						"rate":"200"
					}
				],
				"Material":[
					{
						"sq_ft":"1.1",
						"rate":"60"
					}
				],
				"Labour":[
					{
						"sq_ft":"1.1",
						"rate":"60"
					}
				]
			}
		]
    }
  ],
  "Tiling": [
    {
		
		"Kitchen": [
			{
				"Tiles":[
					{
						"sq_ft":"0.06",
						"rate":"45"
					}
				],
				"Material":[
					{
						"sq_ft":"0.06",
						"rate":"25"
					}
				],
				"Labour":[
					{
						"sq_ft":"0.06",
						"rate":"16"
					}
				]
			}
		],
		"Toilet": [
			{
				"Tiles":[
					{
						"sq_ft":"0.28",
						"rate":"45"
					}
				],
				"Material":[
					{
						"sq_ft":"0.28",
						"rate":"25"
					}
				],
				"Labour":[
					{
						"sq_ft":"0.28",
						"rate":"16"
					}
				]
			}
		],
		"Bathroom": [
			{
				"Tiles":[
					{
						"sq_ft":"0.06",
						"rate":"45"
					}
				],
				"Material":[
					{
						"sq_ft":"0.06",
						"rate":"30"
					}
				],
				"Labour":[
					{
						"sq_ft":"0.06",
						"rate":"20"
					}
				]
			}
		]
    }
  ],
  "Plastering": [
    {
		"Ceiling": [
			{
				"Material":[
					{
						"cubic_ft":"1.00",
						"rate":"25"
					}
				],
				"Labour":[
					{
						"cubic_ft":"1.00",
						"rate":"15"
					}
				]
			}
		],
		"InternalWall": [
			{
				"Material":[
					{
						"cubic_ft":"2.00",
						"rate":"25"
					}
				],
				"Labour":[
					{
						"cubic_mt":"2.00",
						"rate":"25"
					}
				]
			}
		],
		"ExternalSurfaces": [
			{
				"Material":[
					{
						"cubic_ft":"1.3",
						"rate":"25"
					}
				],
				"Labour":[
					{
						"cubic_mt":"1.3",
						"rate":"25"
					}
				]
			}
		]
    }
  ],
  "Painting": [
    {
		"InteriorWalls": [
			{
				"Basic": [
					{
						"Material":[
							{
								"sq_ft":"3.00",
								"rate":"20"
							}
						],
						"Labour":[
							{
								"sq_ft":"3.00",
								"rate":"8"
							}
						]
					}
				],
				"Premium": [
					{
						"Material":[
							{
								"sq_ft":"3.00",
								"rate":"25"
							}
						],
						"Labour":[
							{
								"sq_ft":"3.00",
								"rate":"8"
							}
						]
					}
				]
			}
		],
		"ExteriorWalls": [
			{
				"Basic": [
					{
						"Material":[
							{
								"sq_ft":"1.3",
								"rate":"15"
							}
						],
						"Labour":[
							{
								"sq_ft":"1.3",
								"rate":"8"
							}
						]
					}
				],
				"Premium": [
					{
						"Material":[
							{
								"sq_ft":"1.3",
								"rate":"19"
							}
						],
						"Labour":[
							{
								"sq_ft":"1.3",
								"rate":"8"
							}
						]
					}
				]
			}
		]
    }
  ],
  "Miscellaneous": [
    {
		"Electrification": [
			{
				"Material":[
					{
						"sq_ft":"1.00",
						"rate":"150"
					}
				]
			}
		],
		"Sanitary": [
			{
				"Material":[
					{
						"sq_ft":"1.00",
						"rate":"150"
					}
				]
			}
		]
    }
  ]
}
