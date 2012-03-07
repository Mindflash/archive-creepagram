var should = require('should')
var fs = require('fs')
var getimgs = require('../getimg.js')

describe('Google Street View downloader module', function() {
    it('has a method that downloads a range of images based on the location I pass in', function(done) {
        should.exist(getimgs)
        getimgs.should.have.property('fetchGMapStreetImg')
        getimgs.fetchGMapStreetImg('one infinite loop, cupertino, ca')
        // add more test here
        done()
    })
})