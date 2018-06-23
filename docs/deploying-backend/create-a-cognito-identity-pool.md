### **Create a Cognito Identity Pool**
Now that we have deployed our backend API; we almost have all the pieces we need for our backend. We have the User Pool that is going to store all of our users and help sign in and sign them up. We also have an S3 bucket that we will use to help our users upload files as attachments for their notes. The final piece that ties all these services together in a secure way is called Amazon Cognito Federated Identities.

Amazon Cognito Federated Identities enables developers to create unique identities for your users and authenticate them with federated identity providers. With a federated identity, you can obtain temporary, limited-privilege AWS credentials to securely access other AWS services such as Amazon DynamoDB, Amazon S3, and Amazon API Gateway.

In this chapter, we are going to create a federated Cognito Identity Pool. We will be using our User Pool as the identity provider. We could also use Facebook, Google, or our own custom identity provider. Once a user is authenticated via our User Pool, the Identity Pool will attach an IAM Role to the user. We will define a policy for this IAM Role to grant access to the S3 bucket and our API. This is the Amazon way of securing your resources.

Let’s get started.

#### Create Pool
From your [AWS Console](https://console.aws.amazon.com/) and select Cognito from the list of services.

![Select Cognito Service screenshot](https://d33wubrfki0l68.cloudfront.net/8ec37d618736955524e71809a9a6dfaccf254bb6/44f7a/assets/cognito-identity-pool/select-cognito-service.png)

Select **Manage Federated Identities**.

![Select Manage Federated Identities Screenshot](https://d33wubrfki0l68.cloudfront.net/23e9fa1c5f3450c0a859e3593b455eeff62c0ca4/bd31f/assets/cognito-identity-pool/select-manage-federated-identities.png)

Enter an **Identity pool name**. If you have any existing Identity Pools, you’ll need to click the **Create new identity pool** button.

![Fill Cognito Identity Pool Info Screenshot](https://d33wubrfki0l68.cloudfront.net/097eeaf7495e94c86602857ab4e42a64023660d8/adb62/assets/cognito-identity-pool/fill-identity-pool-info.png)

Select **Authentication providers**. Under **Cognito** tab, enter **User Pool ID** and **App Client ID** of the User Pool created in the Create a Cognito user pool chapter. Select **Create Pool**.

![Fill Authentication Provider Info Screenshot](https://d33wubrfki0l68.cloudfront.net/d64f178a48f4c8f6c78b8b5c84e3e85373aa5b14/743a8/assets/cognito-identity-pool/fill-authentication-provider-info.png)

Now we need to specify what AWS resources are accessible for users with temporary credentials obtained from the Cognito Identity Pool.

Select **View Details**. Two **Role Summary** sections are expanded. The top section summarizes the permission policy for authenticated users, and the bottom section summarizes that for unauthenticated users.

Select **View Policy Document** in the top section. Then select **Edit**.

![Select Edit Policy Document Screenshot](https://d33wubrfki0l68.cloudfront.net/f8b8f248951a5f6f5a1b11be3937eaf1f7386b0f/4b0c0/assets/cognito-identity-pool/select-edit-policy-document.png)

It will warn you to read the documentation. Select **Ok** to edit.

![Select Confirm Edit Policy Screenshot](https://d33wubrfki0l68.cloudfront.net/5634985d583ce735eabe2228a78f031ac2630c32/b3744/assets/cognito-identity-pool/select-confirm-edit-policy.png)

Add the following policy into the editor. Replace YOUR_S3_UPLOADS_BUCKET_NAME with the bucket name from the Create an S3 bucket for file uploads chapter. And replace the YOUR_API_GATEWAY_REGION and YOUR_API_GATEWAY_ID with the ones that you get after you deployed your API in the last chapter.

In our case YOUR_S3_UPLOADS_BUCKET_NAME is notes-app-uploads, YOUR_API_GATEWAY_ID is ly55wbovq4, and YOUR_API_GATEWAY_REGION is us-east-1.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "mobileanalytics:PutEvents",
        "cognito-sync:*",
        "cognito-identity:*"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_S3_UPLOADS_BUCKET_NAME/private/${cognito-identity.amazonaws.com:sub}/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "execute-api:Invoke"
      ],
      "Resource": [
        "arn:aws:execute-api:YOUR_API_GATEWAY_REGION:*:YOUR_API_GATEWAY_ID/*"
      ]
    }
  ]
}
```

A quick note on the block that relates to the S3 Bucket. In the above policy we are granting our logged in users access to the path private/${cognito-identity.amazonaws.com:sub/}/. Where cognito-identity.amazonaws.com:sub is the authenticated user’s federated identity ID (their user id). So a user has access to only their folder within the bucket. This is how we are securing the uploads for each user.

So in summary we are telling AWS that an authenticated user has access to two resources.

Files in the S3 bucket that are inside a folder with their federated identity id as the name of the folder.
And, the APIs we deployed using API Gateway.
One other thing to note is that the federated identity id is a UUID that is assigned by our Identity Pool. This is the id (event.requestContext.identity.cognitoIdentityId) that we were using as our user id back when we were creating our APIs.

Select **Allow**.

![Submit Cognito Identity Pool Policy Screenshot](https://d33wubrfki0l68.cloudfront.net/5575ad1776ee909da6608b0e4cd9b59a4c688919/5c4a9/assets/cognito-identity-pool/submit-identity-pool-policy.png)

Our Cognito Identity Pool should now be created. Let’s find out the Identity Pool ID.

Select **Dashboard** from the left panel, then select **Edit identity pool**.

![Cognito Identity Pool Created Screenshot](https://d33wubrfki0l68.cloudfront.net/ffa677f3ca5221a219cb32f4a1f1010e7acaaa24/6c57e/assets/cognito-identity-pool/identity-pool-created.png)

Take a note of the **Identity pool ID** which will be required in the later chapters.

![Cognito Identity Pool Created Screenshot](https://d33wubrfki0l68.cloudfront.net/f1cc2646e5b86a5d9eb64b17cb43e6430ad2f3c9/b3ef9/assets/cognito-identity-pool/identity-pool-id.png)

Now before we test our serverless API let’s take a quick look at the Cognito User Pool and Cognito Identity Pool and make sure we’ve got a good idea of the two concepts and the differences between them.


[[Back]](https://github.com/eksant/serverless-react-aws)
