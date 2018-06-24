### **Login with AWS Cognito**
We are going to use AWS Amplify to login to our Amazon Cognito setup. Let’s start by importing it.

#### Import Auth from AWS Amplify
Add the following to the header of our Login container in src/containers/Login.js.
```
import { Auth } from "aws-amplify";
```

#### Login to Amazon Cognito
The login code itself is relatively simple.

Simply replace our placeholder handleSubmit method in src/containers/Login.js with the following.

```
handleSubmit = async event => {
  event.preventDefault();

  try {
    await Auth.signIn(this.state.email, this.state.password);
    alert("Logged in");
  } catch (e) {
    alert(e.message);
  }
}
```

We are doing two things of note here.

1. We grab the email and password from this.state and call Amplify’s Auth.signIn() method with it. This method returns a promise since it will be logging the user asynchronously.
2. We use the await keyword to invoke the Auth.signIn() method that returns a promise. And we need to label our handleSubmit method as async.

Now if you try to login using the admin@example.com user (that we created in the Create a Cognito Test User chapter), you should see the browser alert that tells you that the login was successful.

![Login success screenshot](https://d33wubrfki0l68.cloudfront.net/53c9a8f4c9a87781f7d32e45cffc14c677ec31c5/c2fe0/assets/login-success.png)

Next, we’ll take a look at storing the login state in our app.


[[Back]](https://github.com/eksant/serverless-react-aws)
