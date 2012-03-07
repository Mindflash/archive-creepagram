//var should = require('should');
//var request = require('request');
//var fs = require('fs');
//
//var fileReq = request('http://static.adzerk.net/Advertisers/9acd6a486d534ef98d3323add5ed13d5.jpg');
//should.exist(fileReq);
//fileReq.should.be.ok;
//fileReq.should.have.property('pipe');
//fileReq.should.have.property('readable');
//fileReq.readable.should.be.true;
//
//var pipedStream = fs.createWriteStream('./temp/testImg3.png');
//pipedStream.should.not.equal(null);
//pipedStream.on('end', function(done) {
//    console.log('yay');
//});
//
//var pipedFile = fileReq.pipe(pipedStream);
//pipedFile.should.not.equal(null);
//
//console.log('Finished running request tests');
