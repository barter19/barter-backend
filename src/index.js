/**
 * Application Entry point
 * @type {createApplication}
 */

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors =require('cors');


const expressGraphQL = require('express-graphql');
const GraphQLSchema = require('./graphql');
const telegram = require('./telegram');

//Mongoose
const mongoose = require('mongoose');

/**
 * Create Express server.
 */
const app = express();

dotenv.load({path: '../.env'});
const cron = require('./cronJob/cron');

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(cors());

app.use(logger('dev'));

app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 5000}));
app.use(bodyParser.json({limit: '50mb'}));

/**
 * Start Express server.
 */
app.listen(app.get('port'), function () {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});


/**
 * Connect to MongoDB.
 */
mongoose.connect(process.env.MONGODB, {
    useMongoClient: true
});
mongoose.connection.on('error', function () {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});
mongoose.set('debug', true);

//Graphql
app.use('/graphql', expressGraphQL(req => ({
    schema: GraphQLSchema,
    context: req.context,
    graphiql: process.env.NODE_ENV === 'development',
})
));





//Telgram


module.exports = app;