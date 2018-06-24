# Serverless and React on AWS
Build a full-stack production ready note taking app using Serverless and React on AWS ([Lambda](https://aws.amazon.com/lambda/), [IAM](https://aws.amazon.com/iam/), [S3](https://aws.amazon.com/s3/), [Cognito](https://aws.amazon.com/cognito/), [API Gateway](https://aws.amazon.com/api-gateway/), [DynamoDB](https://aws.amazon.com/dynamodb/), [Route 53](https://aws.amazon.com/route53/), [CloudFront](https://aws.amazon.com/cloudfront/), [Certificate Manager](https://aws.amazon.com/certificate-manager/), [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/)). Follow me step-by-step open-source tutorials with screenshots and code samples. The source is taken from several websites and serverless-stack site.

```
Part I - The Basics
```

#### **Table of Contents**
* INTRODUCTION  
  * [What is Serverless](./docs/introduction/what-is-serverless.md)
  * [Why Create Serverless Apps?](./docs/introduction/why-create-serverless-apps.md)
* SET UP YOUR AWS ACCOUNT
  * [Create an AWS Account](./docs/setup-aws/create-an-aws-account.md)
  * [Create an IAM User](./docs/setup-aws/create-an-iam-user.md)
    * [What is IAM](./docs/setup-aws/what-is-iam.md)
    * [What is an ARN](./docs/setup-aws/what-is-an-arn.md)
  * [Configure the AWS CLI](./docs/setup-aws/configure-the-aws-cli.md)
* SETTING UP THE SERVERLESS BACKEND
  * [Create a DynamoDB table](./docs/setting-serverless/create-a-dynamodb-table.md)
  * [Create an S3 bucket for file uploads](./docs/setting-serverless/create-an-s3-bucket-for-file-uploads.md)
  * [Create a Cognito user pool](./docs/setting-serverless/create-a-cognito-user-pool.md)
    * [Create a Cognito test user](./docs/setting-serverless/create-a-cognito-test-user.md)
  * [Set up the Serverless Framework](./docs/setting-serverless/setup-the-serverless-framework.md)
    * [Add support for ES6/ES7 JavaScript](./docs/setting-serverless/add-support-for-es6-es7-javascript.md)
* BUILDING A SERVERLESS REST API
  * [Add a create note API](./docs/building-rest-api/add-a-create-note-api.md)
  * [Add a get note API](./docs/building-rest-api/add-a-get-note-api.md)
  * [Add a list all the notes API](./docs/building-rest-api/add-a-list-all-the-notes-api.md)
  * [Add an update note API](./docs/building-rest-api/add-an-update-note-api.md)
  * [Add a delete note API](./docs/building-rest-api/add-a-delete-note-api.md)
* DEPLOYING THE BACKEND
  * [Deploy the APIs](./docs/deploying-backend/deploy-the-apis.md)
  * [Create a Cognito identity pool](./docs/deploying-backend/create-a-cognito-identity-pool.md)
    * [Cognito user pool vs identity pool](./docs/deploying-backend/cognito-user-pool-vs-identity-pool.md)
  * [Test the APIs](./docs/deploying-backend/test-the-apis.md)
* SETTING UP A REACT APP
  * [Create a new React.js app](./docs/setting-react-app/create-a-new-reactjs-app.md)
    * [Add app favicons](./docs/setting-react-app/add-app-favicons.md)
    * [Set up custom fonts](./docs/setting-react-app/setup-custom-fonts.md)
    * [Set up Bootstrap](./docs/setting-react-app/setup-bootstrap.md)
  * [Handle routes with React Router](./docs/setting-react-app/handle-routes-with-react-router.md)
    * [Create containers](./docs/setting-react-app/create-containers.md)
    * [Adding links in the navbar](./docs/setting-react-app/adding-links-in-the-navbar.md)
    * [Handle 404s](./docs/setting-react-app/handle-404s.md)
  * [Configure AWS Amplify](./docs/setting-react-app/configure-aws-amplify.md)
* BUILDING A REACT APP
  * [Create a login page](./docs/building-react-app/create-a-login-page.md)
    * [Login with AWS Cognito](./docs/building-react-app/login-with-aws-cognito.md)
    * [Add the session to the state](./docs/building-react-app/add-the-session-to-the-state.md)
    * [Load the state from the session](./docs/building-react-app/load-the-state-from-the-session.md)
    * [Clear the session on logout](./docs/building-react-app/clear-the-session-on-logout.md)
    * [Redirect on login and logout](./docs/building-react-app/redirect-on-login-and-logout.md)
    * [Give feedback while logging in](./docs/building-react-app/give-feedback-while-logging-in.md)
  * [Create a signup page](./docs/building-react-app/create-a-signup-page.md)
    * [Create the signup form](./docs/building-react-app/create-the-signup-form.md)
    * [Signup with AWS Cognito](./docs/building-react-app/signup-with-aws-cognito.md)
  * [Add the create note page](./docs/building-react-app/add-the-create-note-page.md)
    * [Call the create API](./docs/building-react-app/call-the-create-api.md)
    * [Upload a file to S3](./docs/building-react-app/upload-a-file-to-s3.md)
  * [List all the notes](./docs/building-react-app/list-all-the-notes.md)
    * [Call the list API](./docs/building-react-app/call-the-list-api.md)
  * [Display a note](./docs/building-react-app/display-a-note.md)
    * [Render the note form](./docs/building-react-app/render-the-note-form.md)
    * [Save changes to a note](./docs/building-react-app/save-changes-to-a-note.md)
    * [Delete a note](./docs/building-react-app/delete-a-note.md)
  * [Set up secure pages](./docs/building-react-app/setup-secure-pages.md)
    * [Create a route that redirects](./docs/building-react-app/create-a-route-that-redirects.md)
    * [Use the redirect routes](./docs/building-react-app/use-the-redirect-routes.md)
    * [Redirect on login](./docs/building-react-app/redirect-on-login.md)
* DEPLOYING A REACT APP ON AWS
  * [Deploy the Frontend](./docs/deploying-react-app/deploy-the-frontend.md)
    * [Create an S3 bucket](./docs/deploying-react-app/create-an-s3-bucket.md)
    * [Deploy to S3](./docs/deploying-react-app/deploy-to-s3.md)
    * [Create a CloudFront distribution](./docs/deploying-react-app/create-a-cloudfront-distribution.md)
    * [Set up your domain with CloudFront](./docs/deploying-react-app/setup-your-domain-with-cloudfront.md)
    * [Set up www domain redirect](./docs/deploying-react-app/setup-www-domain-redirect.md)
    * [Set up SSL](./docs/deploying-react-app/setup-ssl.md)
  * [Deploy updates](./docs/deploying-react-app/deploy-updates.md)
    * [Update the app](./docs/deploying-react-app/update-the-app.md)
    * [Deploy again](./docs/deploying-react-app/deploy-again.md)

```
Part II - Automation
```

* INTRODUCTION
  * [Getting production ready](./docs/introduction/getting-production-ready.md)
* INFRASTRUCTURE AS CODE
  * [What is Infrastructure as Code?](./docs/infractructure-code/what-is-infrastructure-as-code.md)
    * [Configure DynamoDB in Serverless](./docs/infractructure-code/configure-dynamodb-in-serverless.md)
    * [Configure S3 in Serverless](./docs/infractructure-code/configure-s3-in-serverless.md)
    * [Configure Cognito User Pool in Serverless](./docs/infractructure-code/configure-cognito-user-pool-in-serverless.md)
    * [Configure Cognito Identity Pool in Serverless](./docs/infractructure-code/configure-cognito-identity-pool-in-serverless.md)
  * [Use environment variables in Lambda functions](./docs/infractructure-code/use-environment-variables-in-lambda-functions.md)
  * [Deploy your serverless infrastructure](./docs/infractructure-code/deploy-your-serverless-infrastructure.md)
* ADDING A STRIPE BILLING API
  * Working with 3rd party APIs
    * Setup a Stripe account
    * Add a billing API
    * Load secrets from env.yml
  * Test the billing API
* ADDING UNIT TESTS
  * [Unit tests in Serverless](./docs/adding-unit-test/unit-tests-in-serverless.md)
* AUTOMATING SERVERLESS DEPLOYMENTS
  * [Automating serverless deployments](./docs/automating-serverless-deployments/automating-serverless-deployments.md)
    * [Setting up your project on Seed](./docs/automating-serverless-deployments/setting-up-your-project-on-seed.md)
    * [Configure secrets in Seed](./docs/automating-serverless-deployments/configure-secrets-in-seed.md)
    * [Deploying through Seed](./docs/automating-serverless-deployments/deploying-through-seed.md)
    * [Set custom domains through Seed](./docs/automating-serverless-deployments/set-custom-domains-through-seed.md)
  * [Test the configured APIs](./docs/automating-serverless-deployments/test-the-configured-apis.md)
  * [Monitoring deployments in Seed](./docs/automating-serverless-deployments/monitoring-deployments-in-seed.md)
* ADDING A BILLING FORM
  * Create a settings page
    * Add Stripe keys to config
    * Create a billing form
    * Connect the billing form
* AUTOMATING REACT APP DEPLOYMENTS
  * [Automating React Deployments](./docs/automating-react-deployments/automating-react-deployments.md)
    * [Create a build script](./docs/automating-react-deployments/create-a-build-script.md)
    * [Setting up your project on Netlify](./docs/automating-react-deployments/setting-up-your-project-on-netlify.md)
    * [Custom Domains in Netlify](./docs/automating-react-deployments/custom-domain-in-netlify.md)
  * [Frontend workflow](./docs/automating-react-deployments/frontend-workflow.md)
* CONCLUSION
  * [Futher reading](./docs/conclusion/further-reading.md)

```
Extra Credit
```

* BACKEND
  * [API Gateway and Lambda Logs](./docs/extra-credit-backend/api-gateway-and-lambda-logs.md)
  * [Debugging Serverless API Issues](./docs/extra-credit-backend/debugging-serverless-api-issues.md)
  * [Serverless environment variables](./docs/extra-credit-backend/serverless-environment-variables.md)
  * [Stages in Serverless Framework](./docs/extra-credit-backend/stages-in-serverless-framework.md)
  * [Configure multiple AWS profiles](./docs/extra-credit-backend/configure-multiple-aws-profiles.md)
  * [Customize the Serverless IAM Policy](./docs/extra-credit-backend/customize-the-serverless-iam-policy.md)
  * [Connect to API Gateway with IAM auth](./docs/extra-credit-backend/connect-to-api-gateway-with-iam-auth.md)
  * [Serverless Node.js Starter](./docs/extra-credit-backend/serverless-nodejs-starter.md)
* FRONTEND
  * [Code Splitting in Create React App](./docs/extra-credit-frontend/code-splitting-in-create-react-app.md)
  * [Environments in Create React App](./docs/extra-credit-frontend/environments-in-create-react-app.md)
