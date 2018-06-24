### **Configure S3 in Serverless**
Now that we have DynamoDB configured, let’s look at how we can configure the S3 file uploads bucket through our serverless.yml.

#### Create the Resource
Add the following to resources/s3-bucket.yml.

```
Resources:
  AttachmentsBucket:
    Type: AWS::S3::Bucket
    Properties:
      # Set the CORS policy
      CorsConfiguration:
        CorsRules:
          -
            AllowedOrigins:
              - '*'
            AllowedHeaders:
              - '*'
            AllowedMethods:
              - GET
              - PUT
              - POST
              - DELETE
              - HEAD
            MaxAge: 3000

# Print out the name of the bucket that is created
Outputs:
  AttachmentsBucketName:
    Value:
      Ref: AttachmentsBucket
```

If you recall from the [Create an S3 bucket for file uploads](../setting-serverless/create-an-s3-bucket-for-file-uploads.md) chapter, we had created a bucket and configured the CORS policy for it. We needed to do this because we are going to be uploading directly from our frontend client. We configure the same policy here.

S3 buckets (unlike DynamoDB tables) are globally named. So it is not really possible for us to know what it is going to be called before hand. Hence, we let CloudFormation generate the name for us and we just add the Outputs: block to tell it to print it out so we can use it later.

#### Add the Resource
Let’s reference the resource in our serverless.yml. Replace your resources: block with the following.

```
# Create our resources with separate CloudFormation templates
resources:
  # DynamoDB
  - ${file(resources/dynamodb-table.yml)}
  # S3
  - ${file(resources/s3-bucket.yml)}
```

#### Commit Your Code
Let’s commit the changes we’ve made so far.

```
$ git add .
$ git commit -m "Adding our S3 resource"
```

And that’s it. Next let’s look into configuring our Cognito User Pool.


[[Back]](https://github.com/eksant/serverless-react-aws)
