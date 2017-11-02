var mongoose = require('mongoose');
var ClimbData = mongoose.model('ClimbData');

module.exports.climbInfo = function(req, res, next){

    var value = req.params.value.toLowerCase();
    var weight = req.params.weight;
    
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
    ClimbData.find({Weight: weight}, function(err, climbdatas)
    {
        if(err)
        { 
            res.send(err);
            return console.error(err);
        }
        
        console.log(climbdatas.length);
        
        var output = "";
        var flaps5 = "";
        var flaps10 = "";
        var flaps15 = "";
        var vClimb = "";
        climbdatas.forEach(function(climbdata){
            console.log(climbdata.Weight);

            flaps5 = climbdata.Flaps5;
            flaps10 = climbdata.Flaps10;
            flaps15 = climbdata.Flaps15;
            vClimb = climbdata.VClimb;
        });

        if(value == "flaps5"){
            output = flaps5;
            value = "Flaps 5";
        }
        else if(value == "flaps10"){
            output = flaps10;
            value = "Flaps 10";
        }
        else if(value == "flaps15"){
            output = flaps15;
            value = "Flaps 15";
        }
        else if(value == "vclimb"){
            output = vClimb;
            value ="VClimb";
        }
        else {
            output = "Invalid Input";
        }
        
        var planeWeight = req.params.weight;
        
        
        res.render('climb', {answer: output, attribute: value, plane: planeWeight});
    });
};