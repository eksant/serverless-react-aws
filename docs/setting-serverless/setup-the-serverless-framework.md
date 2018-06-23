### **Set up the Serverless Framework**
We are going to be using [AWS Lambda](https://aws.amazon.com/lambda/) and [Amazon API Gateway](https://aws.amazon.com/api-gateway/) to create our backend. AWS Lambda is a compute service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. And API Gateway makes it easy for developers to create, publish, maintain, monitor, and secure APIs. Working directly with AWS Lambda and configuring API Gateway can be a bit cumbersome; so we are going to use the [Serverless Framework](https://serverless.com/) to help us with it.

The Serverless Framework enables developers to deploy backend applications as independent functions that will be deployed to AWS Lambda. It also configures AWS Lambda to run your code in response to HTTP requests using Amazon API Gateway.

In this chapter, we are going to set up the Serverless Framework on our local development environment.

#### **Install Serverless**
Install Serverless globally.

```
$ npm install serverless -g
```

The above command needs [NPM](https://www.npmjs.com/), a package manager for JavaScript. Follow this if you need help installing NPM.

In your working directory; create a project using a Node.js starter. We’ll go over some of the details of this starter project in the next chapter.

```
$ serverless create --template aws-nodejs --path serverless-nodejs-starter
```

Go into the directory for our backend api project.

```
$ cd serverless-nodejs-starter
```

Now the directory should contain a few files including, the **handler.js** and **serverless.yml**.

* **handler.js** file contains actual code for the services/functions that will be deployed to AWS Lambda.  
* **serverless.yml** file contains the configuration on what AWS services Serverless will provision and how to configure them.

We also have a tests/ directory where we can add our unit tests.

#### **Install Node.js packages**
The starter project relies on a few dependencies that are listed in the package.json.

At the root of the project, run.

```
$ npm install
```

Next, we’ll install a couple of other packages specifically for our backend.

```
$ npm install aws-sdk --save-dev
$ npm install uuid --save
```

* **aws-sdk** allows us to talk to the various AWS services.  
* **uuid** generates unique ids. We need this for storing things to DynamoDB.

The starter project that we are using allows us to use the version of JavaScript that we’ll be using in our frontend app later. Let’s look at exactly how it does this.


[[Back]](https://github.com/eksant/serverless-react-aws)
