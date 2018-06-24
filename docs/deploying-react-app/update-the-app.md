### **Update the App**
Let’s make a couple of quick changes to test the process of deploying updates to our app.

We are going to add a Login and Signup button to our lander to give users a clear call to action.

To do this update our renderLander method in src/containers/Home.js.

```
renderLander() {
  return (
    <div className="lander">
      <h1>Scratch</h1>
      <p>A simple note taking app</p>
      <div>
        <Link to="/login" className="btn btn-info btn-lg">
          Login
        </Link>
        <Link to="/signup" className="btn btn-success btn-lg">
          Signup
        </Link>
      </div>
    </div>
  );
}
```

And import the Link component from React-Router in the header.

```
import { Link } from "react-router-dom";
```

Also, add a couple of styles to src/containers/Home.css.

```
.Home .lander div {
  padding-top: 20px;
}
.Home .lander div a:first-child {
  margin-right: 20px;
}
```

And our lander should look something like this.

![App updated lander screenshot](https://d33wubrfki0l68.cloudfront.net/cdbf6167efbbfa59ab536842f392b50b847b7f42/01796/assets/app-updated-lander.png)

Next, let’s deploy these updates.


[[Back]](https://github.com/eksant/serverless-react-aws)
