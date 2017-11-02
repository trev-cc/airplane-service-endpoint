var mongoose = require('mongoose');

var landingDataSchema = new mongoose.Schema({
    Setting: Number,
    Weight: Number,
    Vapp: Number,
    Vref: Number,
    Vga: Number
});

var LandingData = mongoose.model('LandingData', landingDataSchema, 'LandingData');