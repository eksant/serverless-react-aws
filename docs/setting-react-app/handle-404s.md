### **Handle 404s**
Now that we know how to handle the basic routes; let’s look at handling 404s with the React Router.

#### Create a Component
Let’s start by creating a component that will handle this for us.

Create a new component at src/containers/NotFound.js and add the following.

```
import React from "react";
import "./NotFound.css";

export default () =>
  <div className="NotFound">
    <h3>Sorry, page not found!</h3>
  </div>;
```

All this component does is print out a simple message for us.

Let’s add a couple of styles for it in src/containers/NotFound.css.

```
.NotFound {
  padding-top: 100px;
  text-align: center;
}
```

#### Add a Catch All Route
Now we just need to add this component to our routes to handle our 404s.

Find the <Switch> block in src/Routes.js and add it as the last line in that section.

```
{ /* Finally, catch all unmatched routes */ }
<Route component={NotFound} />
```

This needs to always be the last line in the <Route> block. You can think of it as the route that handles requests in case all the other routes before it have failed.

And include the NotFound component in the header by adding the following:

```
import NotFound from "./containers/NotFound";
```

And that’s it! Now if you were to switch over to your browser and try clicking on the Login or Signup buttons in the Nav you should see the 404 message that we have.

![Router 404 page screenshot](https://d33wubrfki0l68.cloudfront.net/53e130e25da61cdebf79ba98d5d4eff2c07de7b9/46256/assets/router-404-page.png)

Next up, we are going to configure our app with the info of our backend resources.


[[Back]](https://github.com/eksant/serverless-react-aws)
