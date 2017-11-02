
var mongoose = require('mongoose');

var takeoffDataSchema = new mongoose.Schema({
    Setting: Number,
    Temp: String,
    Weight: Number,
    Altitude: Number,
    Vr: Number,
    V2: Number
});

var TakeoffData = mongoose.model('TakeoffData', takeoffDataSchema, 'TakeoffData');