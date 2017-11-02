var mongoose = require('mongoose');

var connection = "mongodb://trevorfleeman:password@ds157614.mlab.com:57614/cidm_4382";
mongoose.connect(connection, { useMongoClient: true });

mongoose.Promise = global.Promise;

// BRING IN YOUR SCHEMAS & MODELS
require('./climb');
require('./takeoff');
require('./landing');