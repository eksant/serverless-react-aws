### **Signup with AWS Cognito**
Now let’s go ahead and implement the handleSubmit and handleConfirmationSubmit methods and connect it up with our AWS Cognito setup.

Replace our handleSubmit and handleConfirmationSubmit methods in src/containers/Signup.js with the following.

```
handleSubmit = async event => {
  event.preventDefault();

  this.setState({ isLoading: true });

  try {
    const newUser = await Auth.signUp({
      username: this.state.email,
      password: this.state.password
    });
    this.setState({
      newUser
    });
  } catch (e) {
    alert(e.message);
  }

  this.setState({ isLoading: false });
}

handleConfirmationSubmit = async event => {
  event.preventDefault();

  this.setState({ isLoading: true });

  try {
    await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
    await Auth.signIn(this.state.email, this.state.password);

    this.props.userHasAuthenticated(true);
    this.props.history.push("/");
  } catch (e) {
    alert(e.message);
    this.setState({ isLoading: false });
  }
}
```

Also, include the Amplify Auth in our header.

```
import { Auth } from "aws-amplify";
```

The flow here is pretty simple:

1. In handleSubmit we make a call to signup a user. This creates a new user object.
2. Save that user object to the state as newUser.
3. In handleConfirmationSubmit use the confirmation code to confirm the user.
4. With the user now confirmed, Cognito now knows that we have a new user that can login to our app.
5. Use the email and password to authenticate exactly the same way we did in the login page.
6. Update the App’s state using the userHasAuthenticated method.
7. Finally, redirect to the homepage.

Now if you were to switch over to your browser and try signing up for a new account it should redirect you to the homepage after sign up successfully completes.

![Redirect home after signup screenshot](https://d33wubrfki0l68.cloudfront.net/ea3c26147e54606afd476adb1f8a500b4952f7df/1f5c4/assets/redirect-home-after-signup.png)

A quick note on the signup flow here. If the user refreshes their page at the confirm step, they won’t be able to get back and confirm that account. It forces them to create a new account instead. We are keeping things intentionally simple but here are a couple of hints on how to fix it.

1. Check for the UsernameExistsException in the handleSubmit method’s catch block.
2. Use the Auth.resendSignUp() method to resend the code if the user has not been previously confirmed. Here is a link to the Amplify API docs.
3. Confirm the code just as we did before.

Give this a try and post in the comments if you have any questions.

Now while developing you might run into cases where you need to manually confirm an unauthenticated user. You can do that with the AWS CLI using the following command.

```
aws cognito-idp admin-confirm-sign-up \
   --region YOUR_COGNITO_REGION \
   --user-pool-id YOUR_COGNITO_USER_POOL_ID \
   --username YOUR_USER_EMAIL
```

Just be sure to use your Cognito User Pool Id and the email you used to create the account.

Next up, we are going to create our first note.


[[Back]](https://github.com/eksant/serverless-react-aws)
