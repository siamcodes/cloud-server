const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//connect to DB
mongoose.connect(process.env.DATABASE_CLOUD, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log('DB Connected'))
.catch( err => console.log('DB Connection ERROR', err));

app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:3000'}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//import routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

//midleware
app.use('/api', indexRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

const port = process.env.PORT || 8000;
app.listen(port , () => {
    console.log(`Server run on http://localhost:${port}`);
} )
