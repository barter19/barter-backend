const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
    GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
    GraphQLList,
} = GraphQL;

const Exchange = require('./Exchange');
const Bid = require('./Bid');


const ProductType = new GraphQL.GraphQLObjectType({
	name: 'Product',
	description: 'User type for managing all the users in our application.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		name: {
			type: GraphQLString,
			description: 'Full name of the user',
        },
        description: {
			type: GraphQLString,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		saleType: {
			type: GraphQLString,
			description: 'Profile picture of the user',
        },
        createDate: {
			type: GraphQLString,
			description: 'Profile picture of the user',
		},

		exchanges: {
			type: new GraphQLList(Exchange),
			description: 'Email address of the user, must be valid and unique',
		},

        bids: {
			type: new GraphQLList(Bid),
			description: 'Email is verified',
		}

	})

});


module.exports = ProductType;

