const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(cors());

// default options
app.use(fileUpload());

// Routes
app.use(require('./routes/racks'));

// Start server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});