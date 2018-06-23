### **Create an S3 Bucket for File Uploads**
Now that we have our database table ready; let’s get things set up for handling file uploads. We need to handle file uploads because each note can have an uploaded file as an attachment.

[Amazon S3](https://aws.amazon.com/s3/) (Simple Storage Service) provides storage service through web services interfaces like REST. You can store any object in S3 including images, videos, files, etc. Objects are organized into buckets, and identified within each bucket by a unique, user-assigned key.

In this chapter, we are going to create an S3 bucket which will be used to store user uploaded files from our notes app.

#### **Create Bucket**
First, log in to your [AWS Console](https://console.aws.amazon.com/) and select S3 from the list of services.

![Alt Text](https://d33wubrfki0l68.cloudfront.net/f6ceb54ef5fdec1be81b57234db771df2ac92482/098ab/assets/s3/select-s3-service.png)

Select **Create Bucket**.

![Alt Text](https://d33wubrfki0l68.cloudfront.net/539432c6ae8338847e9e3331ff67b38df3b09ce0/a706f/assets/s3/select-create-bucket.png)

Pick a name of the bucket and select a region. Then select **Create**.

* **Bucket names** are globally unique, which means you cannot pick the same name as this tutorial.  
* **Region** is the physical geographical region where the files are stored. We will use **us-east-1 (N. Virginia)** for this guide.

Make a note of the name and region as we’ll be using it later in the guide.

![Alt Text](https://d33wubrfki0l68.cloudfront.net/583333f1fac2e4bb0f10c9afe0cdd6a31a90be55/f436d/assets/s3/enter-s3-bucket-info.png)

Step through the next steps and leave the defaults by clicking **Next**, and then click **Create Bucket** on the last step.

![Set S3 Bucket Properties screenshot Set S3 Bucket Permissions screenshot Review S3 Bucket screenshot](https://d33wubrfki0l68.cloudfront.net/c55d47ef12c8f47041c8d769a420aff7380e910a/1a6d3/assets/s3/set-s3-bucket-properties.png)

![Alt Text](https://d33wubrfki0l68.cloudfront.net/4768a38d0d27247a05f349cd00f60f2baa5255ef/82b0c/assets/s3/set-s3-bucket-permissions.png)

![Alt Text](https://d33wubrfki0l68.cloudfront.net/fa3d463c0f2dfd955248a299d410ceccde14ba2d/8b60f/assets/s3/review-s3-bucket.png)

#### **Enable CORS**
In the notes app we’ll be building, users will be uploading files to the bucket we just created. And since our app will be served through our custom domain, it’ll be communicating across domains while it does the uploads. By default, S3 does not allow its resources to be accessed from a different domain. However, cross-origin resource sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. Let’s enable CORS for our S3 bucket.

Select the bucket we just created.

![Select Created S3 Bucket screenshot](https://d33wubrfki0l68.cloudfront.net/605a10f4a787b94f486ce871b9657713dd0c94f0/ca71b/assets/s3/select-created-s3-bucket.png)

Select the **Permissions** tab, then select **CORS configuration**.

![Select S3 Bucket CORS Configuration screenshot](https://d33wubrfki0l68.cloudfront.net/c322c5878440689d29ac5f6eb328a57cfd05589c/dc328/assets/s3/select-s3-bucket-cors-configuration.png)

Add the following CORS configuration into the editor, then hit **Save**.

```
<CORSConfiguration>
	<CORSRule>
		<AllowedOrigin>*</AllowedOrigin>
		<AllowedMethod>GET</AllowedMethod>
		<AllowedMethod>PUT</AllowedMethod>
		<AllowedMethod>POST</AllowedMethod>
		<AllowedMethod>HEAD</AllowedMethod>
		<AllowedMethod>DELETE</AllowedMethod>
		<MaxAgeSeconds>3000</MaxAgeSeconds>
		<AllowedHeader>*</AllowedHeader>
	</CORSRule>
</CORSConfiguration>
```

Note that you can edit this configuration to use your own domain or a list of domains when you use this in production.

![Save S3 Bucket CORS Configuration screenshot](https://d33wubrfki0l68.cloudfront.net/428e6d1745dcbd6bd500aec32d31cddf08a16d20/48529/assets/s3/save-s3-bucket-cors-configuration.png)

Now that our S3 bucket is ready, let’s get set up to handle user authentication.


[[Back]](https://github.com/eksant/serverless-react-aws)
