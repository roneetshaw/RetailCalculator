jQuery( window ).load(function() {
  // alert("loaded")
   jQuery("#dwnFloorUl li:nth-child(1)").click();
   jQuery("#dwnCity li:nth-child(1)").click();
   jQuery("#landAreatext").val("1200");
   jQuery("#calcost").click();
});

jQuery( document ).ready(function() {
	jQuery('.panel').on('hidden.bs.collapse', function (e) {
		jQuery(this).find(".f_close").show();
		jQuery(this).find(".f_open").hide();
	})
	jQuery('.panel').on('shown.bs.collapse', function (e) {
		jQuery(this).find(".f_close").hide();
		jQuery(this).find(".f_open").show();
	})
	
	jQuery('#siteArea').attr("checked", "checked");
	jQuery("input[name='optradio']").click(function() {
		jQuery("#siteLabel").text(jQuery(this).parent().text().trim())
		var radioVal=jQuery(this).val();
		if(radioVal==1)
		{
			jQuery("#landTextBox").show();
			jQuery("#dwnSiteDimension").hide();
			jQuery("#dwnSqFT").hide();
		}
		else if(radioVal == 2)
		{
			jQuery("#landTextBox").hide();
			jQuery("#dwnSiteDimension").show();
			jQuery("#dwnSqFT").hide();
		}
		else
		{
			jQuery("#landTextBox").hide();
			jQuery("#dwnSiteDimension").hide();
			jQuery("#dwnSqFT").show();
		}
	});

	jQuery('#radioBtnBHK a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	
	jQuery('#radioBtnHouse a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	jQuery('#radioBtnFlooring a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	jQuery('#radioBtnDoors a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	
	jQuery('#radioBtnWindows a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	jQuery('#radioBtnStructure a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	jQuery('#radioBtnPaint a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	jQuery('#radioBtnDoor a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	jQuery('#radioBtnFloor a').on('click', function(){
    var sel = jQuery(this).data('title');
		var tog = jQuery(this).data('toggle');
		jQuery('#'+tog).prop('value', sel);
		
		jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
		jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	})
	jQuery("#dwnCity li").on('click',function(){
		jQuery("#dwnText").val(jQuery(this).text().trim());
	})
	jQuery( function() {
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
    jQuery("#dwnText").autocomplete({
      source: availableTags
    }).autocomplete('widget').removeClass('ui-corner-all');
	} );
	jQuery("#dwnMeter li").on('click',function(){
		jQuery("#dwnLand").html(jQuery(this).text()+'  '+'<span class="caret"></span></button>');
	})
	jQuery("#dwnFloorUl li").on('click',function(){
		jQuery("#dwnFloortext").html(jQuery(this).text()+'  '+'<span class="caret"></span></button>');
		jQuery("#floorDropdwnval").val(jQuery(this).find("a").attr("value").trim());
	})
	jQuery("#dwnSiteDimUl li").on('click',function(){
		jQuery("#siteDimText").html(jQuery(this).text()+'  '+'<span class="caret"></span></button>');
		jQuery("#landAreatext").val(jQuery(this).find("a").attr("value").trim());
	})
	jQuery("#dwnsqFtUl li").on('click',function(){
		jQuery("#sitesqftText").html(jQuery(this).text()+'  '+'<span class="caret"></span></button>');
		jQuery("#landAreatext").val(jQuery(this).find("a").attr("value").trim());
	})
	
	jQuery("#calcost").on('click',function(){
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value)
		var textVal=parseInt(jQuery("#landAreatext").val());
		var totalVal1=parseInt(textVal-(textVal*super_built));
		if(jQuery("#floorDropdwnval").val().trim() == "0")
			alert("Please select Floors")
		else
		{
			jQuery("#landArea").val(parseInt(jQuery("#floorDropdwnval").val().trim())*totalVal1);
			mainHouse_Cost();
		}
	})
	
	
	function calEarthWork()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var cubic_ft=data.Foundation[0].Earthwork[0].Labour_and_Earth[0].cubic_ft;
		var totalVal2=((1-super_built)*(parseInt(jQuery("#landAreatext").val()))*cubic_ft).toFixed(2);
		jQuery("#FearthWork01").text(totalVal2+" cubic ft");
		var rate = data.Foundation[0].Earthwork[0].Labour_and_Earth[0].rate
		jQuery("#FearthWork02").text("@ ₹"+rate+" per cubic ft");
		var tot=Math.ceil(totalVal2*rate);
		jQuery("#EarthWorkTotalnnn").text(tot.toLocaleString('en-IN'));
		jQuery("#EarthTotal").text("₹"+tot.toLocaleString('en-IN'));
		return tot;
	}
	function calCuringConcrete()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var cubic_ft=data.Foundation[0].Bed_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Bed_Concrete[0].Material[0].rate;
		var totalVal2=((1-super_built)*(parseInt(jQuery("#landAreatext").val()))).toFixed(2);;
		//var totalVal2=(parseInt(totalVal-200));
		
		var totBags =Math.ceil(totalVal2*cubic_ft);
		// //alert(totBags);
		jQuery("#totBags").text(totBags+" cubic ft @");
		jQuery("#disprate").text("₹ "+rate+" per cubic ft");
		var total=totBags*rate;
		jQuery("#totalprice").text("₹ "+total.toLocaleString('en-IN'))
		var cubic_ft=data.Foundation[0].Bed_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Bed_Concrete[0].Labour[0].rate;			
		var labour=Math.ceil(totalVal2*cubic_ft);
		jQuery("#labour").text(labour+" cubic ft @");
		jQuery("#rate").text(rate+" per cubic ft");
		var totalLabour=labour*rate;
		jQuery("#totalLabour").text(totalLabour.toLocaleString('en-IN'));
		var totalLayer=total+totalLabour;
		jQuery("#totalLayer").text(totalLayer.toLocaleString('en-IN'));
		return totalLayer;
	}
	function calSSM_Foundation()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var cubic_ft=data.Foundation[0].SSM_Construction[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].SSM_Construction[0].Material[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val())).toFixed(2);
		//var totalVal2=(parseInt(totalVal-200));
		var materialcost=Math.ceil(totalVal2*cubic_ft);
		jQuery("#materialcost").text(materialcost+"cubic ft @");
		jQuery("#displayrate").text("₹ "+rate+" per cubic ft");
		totalMaterial=Math.ceil(materialcost*rate);
		jQuery("#totalMaterial").text(totalMaterial.toLocaleString('en-IN'));
		var cubic_ft=data.Foundation[0].SSM_Construction[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].SSM_Construction[0].Labour[0].rate;
		var labourCost=totalVal2*cubic_ft;
		jQuery("#labourCost").text(materialcost+"cubic ft @");
		jQuery("#displayrate2").text("₹ "+rate+" per cubic ft");
		totalLabourCost=labourCost*rate;
		jQuery("#totalLabourCost").text(totalLabourCost.toLocaleString('en-IN'));
		totalCost=Math.ceil(totalLabourCost+totalMaterial);
		jQuery("#totalCost").text(totalCost.toLocaleString('en-IN'));
		return totalCost;
	}
	function calConcreteFooting()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var cubic_ft=data.Foundation[0].Footing_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Footing_Concrete[0].Material[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val())).toFixed(2);
		//var totalVal2=(parseInt(totalVal-200));
		var totLayMat=Math.ceil(totalVal2*cubic_ft);
		jQuery("#totLayMat").text(totLayMat+" cubic ft @");
		jQuery("#drate").text("₹ "+rate+" per cubic ft");
		totLay=Math.ceil(totLayMat*rate);
		jQuery("#totLay").text(totLay.toLocaleString('en-IN'));
		var cubic_ft=data.Foundation[0].Footing_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Footing_Concrete[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totLayLabour=Math.ceil(totalVal2*cubic_ft);
		jQuery("#totLayLabour").text(totLayLabour+" cubic ft @");
		jQuery("#ratelabour").text("₹ "+rate+" per cubic ft");
		totlabour=totLayLabour*rate;
		jQuery("#totlabour").text(totlabour.toLocaleString('en-IN'));
		
		totLayConcrete=Math.ceil(totlabour+totLay);
		jQuery("#totLayConcrete").text(totLayConcrete.toLocaleString('en-IN'));
		return totLayConcrete;
		
	}
	function calColumnConcrete()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var cubic_ft=data.Foundation[0].Column_Concrete[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Column_Concrete[0].Material[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val())).toFixed(2);
		//var totalVal2=(parseInt(totalVal-200));
		var colconcrete=Math.ceil(totalVal2*cubic_ft);
		jQuery("#colconcrete").text(colconcrete+" cubic ft @");
		jQuery("#colrate").text("₹ "+rate+" per cubic ft");
		totlColMaterial=colconcrete*rate;
		jQuery("#totlColMaterial").text(totlColMaterial.toLocaleString('en-IN'));
		var cubic_ft=data.Foundation[0].Column_Concrete[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Column_Concrete[0].Labour[0].rate;
		var colconcretelab=Math.ceil(totalVal2*cubic_ft);
		jQuery("#colconcretelab").text(colconcrete+" cubic ft @");
		jQuery("#colratelabour").text("₹ "+rate+" per cubic ft");
		totlCollabour=colconcrete*rate;
		jQuery("#totlCollabour").text(totlCollabour.toLocaleString('en-IN'));
		totColConcrete=totlCollabour+totlColMaterial;
		jQuery("#totColConcrete").text(totColConcrete.toLocaleString('en-IN'));
		return totColConcrete;
		
		
	}
	
	function calPlinthConcrete()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var cubic_ft=data.Foundation[0].Plinth_Beam[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Plinth_Beam[0].Material[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var PlinthMat=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#PlinthMat").text(PlinthMat+" cubic ft @");
		jQuery("#Plinthrate").text("₹ "+rate+" per cubic ft");
		totalPlinthMat=Math.ceil(PlinthMat*rate);
		jQuery("#totalPlinthMat").text(totalPlinthMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.Foundation[0].Plinth_Beam[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Plinth_Beam[0].Labour[0].rate;
		var PlinthLab=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#PlinthLab").text(PlinthLab+" cubic ft @");
		jQuery("#PlinthrateLab").text("₹ "+rate+" per cubic ft");
		TotPlinthLab=Math.ceil(PlinthLab*rate);
		jQuery("#TotPlinthLab").text(TotPlinthLab.toLocaleString('en-IN'));
		TotPlinth=TotPlinthLab+totalPlinthMat;
		jQuery("#TotPlinth").text(TotPlinth.toLocaleString('en-IN'));
		return TotPlinth;
	}
	function calSteelFooting()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var Mt=data.SteelFoundation[0].Footing_Concrete[0].Material[0].MT;
		var rate =data.SteelFoundation[0].Footing_Concrete[0].Material[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal=totalVal2*Mt;
		var footMat=totalVal.toFixed(2);
		jQuery("#footMat").text(footMat+" Metric Tonne @");
		jQuery("#footrate").text("₹ "+rate+" per Metric Tonne");
		var totalfootMat=footMat*rate;
		jQuery("#totalfootMat").text(totalfootMat.toLocaleString('en-IN'));
		
		var Mt=data.SteelFoundation[0].Footing_Concrete[0].Labour[0].MT;
		var rate =data.SteelFoundation[0].Footing_Concrete[0].Labour[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val()));
		var totalVal=totalVal2*Mt;
		var SteelLab=totalVal.toFixed(2);
		
		jQuery("#SteelLab").text(SteelLab+" Metric Tonne @");
		jQuery("#Steelratelab").text("₹ "+rate+" per Metric Tonne");
		var totSteelLab1=SteelLab*rate;
		jQuery("#totSteelLab1").text(totSteelLab1.toLocaleString('en-IN'));
		totSteelFoot=totSteelLab1+totalfootMat;
		jQuery("#totSteelFoot").text(totSteelFoot.toLocaleString('en-IN'));
		return totSteelFoot;
	}
	function calSteelColumn()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var Mt=data.SteelFoundation[0].Column_Concrete[0].Material[0].cubic_ft;
		////alert(Mt);
		var rate =data.SteelFoundation[0].Column_Concrete[0].Material[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*Mt;
		var colSteel=totalVal.toFixed(2);
		////alert(colSteel);
		jQuery("#colSteelMat").text(colSteel+" Metric Tonne @");
		jQuery("#colrateMat").text("₹ "+rate+" per Metric Tonne ");
		var steelmat=colSteel*rate;
		jQuery("#steelmat").text(steelmat.toLocaleString('en-IN'));
		
		var Mt=data.SteelFoundation[0].Column_Concrete[0].Labour[0].cubic_mt;
		var rate=data.SteelFoundation[0].Column_Concrete[0].Labour[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*Mt;
		var colSteelLab=totalVal.toFixed(2);
		jQuery("#colSteelLab").text(colSteelLab+" Metric Tonne @");
		jQuery("#rateSteelLab").text("₹ "+rate+" per Metric Tonne ");
		var totSteelLab=colSteelLab*rate;
		// //alert(totSteelLab);
		jQuery("#totSteelLab").text(totSteelLab.toLocaleString('en-IN'));
		
		var totSteelColumn=totSteelLab+steelmat;
		jQuery("#totSteelColumn").text(totSteelColumn.toLocaleString('en-IN'));
		return totSteelColumn;
	}
	
	function calSteelPlinth()
	{
		var super_built=0.01*parseFloat(data.SuperBuilt[0].percent[0].value);
		var Mt=data.SteelFoundation[0].Plinth_Beam[0].Material[0].MT;
		var rate=data.SteelFoundation[0].Plinth_Beam[0].Material[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val()));
		////var totalVal2=(parseInt(totalVal-200));
		var steelPlint=totalVal2*Mt;
		var steelPlinth=steelPlint.toFixed(2);
		jQuery("#steelPlinth").text(steelPlinth+" Metric Tonne @");
		jQuery("#ratePlinth").text("₹ "+rate+" per Metric Tonne ");
		var totStlPlinthMat=Math.ceil(steelPlinth*rate);
		jQuery("#totStlPlinthMat").text(totStlPlinthMat.toLocaleString('en-IN'));
		
		var Mt=data.SteelFoundation[0].Plinth_Beam[0].Labour[0].MT;
		var rate=data.SteelFoundation[0].Plinth_Beam[0].Labour[0].rate;
		var totalVal2=((1-super_built)*parseInt(jQuery("#landAreatext").val()));
		var steelPlint=totalVal2*Mt;
		var steelPlintlab=steelPlint.toFixed(2);
		jQuery("#steelPlintlab").text(steelPlintlab+" Metric Tonne @");
		jQuery("#steelPlintLabrate").text("₹ "+rate+" per Metric Tonne ");
		totSteelPlintLab=Math.floor(steelPlintlab*rate);
		jQuery("#totSteelPlintLab").text(totSteelPlintLab.toLocaleString('en-IN'));
		
		var totstlplinth=totSteelPlintLab+totStlPlinthMat;
		jQuery("#totstlplinth").text(totstlplinth.toLocaleString('en-IN'));
		return totstlplinth;
		
	}
	function calLayingBase()
	{
		var cubic_ft=data.Foundation[0].Laying_Base[0].Material[0].cubic_ft;
		var rate = data.Foundation[0].Laying_Base[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var baseMatft=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#baseMat").text(baseMatft+" cubic ft @");
		jQuery("#baseRate").text(rate+" per cubic ft");
		////alert(baseMatft+" "+rate);
		var totbaseMat=Math.ceil(baseMatft*rate);
		jQuery("#totbaseMat").text(totbaseMat.toLocaleString('en-IN'));
		
		
		var cubic_ft=data.Foundation[0].Laying_Base[0].Labour[0].cubic_ft;
		var rate = data.Foundation[0].Laying_Base[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var baseLab=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#baseLab").text(baseLab+" cubic ft @");
		jQuery("#labrate").text(rate+" per cubic ft");
		var totbaselab=Math.ceil(baseLab*rate);
		jQuery("#totbaselab").text(totbaselab.toLocaleString('en-IN'));
		
		var totbase=totbaselab+totbaseMat;
		jQuery("#totbase").text(totbase.toLocaleString('en-IN'));
		return totbase;
	}
	function calsuperColumn()
	{
		var cubic_ft=data.SuperStructure[0].Column[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Column[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var columnact=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#columnact").text(columnact+" cubic ft @");
		jQuery("#ratecol").text(rate+" per cubic ft");
		var totcolstruct=Math.ceil(columnact*rate);
		jQuery("#totcolstruct").text(totcolstruct.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Column[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Column[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var columnLabact=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#columnLabact").text(columnLabact+" cubic ft @");
		jQuery("#columnLabRate").text(rate+" per cubic ft");
		var totcolumnLab=Math.ceil(columnLabact*rate);
		jQuery("#totcolumnLab").text(totcolumnLab.toLocaleString('en-IN'));
		
		var totSuperColumn=totcolumnLab+totcolstruct;
		jQuery("#totSuperColumn").text(totSuperColumn.toLocaleString('en-IN'));
		
		return totSuperColumn;
	}
	
	function calsuperBeam()
	{
		
		var cubic_ft=data.SuperStructure[0].Beam[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Beam[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*cubic_ft;
		var beammmat=totalVal.toFixed(2);
		jQuery("#beammmat").text(beammmat+" cubic ft @");
		jQuery("#beamRate").text(rate+" per cubic ft");
		var totbeamMat=beammmat*rate;
		jQuery("#totbeamMat").text(totbeamMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Beam[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Beam[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*cubic_ft;
		var beamlab=totalVal.toFixed(2);
		jQuery("#beamlab").text(beamlab+" cubic ft @");
		jQuery("#beamRatelab").text(rate+" per cubic ft");
		var totbeamlab=beamlab*rate;
		jQuery("#totbeamlab").text(totbeamlab.toLocaleString('en-IN'));
		
		var totSuperBeam=totbeamlab+totbeamMat;
		jQuery("#totSuperBeam").text(totSuperBeam.toLocaleString('en-IN'));
		return totSuperBeam;
	}
	function calSuperSlab()
	{
		var cubic_ft=data.SuperStructure[0].Slab[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Slab[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var SlabcubicMat=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#SlabcubicMat").text(SlabcubicMat+" cubic ft @");
		jQuery("#SlabRateMat").text(rate+" per cubic ft");
		var totSlabMat=Math.ceil(SlabcubicMat+rate);
		jQuery("#totSlabMat").text(totSlabMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Slab[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Slab[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var SlabcubicLab=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#SlabcubicLab").text(SlabcubicLab+" cubic ft @");
		jQuery("#SlabrateLab").text(rate+" per cubic ft");
		var totSlabLab=Math.ceil(SlabcubicLab*rate);
		jQuery("#totSlabLab").text(totSlabLab.toLocaleString('en-IN'));
		
		var totSlabprice=+totSlabMat+ +totSlabLab;
		jQuery("#totSlabprice").text(totSlabprice.toLocaleString('en-IN'));
		return totSlabprice;
	}
	
	function calSuperLintel()
	{
		var cubic_ft=data.SuperStructure[0].Lintel[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Lintel[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var LintelMat=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#LintelMat").text(LintelMat+" cubic ft @");
		jQuery("#LintelRateMat").text(rate+" per cubic ft");
		 var totLintelMat=Math.ceil(LintelMat*rate);
		 jQuery("#totLintelMat").text(totLintelMat.toLocaleString('en-IN'));
		 
		 var cubic_ft=data.SuperStructure[0].Lintel[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Lintel[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var LintelLab=(totalVal2*cubic_ft).toFixed(2);
		jQuery("#LintelLab").text(LintelLab+" cubic ft @");
		jQuery("#LintelRate").text(rate+" per cubic ft");
		var totLintelLab=Math.ceil(LintelLab*rate);
		jQuery("#totLintelLab").text(totLintelLab.toLocaleString('en-IN'));
		
		var totSuperLintel=+totLintelLab+ +totLintelMat;
		jQuery("#totSuperLintel").text(totSuperLintel.toLocaleString('en-IN'));
		return totSuperLintel;
		
		
	}
	function calSuperChijja()
	{
		var cubic_ft=data.SuperStructure[0].Chijja[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Chijja[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var ChijjaMat=(totalVal2*cubic_ft).toFixed(2);
		var totChijjaMat=Math.ceil(ChijjaMat*rate);
		jQuery("#ChijjaMat").text(ChijjaMat+" cubic ft @");
		jQuery("#ChijjaRate").text(rate+" per cubic ft");
		jQuery("#totChijjaMat").text(totChijjaMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Chijja[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Chijja[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var ChijjaLab=(totalVal2*cubic_ft).toFixed(2);
		var totChijjaLab=Math.ceil(ChijjaLab*rate);
		jQuery("#ChijjaLab").text(ChijjaLab+" cubic ft @");
		jQuery("#ChijjaRateLab").text(rate+" per cubic ft");
		jQuery("#totChijjaLab").text(totChijjaLab.toLocaleString('en-IN'));
		
		var totSuperChijja=+totChijjaMat + +totChijjaLab;
		jQuery("#totSuperChijja").text(totSuperChijja.toLocaleString('en-IN'));
		return totSuperChijja;
		
	}
	function calSuperStaircase()
	{
		var cubic_ft=data.SuperStructure[0].Staircase[0].Material[0].cubic_ft;
		var rate = data.SuperStructure[0].Staircase[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var StaircaseMat=(totalVal2*cubic_ft).toFixed(2);
		var totStaircaseMat=StaircaseMat*rate;
		jQuery("#StaircaseMat").text(StaircaseMat+" cubic ft @");
		jQuery("#StaircaseRate").text(rate+" per cubic ft");
		jQuery("#totStaircaseMat").text(totStaircaseMat.toLocaleString('en-IN'));
		
		var cubic_ft=data.SuperStructure[0].Staircase[0].Labour[0].cubic_ft;
		var rate = data.SuperStructure[0].Staircase[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var StaircaseLab=(totalVal2*cubic_ft).toFixed(2);
		var totStaircaseLab=Math.ceil(StaircaseLab*rate);
		jQuery("#StaircaseLab").text(StaircaseLab+" cubic ft @");
		jQuery("#StaircaseRateLab").text(rate+" per cubic ft");
		jQuery("#totStaircaseLab").text(totStaircaseLab.toLocaleString('en-IN'));
		
		var totSuperStaircase=+totStaircaseMat + +totStaircaseLab;
		jQuery("#totSuperStaircase").text(totSuperStaircase.toLocaleString('en-IN'));
		return totSuperStaircase;
	}
	function calSuperStructure_steelColumn()
	{
		var Mt=data.SuperStructure_steel[0].Column[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Column[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(steelColumnMat-200));
		var totalVal = totalVal2*Mt;
		var steelColumnMat=totalVal.toFixed(2);
		var totsteeelColumnMat=Math.ceil(steelColumnMat*rate);
		jQuery("#steelColumnMat").text(steelColumnMat+" Metric Tonne @");
		jQuery("#steelMatRate").text(rate+" per Metric Tonne");
		jQuery("#totsteeelColumnMat").text(totsteeelColumnMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Column[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Column[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*Mt;
		var steelColumnLabour= totalVal.toFixed(2);
		var totsteeelColumnLabour=steelColumnLabour*rate;
		////alert(steelColumnLabour+" "+totalVal2+ " "+Mt);
		jQuery("#steelColumnLabour").text(steelColumnLabour+" Metric Tonne @");
		jQuery("#steelLabourRate").text(rate+" per Metric Tonne");
		jQuery("#totsteeelColumnLabour").text(totsteeelColumnLabour.toLocaleString('en-IN'));
		var totSuperStructure_steelColumn=+totsteeelColumnLabour+ +totsteeelColumnMat;
		jQuery("#totSuperStructure_steelColumn").text(totSuperStructure_steelColumn.toLocaleString('en-IN'));
		return totSuperStructure_steelColumn;
		
		
	}
	function calSuperStructure_steelBeam()
	{
		var Mt=data.SuperStructure_steel[0].Beam[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Beam[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//var totalVal2=(parseInt(totalVal-200));
		var totalVal = totalVal2*Mt;
		
		var steelBeamMat= totalVal.toFixed(2);
		var totsteeelBeamMat=steelBeamMat*rate;
		jQuery("#steelBeamMat").text(steelBeamMat+" Metric Tonne @");
		jQuery("#steelMatRateBeam").text(rate+" per Metric Tonne");
		jQuery("#totsteeelBeamMat").text(totsteeelBeamMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Beam[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Beam[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelBeamLabour= totalVal.toFixed(2);
		var totsteeelBeamLabour=steelBeamLabour*rate;
		////alert(steelBeamLabour+" "+totalVal2+ " "+Mt);
		jQuery("#steelBeamLabour").text(steelBeamLabour+" Metric Tonne @");
		jQuery("#steelBeamRate").text(rate+" per Metric Tonne");
		jQuery("#totsteeelBeamLabour").text(totsteeelBeamLabour.toLocaleString('en-IN'));
		var totSuperStructure_steelBeam=+totsteeelBeamLabour+ +totsteeelBeamMat;
		jQuery("#totSuperStructure_steelBeam").text(totSuperStructure_steelBeam.toLocaleString('en-IN'));
		return totSuperStructure_steelBeam;
		
		
	}
	function calSuperStructure_steelSlab()
	{
		var Mt=data.SuperStructure_steel[0].Slab[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Slab[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelSlabMat= totalVal.toFixed(2);
		var totsteeelSlabMat=Math.ceil(steelSlabMat*rate);
		jQuery("#steelSlabMat").text(steelSlabMat+" Metric Tonne @");
		jQuery("#steelMatRateSlab").text(rate+" per Metric Tonne");
		jQuery("#totsteeelSlabMat").text(totsteeelSlabMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Slab[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Slab[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelSlabLabour= totalVal.toFixed(2);
		var totsteeelSlabLabour=steelSlabLabour*rate;
		////alert(steelSlabLabour+" "+totalVal2+ " "+Mt);
		jQuery("#steelSlabLabour").text(steelSlabLabour+" Metric Tonne @");
		jQuery("#steelSlabRate").text(rate+" per Metric Tonne");
		jQuery("#totsteeelSlabLabour").text(totsteeelSlabLabour.toLocaleString('en-IN'));
		var totSuperStructure_steelSlab=+totsteeelSlabLabour+ +totsteeelSlabMat;
		jQuery("#totSuperStructure_steelSlab").text(totSuperStructure_steelSlab.toLocaleString('en-IN'));
		return totSuperStructure_steelSlab;
		
		
	}
	function calSuperStructure_steelLintel()
	{
		var Mt=data.SuperStructure_steel[0].Lintel[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Lintel[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelLintelMat=totalVal.toFixed(2);
		var totsteeelLintelMat=Math.ceil(steelLintelMat*rate);
		jQuery("#steelLintelMat").text(steelLintelMat+" Metric Tonne @");
		jQuery("#steelMatRateLintel").text(rate+" per Metric Tonne");
		jQuery("#totsteeelLintelMat").text(totsteeelLintelMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Lintel[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Lintel[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelLintelLabour=totalVal.toFixed(2);
		var totsteeelLintelLabour=Math.ceil(steelLintelLabour*rate);
		/////alert(steelLintelLabour+" "+totalVal2+ " "+Mt);
		jQuery("#steelLintelLabour").text(steelLintelLabour+" Metric Tonne @");
		jQuery("#steelLintelRate").text(rate+" per Metric Tonne");
		jQuery("#totsteeelLintelLabour").text(totsteeelLintelLabour.toLocaleString('en-IN'));
		var totSuperStructure_steelLintel=+totsteeelLintelLabour+ +totsteeelLintelMat;
		jQuery("#totSuperStructure_steelLintel").text(totSuperStructure_steelLintel.toLocaleString('en-IN'));
		return totSuperStructure_steelLintel;
		//335 changed value.
		
	}
	function calSuperStructure_steelChijja()
	{
		var Mt=data.SuperStructure_steel[0].Chijja[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Chijja[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelChijjaMat= totalVal.toFixed(2);
		var totsteeelChijjaMat=Math.ceil(steelChijjaMat*rate);
		jQuery("#steelChijjaMat").text(steelChijjaMat+" Metric Tonne @");
		jQuery("#steelMatRateChijja").text(rate+" per Metric Tonne");
		jQuery("#totsteeelChijjaMat").text(totsteeelChijjaMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Chijja[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Chijja[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelChijjaLabour=totalVal.toFixed(2);
		var totsteeelChijjaLabour=Math.ceil(steelChijjaLabour*rate);
		jQuery("#steelChijjaLabour").text(steelChijjaLabour+" Metric Tonne @");
		jQuery("#steelLabourRateChijja").text(rate+" per Metric Tonne");
		jQuery("#totsteeelChijjaLabour").text(totsteeelChijjaLabour.toLocaleString('en-IN'));
		//351 changed value.
		var totSuperStructure_steelChijja=+totsteeelChijjaLabour+ +totsteeelChijjaMat;
		jQuery("#totSuperStructure_steelChijja").text(totSuperStructure_steelChijja.toLocaleString('en-IN'));
		return totSuperStructure_steelChijja;
	}
	function calSuperStructure_steelStaircase()
	{
		var Mt=data.SuperStructure_steel[0].Staircase[0].Material[0].cubic_ft;
		var rate = data.SuperStructure_steel[0].Staircase[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal = totalVal2*Mt;
		var steelStaircaseMat= totalVal.toFixed(2);
		var totsteeelStaircaseMat=Math.ceil(steelStaircaseMat*rate);
		jQuery("#steelStaircaseMat").text(steelStaircaseMat+" Metric Tonne @");
		jQuery("#steelMatRateStaircase").text(rate+" per Metric Tonne");
		jQuery("#totsteeelStaircaseMat").text(totsteeelStaircaseMat.toLocaleString('en-IN'));
		
		var Mt=data.SuperStructure_steel[0].Staircase[0].Labour[0].cubic_mt;
		var rate = data.SuperStructure_steel[0].Staircase[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal=totalVal2*Mt;
		var steelStaircaseLabour=totalVal.toFixed(2);
		var totsteeelStaircaseLabour=steelStaircaseLabour*rate;
		jQuery("#steelStaircaseLabour").text(steelStaircaseLabour+" Metric Tonne @");
		jQuery("#steelLabourRateStaircase").text(rate+" per Metric Tonne");
		jQuery("#totsteeelStaircaseLabour").text(totsteeelStaircaseLabour.toLocaleString('en-IN'));
		//351 changed value.
		var totSuperStructure_steelStaircase=+totsteeelStaircaseLabour+ +totsteeelStaircaseMat;
		jQuery("#totSuperStructure_steelStaircase").text(totSuperStructure_steelStaircase.toLocaleString('en-IN'));
		return totSuperStructure_steelStaircase;
	}
	function calSuperStructureGranite_slab()
	{
		var Mt=data.SuperStructure[0].Granite_slab[0].Material[0].sq_ft;
		var rate = data.SuperStructure[0].Granite_slab[0].Material[0].rate;
		////alert(Mt+" "+rate);
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var totalVal=totalVal2*Mt;
		var steelGranite_slabMat=totalVal.toFixed(2);
		var totsteeelGranite_slabMat=steelGranite_slabMat*rate;
		jQuery("#steelGranite_slabMat").text(steelGranite_slabMat+" Metric Tonne @");
		jQuery("#steelMatRateGranite_slab").text(rate+" per Metric Tonne");
		jQuery("#totsteeelGranite_slab").text(totsteeelGranite_slabMat.toLocaleString('en-IN'));
		jQuery("#totsteeelGranite_slabMat").text(totsteeelGranite_slabMat.toLocaleString('en-IN'));
		return totsteeelGranite_slabMat;
		
		
	}
	function calWall_construction()
	{
		var value=jQuery("#radioBtnStructure").find(".active").attr("value");
		if(value == 1)
		{			
			jQuery("#Wall_BrickSize1").text("6 inch Thick Cement Block");
			jQuery("#Wall_BrickSize2").text("4 inch Thick Cement Block");			
			var square_ft=data.Walls[0].Six[0].Material[0].sq_ft;
			var rate = data.Walls[0].Six[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallSix_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallSix_Mat=Math.ceil(WallSix_Mat*rate);
			jQuery("#Bricksixrate").text(rate+" per sq ft");
			jQuery("#WallSix_Mat").text(WallSix_Mat+" sq ft@");
			jQuery("#totWallSix_Mat").text("₹"+totWallSix_Mat.toLocaleString('en-IN'));
			
			var square_ft=data.Walls[0].Six[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Six[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallSix_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallSix_Labour=Math.ceil(WallSix_Labour*rate);
			jQuery("#Bricksixrate2").text(rate+" per sq ft");
			jQuery("#WallSix_Labour").text(WallSix_Labour+" sq ft@");
			jQuery("#totWallSix_Labour").text(totWallSix_Labour.toLocaleString('en-IN'));
			
			var totSix_Cost =totWallSix_Labour+totWallSix_Mat;
			jQuery("#totSix_Cost").text(totSix_Cost.toLocaleString('en-IN'));
			
			
			var square_ft=data.Walls[0].Four[0].Material[0].sq_ft;
			var rate = data.Walls[0].Four[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFour_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFour_Mat=Math.ceil(WallFour_Mat*rate);
			jQuery("#BrickFourrate").text(rate+" per sq ft");
			jQuery("#WallFour_Mat").text(WallFour_Mat+" sq ft@");
			jQuery("#totWallFour_Mat").text("₹"+totWallFour_Mat.toLocaleString('en-IN'));
			
			
			
			var square_ft=data.Walls[0].Four[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Four[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFour_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFour_Labour=Math.ceil(WallFour_Labour*rate);
			jQuery("#BrickFourrate2").text(rate+" per sq ft");
			jQuery("#WallFour_Labour").text(WallFour_Labour+" sq ft@");
			jQuery("#totWallFour_Labour").text(totWallFour_Labour.toLocaleString('en-IN'));
			
				var totFour_Cost =totWallFour_Labour+totWallFour_Mat;
				jQuery("#totFour_Cost").text(totFour_Cost.toLocaleString('en-IN'));
				return totFour_Cost+totSix_Cost;
			
		}
		else if(value == 2){
			jQuery("#Wall_BrickSize1").text("8 inch Thick Cement Block");
			jQuery("#Wall_BrickSize2").text("4 inch Thick Cement Block");
			
			var square_ft=data.Walls[0].Eight[0].Material[0].sq_ft;
			var rate = data.Walls[0].Eight[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallEight_Mat=Math.ceil(parseInt(totalVal2*square_ft));
			////alert(square_ft+" "+totalVal2);
			var totWallEight_Mat=WallEight_Mat*rate;
			jQuery("#Bricksixrate").text(rate+" per sq ft");
			jQuery("#WallSix_Mat").text(WallEight_Mat+" sq ft@");
			jQuery("#totWallSix_Mat").text("₹"+totWallEight_Mat.toLocaleString('en-IN'));
			
			var square_ft=data.Walls[0].Eight[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Eight[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallEight_Labour=Math.ceil(parseInt(totalVal2*square_ft));
			////alert(square_ft+" "+totalVal2);
			var totWallEight_Labour=WallEight_Labour*rate;
			jQuery("#Bricksixrate2").text(rate+" per sq ft");
			jQuery("#WallSix_Labour").text(WallEight_Labour+" sq ft@");
			jQuery("#totWallSix_Labour").text(totWallEight_Labour.toLocaleString('en-IN'));
			
			var totEight_Cost =totWallEight_Labour+totWallEight_Mat;
			jQuery("#totSix_Cost").text(totEight_Cost.toLocaleString('en-IN'));
			
			
			var square_ft=data.Walls[0].Four[0].Material[0].sq_ft;
			var rate = data.Walls[0].Four[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFour_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFour_Mat=Math.ceil(WallFour_Mat*rate);
			jQuery("#BrickFourrate").text(rate+" per sq ft");
			jQuery("#WallFour_Mat").text(WallFour_Mat+" sq ft@");
			jQuery("#totWallFour_Mat").text(totWallFour_Mat.toLocaleString('en-IN'));
			
			
			
			var square_ft=data.Walls[0].Four[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Four[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFour_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFour_Labour=Math.ceil(WallFour_Labour*rate);
			jQuery("#BrickFourrate2").text(rate+" per sq ft");
			jQuery("#WallFour_Labour").text(WallFour_Labour+" sq ft@");
			jQuery("#totWallFour_Labour").text(totWallFour_Labour.toLocaleString('en-IN'));
			
				var totFour_Cost =totWallFour_Labour+totWallFour_Mat;
				jQuery("#totFour_Cost").text(totFour_Cost.toLocaleString('en-IN'));
				return  totFour_Cost+totEight_Cost;
				
		}
		else if(value == 3)
		{
		
			jQuery("#Wall_BrickSize1").text("9 inch Thick Burnt Brick");
			jQuery("#Wall_BrickSize2").text("4.5 inch Thick Burnt Brick");
			
			var square_ft=data.Walls[0].Nine[0].Material[0].sq_ft;
			var rate = data.Walls[0].Nine[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallNine_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallNine_Mat=Math.ceil(WallNine_Mat*rate);
			jQuery("#Bricksixrate").text(rate+" per sq ft");
			jQuery("#WallSix_Mat").text(WallNine_Mat+" sq ft@");
			jQuery("#totWallSix_Mat").text("₹"+totWallNine_Mat.toLocaleString('en-IN'));
			
			var square_ft=data.Walls[0].Nine[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Nine[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallNine_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallNine_Labour=Math.ceil(WallNine_Labour*rate);
			jQuery("#Bricksixrate2").text(rate+" per sq ft");
			jQuery("#WallSix_Labour").text(WallNine_Labour+" sq ft@");
			jQuery("#totWallSix_Labour").text(totWallNine_Labour.toLocaleString('en-IN'));
			
			var totNine_Cost =totWallNine_Labour+totWallNine_Mat;
			jQuery("#totSix_Cost").text(totNine_Cost.toLocaleString('en-IN'));
			
			
			var square_ft=data.Walls[0].Fourpointfive[0].Material[0].sq_ft;
			var rate = data.Walls[0].Fourpointfive[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFourpointfive_Mat=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFourpointfive_Mat=Math.ceil(WallFourpointfive_Mat*rate);
			jQuery("#BrickFourrate").text(rate+" per sq ft");
			jQuery("#WallFour_Mat").text(WallFourpointfive_Mat+" sq ft@");
			jQuery("#totWallFour_Mat").text(totWallFourpointfive_Mat.toLocaleString('en-IN'));
			
			
			
			var square_ft=data.Walls[0].Fourpointfive[0].Labour[0].sq_ft;
			var rate = data.Walls[0].Fourpointfive[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var WallFourpointfive_Labour=(totalVal2*square_ft).toFixed(2);
			////alert(square_ft+" "+totalVal2);
			var totWallFourpointfive_Labour=Math.ceil(WallFourpointfive_Labour*rate);
			jQuery("#BrickFourrate2").text(rate+" per sq ft");
			jQuery("#WallFour_Labour").text(WallFourpointfive_Labour+" sq ft@");
			jQuery("#totWallFour_Labour").text(totWallFourpointfive_Labour.toLocaleString('en-IN'));
			
				var totFourpointfive_Cost =totWallFourpointfive_Labour+totWallFourpointfive_Mat;
				jQuery("#totFour_Cost").text(totFourpointfive_Cost.toLocaleString('en-IN'));
				
				var tot3 = totNine_Cost+totFourpointfive_Cost;
				return tot3;
		}
		
		// return totcalWall_construction();
	}
	
	function calFlooring()
	{
		var value=jQuery("#radioBtnFlooring").find(".active").attr("value");
		////alert(value);
		if(value == 1)
		{
			jQuery("#flooringId").text("Vetrified Tiles");
			 var square_ft=data.Flooring[0].Vitrified[0].Tiles[0].sq_ft;
			 var rate=data.Flooring[0].Vitrified[0].Tiles[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var VetrifiedTiles = (totalVal2 * square_ft).toFixed(2);
			 ////alert(totalVal2+" "+square_ft);
			 jQuery("#VetrifiedTiles").text(VetrifiedTiles+" sq ft@");
			 jQuery("#VetrifiedTilesRate").text(rate+" per sq ft");
			 var totVetrifiedTiles = VetrifiedTiles*rate;
			 jQuery("#totVetrifiedTiles").text(totVetrifiedTiles.toLocaleString('en-IN'));
			 
			 var square_ft=data.Flooring[0].Vitrified[0].Material[0].sq_ft;
			 var rate=data.Flooring[0].Vitrified[0].Material[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var VetrifiedTilesMaterial = (totalVal2 * square_ft).toFixed(2);
			  jQuery("#VetrifiedTilesMaterial").text(VetrifiedTilesMaterial+" sq ft@");
			 jQuery("#VetrifiedTilesMaterialRate").text(rate+" per sq ft ");
			 var totVetrifiedTilesMaterial = Math.ceil(VetrifiedTilesMaterial*rate);
			 jQuery("#totVetrifiedTilesMaterial").text(totVetrifiedTilesMaterial.toLocaleString('en-IN'));
			 
			  var square_ft=data.Flooring[0].Vitrified[0].Labour[0].sq_ft;
			 var rate=data.Flooring[0].Vitrified[0].Labour[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var VetrifiedTilesLabour = (totalVal2 * square_ft).toFixed(2);
			  jQuery("#VetrifiedTilesLabour").text(VetrifiedTilesLabour+" sq ft@");
			 jQuery("#VetrifiedTilesLabourRate").text(rate+" per sq ft ");
			 var totVetrifiedTilesLabour = Math.ceil(VetrifiedTilesLabour*rate);
			 jQuery("#totVetrifiedTilesLabour").text(totVetrifiedTilesLabour.toLocaleString('en-IN'));
			 
			 var totVetrifiedFloor=totVetrifiedTilesLabour+totVetrifiedTilesMaterial+totVetrifiedTiles;
			 jQuery("#totVetrifiedFloor").text(totVetrifiedFloor.toLocaleString('en-IN'));
			  jQuery("#totVetrifiedFloor1").text(totVetrifiedFloor.toLocaleString('en-IN'));
			  return totVetrifiedFloor;
			 
			 
		}
		if(value == 2)
		{
			jQuery("#flooringId").text("Granite");
			
			var square_ft=data.Flooring[0].Granite[0].Tiles[0].sq_ft;
			 var rate=data.Flooring[0].Granite[0].Tiles[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var GraniteTiles = (totalVal2 * square_ft).toFixed(2);
			 ////alert(totalVal2+" "+square_ft);
			 jQuery("#VetrifiedTiles").text(GraniteTiles+" sq ft@");
			 jQuery("#VetrifiedTilesRate").text(rate+" per sq ft ");
			 var totGraniteTiles = Math.ceil(GraniteTiles*rate);
			 jQuery("#totVetrifiedTiles").text(totGraniteTiles.toLocaleString('en-IN'));
			 
			 var square_ft=data.Flooring[0].Granite[0].Material[0].sq_ft;
			 var rate=data.Flooring[0].Granite[0].Material[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var GraniteTilesMaterial = (totalVal2 * square_ft).toFixed(2);
			  jQuery("#VetrifiedTilesMaterial").text(GraniteTilesMaterial+" sq ft@");
			 jQuery("#VetrifiedTilesMaterialRate").text(rate+" per sq ft ");
			 var totGraniteTilesMaterial = Math.ceil(GraniteTilesMaterial*rate);
			 jQuery("#totVetrifiedTilesMaterial").text(totGraniteTilesMaterial.toLocaleString('en-IN'));
			 
			  var square_ft=data.Flooring[0].Granite[0].Labour[0].sq_ft;
			 var rate=data.Flooring[0].Granite[0].Labour[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var GraniteTilesLabour =(totalVal2 * square_ft).toFixed(2);
			  jQuery("#VetrifiedTilesLabour").text(GraniteTilesLabour+" sq ft@");
			 jQuery("#VetrifiedTilesLabourRate").text(rate+" per sq ft ");
			 var totGraniteTilesLabour =Math.ceil(GraniteTilesLabour*rate);
			 jQuery("#totVetrifiedTilesLabour").text(totGraniteTilesLabour.toLocaleString('en-IN'));
			 
			 var totGraniteFloor=totGraniteTilesLabour+totGraniteTilesMaterial+totGraniteTiles;
			 jQuery("#totVetrifiedFloor").text(totGraniteFloor.toLocaleString('en-IN'));
			  jQuery("#totVetrifiedFloor1").text(totGraniteFloor.toLocaleString('en-IN'));
			return totGraniteFloor;
			
		}
		if(value == 3)
		{
			jQuery("#flooringId").text("Premium Flooring Marble and Wooden Basic rate Rs 200");
			
			var square_ft=data.Flooring[0].Marble[0].Tiles[0].sq_ft;
			 var rate=data.Flooring[0].Marble[0].Tiles[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var MarbleTiles = (totalVal2 * square_ft).toFixed(2);
			 ////alert(totalVal2+" "+square_ft);
			 jQuery("#VetrifiedTiles").text(MarbleTiles+" sq ft@");
			 jQuery("#VetrifiedTilesRate").text(rate+" per sq ft ");
			 var totMarbleTiles = Math.ceil(MarbleTiles*rate);
			 jQuery("#totVetrifiedTiles").text(totMarbleTiles.toLocaleString('en-IN'));
			 
			 var square_ft=data.Flooring[0].Marble[0].Material[0].sq_ft;
			 var rate=data.Flooring[0].Marble[0].Material[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var MarbleTilesMaterial = (totalVal2 * square_ft).toFixed(2);
			  jQuery("#VetrifiedTilesMaterial").text(MarbleTilesMaterial+" sq ft@");
			 jQuery("#VetrifiedTilesMaterialRate").text(rate+" per sq ft ");
			 var totMarbleTilesMaterial = Math.ceil(MarbleTilesMaterial*rate);
			 jQuery("#totVetrifiedTilesMaterial").text(totMarbleTilesMaterial.toLocaleString('en-IN'));
			 
			  var square_ft=data.Flooring[0].Marble[0].Labour[0].sq_ft;
			 var rate=data.Flooring[0].Marble[0].Labour[0].rate;
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var MarbleTilesLabour =(totalVal2 * square_ft).toFixed(2);
			  jQuery("#VetrifiedTilesLabour").text(MarbleTilesLabour+" sq ft@");
			 jQuery("#VetrifiedTilesLabourRate").text(rate+" per sq ft ");
			 var totMarbleTilesLabour =Math.ceil(MarbleTilesLabour*rate);
			 jQuery("#totVetrifiedTilesLabour").text(totMarbleTilesLabour.toLocaleString('en-IN'));
			 
			 var totMarbleFloor=totMarbleTilesLabour+totMarbleTilesMaterial+totMarbleTiles;
			 jQuery("#totVetrifiedFloor").text(totMarbleFloor.toLocaleString('en-IN'));
			  jQuery("#totVetrifiedFloor1").text(totMarbleFloor.toLocaleString('en-IN'));
			return totMarbleFloor;
			
		}
		
	}
	
	function calWoodWorkDoors()
	{
		var value=jQuery("#radioBtnDoors").find(".active").attr("value");
		////alert(value);
		if(value == 1)
		{	
			jQuery("#doors").text("TeakWood Doors");
			var square_ft=data.Woodwork[0].Doors[0].Teakwood[0].Material[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].Teakwood[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var TeakWoodMaterial=(totalVal2*square_ft).toFixed(2);
			var totTeakWoodMaterial=Math.ceil(TeakWoodMaterial*rate);
			jQuery("#MaterialDoor").text(TeakWoodMaterial);
			jQuery("#WoodMaterialrate").text(rate+" per ft");
			jQuery("#totMaterialCost").text(totTeakWoodMaterial.toLocaleString('en-IN'));
			
			var square_ft=data.Woodwork[0].Doors[0].Teakwood[0].Labour[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].Teakwood[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var TeakWoodLabour=(totalVal2*square_ft).toFixed(2);
			var totTeakWoodLabour=Math.ceil(TeakWoodLabour*rate);
			jQuery("#LabourDoor").text(TeakWoodLabour);
			jQuery("#WoodLabourrate").text(rate+" per ft");
			jQuery("#totLabourCost").text(totTeakWoodLabour.toLocaleString('en-IN'));
			////alert("teakWood");
			var totTeakDoorPrice = totTeakWoodLabour+totTeakWoodMaterial;
			////alert(totTeakDoorPrice);
			jQuery("#totDoorPrice").text(totTeakDoorPrice.toLocaleString('en-IN'));
			return totTeakDoorPrice;
		
		}else if(value == 2)
		{
			jQuery("#doors").text("HonneWood Doors");
			var square_ft=data.Woodwork[0].Doors[0].HonneWood[0].Material[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].HonneWood[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			var HonneWoodMaterial=(totalVal2*square_ft).toFixed(2);
			var totHonneWoodMaterial=Math.ceil(HonneWoodMaterial*rate);
			jQuery("#MaterialDoor").text(HonneWoodMaterial);
			jQuery("#WoodMaterialrate").text(rate+"  per ft");
			jQuery("#totMaterialCost").text(totHonneWoodMaterial.toLocaleString('en-IN'));
			
			var square_ft=data.Woodwork[0].Doors[0].HonneWood[0].Labour[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].HonneWood[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			var HonneWoodLabour=(totalVal2*square_ft).toFixed(2);
			var totHonneWoodLabour=Math.ceil(HonneWoodLabour*rate);
			jQuery("#LabourDoor").text(HonneWoodLabour);
			jQuery("#WoodLabourrate").text(rate+"  per ft");
			jQuery("#totLabourCost").text(totHonneWoodLabour.toLocaleString('en-IN'));
			var totHonneWoodPrice = totHonneWoodLabour+totHonneWoodMaterial;
			jQuery("#totDoorPrice").text(totHonneWoodPrice.toLocaleString('en-IN'));
			return totHonneWoodPrice;
		}else if(value == 3)
		{
			jQuery("#doors").text("SalWood Doors");
			
			var square_ft=data.Woodwork[0].Doors[0].SalWood[0].Material[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].SalWood[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var SalWoodMaterial=(totalVal2*square_ft).toFixed(2);
			var totSalWoodMaterial=Math.ceil(SalWoodMaterial*rate);
			jQuery("#MaterialDoor").text(SalWoodMaterial);
			jQuery("#WoodMaterialrate").text(rate+"  per ft");
			jQuery("#totMaterialCost").text(totSalWoodMaterial.toLocaleString('en-IN'));
			
			var square_ft=data.Woodwork[0].Doors[0].SalWood[0].Labour[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].SalWood[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var SalWoodLabour=(totalVal2*square_ft).toFixed(2);
			var totSalWoodLabour=Math.ceil(SalWoodLabour*rate);
			jQuery("#LabourDoor").text(SalWoodLabour);
			jQuery("#WoodLabourrate").text(rate+" per  ft");
			jQuery("#totLabourCost").text(totSalWoodLabour.toLocaleString('en-IN'));
			////alert("teakWood");
			var totSalWoodPrice = totSalWoodLabour+totSalWoodMaterial;
			////alert(totSalWoodPrice);
			jQuery("#totDoorPrice").text(totSalWoodPrice.toLocaleString('en-IN'));
			return totSalWoodPrice;
		}else if(value == 4)
		{
			jQuery("#doors").text("OST Doors");
			//jQuery("#Material").text("Material + Labour");
			// jQuery("#wood").find(".table-borderless").id("labour").remove();
			//jQuery("#labour").remove();
			var square_ft=data.Woodwork[0].Doors[0].OSTDoors[0].Material[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].OSTDoors[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var OSTDoorsMaterial=(totalVal2*square_ft).toFixed(2);
			var totOSTDoorsMaterial=Math.ceil(OSTDoorsMaterial*rate);
			jQuery("#MaterialDoor").text(OSTDoorsMaterial);
			jQuery("#WoodMaterialrate").text(rate+"  per ft");
			jQuery("#totMaterialCost").text(totOSTDoorsMaterial.toLocaleString('en-IN'));
			
			 var square_ft=data.Woodwork[0].Doors[0].OSTDoors[0].Labour[0].sq_ft;
			 var rate=data.Woodwork[0].Doors[0].OSTDoors[0].Labour[0].rate;
			 ////alert(square_ft+""+rate);
			 var totalVal2=(parseInt(jQuery("#landArea").val()));
			 //var totalVal2=(parseInt(totalVal-200));
			 var OSTDoorsLabour=(totalVal2*square_ft).toFixed(2);
			 var totOSTDoorsLabour=Math.ceil(OSTDoorsLabour*rate);
			 jQuery("#LabourDoor").text(OSTDoorsLabour);
			 jQuery("#WoodLabourrate").text(rate+" per  ft");
			 jQuery("#totLabourCost").text(totOSTDoorsLabour.toLocaleString('en-IN'));
			 ////alert("teakWood");
			var totOSTDoorsPrice =totOSTDoorsMaterial+totOSTDoorsLabour;
			////alert(totSalWoodPrice);
			jQuery("#totDoorPrice").text(totOSTDoorsPrice.toLocaleString('en-IN'));
			return totOSTDoorsPrice;
		}
		
	}
	
	function calMainWoodWork()
	{
		var sq_ft=data.Woodwork[0].Doors[0].MainTeakwood[0].Material[0].sq_ft;
		var rate=data.Woodwork[0].Doors[0].MainTeakwood[0].Material[0].rate;
		
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var MainTeakWoodArea =(totalVal2*sq_ft).toFixed(2);
		var MainTeakWoodMat=Math.ceil(MainTeakWoodArea*rate);
			jQuery("#MainWindowMat").text(MainTeakWoodArea);
			jQuery("#MainWindowRate").text(rate+" per ft");
			jQuery("#MainWindowMatPrice").text(MainTeakWoodMat.toLocaleString('en-IN'));
			
			var sq_ft=data.Woodwork[0].Doors[0].MainTeakwood[0].Labour[0].sq_ft;
			var rate=data.Woodwork[0].Doors[0].MainTeakwood[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var MainTeakWoodArea =(totalVal2*sq_ft).toFixed(2);
			var MainTeakWoodlab=Math.ceil(MainTeakWoodArea*rate);
			jQuery("#MainWindowLabour").text(MainTeakWoodArea);
			jQuery("#MainWindowRateLabour").text(rate+" per ft");
			jQuery("#MainWindowLabourPrice").text(MainTeakWoodlab.toLocaleString('en-IN'));
			
			var MaintotWindowPrice = MainTeakWoodlab+MainTeakWoodMat;
			jQuery("#MaintotWindowPrice").text(MaintotWindowPrice.toLocaleString('en-IN'));
			return MaintotWindowPrice;
	}
	function calGrills()
	{
		var square_ft = data.Woodwork[0].Grills[0].MS_Grill[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Grills[0].MS_Grill[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var MS_GrillArea =(totalVal2*square_ft).toFixed(2);
			var MS_GrillMat=Math.ceil(MS_GrillArea*rate);
			jQuery("#WindowMatMS_Grill").text(MS_GrillArea);
			jQuery("#WindowRateMS_Grill").text(rate+" per  ft");
			jQuery("#WindowMatPriceMS_Grill").text(MS_GrillMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Grills[0].MS_Grill[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Grills[0].MS_Grill[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var MS_GrillArea =(totalVal2*square_ft).toFixed(2);
			var MS_Grilllab=Math.ceil(MS_GrillArea*rate);
			jQuery("#WindowLabourMS_Grill").text(MS_GrillArea);
			jQuery("#WindowRateLabourMS_Grill").text(rate+" per  ft");
			jQuery("#WindowLabourPriceMS_Grill").text(MS_Grilllab.toLocaleString('en-IN'));
			
			var totWindowPriceMS_Grill = MS_Grilllab+MS_GrillMat;
			jQuery("#totWindowPriceMS_Grill").text(totWindowPriceMS_Grill.toLocaleString('en-IN'));
			return totWindowPriceMS_Grill;
			
	}
	function calWoodWorkWindows()
	{
		var value=jQuery("#radioBtnWindows").find(".active").attr("value");
		
		

		if(value == 1)
		{
			//var square_ft=data.Woodwork[0].Doors[0].Teakwood[0].Material[0].sq_ft;
			jQuery("#WindowName").text("TeakWood Windows");
			var square_ft = data.Woodwork[0].Windows[0].Teakwood[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].Teakwood[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var TeakWoodArea =(totalVal2*square_ft).toFixed(2);
			var TeakWoodMat=Math.ceil(TeakWoodArea*rate);
			jQuery("#WindowMat").text(TeakWoodArea);
			jQuery("#WindowRate").text(rate+" per ft");
			jQuery("#WindowMatPrice").text(TeakWoodMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].Teakwood[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].Teakwood[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var TeakWoodArea =(totalVal2*square_ft).toFixed(2);
			var TeakWoodlab=Math.ceil(TeakWoodArea*rate);
			jQuery("#WindowLabour").text(TeakWoodArea);
			jQuery("#WindowRateLabour").text(rate+" per ft");
			jQuery("#WindowLabourPrice").text(TeakWoodlab.toLocaleString('en-IN'));
			
			var totWindowPrice = TeakWoodlab+TeakWoodMat;
			jQuery("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
			
		}else if(value == 2)
		{
			jQuery("#WindowName").text("HonneWood Windows");
			var square_ft = data.Woodwork[0].Windows[0].HonneWood[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].HonneWood[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var HonneWoodArea =(totalVal2*square_ft).toFixed(2);
			var HonneWoodMat=Math.ceil(HonneWoodArea*rate);
			jQuery("#WindowMat").text(HonneWoodArea);
			jQuery("#WindowRate").text(rate+" per ft");
			jQuery("#WindowMatPrice").text(HonneWoodMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].HonneWood[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].HonneWood[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var HonneWoodArea =(totalVal2*square_ft).toFixed(2);
			var HonneWoodlab=Math.ceil(HonneWoodArea*rate);
			jQuery("#WindowLabour").text(HonneWoodArea);
			jQuery("#WindowRateLabour").text(rate+" per ft");
			jQuery("#WindowLabourPrice").text(HonneWoodlab.toLocaleString('en-IN'));
			
			var totWindowPrice = HonneWoodlab+HonneWoodMat;
			jQuery("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
			
		}else if(value == 3)
		{
			jQuery("#WindowName").text("SalWood Windows");
			var square_ft = data.Woodwork[0].Windows[0].SalWood[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].SalWood[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var SalWoodArea =(totalVal2*square_ft).toFixed(2);
			var SalWoodMat=Math.ceil(SalWoodArea*rate);
			jQuery("#WindowMat").text(SalWoodArea);
			jQuery("#WindowRate").text(rate+"  per ft");
			jQuery("#WindowMatPrice").text(SalWoodMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].SalWood[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].SalWood[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var SalWoodArea =(totalVal2*square_ft).toFixed(2);
			var SalWoodlab=Math.ceil(SalWoodArea*rate);
			jQuery("#WindowLabour").text(SalWoodArea);
			jQuery("#WindowRateLabour").text(rate+" per ft");
			jQuery("#WindowLabourPrice").text(SalWoodlab.toLocaleString('en-IN'));
			
			var totWindowPrice = SalWoodlab+SalWoodMat;
			jQuery("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
		}else if(value == 4)
		{ 
			jQuery("#WindowName").text("UPVC Windows");
			var square_ft = data.Woodwork[0].Windows[0].UPVC[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].UPVC[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var UPVCArea = (totalVal2*square_ft).toFixed(2);
			var UPVCMat=Math.ceil(UPVCArea*rate);
			jQuery("#WindowMat").text(UPVCArea);
			jQuery("#WindowRate").text(rate+" per ft");
			jQuery("#WindowMatPrice").text(UPVCMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].UPVC[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].UPVC[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var UPVCArea =(totalVal2*square_ft).toFixed(2);
			var UPVClab=Math.ceil(UPVCArea*rate);
			jQuery("#WindowLabour").text(UPVCArea);
			jQuery("#WindowRateLabour").text(rate+" per ft");
			jQuery("#WindowLabourPrice").text(UPVClab.toLocaleString('en-IN'));
			
			var totWindowPrice = UPVClab+UPVCMat;
			jQuery("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
			
		}
		else if(value == 5)
		{ 
			jQuery("#WindowName").text("AluminumumWindows");
			var square_ft = data.Woodwork[0].Windows[0].Aluminumum[0].Material[0].sq_ft;;
			var rate = data.Woodwork[0].Windows[0].Aluminumum[0].Material[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var AluminumumArea = (totalVal2*square_ft).toFixed(2);
			var AluminumumMat=Math.ceil(AluminumumArea*rate);
			jQuery("#WindowMat").text(AluminumumArea);
			jQuery("#WindowRate").text(rate+"  per ft");
			jQuery("#WindowMatPrice").text(AluminumumMat.toLocaleString('en-IN'));
			
			
			var square_ft = data.Woodwork[0].Windows[0].Aluminumum[0].Labour[0].sq_ft;
			var rate = data.Woodwork[0].Windows[0].Aluminumum[0].Labour[0].rate;
			var totalVal2=(parseInt(jQuery("#landArea").val()));
			//var totalVal2=(parseInt(totalVal-200));
			var AluminumumArea =(totalVal2*square_ft).toFixed(2);
			var Aluminumumlab=Math.ceil(AluminumumArea*rate);
			jQuery("#WindowLabour").text(AluminumumArea);
			jQuery("#WindowRateLabour").text(rate+" per ft");
			jQuery("#WindowLabourPrice").text(Aluminumumlab.toLocaleString('en-IN'));
			
			var totWindowPrice = Aluminumumlab+AluminumumMat;
			jQuery("#totWindowPrice").text(totWindowPrice.toLocaleString('en-IN'));
			return totWindowPrice;
			
		}
		
	}
	
	function calTilesKitchen()
	{
		var square_ft=data.Tiling[0].Kitchen[0].Tiles[0].sq_ft;
		var rate = data.Tiling[0].Kitchen[0].Tiles[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var TilesCost =  (totalVal2 * square_ft).toFixed(2);
		var totTilesCost = Math.ceil(TilesCost*rate);
		jQuery("#TilesCost").text(TilesCost+" sq ft @");
		jQuery("#Tilesrate").text(rate+" per sq ft ");
		jQuery("#TotTilesCost").text(totTilesCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Kitchen[0].Material[0].sq_ft;
		var rate = data.Tiling[0].Kitchen[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var MaterialCost = (totalVal2 * square_ft).toFixed(2);
		var totMaterialCost = Math.ceil(MaterialCost*rate);
		jQuery("#MaterialCost").text(MaterialCost+" sq ft @");
		jQuery("#Materialrate").text(rate+" per sq ft ");
		jQuery("#TotMaterialCost").text(totMaterialCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Kitchen[0].Labour[0].sq_ft;
		var rate = data.Tiling[0].Kitchen[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var LabourCost =  (totalVal2 * square_ft).toFixed(2);
		var totLabourCost = Math.ceil(LabourCost*rate);
		jQuery("#LabourCost").text(LabourCost+" sq ft @");
		jQuery("#Labourrate").text(rate+" per sq ft ");
		jQuery("#TotLabourCost").text(totLabourCost.toLocaleString('en-IN'));
		
		var totTilesPrice=totLabourCost+totMaterialCost+totTilesCost;
		jQuery("#totTilesPrice").text(totTilesPrice.toLocaleString('en-IN'))
		return totTilesPrice;
		
	}
	function calTilesToilet()
	{
		var square_ft=data.Tiling[0].Toilet[0].Tiles[0].sq_ft;
		var rate = data.Tiling[0].Toilet[0].Tiles[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		////alert(totalVal2);
		var TilesCost =  (totalVal2 * square_ft).toFixed(2);
		var totTilesCost = Math.ceil(TilesCost*rate);
		jQuery("#TilesCostToilet").text(TilesCost+" sq ft @");
		jQuery("#TilesrateToilet").text(rate+" per sq ft ");
		jQuery("#TotTilesCostToilet").text(totTilesCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Toilet[0].Material[0].sq_ft;
		var rate = data.Tiling[0].Toilet[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		////alert(totalVal2);
		var MaterialCost = (totalVal2 * square_ft).toFixed(2);
		var totMaterialCost = Math.ceil(MaterialCost*rate);
		jQuery("#MaterialCostToilet").text(MaterialCost+" sq ft @");
		jQuery("#MaterialrateToilet").text(rate+" per sq ft ");
		jQuery("#TotMaterialCostToilet").text(totMaterialCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Toilet[0].Labour[0].sq_ft;
		var rate = data.Tiling[0].Toilet[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		////alert(totalVal2);
		var LabourCost =  (totalVal2 * square_ft).toFixed(2);
		var totLabourCost = Math.ceil(LabourCost*rate);
		jQuery("#LabourCostToilet").text(LabourCost+" sq ft @");
		jQuery("#LabourrateToilet").text(rate+" per sq ft ");
		jQuery("#TotLabourCostToilet").text(totLabourCost.toLocaleString('en-IN'));
		
		var totTilesPrice=totLabourCost+totMaterialCost+totTilesCost;
		jQuery("#totTilesPriceToilet").text(totTilesPrice.toLocaleString('en-IN'));
		return totTilesPrice;
	}
	
	function calTilesBathroom()
	{
		var square_ft=data.Tiling[0].Bathroom[0].Tiles[0].sq_ft;
		var rate = data.Tiling[0].Bathroom[0].Tiles[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		////alert(totalVal2);
		var TilesCost =  (totalVal2 * square_ft).toFixed(2);
		var totTilesCost = Math.ceil(TilesCost*rate);
		jQuery("#TilesCostBathroom").text(TilesCost+" sq ft @");
		jQuery("#TilesrateBathroom").text(rate+" per sq ft ");
		jQuery("#TotTilesCostBathroom").text(totTilesCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Bathroom[0].Material[0].sq_ft;
		var rate = data.Tiling[0].Bathroom[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		////alert(totalVal2);
		var MaterialCost =  (totalVal2 * square_ft).toFixed(2);
		var totMaterialCost = Math.ceil(MaterialCost*rate);
		jQuery("#MaterialCostBathroom").text(MaterialCost+" sq ft @");
		jQuery("#MaterialrateBathroom").text(rate+" per sq ft ");
		jQuery("#TotMaterialCostBathroom").text(totMaterialCost.toLocaleString('en-IN'));
		
		var square_ft=data.Tiling[0].Bathroom[0].Labour[0].sq_ft;
		var rate = data.Tiling[0].Bathroom[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		//alert(totalVal2);
		var LabourCost = (totalVal2 * square_ft).toFixed(2);
		var totLabourCost = Math.ceil(LabourCost*rate);
		jQuery("#LabourCostBathroom").text(LabourCost+" sq ft @");
		jQuery("#LabourrateBathroom").text(rate+" per sq ft ");
		jQuery("#TotLabourCostBathroom").text(totLabourCost.toLocaleString('en-IN'));
		
		var totTilesPrice=totLabourCost+totMaterialCost+totTilesCost;
		jQuery("#totTilesPriceBathroom").text(totTilesPrice.toLocaleString('en-IN'));
		return totTilesPrice;;
		
	}
	
	function calExteriorPainting()
	{	
	var value=jQuery("#radioBtnPaint").find(".active").attr("value");
	if(value == 1)
	{
		
		var square_ft=data.Painting[0].ExteriorWalls[0].Basic[0].Material[0].sq_ft;
		var rate = data.Painting[0].ExteriorWalls[0].Basic[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var extPaintcost = (totalVal2 * square_ft).toFixed(2);
		var totextPaintcost = Math.ceil(extPaintcost *rate);
		jQuery("#extPaintcost").text(extPaintcost);
		jQuery("#extPaintRate").text(rate+" per sq ft");
		jQuery("#totextPaintcost").text(totextPaintcost.toLocaleString('en-IN'));
		
		
		var square_ft=data.Painting[0].ExteriorWalls[0].Basic[0].Labour[0].sq_ft;
		var rate = data.Painting[0].ExteriorWalls[0].Basic[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var extPaintcostLabour = (totalVal2 * square_ft).toFixed(2);
		var totextPaintcostLabour = Math.ceil(extPaintcostLabour *rate);
		jQuery("#extPaintcostLabour").text(extPaintcostLabour);
		jQuery("#extPaintRateLabour").text(rate+" per sq ft");
		jQuery("#totextPaintcostLabour").text(totextPaintcostLabour.toLocaleString('en-IN'));
		
		var totIntPaint =totextPaintcostLabour+totextPaintcost;
		jQuery("#totIntPaint").text(totIntPaint);
		return totIntPaint;
		}else if(value == 2)
		{
			var square_ft=data.Painting[0].ExteriorWalls[0].Premium[0].Material[0].sq_ft;
		var rate = data.Painting[0].ExteriorWalls[0].Premium[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PremiumextPaintcost = (totalVal2 * square_ft).toFixed(2);
		var PremiumtotextPaintcost = Math.ceil(PremiumextPaintcost *rate);
		jQuery("#extPaintcost").text(PremiumextPaintcost);
		jQuery("#extPaintRate").text(rate+" per sq ft");
		jQuery("#totextPaintcost").text(PremiumtotextPaintcost.toLocaleString('en-IN'));
		
		
		var square_ft=data.Painting[0].ExteriorWalls[0].Premium[0].Labour[0].sq_ft;
		var rate = data.Painting[0].ExteriorWalls[0].Premium[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PremiumextPaintcostLabour = (totalVal2 * square_ft).toFixed(2);
		var PremiumtotextPaintcostLabour = Math.ceil(PremiumextPaintcostLabour *rate);
		jQuery("#extPaintcostLabour").text(PremiumextPaintcostLabour);
		jQuery("#extPaintRateLabour").text(rate+" per sq ft");
		jQuery("#totextPaintcostLabour").text(PremiumtotextPaintcostLabour.toLocaleString('en-IN'));
		
		var totIntPaint =PremiumtotextPaintcostLabour+PremiumtotextPaintcost;
		jQuery("#totIntPaint").text(totIntPaint);
		return totIntPaint;
		}
	}
	
	
	function calInteriorPainting()
	{
		var value=jQuery("#radioBtnPaint").find(".active").attr("value");
		if(value == 1)
	{
		var square_ft=data.Painting[0].InteriorWalls[0].Basic[0].Material[0].sq_ft;
		var rate = data.Painting[0].InteriorWalls[0].Basic[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var intPaintcost = (totalVal2 * square_ft).toFixed(2);
		var totintPaintcost = Math.ceil(intPaintcost *rate);
		jQuery("#intPaintcost").text(intPaintcost);
		jQuery("#intPaintRate").text(rate+" per sq ft");
		jQuery("#totintPaintcost").text(totintPaintcost.toLocaleString('en-IN'));
		
		
		var square_ft=data.Painting[0].InteriorWalls[0].Basic[0].Labour[0].sq_ft;
		var rate = data.Painting[0].InteriorWalls[0].Basic[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var intPaintcostLabour = (totalVal2 * square_ft).toFixed(2);
		var totintPaintcostLabour = Math.ceil(intPaintcostLabour *rate);
		jQuery("#intPaintcostLabour").text(intPaintcostLabour);
		jQuery("#intPaintRateLabour").text(rate+" per sq ft");
		jQuery("#totintPaintcostLabour").text(totintPaintcostLabour.toLocaleString('en-IN'));
		
		var totIntPaint =totintPaintcostLabour+totintPaintcost;
		jQuery("#totInttotIntPaintPaint").text(totIntPaint.toLocaleString('en-IN'));
		return totIntPaint;
		}else if(value == 2)
		{
		var square_ft=data.Painting[0].InteriorWalls[0].Premium[0].Material[0].sq_ft;
		var rate = data.Painting[0].InteriorWalls[0].Premium[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PremiumintPaintcost = (totalVal2 * square_ft).toFixed(2);
		var PremiumtotintPaintcost = Math.ceil(PremiumintPaintcost *rate);
		jQuery("#intPaintcost").text(PremiumintPaintcost);
		jQuery("#intPaintRate").text(rate+" per sq ft");
		jQuery("#totintPaintcost").text(PremiumtotintPaintcost.toLocaleString('en-IN'));
		
		
		var square_ft=data.Painting[0].InteriorWalls[0].Premium[0].Labour[0].sq_ft;
		var rate = data.Painting[0].InteriorWalls[0].Premium[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PremiumintPaintcostLabour = (totalVal2 * square_ft).toFixed(2);
		var PremiumtotintPaintcostLabour = Math.ceil(PremiumintPaintcostLabour *rate);
		jQuery("#intPaintcostLabour").text(PremiumintPaintcostLabour);
		jQuery("#intPaintRateLabour").text(rate+" per sq ft");
		jQuery("#totintPaintcostLabour").text(PremiumtotintPaintcostLabour.toLocaleString('en-IN'));
		
		var totIntPaint =PremiumtotintPaintcostLabour+PremiumtotintPaintcost;
		jQuery("#totInttotIntPaintPaint").text(totIntPaint.toLocaleString('en-IN'));
		return totIntPaint;
		}
	}
	
	function calPlasteringCeiling()
	{
		var cubic_ft=data.Plastering[0].Ceiling[0].Material[0].cubic_ft;
		var rate = data.Plastering[0].Ceiling[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PlasteringCeiling = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterCeiling =Math.ceil(PlasteringCeiling * rate);
		jQuery("#PlasteringCeiling").text(PlasteringCeiling);
		jQuery("#PlasteringRate").text(rate+" per sq ft");
		jQuery("#totPlasterCeiling").text(totPlasterCeiling.toLocaleString('en-IN'));
		
		var cubic_ft=data.Plastering[0].Ceiling[0].Labour[0].cubic_ft;
		var rate = data.Plastering[0].Ceiling[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PlasteringCeilingLabour = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterCeilingLabour =Math.ceil(PlasteringCeilingLabour * rate);
		jQuery("#PlasteringCeilingLabour").text(PlasteringCeilingLabour);
		jQuery("#PlasteringRateLabour").text(rate+" per sq ft");
		jQuery("#totPlasterCeilingLabour").text(totPlasterCeilingLabour.toLocaleString('en-IN'));
		
		var totPlasterCeilingwhole=totPlasterCeilingLabour+totPlasterCeiling;
		jQuery("#totPlasterCeilingwhole").text(totPlasterCeilingwhole.toLocaleString('en-IN'));
		return totPlasterCeilingwhole;
	}
	
	function calPlasteringInternalWall()
	{
		var cubic_ft=data.Plastering[0].InternalWall[0].Material[0].cubic_ft;
		var rate = data.Plastering[0].InternalWall[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PlasteringInternalWall = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterInternalWall =Math.ceil(PlasteringInternalWall * rate);
		jQuery("#PlasteringInternalWall").text(PlasteringInternalWall);
		jQuery("#PlasteringRateInternalWall").text(rate+" per sq ft");
		jQuery("#totPlasterInternalWall").text(totPlasterInternalWall.toLocaleString('en-IN'));
		
		var cubic_ft=data.Plastering[0].InternalWall[0].Labour[0].cubic_mt;
		var rate = data.Plastering[0].InternalWall[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PlasteringInternalWallLabour =(totalVal2*cubic_ft).toFixed(2);
		var totPlasterInternalWallLabour =Math.ceil(PlasteringInternalWallLabour * rate);
		jQuery("#PlasteringInternalWallLabour").text(PlasteringInternalWallLabour);
		jQuery("#PlasteringRateLabourInternalWall").text(rate+" per sq ft");
		jQuery("#totPlasterInternalWallLabour").text(totPlasterInternalWallLabour.toLocaleString('en-IN'));
		
		var totPlasterInternalWallwhole=totPlasterInternalWallLabour+totPlasterInternalWall;
		jQuery("#totPlasterInternalWallwhole").text(totPlasterInternalWallwhole.toLocaleString('en-IN'));
		return totPlasterInternalWallwhole;
	}
	
	function calPlasteringExternalSurfaces()
	{
		var cubic_ft=data.Plastering[0].ExternalSurfaces[0].Material[0].cubic_ft;
		var rate = data.Plastering[0].ExternalSurfaces[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PlasteringExternalSurfaces = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterExternalSurfaces =Math.ceil(PlasteringExternalSurfaces * rate);
		jQuery("#PlasteringExternalSurfaces").text(PlasteringExternalSurfaces);
		jQuery("#PlasteringRateExternalSurfaces").text(rate+" per sq ft");
		jQuery("#totPlasterExternalSurfaces").text(totPlasterExternalSurfaces.toLocaleString('en-IN'));
		
		var cubic_ft=data.Plastering[0].ExternalSurfaces[0].Labour[0].cubic_mt;
		var rate = data.Plastering[0].ExternalSurfaces[0].Labour[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var PlasteringExternalSurfacesLabour = (totalVal2*cubic_ft).toFixed(2);
		var totPlasterExternalSurfacesLabour =Math.ceil(PlasteringExternalSurfacesLabour * rate);
		jQuery("#PlasteringExternalSurfacesLabour").text(PlasteringExternalSurfacesLabour);
		jQuery("#PlasteringRateLabourExternalSurfaces").text(rate+" per sq ft");
		jQuery("#totPlasterExternalSurfacesLabour").text(totPlasterExternalSurfacesLabour.toLocaleString('en-IN'));
		
		var totPlasterExternalSurfaceswhole=totPlasterExternalSurfacesLabour+totPlasterExternalSurfaces;
		jQuery("#totPlasterExternalSurfaceswhole").text(totPlasterExternalSurfaceswhole.toLocaleString('en-IN'));
		
		return totPlasterExternalSurfaceswhole;
	}
	
	function calMiscellaneousElectrification()
	{
		var square_ft=data.Miscellaneous[0].Electrification[0].Material[0].sq_ft;
		var rate = data.Miscellaneous[0].Electrification[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var Electricneeds = (totalVal2*square_ft).toFixed(2);
		var totElectricneeds =Math.ceil(Electricneeds*rate);
		jQuery("#Electricneeds").text(Electricneeds);
		jQuery("#ElelctricRate").text(rate);
		jQuery("#totElectricneeds").text(totElectricneeds.toLocaleString('en-IN'));
		jQuery("#totElectricneeds2").text(totElectricneeds.toLocaleString('en-IN'));
		return totElectricneeds;
		
	}
	function calMiscellaneousSanitary()
	{
		var square_ft=data.Miscellaneous[0].Sanitary[0].Material[0].sq_ft;
		var rate = data.Miscellaneous[0].Sanitary[0].Material[0].rate;
		var totalVal2=(parseInt(jQuery("#landArea").val()));
		var Sanitaryneeds = (totalVal2*square_ft).toFixed(2);
		var totSanitaryneeds =Math.ceil(Sanitaryneeds*rate);
		jQuery("#Sanitaryneeds").text(Sanitaryneeds);
		jQuery("#SanitaryRate").text(rate);
		jQuery("#totSanitaryneeds").text(totSanitaryneeds.toLocaleString('en-IN'));
		jQuery("#totSanitaryneeds2").text(totSanitaryneeds.toLocaleString('en-IN'));
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
		var totFoundation=Math.ceil(EarthWork+CuringConcrete+SSM_Foundation+ConcreteFooting+ColumnConcrete+PlinthConcrete);
		jQuery("#totFoundation2").text(totFoundation.toLocaleString('en-IN'));
		jQuery("#totFoundationall").text(totFoundation.toLocaleString('en-IN'));
		return totFoundation;
		
	}
	function calSteel()
	{
		var SteelFooting=calSteelFooting();
		var SteelColumn=calSteelColumn();
		var SteelPlinth = calSteelPlinth();
		var totSteel = SteelFooting+SteelColumn+SteelPlinth;
		jQuery("#totSteel").text(totSteel.toLocaleString('en-IN'));
		jQuery("#totSteelall").text(totSteel.toLocaleString('en-IN'));
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
		jQuery("#totSuperStructure").text(totSuperStructure.toLocaleString('en-IN'));
		jQuery("#totSuperStructureall").text(totSuperStructure.toLocaleString('en-IN'));
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
		jQuery("#SuperStructure_Steel").text(SuperStructure_Steel.toLocaleString('en-IN'));
		jQuery("#SuperStructure_Steelall").text(SuperStructure_Steel.toLocaleString('en-IN'));
		return SuperStructure_Steel;
		
	}
	
	function calWoodWork()
	{
		var WoodWorkDoors = calWoodWorkDoors();
		var WoodWorkWindows=calWoodWorkWindows();
		var MainWoodWork=calMainWoodWork();
		var Grills= calGrills();
		var totWoodWork = WoodWorkDoors+WoodWorkWindows+MainWoodWork+Grills;
			jQuery("#totWoodWork").text(totWoodWork.toLocaleString('en-IN'));
			jQuery("#totWoodWorkall").text(totWoodWork.toLocaleString('en-IN'));
			return totWoodWork;
	}
	function callWallTiles()
	{
		var TilesToilet= calTilesToilet();
		var TilesKitchen=calTilesKitchen();
		var  TilesBathroom=calTilesBathroom();
		var WallTiles = TilesToilet+TilesKitchen+TilesBathroom;
			jQuery("#WallTiles").text(WallTiles.toLocaleString('en-IN'));
			jQuery("#WallTilesall").text(WallTiles.toLocaleString('en-IN'));
			return WallTiles;
		
	}
	function calPainting()
	{
		var interior =calInteriorPainting();
		 var exterior =calExteriorPainting();
		 var totPainting =interior+exterior;
		 jQuery("#totPaintingall").text(totPainting.toLocaleString('en-IN'));
		 jQuery("#totPainting2").text(totPainting.toLocaleString('en-IN'));
		 return totPainting;
	}
	function calPlastering()
	{
		var ceiling = calPlasteringCeiling();
		var Internal= calPlasteringInternalWall();
		 var External=calPlasteringExternalSurfaces();
		 var totPlastering = ceiling+Internal+External;
		 jQuery("#totPlastering").text(totPlastering.toLocaleString('en-IN'));
		 jQuery("#totPlasteringall").text(totPlastering.toLocaleString('en-IN'));
		 return totPlastering;
	}	
	function calMiscellaneous()
	{
		var electricity = calMiscellaneousElectrification();
		var plumbing = calMiscellaneousSanitary();
		var totMisc =electricity+plumbing;
		jQuery("#totMiscall").text(totMisc.toLocaleString('en-IN'));
		jQuery("#totplumb").text(totMisc.toLocaleString('en-IN'));
		jQuery("#totMiscq1").text(totMisc.toLocaleString('en-IN'));
		//alert(totMisc);
		return totMisc;
	}
	function calmainFlooring()
	{
		var Flooring =calFlooring();
		jQuery("#Flooring").text(Flooring.toLocaleString('en-IN'));
		return Flooring;
	}
	function Wall_Construction()
	{
		var totWallconstruct=calWall_construction();
		jQuery("#totWallconstruct").text(totWallconstruct.toLocaleString('en-IN'));
		jQuery("#totWallconstructall").text(totWallconstruct.toLocaleString('en-IN'));
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
		var tothomecost = Math.ceil(wallconstruction+flooring+misc+Plastering+paint+tiles+wood+supersteel+superstructure+steelnorm+foundation);
		jQuery("#tothomecost").text(tothomecost.toLocaleString('en-IN'));
		jQuery("#tothomecostRE").text(tothomecost.toLocaleString('en-IN'));
		var floorval=jQuery("#floorDropdwnval").val().trim();
		jQuery("#totalConstHomeText").text("Total Cost of Construction in Bangalore for Building your Residential  House of ("+jQuery("#dwnFloortext").text().trim()+") on ("+jQuery("#landAreatext").val().trim()+" sq ft) Site at "+jQuery("#dwnText").val().trim()+", Bangalore is Rs.");
		jQuery("#totalConstHomeTextRe").text("Total Cost of Construction in Bangalore for Building your Residential  House of ("+jQuery("#dwnFloortext").text().trim()+") on ("+jQuery("#landAreatext").val().trim()+" sq ft) Site at "+jQuery("#dwnText").val().trim()+", Bangalore is Rs.");
		jQuery("#totalConstHomeText1").text("Total Cost: Rs."+tothomecost.toLocaleString('en-IN'));
		var x=convertNumberToWords(tothomecost);
		jQuery("#totalHomeCostInWords").text('Total Cost of Construction: Rs.'+tothomecost.toLocaleString('en-IN'));
		jQuery("#CostInWords").text('Rupees '+(x==""?tothomecost.toLocaleString('en-IN'):x.toLocaleString('en-IN')));
		
	}
	function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
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
  ],
  "SuperBuilt": [
		{
			"percent": [
				{
					"value":"25.0"
				}
			]
		}
	]
}
