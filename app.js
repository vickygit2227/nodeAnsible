var express = require("express");


var app = express();
app.set('port', process.env.PORT || 7878);
var cmd=require('node-cmd');

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

//This will be used to run the Script , required to deploy the website
app.post('/DeployTerraform', function (req, res) {
    var commandToRun = "terraform apply -auto-approve ";
    console.log("finalCommand->"+ finalCommand);
    cmd.run(commandToRun);
    res.sendStatus(200);
});

app.listen(app.get('port'));
