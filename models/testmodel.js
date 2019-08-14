/**
 * Created by theerat on 8/25/2015.
 */
var accountmodel = require("./accountmodel");
var SessionModel = require("./sessionmodel");
var param = {
    name: "Supachai",
    username: "Mac",
    password: "kk123"
};
//create a test user
accountmodel.create(param,function(error, result){
    if(error){
        console.log(error);
    }
    else console.log(result);
});
/*
//attempting to authenticate a user
SessionModel.authenticate(req, res, next) {
};
*/