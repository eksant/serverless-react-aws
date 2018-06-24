### **Test the Configured APIs**
Now we have two sets of APIs (prod and dev), let’s quickly test them to make sure they are working fine before we plug our frontend into them. Back in the [Test the APIs](../deploying-backend/test-the-apis.md) chapter, we used a simple utility called [AWS API Gateway Test CLI](https://github.com/eksant/serverless-react-aws/tree/1-alpha/serverless-nodejs-starter).

Before we do the test let’s create a test user for both the environments. We’ll be following the exact same steps as the [Create a Cognito test user](../setting-serverless/create-a-cognito-test-user.md) chapter.

#### Create Test Users
We are going to use the AWS CLI for this.

In your terminal, run.

```
$ aws cognito-idp sign-up \
  --region YOUR_DEV_COGNITO_REGION \
  --client-id YOUR_DEV_COGNITO_APP_CLIENT_ID \
  --username admin@example.com \
  --password Passw0rd!
```

Refer back to the Deploying through Seed chapter to look up the dev version of your Cognito App Client Id. And replace YOUR_DEV_COGNITO_REGION with the region that you deployed to.

Next we’ll confirm the user through the Cognito Admin CLI.

```
$ aws cognito-idp admin-confirm-sign-up \
  --region YOUR_DEV_COGNITO_REGION \
  --user-pool-id YOUR_DEV_COGNITO_USER_POOL_ID \
  --username admin@example.com
```

Again, replace YOUR_DEV_COGNITO_USER_POOL_ID with the **dev** version of your Cognito User Pool Id from the Deploying through Seed chapter and the region from the previous command.

Let’s quickly do the same with **prod** versions as well.

In your terminal, run.

```
$ aws cognito-idp sign-up \
  --region YOUR_PROD_COGNITO_REGION \
  --client-id YOUR_PROD_COGNITO_APP_CLIENT_ID \
  --username admin@example.com \
  --password Passw0rd!
```

Here use your prod version of your Cognito details.

And confirm the user.

```
$ aws cognito-idp admin-confirm-sign-up \
  --region YOUR_PROD_COGNITO_REGION \
  --user-pool-id YOUR_PROD_COGNITO_USER_POOL_ID \
  --username admin@example.com
```

Make sure to use the prod versions here as well.

Now we are ready to test our APIs.

#### Test the API
Let’s test our dev endpoint. Run the following command:

```
$ npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='YOUR_DEV_COGNITO_USER_POOL_ID' \
--app-client-id='YOUR_DEV_COGNITO_APP_CLIENT_ID' \
--cognito-region='YOUR_DEV_COGNITO_REGION' \
--identity-pool-id='YOUR_DEV_IDENTITY_POOL_ID' \
--invoke-url='YOUR_DEV_API_GATEWAY_URL' \
--api-gateway-region='YOUR_DEV_API_GATEWAY_REGION' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'
```

Refer back to the [Deploying through Seed](../automating-serverless-deployments/deploying-through-seed.md) chapter for these:

* YOUR_DEV_COGNITO_USER_POOL_ID and YOUR_DEV_COGNITO_APP_CLIENT_ID are all related to your Cognito User Pool.
* YOUR_DEV_IDENTITY_POOL_ID is for your Cognito Identity Pool.
* And YOUR_DEV_API_GATEWAY_URL is your API Gateway endpoint. It looks something likes this https://ly55wbovq4.execute-api.us-east-1.amazonaws.com/dev. But if you have configured it with a custom domain use the one from the [Set custom domains through Seed](../automating-serverless-deployments/set-custom-domains-through-seed.md) chapter.
* Finally, the YOUR_DEV_API_GATEWAY_REGION and YOUR_DEV_COGNITO_REGION is the region you deployed to. In our case it is us-east-1.
If the command is successful, it’ll look something like this.

```
Authenticating with User Pool
Getting temporary credentials
Making API request
{ status: 200,
  statusText: 'OK',
  data: 
   { userId: 'us-east-1:9bdc031d-ee9e-4ffa-9a2d-123456789',
     noteId: '8f7da030-650b-11e7-a661-123456789',
     content: 'hello world',
     attachment: 'hello.jpg',
     createdAt: 1499648598452 } }
```

Also run the same command for prod. Make sure to use the prod versions.

```
$ npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='YOUR_PROD_COGNITO_USER_POOL_ID' \
--app-client-id='YOUR_PROD_COGNITO_APP_CLIENT_ID' \
--cognito-region='YOUR_PROD_COGNITO_REGION' \
--identity-pool-id='YOUR_PROD_IDENTITY_POOL_ID' \
--invoke-url='YOUR_PROD_API_GATEWAY_URL' \
--api-gateway-region='YOUR_PROD_API_GATEWAY_REGION' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'
```

And you should see it give a similar output as dev.

Now that our APIs our tested we are ready to plug these into our frontend. But before we do that, let’s do a quick test to see what will happen if we make a mistake and push some faulty code to production.


[[Back]](https://github.com/eksant/serverless-react-aws)
