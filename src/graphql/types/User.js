const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
    GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
    GraphQLList,
} = GraphQL;

const UserType = new GraphQL.GraphQLObjectType({
	name: 'User',
	description: 'User type for managing all the users in our application.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		username: {
			type: GraphQLString,
			description: 'Full name of the user',
        },
        chatId: {
			type: GraphQLString,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		avatar: {
			type: GraphQLString,
			description: 'Profile picture of the user',
        },
        telegramHandle: {
			type: GraphQLString,
			description: 'Profile picture of the user',
		},

		mobileNumber: {
			type: GraphQLString,
			description: 'Email address of the user, must be valid and unique',
		},

        isOneTimeRegistered: {
			type: GraphQLBoolean,
			description: 'Email is verified',
		}

	})

});


module.exports = UserType;

