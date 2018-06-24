### **Deploy to S3**
Now that our S3 Bucket is created we are ready to upload the assets of our app.

#### Build Our App
Create React App comes with a convenient way to package and prepare our app for deployment. From our working directory simply run the following command.

```
$ npm run build
```

This packages all of our assets and places them in the build/ directory.

#### Upload to S3
Now to deploy simply run the following command; where YOUR_S3_DEPLOY_BUCKET_NAME is the name of the S3 Bucket we created in the Create an S3 bucket chapter.

```
$ aws s3 sync build/ s3://YOUR_S3_DEPLOY_BUCKET_NAME
```

All this command does is that it syncs the build/ directory with our bucket on S3. Just as a sanity check, go into the S3 section in your [AWS Console](https://console.aws.amazon.com/console/home) and check if your bucket has the files we just uploaded.

![Uploaded to S3 screenshot](https://d33wubrfki0l68.cloudfront.net/cb929a05093674e8602ecb897766992dfd8da672/830e8/assets/uploaded-to-s3.png)

And our app should be live on S3! If you head over to the URL assigned to you (in my case it is http://notes-app-client-eksa.s3-website-ap-southeast-1.amazonaws.com/), you should see it live.

![App live on S3 screenshot](https://d33wubrfki0l68.cloudfront.net/df1b47d66323fea4a7f6f802a94f61b69c64d4f1/4a94c/assets/app-live-on-s3.png)

Next we’ll configure CloudFront to serve our app out globally.


[[Back]](https://github.com/eksant/serverless-react-aws)
