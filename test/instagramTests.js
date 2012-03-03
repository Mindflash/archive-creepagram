
var instagram = require('instagram').createClient(userkey, secretkey);
var should = require('should');

// fetch popular media
instagram.media.popular(function (images, error) {
    var imgs = images.data;

});


