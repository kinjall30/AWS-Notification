#SNS FOR SIMPLE EMAIL SENDING#

STEP1: Firstly login to aws via cmd from IAM user
        Commands to login: aws configure
                            Enter your access key id and secret key


STEP2: Create topic in aws and choose email


STEP3: Now run the code in app.js and change TopicArn.


STEP4: Open postman and trigger GET-> localhost:3000/status
        This will show all the configurations regarding your sns connection.


STEP5: trigger POST-> localhost:3000/subscribe and put 
        {
            "email": "abc@gmail.com"
        }
        in Body->raw and choose JSON.
        This will register your email in sns service. And you will get notification on your email.


STEP6: trigger POST-> localhost:3000/subscribe and put
        {
            "message": "any message",
            "subject": "Main Subject"
        }
        This will send mail to register email ID.

This will use to send mass promotional or marketing emails from Dashboard.



#SNS + Lambda#
#Message send -> trigger lambda function#

#trigger lambda function -> Message sent#