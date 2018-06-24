### **Frontend Workflow**
Now that we have our frontend deployed and configured, let’s go over what our development workflow will look like.

#### Working in a Dev Branch
A good practise is to create a branch when we are working on something new.

Run the following in the root of your project.

```
$ git checkout -b "new-feature"
```

This creates a new branch for us called new-feature.

Let’s make a faulty commit just so we can go over the process of rolling back as well.

Replace the renderLander method in src/containers/Home.js with the following.

```
renderLander() {
  return (
    <div className="lander">
      <h1>Scratch</h1>
      <p>A very expensive note taking app</p>
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

And commit this change to Git.

```
$ git add .
$ git commit -m "Commiting a typo"
```

#### Create a Branch Deployment
To be able to preview this change in its own environment we need to turn on branch deployments in Netlify. From the **Site settings** sidebar select **Build & deploy**.

![Select Build & deploy screenshot](https://d33wubrfki0l68.cloudfront.net/0fc91ca2a3472f3f5a2526001c51ec7dd71f2058/b539b/assets/part2/select-build-and-deploy.png)

And hit **Edit settings**.

![Edit build settings screenshot](https://d33wubrfki0l68.cloudfront.net/dc35eb956f640a7af462c90a457b786ff1f51c38/480bf/assets/part2/edit-build-settings.png)

Set **Branch deploys** to **All** and hit **Save**.

![Set branch deploys to all screenshot](https://d33wubrfki0l68.cloudfront.net/f44192f795360121f853bb76a9aa5547ea56ad25/bfc45/assets/part2/set-branch-deploys-to-all.png)

Now comes the fun part, we can deploy this to dev so we can test it right away. All we need to do is push it to Git.

```
$ git push -u origin new-feature
```

Now if you hop over to your Netlify project page; you’ll see a new branch deploy in action. Wait for it to complete and click on it.

![Click on new branch deploy screenshot](https://d33wubrfki0l68.cloudfront.net/49d18aea0a35b198d4a6613b21915cbb9fff4f30/dbc06/assets/part2/click-on-new-branch-deploy.png)

Hit **Preview deploy**.

![Preview new branch deploy screenshot](https://d33wubrfki0l68.cloudfront.net/ad23d689de0fe98fb2054dd2493d6e44a6cf3641/dcc40/assets/part2/preview-new-branch-deploy.png)

And you can see a new version of your app in action!

![Preview deploy in action screenshot](https://d33wubrfki0l68.cloudfront.net/8c3499380be64286759589bdc30b0ab0fd306421/d2988/assets/part2/preview-deploy-in-action.png)

You can test around this version of our frontend app. It is connected to the dev version of our backend API. The idea is that we can test and play around with the changes here without affecting our production users.

#### Push to Production
Now if we feel happy with the changes we can push this to production just by merging to master.

```
$ git checkout master
$ git merge new-feature
$ git push
```

You should see this deployment in action in Netlify.

![Production deploy after merge screenshot](https://d33wubrfki0l68.cloudfront.net/5f02d4e5648ef99d446003eb4bd62359cb00448f/66558/assets/part2/production-deploy-after-merge.png)

And once it is done, your changes should be live!

![Production deploy is live screenshot](https://d33wubrfki0l68.cloudfront.net/fbf8c62279d1c036fd6df6d28e7cf582f6d791b2/de067/assets/part2/production-deploy-is-live.png)

#### Rolling Back in Production
Now for some reason if we aren’t happy with the build in production, we can rollback.

Click on the older production deployment.

![Click on old production deployment screenshot](https://d33wubrfki0l68.cloudfront.net/0f056d6b825f9f26f2c133b460d64885ad95269b/0454a/assets/part2/click-on-old-production-deployment.png)

And hit **Publish deploy**.

![Publish old production deployment screenshot](https://d33wubrfki0l68.cloudfront.net/69d3d15d7cff63dade2edb2701b14af1029815f0/77496/assets/part2/publish-old-production-deployment.png)

This will publish our previous version again.

![Old production deploy is live screenshot](https://d33wubrfki0l68.cloudfront.net/1b157ecd915865b0a46f2064f87c82dc85160ec1/00a9b/assets/part2/old-production-deploy-is-live.png)

And that’s it! Now you have a automated workflow for building and deploying your Create React App with serverless.

#### Cleanup
Let’s quickly cleanup our changes.

Replace the renderLander method in src/containers/Home.js with the original.

```
renderLander() {
  return (
    <div className="lander">
      <h1>Scratch</h1>
      <p>A simply note taking app</p>
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

Commit these changes and push them by running the following.

```
$ git add .
$ git commit -m "Fixing a typo"
$ git push
```

This will create a new deployment to live! Let’s wrap up the guide next.


[[Back]](https://github.com/eksant/serverless-react-aws)
