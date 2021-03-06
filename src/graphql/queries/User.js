const GraphQL = require('graphql');

const {
	GraphQLList,
	GraphQLID,
    GraphQLString,
    GraphQLBoolean,
	GraphQLNonNull,
} = GraphQL;

// import the user type we created
const UserType = require('../types/User');

// import the user resolver we created
const UserResolver = require('../resolvers/User');

module.exports = {
    
        index() {
            return {
                type: new GraphQLList(UserType),
                description: 'This will return all the users present in the database',
                resolve(parent, args, context, info) {
                    return UserResolver.index({});
                }
            }
        },
    
        single() {
            return {
                type: UserType,
                description: 'This will return data of a single users based on the id provided',
                args: {
                    username: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'Please enter user id',
                    }
                },
                resolve(parent, args, context, info) {
                    return UserResolver.single({ username: args.username });
                }
            }
        },
}    