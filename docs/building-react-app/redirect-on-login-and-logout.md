### **Redirect on Login and Logout**
To complete the login flow we are going to need to do two more things.

1. Redirect the user to the homepage after they login.
2. And redirect them back to the login page after they logout.

We are going to use the history.push method that comes with React Router v4.

#### Redirect to Home on Login
Since our Login component is rendered using a Route, it adds the router props to it. So we can redirect using the this.props.history.push method.

```
this.props.history.push("/");
```

Update the handleSubmit method in src/containers/Login.js to look like this:

```
handleSubmit = async event => {
  event.preventDefault();

  try {
    await Auth.signIn(this.state.email, this.state.password);
    this.props.userHasAuthenticated(true);
    this.props.history.push("/");
  } catch (e) {
    alert(e.message);
  }
}
```

Now if you head over to your browser and try logging in, you should be redirected to the homepage after you’ve been logged in.

![React Router v4 redirect home after login screenshot](https://d33wubrfki0l68.cloudfront.net/ea3c26147e54606afd476adb1f8a500b4952f7df/8e29b/assets/redirect-home-after-login.png)

#### Redirect to Login After Logout
Now we’ll do something very similar for the logout process. However, the App component does not have access to the router props directly since it is not rendered inside a Route component. To be able to use the router props in our App component we will need to use the withRouter Higher-Order Component (or HOC). You can read more about the withRouter HOC here.

To use this HOC, we’ll change the way we export our App component.

Replace the following line in src/App.js.

```
export default App;
```

With this.

```
export default withRouter(App);
```

And import withRouter by replacing the import { Link } line in the header of src/App.js with this:

```
import { Link, withRouter } from "react-router-dom";
```

Add the following to the bottom of the handleLogout method in our src/App.js.

```
this.props.history.push("/login");
```

So our handleLogout method should now look like this.

```
handleLogout = async event => {
  await Auth.signOut();

  this.userHasAuthenticated(false);

  this.props.history.push("/login");
}
```

This redirects us back to the login page once the user logs out.

Now if you switch over to your browser and try logging out, you should be redirected to the login page.

You might have noticed while testing this flow that since the login call has a bit of a delay, we might need to give some feedback to the user that the login call is in progress. Let’s do that next.


[[Back]](https://github.com/eksant/serverless-react-aws)
