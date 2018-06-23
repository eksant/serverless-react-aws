### **Create an IAM User**
Amazon IAM (Identity and Access Management) enables you to manage users and user permissions in AWS. You can create one or more IAM users in your AWS account. You might create an IAM user for someone who needs access to your AWS console, or when you have a new application that needs to make API calls to AWS. This is to add an extra layer of security to your AWS account.

In this chapter, we are going to create a new IAM user for a couple of the AWS related tools we are going to be using later.

#### **Create User**
First, log in to your [AWS Console](https://console.aws.amazon.com/) and select IAM from the list of services.
![alt text](https://d33wubrfki0l68.cloudfront.net/2cc2854ec2266c61eefd5669659a0095f83fc46a/ab671/assets/iam-user/select-iam-service.png)

Select **Users**.
![alt text](https://d33wubrfki0l68.cloudfront.net/4c2766065b39aeeac766f46cdb2538bad9fbdce8/5c978/assets/iam-user/select-iam-users.png)

Select **Add User**.
![alt text](https://d33wubrfki0l68.cloudfront.net/de5fa16c1b15b229629d7af7a5a6603f63356780/2a7ea/assets/iam-user/add-iam-user.png)

Enter a **User name** and check **Programmatic access**, then select **Next: Permissions**.

This account will be used by our [AWS CLI](https://aws.amazon.com/cli/) and [Serverless Framework](https://serverless.com/). They’ll be connecting to the AWS API directly and will not be using the Management Console.
![alt text](https://d33wubrfki0l68.cloudfront.net/9a42c97feca4f90c37c8bd270216b24392bdf306/50b58/assets/iam-user/fill-in-iam-user-info.png)

Select **Attach existing policies directly**.
![alt text](https://d33wubrfki0l68.cloudfront.net/6afa9e4c6697d3708bcefbdbcb69339bc33eec1e/3d53b/assets/iam-user/add-iam-user-policy.png)

Search for **AdministratorAccess** and select the policy, then select **Next: Review**.

We can provide a more fine-grained policy here and we cover this later in the [Customize the Serverless IAM Policy](https://serverless-stack.com/chapters/customize-the-serverless-iam-policy.html) chapter. But for now, let’s continue with this.
![alt text](https://d33wubrfki0l68.cloudfront.net/d45b1766bd371b496dba47a1cd8e6b731304f3ee/a2cd0/assets/iam-user/added-admin-policy.png)

Select **Create user**.
![alt text](https://d33wubrfki0l68.cloudfront.net/a98dcdcef6a52e1978d5b37e2dd1d13a39df7fe0/8f886/assets/iam-user/review-iam-user.png)

Select **Show** to reveal **Secret access key**.
![alt text](https://d33wubrfki0l68.cloudfront.net/59cfa9104b91b7f5c0a7a8c629111174f79b18f8/dc7de/assets/iam-user/added-iam-user.png)

Take a note of the **Access key ID** and **Secret access key**. We will be needing this later.
![alt text](https://d33wubrfki0l68.cloudfront.net/3a61e6ab057cc3c4c94dcfb7cd9c6d6e6e953a1e/9d8dd/assets/iam-user/iam-user-credentials.png)


[[Back]](https://github.com/eksant/serverless-react-aws)
