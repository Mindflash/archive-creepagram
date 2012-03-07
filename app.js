var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  //app.set('view options', { layout: false });
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
//  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res){

    function gotImages(images) {
        res.render('index', {
            url: req.headers.host,
            title: 'Creepagram',
            images: images
        })
    }

    require('./instagram.js').getPopularImages(gotImages)
});

app.get('/ohmy/', function(req, res){
    var params = req.query;
    res.render('item', {
        url: req.headers.host,
        title: 'Creepagram - Creepin in on: ' + params.lat + "," + params.lng,
        image: {
            url: decodeURIComponent(params.img),
            encodedUrl: params.img,
            location: {
                lat: params.lat,
                long: params.lng
            }
        }
    })
})

app.listen(3000);
console.log("Creepagram has begun");
