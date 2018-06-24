### **Deploy Again**
Now that we’ve made some changes to our app, let’s deploy the updates. This is the process we are going to repeat every time we need to deploy any updates.

#### Build Our App
First let’s prepare our app for production by building it. Run the following in your working directory.

```
$ npm run build
```

Now that our app is built and ready in the build/ directory, let’s deploy to S3.

#### Upload to S3
Run the following from our working directory to upload our app to our main S3 Bucket. Make sure to replace YOUR_S3_DEPLOY_BUCKET_NAME with the S3 Bucket we created in the Create an S3 bucket chapter.

```
$ aws s3 sync build/ s3://YOUR_S3_DEPLOY_BUCKET_NAME --delete
```

Note the --delete flag here; this is telling S3 to delete all the files that are in the bucket that we aren’t uploading this time around. Create React App generates unique bundles when we build it and without this flag we’ll end up retaining all the files from the previous builds.

Our changes should be live on S3.

![App updated live on S3 screenshot](https://d33wubrfki0l68.cloudfront.net/ea46569d91ba327871106f0d548ed43b9f9b58f3/a7292/assets/app-updated-live-on-s3.png)

Now to ensure that CloudFront is serving out the updated version of our app, let’s invalidate the CloudFront cache.

#### Invalidate the CloudFront Cache
CloudFront allows you to invalidate objects in the distribution by passing in the path of the object. But it also allows you to use a wildcard (/*) to invalidate the entire distribution in a single command. This is recommended when we are deploying a new version of our app.

To do this we’ll need the **Distribution ID** of **both** of our CloudFront Distributions. You can get it by clicking on the distribution from the list of CloudFront Distributions.

![CloudFront Distributions ID screenshot](https://d33wubrfki0l68.cloudfront.net/68c37a5d967f7b99dc804c719197731b42458257/b5a96/assets/cloudfront-distribution-id.png)

Now we can use the AWS CLI to invalidate the cache of the two distributions. Make sure to replace YOUR_CF_DISTRIBUTION_ID and YOUR_WWW_CF_DISTRIBUTION_ID with the ones from above.

```
$ aws cloudfront create-invalidation --distribution-id YOUR_CF_DISTRIBUTION_ID --paths "/*"
$ aws cloudfront create-invalidation --distribution-id YOUR_WWW_CF_DISTRIBUTION_ID --paths "/*"
```

This invalidates our distribution for both the www and non-www versions of our domain. If you click on the Invalidations tab, you should see your invalidation request being processed.

![CloudFront Invalidation in progress screenshot](https://d33wubrfki0l68.cloudfront.net/81f381630001e8b8b379c468becb435ac8912734/6391d/assets/cloudfront-invalidation-in-progress.png)

It can take a few minutes to complete. But once it is done, the updated version of our app should be live.

![App update live screenshot](https://d33wubrfki0l68.cloudfront.net/d8dcd226778418936812d36b77fb0d5f4e72281f/fa211/assets/app-update-live.png)

And that’s it! We now have a set of commands we can run to deploy our updates. Let’s quickly put them together so we can do it with one command.

#### Add a Deploy Command
NPM allows us to add a deploy command in our package.json.

Add the following in the scripts block above eject in the package.json.

```
"predeploy": "npm run build",
"deploy": "aws s3 sync build/ s3://YOUR_S3_DEPLOY_BUCKET_NAME --delete",
"postdeploy": "aws cloudfront create-invalidation --distribution-id YOUR_CF_DISTRIBUTION_ID --paths '/*' && aws cloudfront ```
create-invalidation --distribution-id YOUR_WWW_CF_DISTRIBUTION_ID --paths '/*'",
```

Make sure to replace YOUR_S3_DEPLOY_BUCKET_NAME, YOUR_CF_DISTRIBUTION_ID, and YOUR_WWW_CF_DISTRIBUTION_ID with the ones from above.

For Windows users, if postdeploy returns an error like.

```
An error occurred (InvalidArgument) when calling the CreateInvalidation operation: Your request contains one or more invalid invalidation paths.
```

Make sure that there is no quote in the /*.

```
"postdeploy": "aws cloudfront create-invalidation --distribution-id YOUR_CF_DISTRIBUTION_ID --paths /* && aws cloudfront create-invalidation --distribution-id YOUR_WWW_CF_DISTRIBUTION_ID --paths /*",
```

Now simply run the following command from your project root when you want to deploy your updates. It’ll build your app, upload it to S3, and invalidate the CloudFront cache.

```
$ npm run deploy
```

Our app is now complete. And this is the end of Part I. Next we’ll be looking at how to automate this stack so we can use it for our future projects.


[[Back]](https://github.com/eksant/serverless-react-aws)
