const express = require('express');
const AWS = require('aws-sdk');

const app = express();

app.use(express.json());

//Configure AWS
const creds = new AWS.SharedIniFileCredentials({profile: 'default'});
const sns = new AWS.SNS({creds, region: 'us-west-2'});


//Routes
app.get('/status', (req,res) => res.send({status: 'ok', sns}));

app.post('/subscribe', (req, res) => {
    let params = {
        Protocol: 'EMAIL',
        TopicArn: 'arn:aws:sns:us-west-2:425488387525:girofintech',
        Endpoint: req.body.email
    };

    sns.subscribe(params, (err, data) => {
        if (err) console.error(err)
        res.send(data)
    })
})

app.post('/publish', (req, res) =>{
    let params = {
        Subject: req.body.subject,
        Message: req.body.message,
        TopicArn: 'arn:aws:sns:us-west-2:425488387525:girofintech',   
    };

    sns.publish(params, (err, data) => {
        if (err) console.error(err)
        res.send(data)
    })
})


const port = 3000;
app.listen(port, () =>{
    console.log(`SNS app listening on port  ${port}` )
})