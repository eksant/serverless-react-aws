### **Redirect on Login**
Our secured pages redirect to the login page when the user is not logged in, with a referral to the originating page. To redirect back after they login, we need to do a couple of more things. Currently, our Login component does the redirecting after the user logs in. We are going to move this to the newly created UnauthenticatedRoute component.

Let’s start by adding a method to read the redirect URL from the querystring.

Add the following method to your src/components/UnauthenticatedRoute.js below the imports.

```
function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
```

This method takes the querystring param we want to read and returns it.

Now let’s update our Redirect component to use this when it redirects.

Replace our current export default ({ component: C, props: cProps, ...rest }) => { method with the following.

```
export default ({ component: C, props: cProps, ...rest }) => {
  const redirect = querystring("redirect");
  return (
    <Route
      {...rest}
      render={props =>
        !cProps.isAuthenticated
          ? <C {...props} {...cProps} />
          : <Redirect
              to={redirect === "" || redirect === null ? "/" : redirect}
            />}
    />
  );
};
```

And remove the following from the handleSubmit method in src/containers/Login.js.

```
this.props.history.push("/");
```

Now our login page should redirect after we login.

And that’s it! Our app is ready to go live. Let’s look at how we are going to deploy it using our serverless setup.


[[Back]](https://github.com/eksant/serverless-react-aws)
