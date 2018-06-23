#### **AWS Lambda**
<small>
It is important to address why it is worth learning how to create serverless apps. There are a couple of reasons why serverless apps are favored over traditional server hosted apps.

1. Low maintenance
2. Low cost
3. Easy to scale

The biggest benefit by far is that you only need to worry about your code and nothing else. And the low maintenance is a result of not having any servers to manage. You don’t need to actively ensure that your server is running properly or that you have the right security updates on it. You deal with your own application code and nothing else.

The main reason it’s cheaper to run serverless applications is that you are effectively only paying per request. So when your application is not being used, you are not being charged for it. Let’s do a quick breakdown of what it would cost for us to run our note taking application. We’ll assume that we have 1000 daily active users making 20 requests per day to our API and storing around 10MB of files on S3. Here is a very rough calculation of our costs.


</small>