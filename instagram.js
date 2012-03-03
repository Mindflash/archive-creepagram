var config = require('./config/config.js');
var instagram = require('instagram').createClient(config.instagramKey, config.instagramSecret);

function getPopularImages(callback) {

    instagram.media.popular(function (images, error) {

        var viewData = [];

        images.forEach(function(o) {
            if(o['location'] != null &&
                o.location['latitude'] !== undefined &&
                o.location['longitude'] !== undefined)
            {
                viewData.push({
                    location: { lat: o.location.latitude, long: o.location.longitude },
                    url: o.images.standard_resolution.url
                });
            }
        });

        callback(viewData);
    });
}

module.exports.getPopularImages = getPopularImages;


