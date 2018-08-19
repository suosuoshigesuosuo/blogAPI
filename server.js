const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      routes = require('./routes/routes'),
      logger = require('./utils/logUtils'),
      config = require('./utils/configUtil');

const port = process.env.PORT || 8008;

mongoose.Promise = global.Promise;
// 连接到数据库服务器
mongoose.connect((config.get('mongodbUrl') + 'blogDB'), { useNewUrlParser: true });

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);

// error Router
app.get('*', function (req, res, next) {
    var err = new Error();
    err.status = '404';
    next(err);
});

app.post('*', function (req, res, next) {
    var err = new Error();
    err.status = '404';
    next(err);
});

app.delete('*', function (req, res, next) {
    var err = new Error();
    err.status = '404';
    next(err);
});

app.put('*', function (req, res, next) {
    var err = new Error();
    err.status = '404';
    next(err);
});

app.use(function(err, req, res, next){
    if(err.status !== '404'){
        return next(err);
    }else{
        res.status('404').redirect('http://www.404.com');
    }
})

app.listen(port);

logger.info('blog server start on the port: ' + port )