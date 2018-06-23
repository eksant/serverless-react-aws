#### **AWS Lambda**
In serverless applications we are not responsible for handling the requests that come in to our server. Instead the cloud provider handles the requests and sends us an object that contains the relevant info and asks us how we want to respond to it. The request is treated as an event and our code is simply a function that takes this as the input. As a result we are writing functions that are meant to respond to these events. So when a user makes a request, the cloud provider creates a container and runs our function inside it. If there are two concurrent requests, then two separate containers are created to respond to the requests.

In the AWS world the serverless function is called [AWS Lambda](https://aws.amazon.com/lambda/) and our serverless backend is simply a collection of Lambdas. Here is what a Lambda function looks like.

![alt text](https://d33wubrfki0l68.cloudfront.net/431b4864a64ada20df9ccccc8a4f4b2e8274b9f8/40bad/assets/anatomy-of-a-lambda-function.png)

Here myHandler is the name of our Lambda function. The event object contains all the information about the event that triggered this Lambda. In our case it’ll be information about the HTTP request. The context object contains info about the runtime our Lambda function is executing in. After we do all the work inside our Lambda function, we simply call the callback function with the results (or the error) and AWS will respond to the HTTP request with it.

While this example is in JavaScript (or Node.js), AWS Lambda supports Python, Java, and C# as well. Lambda functions are charged for every 100ms that it uses and as mentioned above they automatically scale to respond to the usage. The Lambda runtime also comes with 512MB of ephemeral disk space and up to 3008MB of memory.

Next, let’s take a deeper look into the advantages of serverless including the cost of running our demo app.