const express = require('express');
const graphqlHttp = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cors origin request
app.use(cors());


// connect to mlab database
//make sure to update DB string with username & credentials
mongoose.connect('mongodb://root:Sanjeev!2@ds351107.mlab.com:51107/graphql', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to Mlab Database')
})

app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000');
})