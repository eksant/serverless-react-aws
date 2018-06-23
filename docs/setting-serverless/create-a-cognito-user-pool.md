#### **Create a Cognito User Pool**
Our notes app needs to handle user accounts and authentication in a secure and reliable way. To do this we are going to use [Amazon Cognito](https://aws.amazon.com/cognito/).

Amazon Cognito User Pool makes it easy for developers to add sign-up and sign-in functionality to web and mobile applications. It serves as your own identity provider to maintain a user directory. It supports user registration and sign-in, as well as provisioning identity tokens for signed-in users.

In this chapter, we are going to create a User Pool for our notes app.

### **Create User Pool**
From your [AWS Console](https://console.aws.amazon.com/), select **Cognito** from the list of services.

![Select Amazon Cognito Service screenshot](https://d33wubrfki0l68.cloudfront.net/f6286d9a9aee2103eeb1057c73dd2ee8225682a4/f883c/assets/cognito-user-pool/select-cognito-service.png)

Select **Manage your User Pools**.

![Select Manage Your Cognito User Pools screenshot](https://d33wubrfki0l68.cloudfront.net/086ef76cfd1dd6fe369d8e0918596202207ff3e8/f22cc/assets/cognito-user-pool/select-manage-your-user-pools.png)

Select **Create a User Pool**.

![Select Create a Cognito User Pool screenshot](https://d33wubrfki0l68.cloudfront.net/2f4bb8739c4c773c23226e62ce67966846569a0c/21238/assets/cognito-user-pool/select-create-a-user-pool.png)

Enter **Pool name** and select **Review defaults**.

![Fill in Cognito User Pool info screenshot](https://d33wubrfki0l68.cloudfront.net/7ba5ccf86c5394cde2ffdf6d53cc59823933e807/61267/assets/cognito-user-pool/fill-in-user-pool-info.png)

Select **Choose username attributes…**.

![Choose username attribute screenshot](https://d33wubrfki0l68.cloudfront.net/740b1cf31518f4407f9b00a0e055a9625a9cd30f/3964e/assets/cognito-user-pool/choose-username-attributes.png)

And select **Email address or phone numbers** and **Allow email addresses**. This is telling Cognito User Pool that we want our users to be able to sign up and login with their email as their username.

![Select email address as username screenshot](https://d33wubrfki0l68.cloudfront.net/b29f8be3f349426a19c455479d41696af788666e/08089/assets/cognito-user-pool/select-email-address-as-username.png)

Scroll down and select **Next step**.

![Select attributes next step screenshot](https://d33wubrfki0l68.cloudfront.net/1a7b8e2f2268d283c42fd8f5034598771d88c965/b9290/assets/cognito-user-pool/select-next-step-attributes.png)

Hit **Review** in the side panel and make sure that the **Username attributes** is set to **email**.

![Review User Pool settings screenshot](https://d33wubrfki0l68.cloudfront.net/053694b76cd7fffc56d38f8331cbd9404085d314/d0328/assets/cognito-user-pool/review-user-pool-settings.png)

Now hit **Create pool** at the bottom of the page.

![Select Create pool screenshot](https://d33wubrfki0l68.cloudfront.net/1f82c4f88252f824b6897ff7f93ff76e2e3912d6/b9440/assets/cognito-user-pool/select-create-pool.png)

Your User Pool has been created. Take a note of the **Pool Id** and **Pool ARN** which will be required later. Also, note the region that your User Pool is created in – in our case it’s us-east-1.

![Cognito User Pool Created Screenshot](https://d33wubrfki0l68.cloudfront.net/4dd6c9be158e7509f582d8cd97bdd56e4cfe2092/2c651/assets/cognito-user-pool/user-pool-created.png)

#### **Create App Client**
Select **App clients** from the left panel.

![Select Congito User Pool Apps Screenshot](https://d33wubrfki0l68.cloudfront.net/91c6b75942409a7bbde32bd5314f957bc9b32625/efc30/assets/cognito-user-pool/select-user-pool-apps.png)

Select **Add an app client**.

![Select Add An App Screenshot](https://d33wubrfki0l68.cloudfront.net/e43fd93b27e21a6f4675ff87c7bc13912cf4fab7/5b6d5/assets/cognito-user-pool/select-add-an-app.png)

Enter **App client name**, un-select **Generate client secret**, select **Enable sign-in API for server-based authentication**, then select **Create app client**.

* **Generate client secret**: user pool apps with a client secret are not supported by the JavaScript SDK. We need to un-select the option.  
* **Enable sign-in API for server-based authentication**: required by AWS CLI when managing the pool users via command line interface. We will be creating a test user through the command line interface in the next chapter.

![Fill Cognito User Pool App Info Screenshot](https://d33wubrfki0l68.cloudfront.net/6b0693fcdc6de18815df557c8df7cccb10647a8b/60735/assets/cognito-user-pool/fill-user-pool-app-info.png)

Your app client has been created. Take note of the **App client id** which will be required in the later chapters.

![Cognito User Pool App Created Screenshot](https://d33wubrfki0l68.cloudfront.net/1f10ab9dd391d3f7cb8da86de813b13014db2cf1/748be/assets/cognito-user-pool/user-pool-app-created.png)

#### **Create Domain Name**
Finally, select **Domain name** from the left panel. Enter your unique domain name and select **Save changes**. In our case we are using notes-app.

![Select Congito User Pool Apps Screenshot](https://d33wubrfki0l68.cloudfront.net/ab758c07dc2efa0c0ac75bed3e80b9b41bd8341f/02a1e/assets/cognito-user-pool/user-pool-domain-name.png)

Now our Cognito User Pool is ready. It will maintain a user directory for our notes app. It will also be used to authenticate access to our API. Next let’s set up a test user within the pool.


[[Back]](https://github.com/eksant/serverless-react-aws)
