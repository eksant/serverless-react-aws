### **Create a Cognito Test User**
In this chapter, we are going to create a test user for our Cognito User Pool. We are going to need this user to test the authentication portion of our app later.

#### **Create User**
First, we will use AWS CLI to sign up a user with their email and password.

In your terminal, run.

```
$ aws cognito-idp sign-up \
  --region YOUR_COGNITO_REGION \
  --client-id YOUR_COGNITO_APP_CLIENT_ID \
  --username admin@example.com \
  --password Passw0rd!
```

Now, the user is created in Cognito User Pool. However, before the user can authenticate with the User Pool, the account needs to be verified. Let’s quickly verify the user using an administrator command.

In your terminal, run.

```
$ aws cognito-idp admin-confirm-sign-up \
  --region YOUR_COGNITO_REGION \
  --user-pool-id YOUR_COGNITO_USER_POOL_ID \
  --username admin@example.com
```

Now our test user is ready. Next, let’s set up the Serverless Framework to create our backend APIs.


[[Back]](https://github.com/eksant/serverless-react-aws)
