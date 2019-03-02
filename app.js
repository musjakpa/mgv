
const path = require ('path');
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MONGODB_URI = 'mongodb://localhost/mgv';
const routerindex = require('./routes/index');

app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join( __dirname, 'public')));

app.use(routerindex);

/*Server online
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The WebJournal Server Has Started");
});*/

//offline server
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open',() => {
    console.log('The WebJournal Server Has Started');
}).then(result => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT);
    console.log(`server is running ${PORT}`);
}).catch(err => {
    console.log(err);
});