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

STEP1: Create sns service from console.


STEP2: Go to lambda function and choose "Use a blueprint".


STEP3: In "use a blueprint" search sns this will give lambda script in nodejs.


STEP4: Configure the other settings to create lambda function.


STEP5: Once it is setup go to sns there must be one subscription.


STEP6: Now publish a message and go to logs there you can find weather your lambda function has access this message or not.

#trigger lambda function -> Message sent#

STEP1: Create sns service choose email and create one subscription.


STEP2: Create one lambda service


STEP3: Go to configure and change the permission and allow sns 


STEP4: Copy the code from lambda-to-sns.js change TopicArn


STEP5: Now test the code and deploy.


Once this is done email will send.
