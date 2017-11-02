
var mongoose = require('mongoose');

var climbDataSchema = new mongoose.Schema({
    Weight: Number,
    Flaps5: Number,
    Flaps10: Number,
    Flaps15: Number,
    VClimb: Number
});

var ClimbData = mongoose.model('ClimbData', climbDataSchema, 'ClimbData');