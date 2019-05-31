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

const UserType = require('../types/User');

const UserResolver = require('../resolvers/User');


module.exports = {
    login() {
        return {
            type: UserType,
            description: 'Add new User',
            args: {
                mobileNumber: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Mobile number cannot be left empty',
                }
            },
            resolve(parent, fields) {
                return UserResolver.auth(fields);
            }
        }
    },
    create() {
        return {
            type: UserType,
            description: 'Add new User',

            args: {
                username: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter full name, Cannot be left empty',
                },
                avatar: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter email',
                },
                mobileNumber: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter mobile number',
                },

                telegramHandle: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter Telegram handle',
                },

                chatId:{
                    type: GraphQLString,
                    description: 'Enter Telegram handle',
                },

                isOneTimeRegistered: {
                    type: GraphQLBoolean,
                    description: 'Enter password, will be automatically hashed',
                }
            },
            resolve(parent, fields) {
                return UserResolver.create(fields);
            }
        }
    },
    update(){
        return{
            type: UserType,
            description: 'Update user details',
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter id',
                },
                username: {
                    type: GraphQLString,
                    description: 'Enter full name, Cannot be left empty',
                },
                avatar: {
                    type: GraphQLString,
                    description: 'Enter email',
                },
                telegramHandle: {
                    type: GraphQLString,
                    description: 'Enter handle',
                },
                chatId:{
                    type: GraphQLString,
                    description: 'Enter Telegram handle',
                },
                mobileNumber: {
                    type: GraphQLString,
                    description: 'Enter mobile number',
                },
                isOneTimeRegistered: {
                    type: GraphQLBoolean,
                    description: 'Enter password, will be automatically hashed',
                }
            },
            resolve(parent, fields, context, info) {
                return UserResolver.update(fields.id, fields);
            }    
        }
    }
}
