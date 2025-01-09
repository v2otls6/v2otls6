////store only js... @ www.crickety.com/common/store.js

// ====== ::WESBITE:: ONLY ============

// -------- CR ONLY VARS ---------

thsBlg_dom = "store.crickety.com";
thsBlg_amz = {
	'com': 'crickety-20',
	'ca': 'cricketyca-20',
	'co.uk': 'crickety-21',
	'de': 'cricketyde-21',
	'fr': 'cricketyfr04-21',
	'it': 'cricketyit-21',
	'es': 'cricketyes-21',
	'def_kw': 'cricket sport',
	'def_kw_2': 'cricket sport',
	'def_cat': 'All',
	'def_cat_2': 'All',
	'def_node': '',
	'def_node_2': '',
};
thsBlg_cse = "00\x32\x34\x31\x31\x38\x34\x39\x36144802\x34\x37\x37\x341:rw5mxj29w74";
thsBlg_cse_adchannel = "8774725847";
thsBlg_epn = "5337904756";
thsBlg_epn_epnSmPl = "605f122c8809e1b30df66131";
thsBlg_zzl = "";
thsBlg_dyn_catcher = "www.crickety.com/common/c/";
thsBlg_img_cdn = "www.crickety.com/common/i/";
thsBlg_gasJsnPrx = "\x41\x4B\x66\x79\x63\x62\x7A\x41\x33\x6F\x33\x77\x62\x34\x57\x6D\x48\x61\x74\x57\x33\x5A\x61\x47\x71\x59\x33\x42\x35\x73\x52\x4E\x56\x50\x4E\x67\x6C\x75\x47\x38\x6A\x79\x71\x33\x48\x64\x77\x4A\x48\x67\x5A\x71\x78\x77\x6B";
thsBlg_reportProductForm = "1FAIpQLSc6OnBWcMB5vRIG4e_RCBYZ1wZxCxPeWu-bLRKireXNcbtdNQ";
thsBlg_menulinks = [];

// -------- /CR ONLY VARS ---------

// -------- CR ONLY FUNCS ---------

// -------- /CR ONLY FUNCS ---------

// ====== ::WESBITE:: ONLY  ============

// 
// 

// ======= ALL COMMON FROM BELOW ==============

// 
if (typeof bnndQry === 'undefined') {
	bnndQry = 'no';
}
//
// 

// 
// 
// 
// ========== FUNCTIONS ==========

function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function showLabels(json) {
	var label = json.feed.category;
	var list = $('<ul class="list-unstyled"></ul>');

	for (var i = 0; i < label.length; i++) {
		var listItem = $('<li></li>');
		var link = $('<a></a>')
			.attr('href', "https://" + thsBlg_dom + '/search/label/' + encodeURIComponent(label[i].term))
			.text(label[i].term);
		listItem.append(link);
		list.append(listItem);
	}
	$('#allLabels').append(list);
}

function allBloggerLabels() {
	// req jquery, showLabels()
	try {
		$.getScript("https://" + thsBlg_dom + '/feeds/posts/summary?max-results=0&alt=json-in-script&callback=showLabels');
	} catch (e) {}
}

function handleBrokenImages() {
	///// HNDLE BRKN IMGS - v2
	// req: epnSrchURL()
	$('.postbody a img').each(function(index) {
		if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth < 100) { // < 100 (ebay fallbck is 80px w) (default is 0 )
			var imgSrc = $(this).attr('src') || '';
			var redirURL = '';
			var redirQuery = $('h1').text().replace(/\s+/igm, " ").replace(/^[^\:]*\:(.*)/igm, "$1").replace(/[^A-Za-z\s]/igm, "").trim().replace(/\s+/igm, "+").trim();

			if (imgSrc.match(/amazon/)) {
				redirURL = amzSrchURL(thsBlg_amz.com, redirQuery);
			} else {
				redirURL = epnSrchURL(thsBlg_epn, redirQuery);
			}
			// 
			$(this).parent().replaceWith('<div style="margin:20px auto"><div class="panel panel-warning">   <div class="panel-heading"> <span class="glyphicon glyphicon-info-sign"></span> Oops! It seems this item got moved or re-categorized... <br/><a id="mssngImgRedir_' + index + '" class="btn btn-warning" href="' + redirURL + '" role="button"><b style="font-size:120%">Locate Item Now</b> &#x25B6; </a> </div>     </div></div> ');
			// 
			$("#mssngImgRedir_" + index).click(function() {

			});

			// 

		}
	});
	/// HNDLE BRKN IMGS
}

// -------- AMZ/EPN FUNCS ----------

