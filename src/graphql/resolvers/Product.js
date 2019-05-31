const Product = require('../../models/Product');
const {sendMessageToChat} = require('../../telegram');
var CronJob = require('cron').CronJob;


class ProductController{

    constructor(model){
        this.model = Product;
    }

    index() {
        return this.model.find()
            .exec()
            .then(records => {
                console.log(records)
                return records;
            })
            .catch(error => {
                return error;
            });
    }

    create(data){
        const record = new this.model(data);
        return record.save()
            .then((product) => {
                    const job = new CronJob('*/3 * * * *', function() {
                    
                    Product.findById(product._id)
                    .exec()
                    .then(records => {
                        const max = records.bids.reduce((prev, current) => (prev.bidAmnt > current.bidAmnt) ? prev : current)
                        console.log(max);
                        job.destroy();
                    })
                    .catch(error => {
                        return error;
                    });
                  });
                  
                  job.start()
                return product;
            })
            .catch((error) => {
                return error;
            });
    }

    createExchange(id,data){
        return this.model.findById(id)
        .exec()
        .then((record) => {
            if (!record) {
                return new Error('Invalid request user does\'t exist.');
            }
            const exchange = record.exchanges.create(data);
            record.exchanges.push(exchange);

            return record.save()
                .then((updated) => {
                    sendMessageToChat(data.chatId,data.productId);
                    return exchange;
                })
                .catch((error) => {
                    return error;
                });

        }).catch(error => {
            return error;
        });
    }


    addBid(id,data){
        return this.model.findById(id)
        .exec()
        .then((record) => {
            if (!record) {
                return new Error('Invalid request user does\'t exist.');
            }
            const bid = record.bids.create(data);
            record.bids.push(bid);

            return record.save()
            .then((updated) => {
                //sendMessageToChat(data.chatId,data.productId);
                return bid;
            })
            .catch((error) => {
                return error;
            });

        })    
    }


}


const product_controller = new ProductController();
module.exports = product_controller;
