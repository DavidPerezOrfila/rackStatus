const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
/* const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
*/

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(cors(corsOptions));
app.use('/static', express.static('public'));

// Routes
app.use(require('./routes/racks'));

// Start server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});