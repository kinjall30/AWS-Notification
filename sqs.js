var AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-2'});
var sqs = new AWS.sqs({ apiVersion: ''});

let sendUserDetails = function () {

    var params = {
        DelaySeconds: 30,
        MessageAttributes: {
            "Title": {
                DataType: "String",
                StringValue: "AWS SQS"
            },
            "Author": {
                DataType: "String",
                StringValue: "AWS SQS" 
            }
        }
    }
}