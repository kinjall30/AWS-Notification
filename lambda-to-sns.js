const AWS = require('aws-sdk')

exports.handler = async (event) => {
    try{
       const result = await publushToSNS("This is test message") 
    } catch (e){
        console.error(e)
    }
};

const publushToSNS = async (message) => {
    const sns = new AWS.SNS();
    const params = {
        Message: JSON.stringify(message),
        TopicArn: "arn:aws:sns:us-west-2:425488387525:TEST",
        Subject: "SNS TEST FROM LAMBDA",
        MessageAttributes: {
            "source":{
                "DataType": "String",
                "StringValue": "girofintech"
        }
    }
}
    return new Promise((resolve, reject) => {
        sns.publish(params, function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    });
}