function epn_rover2newURL(url, campid) {
	//// v1 
	var url = url.toString();
	return "https://www.ebay.com/itm/" + url.match(/item\=([0-9]+)/im)[1] + "?mkrid=711-53200-19255-0&siteid=0&mkcid=1&campid=" + campid + "&toolid=10044&customid=&mkevt=1";
}

function amzSrchURL(affId, srchQry, categ) {
	// v1
	// optional categ: amz index
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	var b = (typeof categ === 'undefined') ? '' : categ;
	return 'https://www.amazon.com/gp/search?ie=UTF8&tag=' + affId + '&index=' + b + '&keywords=' + srchQry;
}

function epnSrchURL(campId, srchQry) {
	// v2 
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	return 'https://www.ebay.com/sch/i.html?_ex_kw=&_mPrRngCbx=1&_nkw=' + a + '&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=' + campId + '&customid=&toolid=10001&mkevt=1';
}

function amazonCleanUrl(strURL, strTLD, strAffId) {
	// v4 
	if (strURL.match("/(?!/e|st)../([A-Z0-9]{10})") === null) {
		return strURL;
	} else {
		var strAsin = strURL.match("/(?!/e|st)../([A-Z0-9]{10})")[1] || strURL;
		//    return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + strAsin + "/" + strAffId; /// old style
		// return "https://www.amazon." + strTLD + "/dp/" + strAsin + "?tag=" + strAffId; /// clean no params    
		return "https://www.amazon." + strTLD + "/dp/" + strAsin + "?tag=" + strAffId + '&linkCode=osi&th=1&psc=1'; /// api v5 url
	}
}

// -------- /AMZ/EPN FUNCS ----------

function gCSE(cx, ch) {

	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;

	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);

	$('#cse_searchbox').append("<gcse:searchbox adchannel='" + ch + "' queryParameterName='s'></gcse:searchbox>");
	$('#cse_searchresults').append("<gcse:searchresults></gcse:searchresults>");
}

function menulinks() {
	try {
		var menulinks = thsBlg_menulinks.flat(Infinity).join(' ');
		$('#logoheader').append('<div id="lh1">' + menulinks + '</div>');
	} catch (e) {}
}

// ========== /FUNCTIONS ==========

// 
// 

// ============================
// ============================
// ============================
// ============================
// ============================
// ============================
// ========== EXEC ============
// ============================
// ============================
// ============================
// ============================
// ============================
// ============================

$(function() {
	// ========= ALL =========

	menulinks();

	gCSE(thsBlg_cse, thsBlg_cse_adchannel);

	// 
	/// amz url clean
	// *** CLEAN ALL AMZ API URLS to .com/dp/xxx?tag=yyy ***
	try {
		$('.postbody a').each(function(index) {
			var aurl = $(this).attr('href').trim();
			if (aurl.match(/(amazon\.|amzn\.)/igm)) {
				var a = amazonCleanUrl(aurl, "com", thsBlg_amz.com);
				$(this).attr('href', a);
				// console.log(a);
			}
		});
	} catch (e) {}
	////
	//// epn new "track urls" instead of rover
	try {
		$('.postbody a').each(function(index) {
			var aurl = $(this).attr('href').trim();
			if (aurl.match(/rover\.ebay/im)) {
				// console.log(aurl);
				var a = epn_rover2newURL(aurl, thsBlg_epn)
				$(this).attr('href', a);
				// console.log(a);
			}
		});
	} catch (e) {}
	/////
	// 
	try {
		$('.postbody h3').each(function(index) {
			// $(this).html(' More Details &amp; Prices ');
			$(this).remove();
			// $(this).addClass('btn btn-info');
		});
		$('.postbody a:nth-child(5)').each(function(index) {
			$(this).html(' Price &amp; details &#9658; ');
			$(this).addClass('btn btn-success');
			$(this).attr({
				'target': '_blank'
			});
		});
	} catch (e) {}
	// 

	$('.blogger-labels').before(`

			<div style="clear:both;"></div>

			<div style="text-align:right;">

			<a class="reportthis" rel="nofollow" href="https://docs.google.com/forms/d/e/${thsBlg_reportProductForm}/viewform?usp=sf_link">

			<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Report Item
			</a>
			</div>


			`);
	// 
	allBloggerLabels();
	// 
});

// ============== ALL LAST --- WINDOW ON LOAD ===================

$(window).on("load", function() {

	handleBrokenImages();

}); /// window onload
//
// 
// ============== /ALL LAST --- WINDOW ON LOAD ===================
// 
// 
//