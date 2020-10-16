var app= require('express')();
var cors= require('cors');
var bodyparser= require('body-parser');
var route= require('./route');

app.use(cors());
app.use(bodyparser.json());
app.use('/',route);
app.listen(process.env.PORT, () => {
    console.log("Listening on 3000");
});