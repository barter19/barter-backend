const GraphQL = require('graphql');
var validator = require('validator');

const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLID,
    GraphQLList
} = GraphQL;

const ProductType = require('../types/Product');
const BidType = require('../types/Bid');


const ProductResolver = require('../resolvers/Product');
const ExchangeType = require('../types/Exchange');


module.exports = {

    create() {
        return {
            type: ProductType,
            description: 'Add new User',

            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter full name, Cannot be left empty',
                },
                description: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter email',
                },
                saleType: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter mobile number',
                },

                createDate: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter Telegram handle',
                }
            },
            resolve(parent, fields) {
                return ProductResolver.create(fields);
            }
        }
    },

    createBid(){
        return {
            type: BidType,
            args:{
                userHandle:{
                    type: GraphQLString,
                    description:"Handle"
                },
                productId:{
                    type: GraphQLString,
                    description:"Handle"
                },
                bidAmnt:{
                    type: GraphQLInt,
                    description:"Amount"
                },
                chatId:{
                    type: GraphQLString,
                    description:"Handle"
                }
            },
            resolve(parent, fields) {
                var cloneFields = Object.assign({}, fields);
                //delete cloneFields.productId;
                //cloneFields.productId = fields.exchangeProdId;
                return ProductResolver.addBid(fields.productId,cloneFields);
            }
        }
    },


    createExchange(){
        return {
            type: ExchangeType,
            description: 'Add new User',
            args:{
                productId: {
                    type: GraphQLString,
                    description: 'Enter Telegram handle',
                },
                exchangeProdId: {
                    type: GraphQLString,
                    description: 'Enter Telegram handle',
                },
                chatId: {
                    type: GraphQLString,
                    description: 'ID of the user, Generated automatically by MongoDB',
                }
            },
            resolve(parent, fields) {
                var cloneFields = Object.assign({}, fields);
                delete cloneFields.productId;
                cloneFields.productId = fields.exchangeProdId;
                return ProductResolver.createExchange(fields.productId,cloneFields);
            }
        }
    }
}
