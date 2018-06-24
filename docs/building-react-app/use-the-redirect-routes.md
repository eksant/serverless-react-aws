### **Use the Redirect Routes**
Now that we created the AuthenticatedRoute and UnauthenticatedRoute in the last chapter, let’s use them on the containers we want to secure.

First import them in the header of src/Routes.js.

```
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
```

Next, we simply switch to our new redirect routes.

So the following routes in src/Routes.js would be affected.

```
<AppliedRoute path="/login" exact component={Login} props={childProps} />
<AppliedRoute path="/signup" exact component={Signup} props={childProps} />
<AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />
<AppliedRoute path="/notes/:id" exact component={Notes} props={childProps} />
```

They should now look like so:

```
<UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
<UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
<AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
<AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
```

And now if we tried to load a note page while not logged in, we would be redirected to the login page with a reference to the note page.

![Note page redirected to login screenshot](https://d33wubrfki0l68.cloudfront.net/53f3d47b987eefe5f6b7af79354859c11c0967b1/823d7/assets/note-page-redirected-to-login.png)

Next, we are going to use the reference to redirect to the note page after we login.


[[Back]](https://github.com/eksant/serverless-react-aws)
