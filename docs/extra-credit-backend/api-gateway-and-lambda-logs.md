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

- [**API Gateway and Lambda Logs**](#api-gateway-and-lambda-logs)
  - [Types of Logs](#types-of-logs)
  - [Enable API Gateway CloudWatch Logs](#enable-api-gateway-cloudwatch-logs)
  - [Enable Lambda CloudWatch Logs](#enable-lambda-cloudwatch-logs)
  - [Viewing API Gateway CloudWatch Logs](#viewing-api-gateway-cloudwatch-logs)
  - [Viewing Lambda CloudWatch Logs](#viewing-lambda-cloudwatch-logs)

Let’s get started.

<a name="enable-api-gateway-cloudwatch-logs"></a>
#### Enable API Gateway CloudWatch Logs
This is a two step process. First, we need to create an IAM role that allows API Gateway to write logs in CloudWatch. Then we need to turn on logging for our API project.

First, log in to your [AWS Console](https://console.aws.amazon.com/) and select IAM from the list of services.

![Select IAM Service Screenshot](https://d33wubrfki0l68.cloudfront.net/07bc0503a7d837f6f3c284b498d225b58dac783f/aa9a2/assets/logging/select-iam-service.png)

Select **Roles** on the left menu.

![Select IAM Roles Screenshot](https://d33wubrfki0l68.cloudfront.net/fbc6e501d1350a7177a00cf593d0749d14c6e326/b3770/assets/logging/select-iam-roles.png)

Select **Create Role**.

![Select Create IAM Role Screenshot](https://d33wubrfki0l68.cloudfront.net/8857bba78f8b2c909a80d8989788fc254d433c3f/267bd/assets/logging/select-create-iam-role.png)

Under **AWS service**, select **API Gateway**.

![Select API Gateway IAM Role Screenshot](https://d33wubrfki0l68.cloudfront.net/6f777a1046a80b7b200b64b1e971330191e7f3fe/49e68/assets/logging/select-api-gateway-iam-role.png)

Click **Next: Permissions**.

![Select IAM Role Attach Permissions Screenshot](https://d33wubrfki0l68.cloudfront.net/f29c9b06f7b09832dd25f788fac7cebcfc94a866/164f3/assets/logging/select-iam-role-attach-permissions.png)

Click **Next: Review**.

![Select Review IAM Role Screenshot](https://d33wubrfki0l68.cloudfront.net/ebbba71519556778ac91a19fcc0c40421084c7d8/a8471/assets/logging/select-review-iam-role.png)

Enter a **Role name** and select **Create role**. In our case, we called our role APIGatewayCloudWatchLogs.

![Fill in IAM Role Info Screenshot](https://d33wubrfki0l68.cloudfront.net/d7cee9dcd3dc60673426940c059c9f1fe1ff6698/a7390/assets/logging/fill-in-iam-role-info.png)

Click on the role we just created.

![Select Created API Gateway IAM Role Screenshot](https://d33wubrfki0l68.cloudfront.net/8c66c2eeacb2a0e946276671988746a0f1ad23e8/66076/assets/logging/select-created-api-gateway-iam-role.png)

Take a note of the **Role ARN**. We will be needing this soon.

![IAM Role ARN Screenshot](https://d33wubrfki0l68.cloudfront.net/f308acfc467e0e31b2543785e62ee37170289bb9/1d8c5/assets/logging/iam-role-arn.png)

Now that we have created our IAM role, let’s turn on logging for our API Gateway project.

Go back to your [AWS Console](https://console.aws.amazon.com/) and select API Gateway from the list of services.

![Select API Gateway Service Screenshot](https://d33wubrfki0l68.cloudfront.net/43d4ff3647df55040a6b5e34df09aa3bdd45a059/9bc20/assets/logging/select-api-gateway-service.png)

Select **Settings** from the left panel.

![Select API Gateway Settings Screenshot](https://d33wubrfki0l68.cloudfront.net/e6fc71499ce75b914437ee6cba01b236c32569c8/2bc8b/assets/logging/select-api-gateway-settings.png)

Enter the ARN of the IAM role we just created in the **CloudWatch log role ARN** field and hit **Save**.

![Fill in API Gateway CloudWatch Info Screenshot](https://d33wubrfki0l68.cloudfront.net/e6fc71499ce75b914437ee6cba01b236c32569c8/2bc8b/assets/logging/select-api-gateway-settings.png)

Select your API project from the left panel, select **Stages**, then pick the stage you want to enable logging for. For the case of our [Notes App API](https://github.com/AnomalyInnovations/serverless-stack-demo-api), we deployed to the prod stage.

![Select API Gateway Stage Screenshot](https://d33wubrfki0l68.cloudfront.net/53d1bb6c9e74b004b5649e277f6de98ce6359711/a5705/assets/logging/select-api-gateway-stage.png)

In the **Logs** tab:

* Check **Enable CloudWatch Logs**.
* Select **INFO** for **Log level** to log every request.
* Check **Log full requests/responses data** to include entire request and response body in the log.
* Check **Enable Detailed CloudWatch Metrics** to track latencies and errors in CloudWatch metrics.

![Fill in API Gateway Logging Info Screenshot](https://d33wubrfki0l68.cloudfront.net/dc97716952073a07ec44dcb9cd7f7745d50279f3/12709/assets/logging/fill-in-api-gateway-logging-info.png)

Scroll to the bottom of the page and click **Save Changes**. Now our API Gateway requests should be logged via CloudWatch.

<a name="enable-lambda-cloudwatch-logs"></a>
#### Enable Lambda CloudWatch Logs
Lambda CloudWatch logs are enabled by default. It tracks the duration and max memory usage for each execution. You can write additional information to CloudWatch via console.log. For example:

```
export function main(event, context, callback) {
  console.log('Hello world');
  callback(null, { body: '' });
}
```

<a name="viewing-api-gateway-cloudwatch-logs"></a>
#### Viewing API Gateway CloudWatch Logs
CloudWatch groups log entries into **Log Groups** and then further into **Log Streams**. Log Groups and Log Streams can mean different things for different AWS services. For API Gateway, when logging is first enabled in an API project’s stage, API Gateway creates 1 log group for the stage, and 300 log streams in the group ready to store log entries. API Gateway picks one of these streams when there is an incoming request.

To view API Gateway logs, log in to your [AWS Console](https://console.aws.amazon.com/) and select CloudWatch from the list of services.

![Select CloudWatch Service Screenshot](https://d33wubrfki0l68.cloudfront.net/eff00ffdc2b2680ebeeac8c09db64c1db8431d29/e69b0/assets/logging/select-cloudwatch-service.png)

Select **Logs** from the left panel.

![Select CloudWatch Logs Screenshot](https://d33wubrfki0l68.cloudfront.net/93be646196ce32a9e020f95e53a2a5d62c4a4df9/bfcbc/assets/logging/select-cloudwatch-logs.png)

Select the log group prefixed with **API-Gateway-Execution-Logs_** followed by the API Gateway id.

![Select CloudWatch API Gateway Log Group Screenshot](https://d33wubrfki0l68.cloudfront.net/8d0374141cef8e64b57ef4380a9bbc70c4bfcf35/1cc29/assets/logging/select-cloudwatch-api-gateway-log-group.png)

You should see 300 log streams ordered by the last event time. This is the last time a request was recorded. Select the first stream.

![Select CloudWatch API Gateway Log Stream Screenshot](https://d33wubrfki0l68.cloudfront.net/94795fb484a734fd43be762ce15ec2ad432dd55e/0f37a/assets/logging/select-cloudwatch-api-gateway-log-stream.png)

This shows you the log entries grouped by request.

![CloudWatch API Gateway Log Entries Screenshot](https://d33wubrfki0l68.cloudfront.net/22d1a2381b583cf7601b0f198394b2a3c359f7b1/f2bc0/assets/logging/cloudwatch-api-gateway-log-entries.png)

Note that two consecutive groups of logs are not necessarily two consecutive requests in real time. This is because there might be other requests that are processed in between these two that were picked up by one of the other log streams.

<a name="viewing-lambda-cloudwatch-logs"></a>
#### Viewing Lambda CloudWatch Logs
For Lambda, each function has its own log group. And the log stream rotates if a new version of the Lambda function has been deployed or if it has been idle for some time.

To view Lambda logs, select **Logs** again from the left panel. Then select the first log group prefixed with **/aws/lambda/** followed by the function name.

![Select CloudWatch Lambda Log Group Screenshot](https://d33wubrfki0l68.cloudfront.net/0d92c08e7af5af00a0878761decd0d2dac110b20/42ec5/assets/logging/select-cloudwatch-lambda-log-group.png)

Select the first stream.

![Select CloudWatch Lambda Log Stream Screenshot](https://d33wubrfki0l68.cloudfront.net/552059b0a8dff49c0c43228bdee3c26f3494863c/737f4/assets/logging/select-cloudwatch-lambda-log-stream.png)

You should see **START**, **END** and **REPORT** with basic execution information for each function invocation. You can also see content logged via console.log in your Lambda code.

![CloudWatch Lambda Log Entries Screenshot](https://d33wubrfki0l68.cloudfront.net/f059bbc3bc549c2af8c8495910b5bab7f49890f3/7efd2/assets/logging/cloudwatch-lambda-log-entries.png)

You can also use the Serverless CLI to view CloudWatch logs for a Lambda function.

From your project root run the following.

```
$ serverless logs -f <func-name>
```

Where the <func-name> is the name of the Lambda function you are looking for. Additionally, you can use the --tail flag to stream the logs automatically to your console.

```
$ serverless logs -f <func-name> --tail
```

This can be very helpful during development when trying to debug your functions using the console.log call.

Hopefully, this has helped you set up CloudWatch logging for your API Gateway and Lambda projects. And given you a quick idea of how to read your serverless logs using the AWS Console.


[[Back]](https://github.com/eksant/serverless-react-aws)
