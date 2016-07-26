$(document).on("ready",function(){

$(function initialize() {
	var latlng = new google.maps.LatLng(50.4501, 30.5234);
	var settings = {
		zoom: 15,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
				
	google.maps.event.addListener(companyMarker, 'click', function() {
	infowindow.open(map,companyMarker);
	});
})

})