const GraphQL = require('graphql');

const {
	GraphQLObjectType,
	GraphQLSchema,
} = GraphQL;

// import the user query file we created
const UserQuery = require('./queries/User');


// import the user mutation file we created
const UserMutation = require('./mutations/User');


// import the user query file we created
const ProductQuery = require('./queries/Product');


// import the user mutation file we created
const ProductMutation = require('./mutations/Product');




// lets define our root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by the backend',
	fields: {
        users: UserQuery.index(),
		user: UserQuery.single(),
		products: ProductQuery.index()
	}
});

//Root Mutation
const RootMutation = new GraphQLObjectType({
	name: 'Mutation',
	description: 'Default mutation provided by the backend APIs',
	fields: {
		addBid: ProductMutation.createBid(),
		addProduct: ProductMutation.create(),
	    loginUser: UserMutation.login(),
        addUser: UserMutation.create(),
		updateUser: UserMutation.update(),
		addExchange: ProductMutation.createExchange()
	}
});

// export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
});
