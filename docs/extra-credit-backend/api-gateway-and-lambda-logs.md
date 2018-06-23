### **API Gateway and Lambda Logs**
Logging is an essential part of building backends and it is no different for a serverless API. It gives us visibility into how we are processing and responding to incoming requests.

#### Types of Logs
There are 2 types of logs we usually take for granted in a monolithic environment.

* Server logs  
  Web server logs maintain a history of requests, in the order they took place. Each log entry contains the information about the request, including client IP address, request date/time, request path, HTTP code, bytes served, user agent, etc.

* Application logs  
  Application logs are a file of events that are logged by the web application. It usually contains errors, warnings, and informational events. It could contain everything from unexpected function failures, to key events for understanding how users behave.

In the serverless environment, we have lesser control over the underlying infrastructure, logging is the only way to acquire knowledge on how the application is performing. [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) is a monitoring service to help you collect and track metrics for your resources. Using the analogy of server logs and application logs, you can roughly think of the API Gateway logs as your server logs and Lambda logs as your application logs.

In the chapter we are going to look to do the following:

* Enable API Gateway CloudWatch Logs
* Enable Lambda CloudWatch Logs
* Viewing API Gateway CloudWatch Logs
* Viewing Lambda CloudWatch Logs

Let’s get started.

Enable API Gateway CloudWatch Logs
This is a two step process. First, we need to create an IAM role that allows API Gateway to write logs in CloudWatch. Then we need to turn on logging for our API project.

First, log in to your AWS Console and select IAM from the list of services.

Select IAM Service Screenshot

Select Roles on the left menu.

Select IAM Roles Screenshot

Select Create Role.

Select Create IAM Role Screenshot

Under AWS service, select API Gateway.

Select API Gateway IAM Role Screenshot

Click Next: Permissions.

Select IAM Role Attach Permissions Screenshot

Click Next: Review.

Select Review IAM Role Screenshot

Enter a Role name and select Create role. In our case, we called our role APIGatewayCloudWatchLogs.

Fill in IAM Role Info Screenshot

Click on the role we just created.

Select Created API Gateway IAM Role Screenshot

Take a note of the Role ARN. We will be needing this soon.

IAM Role ARN Screenshot

Now that we have created our IAM role, let’s turn on logging for our API Gateway project.

Go back to your AWS Console and select API Gateway from the list of services.

Select API Gateway Service Screenshot

Select Settings from the left panel.

Select API Gateway Settings Screenshot

Enter the ARN of the IAM role we just created in the CloudWatch log role ARN field and hit Save.

Fill in API Gateway CloudWatch Info Screenshot

Select your API project from the left panel, select Stages, then pick the stage you want to enable logging for. For the case of our Notes App API, we deployed to the prod stage.

Select API Gateway Stage Screenshot

In the Logs tab:

Check Enable CloudWatch Logs.
Select INFO for Log level to log every request.
Check Log full requests/responses data to include entire request and response body in the log.
Check Enable Detailed CloudWatch Metrics to track latencies and errors in CloudWatch metrics.
Fill in API Gateway Logging Info Screenshot

Scroll to the bottom of the page and click Save Changes. Now our API Gateway requests should be logged via CloudWatch.

Enable Lambda CloudWatch Logs
Lambda CloudWatch logs are enabled by default. It tracks the duration and max memory usage for each execution. You can write additional information to CloudWatch via console.log. For example:

export function main(event, context, callback) {
  console.log('Hello world');
  callback(null, { body: '' });
}
Viewing API Gateway CloudWatch Logs
CloudWatch groups log entries into Log Groups and then further into Log Streams. Log Groups and Log Streams can mean different things for different AWS services. For API Gateway, when logging is first enabled in an API project’s stage, API Gateway creates 1 log group for the stage, and 300 log streams in the group ready to store log entries. API Gateway picks one of these streams when there is an incoming request.

To view API Gateway logs, log in to your AWS Console and select CloudWatch from the list of services.

Select CloudWatch Service Screenshot

Select Logs from the left panel.

Select CloudWatch Logs Screenshot

Select the log group prefixed with API-Gateway-Execution-Logs_ followed by the API Gateway id.

Select CloudWatch API Gateway Log Group Screenshot

You should see 300 log streams ordered by the last event time. This is the last time a request was recorded. Select the first stream.

Select CloudWatch API Gateway Log Stream Screenshot

This shows you the log entries grouped by request.

CloudWatch API Gateway Log Entries Screenshot

Note that two consecutive groups of logs are not necessarily two consecutive requests in real time. This is because there might be other requests that are processed in between these two that were picked up by one of the other log streams.

Viewing Lambda CloudWatch Logs
For Lambda, each function has its own log group. And the log stream rotates if a new version of the Lambda function has been deployed or if it has been idle for some time.

To view Lambda logs, select Logs again from the left panel. Then select the first log group prefixed with /aws/lambda/ followed by the function name.

Select CloudWatch Lambda Log Group Screenshot

Select the first stream.

Select CloudWatch Lambda Log Stream Screenshot

You should see START, END and REPORT with basic execution information for each function invocation. You can also see content logged via console.log in your Lambda code.

CloudWatch Lambda Log Entries Screenshot

You can also use the Serverless CLI to view CloudWatch logs for a Lambda function.

From your project root run the following.

$ serverless logs -f <func-name>
Where the <func-name> is the name of the Lambda function you are looking for. Additionally, you can use the --tail flag to stream the logs automatically to your console.

$ serverless logs -f <func-name> --tail
This can be very helpful during development when trying to debug your functions using the console.log call.

Hopefully, this has helped you set up CloudWatch logging for your API Gateway and Lambda projects. And given you a quick idea of how to read your serverless logs using the AWS Console.


[[Back]](https://github.com/eksant/serverless-react-aws)
