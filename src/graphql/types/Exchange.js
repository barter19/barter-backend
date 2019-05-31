const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
    GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
    GraphQLList,
} = GraphQL;

const ExchangeType = new GraphQL.GraphQLObjectType({
	name: 'Exchange',
	description: 'User type for managing all the users in our application.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		productId: {
			type: GraphQLString,
			description: 'Full name of the user',
        },
        chatId: {
			type: GraphQLString,
			description: 'ID of the user, Generated automatically by MongoDB',
		}

	})

});


module.exports = ExchangeType;

