const GraphQL = require('graphql');

const {
	GraphQLList,
	GraphQLID,
    GraphQLString,
    GraphQLBoolean,
	GraphQLNonNull,
} = GraphQL;

// import the user type we created
const ProductType = require('../types/Product');

// import the user resolver we created
const ProductResolver = require('../resolvers/Product');

module.exports = {
    
        index() {
            return {
                type: new GraphQLList(ProductType),
                description: 'This will return all the users present in the database',
                resolve(parent, args, context, info) {
                    return ProductResolver.index({});
                }
            }
        }
}    