var mongoose = require('mongoose');
var TakeoffData = mongoose.model('TakeoffData');

module.exports.takeoffInfo = function(req, res, next){

    var value = req.params.value.toLowerCase();
    var weight = req.params.weight;
    var altitude = req.params.altitude;
    var temperature = req.params.temp;
    var setting = req.params.setting;
    var temp = "";
    if(weight < 19000){
        weight = 18000;
        }
    else if(weight >= 19000 && weight < 21000){
        weight = 20000;
    }
    else if(weight >= 21000 && weight < 23000){
        weight = 22000;
    }
    else if(weight >= 23000 && weight < 25000){
        weight = 24000;
    }
    else if(weight >= 25000 && weight < 27000){
        weight = 26000;
    }
    else {
        weight = 28000;
    }
    
    if(temperature > 20){
        temp = "Above 20";
    }
    else {
        temp = "At or Below 20";
    }
    
    TakeoffData.find({Weight: weight, Setting: setting, Temp: temp, Altitude: altitude}, function(err, takeoffdatas)
    {
        if(err)
        { 
            res.send(err);
            return console.error(err);
        }
        
        console.log(takeoffdatas.length);
        
        var output = "";
        var Vr = "";
        var V2 = "";

        takeoffdatas.forEach(function(takeoffdata){
            console.log(takeoffdata.Weight);

            Vr = takeoffdata.Vr;
            V2 = takeoffdata.V2;
        });

        if(value == "vr"){
            output = Vr;
            value = "VR";
        }
        else if(value == "v2"){
            output = V2;
            value = "V2";
        }
        else {
            output = "Invalid Input";
        }
        
        var planeWeight = req.params.weight;
        
        
        res.render('takeoff', {answer: output, attribute: value, plane: planeWeight, altitude: altitude, temperature: temperature, setting: setting});
    });
};