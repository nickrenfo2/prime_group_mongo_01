/**
 * Created by Nick on 10/7/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignSchema = new Schema({
    name: String,
    assignNum: {type:Number,required:true,unique:true},
    score:Number,
    completed:{type:Date,required:true}

});

var Assignment = mongoose.model('Assignment',assignSchema);

module.exports = Assignment;

