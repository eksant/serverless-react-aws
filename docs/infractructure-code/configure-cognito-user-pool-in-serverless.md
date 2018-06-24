### **Configure Cognito User Pool in Serverless**
Now let’s look into setting up Cognito User Pool through the serverless.yml. It should be very similar to the one we did by hand in the [Create a Cognito user pool](../setting-serverless/create-a-cognito-user-pool.md) chapter.

#### Create the Resource
Add the following to resources/cognito-user-pool.yml.

```
Resources:
  CognitoUserPool:
    Type: AWS::Cognito::UserPool
    Properties:
      # Generate a name based on the stage
      UserPoolName: ${self:custom.stage}-user-pool
      # Set email as an alias
      UsernameAttributes:
        - email
      AutoVerifiedAttributes:
        - email

  CognitoUserPoolClient:
    Type: AWS::Cognito::UserPoolClient
    Properties:
      # Generate an app client name based on the stage
      ClientName: ${self:custom.stage}-user-pool-client
      UserPoolId:
        Ref: CognitoUserPool
      ExplicitAuthFlows:
        - ADMIN_NO_SRP_AUTH
      GenerateSecret: false

# Print out the Id of the User Pool that is created
Outputs:
  UserPoolId:
    Value:
      Ref: CognitoUserPool

  UserPoolClientId:
    Value:
      Ref: CognitoUserPoolClient
```

Let’s quickly go over what we are doing here:

* We are naming our User Pool (and the User Pool app client) based on the stage by using the custom variable ${self:custom.stage}.
* We are setting the UsernameAttributes as email. This is telling the User Pool that we want our users to be able to log in with their email as their username.
* Just like our S3 bucket, we want CloudFormation to tell us the User Pool Id and the User Pool Client Id that is generated. We do this in the Outputs: block at the end.

#### Add the Resource
Let’s reference the resource in our serverless.yml. Replace your resources: block with the following.

```
# Create our resources with separate CloudFormation templates
resources:
  # DynamoDB
  - ${file(resources/dynamodb-table.yml)}
  # S3
  - ${file(resources/s3-bucket.yml)}
  # Cognito
  - ${file(resources/cognito-user-pool.yml)}
```

#### Commit Your Code
Let’s commit the changes we’ve made so far.

```
$ git add .
$ git commit -m "Adding our Cognito User Pool resource"
```

And next let’s tie all of this together by configuring our Cognito Identity Pool.


[[Back]](https://github.com/eksant/serverless-react-aws)
