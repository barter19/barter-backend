const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
    GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
    GraphQLList,
} = GraphQL;

const BidType = new GraphQL.GraphQLObjectType({
	name: 'Bid',
	description: 'User type for managing all the users in our application.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		productId: {
			type: GraphQLString,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		bidAmnt: {
			type: GraphQLInt,
			description: 'Full name of the user',
        },
        chatId: {
			type: GraphQLString,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		userHandle:{
			type: GraphQLString,
			description: 'Graphql stiring for bid'
		}
		
	})

});


module.exports = BidType;

