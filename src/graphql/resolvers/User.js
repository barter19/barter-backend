const User = require('../../models/User');


class UserController {
        constructor(model) {
            this.model = User;
        }

        auth(options) {
            return this.model.findOne({mobileNumber: options.mobileNumber})
                .exec()
                .then((user) => {
    
                    if (!user) {
                        return new Error('Invalid login credentials.');
                    }
    
                    return user;
    
                }).catch(error => {
                    return error;
                });
    
        }

        index() {
            return this.model.find()
                .exec()
                .then(records => {
                    return records;
                })
                .catch(error => {
                    return error;
                });
        }
    
        // this will find a single record based on id and return it.
        single(options) {
            return this.model.findOne({_id: options.id})
                .exec()
                .then(record => {
                    return record;
                })
                .catch(error => {
                    return error;
                });
        }

        create(data) {
            const record = new this.model(data);
            return record.save()
                .then((user) => {
                    return user;
                })
                .catch((error) => {
                    return error;
                }); 
        }  
        
        update(id, data) {
            return this.model.findOne({_id:id})
            .exec()
            .then((record) => {
                console.log(record);
                Object.keys(data).map(field => {
                    record[field] = data[field];
                });
                return record.save()
                .then(user => {
                    return user;
                }).catch((error) => {
                    return error;
                });    
            }).catch((error) => {
                return error;
            });    
        }    
};


const user_controller = new UserController();
module.exports = user_controller;
