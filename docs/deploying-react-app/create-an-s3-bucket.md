### **Create an S3 Bucket**
To be able to host our note taking app, we need to upload the assets that are going to be served out statically on S3. S3 has a concept of buckets (or folders) to separate different types of files.

A bucket can also be configured to host the assets in it as a static website and is automatically assigned a publicly accessible URL. So let’s get started.

#### Create the Bucket
First, log in to your [AWS Console](https://console.aws.amazon.com/) and select S3 from the list of services.

![Select S3 Service screenshot](https://d33wubrfki0l68.cloudfront.net/498785e126fcb08d10c0ccbc9d95560ba9f6d5dd/f5edc/assets/select-s3-service.png)

Select **Create Bucket** and pick a name for your application and select the **US East (N. Virginia) Region**. Since our application is being served out using a CDN, the region should not matter to us.

![Create S3 static website Bucket screenshot](https://d33wubrfki0l68.cloudfront.net/968781cbe031ee2f276d7a7372361f8cb972dcb4/39eef/assets/create-s3-bucket.png)

Go through the next steps and leave the defaults by clicking **Next**.

![Create S3 static website Bucket next properties screenshot](https://d33wubrfki0l68.cloudfront.net/63a3e68ba36a51ce5bbd0a23ec43e1b47f4b1499/81d73/assets/create-s3-bucket-next-properties.png)

![Create S3 static website Bucket next permissions screenshot](https://d33wubrfki0l68.cloudfront.net/ab7a554962eb6b1ea6b4e5c63dd8e9b970ece8af/52e31/assets/create-s3-bucket-next-permissions.png)

![Create S3 static website Bucket next review screenshot](https://d33wubrfki0l68.cloudfront.net/0738f2fe3bacc1709085f688336b6e3fa0a0cc28/680b2/assets/create-s3-bucket-next-review.png)

Now click on your newly created bucket from the list and navigate to its permissions panel by clicking **Permissions**.

![Select AWS S3 static website Bucket permissions screenshot](https://d33wubrfki0l68.cloudfront.net/afaebbb7050ba7f428e06629d10a78eaa245359d/d1f47/assets/select-bucket-permissions.png)

#### Add Permissions
Buckets by default are not publicly accessible, so we need to change the S3 Bucket Permission. Select the **Bucket Policy** from the permissions panel.

![Add AWS S3 Bucket permission screenshot](https://d33wubrfki0l68.cloudfront.net/f749c4a9553c74159e7045e92cb2b1e64a3ccb32/c9b0c/assets/add-bucket-policy.png)

Add the following bucket policy into the editor. Where notes-app-client is the name of our S3 bucket. Make sure to use the name of your bucket here.

```
{
  "Version":"2012-10-17",
  "Statement":[{
	"Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
	  "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::notes-app-client/*"]
    }
  ]
}
```

![Save bucket policy screenshot](https://d33wubrfki0l68.cloudfront.net/27bfe9b60f92c42f903b2f2d734d27bda9b3502a/8511f/assets/save-bucket-policy.png)

And hit **Save**.

#### Enable Static Web Hosting
And finally we need to turn our bucket into a static website. Select the **Properties** tab from the top panel.

![Select properties tab screenshot](https://d33wubrfki0l68.cloudfront.net/e55b58738ab6c40daf24e0e30c8799e5817000ed/378ea/assets/select-bucket-properties.png)

Select **Static website hosting**.

![Select static website hosting screenshot](https://d33wubrfki0l68.cloudfront.net/f431a256fe55ae80b2c70c27691273896c4c1d51/ed52b/assets/select-static-website-hosting.png)

Now select **Use this bucket to host a website** and add our index.html as the **Index Document** and the **Error Document**. Since we are letting React handle 404s, we can simply redirect our errors to our index.html as well. Hit **Save** once you are done.

This panel also shows us where our app will be accessible. AWS assigns us a URL for our static website. In this case the URL assigned to me is notes-app-client.s3-website-us-east-1.amazonaws.com.

![Edit static website hosting properties screenshot](https://d33wubrfki0l68.cloudfront.net/531d2323dc0fe8130a792a126a263af26372cef8/9aded/assets/edit-static-web-hosting-properties.png)

Now that our bucket is all set up and ready, let’s go ahead and upload our assets to it.


[[Back]](https://github.com/eksant/serverless-react-aws)
