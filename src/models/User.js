var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: {type: String, default: ''},
    chatId: {type: String, default: ''},
    telegramHandle: {type: String, default: ''},
    isOneTimeRegistered: Boolean,
    mobileNumber: {type: String, unique: true},
    avatar: {type: String, default: ''}
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});


/**
 *  middleware.
 */
userSchema.pre('save', function (next) {
    next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;

