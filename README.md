# Serverless and React on AWS
Build a full-stack production ready note taking app using Serverless and React on AWS ([Lambda](https://aws.amazon.com/lambda/), [IAM](https://aws.amazon.com/iam/), [S3](https://aws.amazon.com/s3/), [Cognito](https://aws.amazon.com/cognito/), [API Gateway](https://aws.amazon.com/api-gateway/), [DynamoDB](https://aws.amazon.com/dynamodb/), [Route 53](https://aws.amazon.com/route53/), [CloudFront](https://aws.amazon.com/cloudfront/), [Certificate Manager](https://aws.amazon.com/certificate-manager/), [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/)). Follow me step-by-step open-source tutorials with screenshots and code samples. The source is taken from several websites and serlerless-stack site.

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
  * [Create a new React.js app](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/create-a-new-reactjs-app.md)
    * [Add app favicons](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/add-app-favicons.md)
    * [Set up custom fonts](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/setup-custom-fonts.md)
    * [Set up Bootstrap](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/setup-bootstrap.md)
  * [Handle routes with React Router](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/handle-routes-with-react-router.md)
    * [Create containers](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/create-containers.md)
    * [Adding links in the navbar](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/adding-links-in-the-navbar.md)
    * [Handle 404s](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/handle-404s.md)
  * [Configure AWS Amplify](https://github.com/eksant/serverless-react-aws/blob/master/docs/setting-react-app/configure-aws-amplify.md)
* BUILDING A REACT APP
  * [Create a login page](./building-react-app/create-a-login-page.md)
    * [Login with AWS Cognito]
    * [Add the session to the state]
    * [Load the state from the session]
    * [Clear the session on logout]
    * [Redirect on login and logout]
    * [Give feedback while logging in]
  * Create a signup page
    * Create the signup form
    * Signup with AWS Cognito
  * Add the create note page
    * Call the create API
    * Upload a file to S3
  * List all the notes
    * Call the list API
  * Display a note
    * Render the note form
    * Save changes to a note
    * Delete a note
  * Set up secure pages
    * Create a route that redirects
    * Use the redirect routes
    * Redirect on login
* DEPLOYING A REACT APP ON AWS
  * Deploy the Frontend
    * Create an S3 bucket
    * Deploy to S3
    * Create a CloudFront distribution
    * Set up your domain with CloudFront
    * Set up www domain redirect
    * Set up SSL
  * Deploy updates
    * Update the app
    * Deploy again

```
Part II - Automation
```

* INTRODUCTION
  * Getting production ready
* CREATE A NEW BACKEND
  * Initialize the backend repo
    * Organize the backend repo
* INFRASTRUCTURE AS CODE
  * What is Infrastructure as Code?
    * Configure DynamoDB in Serverless
    * Configure S3 in Serverless
    * Configure Cognito User Pool in Serverless
    * Configure Cognito Identity Pool in Serverless
  * Use environment variables in Lambda functions
  * Deploy your serverless infrastructure
* ADDING A STRIPE BILLING API
  * Working with 3rd party APIs
    * Setup a Stripe account
    * Add a billing API
    * Load secrets from env.yml
  * Test the billing API
* ADDING UNIT TESTS
  * Unit tests in Serverless
* AUTOMATING SERVERLESS DEPLOYMENTS
  * Automating serverless deployments
    * Setting up your project on Seed
    * Configure secrets in Seed
    * Deploying through Seed
    * Set custom domains through Seed
  * Test the configured APIs
  * Monitoring deployments in Seed
* CONNECT TO THE NEW BACKEND
  * Initialize the frontend repo
    * Manage environments in Create React App
* ADDING A BILLING FORM
  * Create a settings page
    * Add Stripe keys to config
    * Create a billing form
    * Connect the billing form
* AUTOMATING REACT APP DEPLOYMENTS
  * Automating React Deployments
    * Create a build script
    * Setting up your project on Netlify
    * Custom Domains in Netlify
  * Frontend workflow
* CONCLUSION
  * Wrapping up
  * Futher reading
  * Giving back
  * Changelog
  * Staying up to date

```
Extra Credit
```

* BACKEND
  * API Gateway and Lambda Logs
  * Debugging Serverless API Issues
  * Serverless environment variables
  * Stages in Serverless Framework
  * Configure multiple AWS profiles
  * Customize the Serverless IAM Policy
  * Connect to API Gateway with IAM auth
  * Serverless Node.js Starter
* FRONTEND
  * Code Splitting in Create React App
  * Environments in Create React App
