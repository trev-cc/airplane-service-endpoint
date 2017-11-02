var mongoose = require('mongoose');
var LandingData = mongoose.model('LandingData');

module.exports.landingInfo = function(req, res, next){

    var value = req.params.value.toLowerCase();
    var weight = req.params.weight;
    var setting = req.params.setting;
    
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
    LandingData.find({Weight: weight, Setting: setting}, function(err, landingdatas)
    {
        if(err)
        { 
            res.send(err);
            return console.error(err);
        }
        
        console.log(landingdatas.length);
        
        var output = "";
        var Vapp = "";
        var Vref = "";
        var Vga = "";

        landingdatas.forEach(function(landingdata){
            console.log(landingdata.Weight);

            Vapp = landingdata.Vapp;
            Vref = landingdata.Vref;
            Vga = landingdata.Vga;
        });
 
        if(value == "vapp"){
            output = Vapp;
            value = "Vapp";
        }
        else if(value == "vref"){
            output = Vref;
            value = "Vref";
        }
        else if(value == "vga"){
            output = Vga;
            value = "Vga";
        }
        else {
            output = "Invalid Input";
        }
        
        var planeWeight = req.params.weight;
        
        
        res.render('landing', {answer: output, attribute: value, plane: planeWeight, setting: setting});
    });
};