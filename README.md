# Serverless and React on AWS
Build a full-stack production ready note taking app using Serverless and React on AWS. Follow our step-by-step open-source tutorials with screenshots and code samples. The source is taken from several websites and serlerless-stack site.

```
Part I - The Basics
```

#### **Table of Contents**
* INTRODUCTION  
  * [What is Serverless](https://github.com/eksant/serverless-react-aws/blob/master/docs/introduction/what-is-serverless.md)
  * [Why Create Serverless Apps?](https://github.com/eksant/serverless-react-aws/blob/master/docs/introduction/why-create-serverless-apps.md)
* SET UP YOUR AWS ACCOUNT
  * [Create an AWS Account](https://github.com/eksant/serverless-react-aws/blob/master/docs/setup-aws/create-an-aws-account.md)
  * [Create an IAM User](https://github.com/eksant/serverless-react-aws/blob/master/docs/setup-aws/create-an-iam-user.md)
    * [What is IAM](https://github.com/eksant/serverless-react-aws/blob/master/docs/setup-aws/what-is-iam.md)
    * [What is an ARN](https://github.com/eksant/serverless-react-aws/blob/master/docs/setup-aws/what-is-an-arn.md)
  * [Configure the AWS CLI](https://github.com/eksant/serverless-react-aws/blob/master/docs/setup-aws/configure-the-aws-cli.md)
* SETTING UP THE SERVERLESS BACKEND
  * [Create a DynamoDB table](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-serverless/create-a-dynamodb-table.md)
  * [Create an S3 bucket for file uploads](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-serverless/create-an-s3-bucket-for-file-uploads.md)
  * [Create a Cognito user pool](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-serverless/create-a-cognito-user-pool.md)
    * [Create a Cognito test user](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-serverless/create-a-cognito-test-user.md)
  * [Set up the Serverless Framework](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-serverless/setup-the-serverless-framework.md)
    * [Add support for ES6/ES7 JavaScript](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-serverless/add-support-for-es6-es7-javascript.md)
* BUILDING A SERVERLESS REST API
  * [Add a create note API](https://github.com/eksant/serverless-react-aws/blob/master/docs/building-rest-api/add-a-create-note-api.md)
  * [Add a get note API](https://github.com/eksant/serverless-react-aws/blob/master/docs/building-rest-api/add-a-get-note-api.md)
  * [Add a list all the notes API](https://github.com/eksant/serverless-react-aws/blob/master/docs/building-rest-api/add-a-list-all-the-notes-api.md)
  * [Add an update note API](https://github.com/eksant/serverless-react-aws/blob/master/docs/building-rest-api/add-an-update-note-api.md)
  * [Add a delete note API](https://github.com/eksant/serverless-react-aws/blob/master/docs/building-rest-api/add-a-delete-note-api.md)
* DEPLOYING THE BACKEND
  * [Deploy the APIs](https://github.com/eksant/serverless-react-aws/blob/master/docs/deploying-backend/deploy-the-apis.md)
  * [Create a Cognito identity pool](https://github.com/eksant/serverless-react-aws/blob/master/docs/deploying-backend/create-a-cognito-identity-pool.md)
    * [Cognito user pool vs identity pool](https://github.com/eksant/serverless-react-aws/blob/master/docs/deploying-backend/cognito-user-pool-vs-identity-pool.md)
  * [Test the APIs](https://github.com/eksant/serverless-react-aws/blob/master/docs/deploying-backend/test-the-apis.md)
* SETTING UP A REACT APP
  * Create a new React.js app
    * Add app favicons
    * Set up custom fonts
    * Set up Bootstrap
  * Handle routes with React Router
    * Create containers
    * Adding links in the navbar
    * Handle 404s
  * Configure AWS Amplify