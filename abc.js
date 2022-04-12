x = navigator.geolocation;

x.getCurrentPossition(success, failure);

function success(position) {
    
    var myLat = position.coords.latitudes;
    var myLong = position.coords.longtitude;

    var coords = new google.maps.LatLng(,yLat, myLong);

    var mapoptions = {

        zoom: 10,
        center: coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOption)
    var marker = new google.maps.Marker({
        map:map,
        position:coords
    });
}

function failure(){}