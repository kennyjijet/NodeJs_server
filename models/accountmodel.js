/**
 * Created by theerat on 8/23/2015.
 */
var uuid = require("uuid");
var forge = require("node-forge");
var db = require("../app").bucket;
var N1qlQuery = require("couchbase").N1qlQuery;

function AccountModel(){ };

AccountModel.getByUsername = function(params, callback) {
  /*  var test = N1qlQuery.fromString(
        "select users.* from 'soccersim' as usernames " +
        "join 'soccersim' as users on keys (\"user::\" || usernames.uid) "+
        "where meta(usernames).id = $1"
    );
*/
var query = N1qlQuery.fromString("select users.* from `soccersim` as usernames join `soccersim` as users on keys (\"user::\" || usernames.uid) where meta(usernames).id = $1");
  //  var query = N1qlQuery.fromString("select meta(soccersim) from soccersim");
    db.query(query, ["username::" +params.username], function(error, result) {
        if(error) {
            console.log(error);
            return callback(error,null);

        }
        //console.log(test);
        callback(null, result);
    });
};

AccountModel.validatePassword = function(rawPassword, hashedPassword )
{
    return forge.md.sha1.create().update(rawPassword).digest().toHex() === hashedPassword ? true : false;
};

/*
 * Get the user account that maps to the provided uid user reference
 */
AccountModel.get = function(uid, callback) {
    var query = N1qlQuery.fromString("select * from `soccersim` where meta(`soccersim`).id = $1");
    db.query(query, ["user::" + uid], function(error, result) {
        if(error) {
            return callback(error, null);
        }
        callback(null, result);
    });
};

AccountModel.create = function(params, callback){
    var userDoc = {
        type: "user",
        uid: uuid.v4(),
        name: params.name,
        username: params.username,
        password: forge.md.sha1.create().update(params.password).digest().toHex()
    };
    var referenceDoc = {
        type: "username",
        uid: userDoc.uid
    };
    db.insert("username::" + userDoc.username, referenceDoc, function(error) {
        if (error) {
            callback(error,null);
            return;
        }
        db.insert("user::" + userDoc.uid, userDoc, function(error, result){
            if(error) {
                callback(error,null);
                return;
            }
            callback(null, {message: "success", data: result});
        });

    });
};

module.exports = AccountModel;