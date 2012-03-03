var should = require('should');
var fs = require('fs');
var getimgs = require('../getimg.js');

should.exist(getimgs);

getimgs.should.have.property('fetchGMapStreetImg');
getimgs.fetchGMapStreetImg("one infinite loop, cupertino, ca");
getimgs.fetchGMapStreetImg("Avenue Anatole France / Avenue Gustave Eiffel, Paris, Île-de-France, France");

console.log('google maps street image test complete');
