var request = require('request');
var fs = require('fs');

var DEST_PATH = './temp/{0}/';
var GOOGLE_MAP_API_URL = 'http://maps.googleapis.com/maps/api/streetview?size=800x600&location={0}&heading={1}&fov=90&pitch=0&sensor=false';

var addr;

function fetchGMapStreetImg(address) {
    console.log('getting images for ' + address);
    addr = address;

    for(var angle = 0; angle <= 330; angle += 30)
        fetchGMapStreetImgFromOneAngle(angle);
}

function fetchGMapStreetImgFromOneAngle(angle) {
    console.log('fetching', addr, angle);
    request(getGMapsAPIUrl(angle)).pipe(
        fs.createWriteStream(
            getDestImgUrl(angle)
        ));
}

function getDestImgUrl(angle) {
    var destFolder = DEST_PATH.replace('{0}', encodeURIComponent(addr));
    var destPath = destFolder + angle + '.png';
    console.log(destPath);

    fs.mkdir(destFolder);

    return destPath;
}

function getGMapsAPIUrl(angle) {
    console.log(GOOGLE_MAP_API_URL.replace('{0}', encodeURIComponent(addr)).replace('{1}', angle));
    return GOOGLE_MAP_API_URL.replace('{0}', encodeURIComponent(addr)).replace('{1}', angle);
}

module.exports.fetchGMapStreetImg = fetchGMapStreetImg;