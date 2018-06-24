### **Set up SSL**
Now that our app is being served through our domain, let’s add a layer of security to it by switching to HTTPS. AWS makes this fairly easy to do, thanks to Certificate Manager.

#### Request a Certificate
Select Certificate Manager from the list of services in your [AWS Console](https://console.aws.amazon.com/). Ensure that you are in the US East (N. Virginia) region. This is because a certificate needs to be from this region for it to [work with CloudFront](http://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html).

![Select Certificate Manager service screenshot](https://d33wubrfki0l68.cloudfront.net/c7444204e35086f1176f74ecb0dbd2f3ad0cd804/06afa/assets/select-certificate-manager-service.png)

If this is your first certificate, you’ll need to hit **Get started**. If not then hit **Request a certificate** from the top.

![Get started with Certificate Manager screenshot](https://d33wubrfki0l68.cloudfront.net/497ea090ed9bcad05b5192bceab7fc74e051c707/200b3/assets/get-started-certificate-manager.png)

And type in the name of our domain. Hit **Add another name to this certificate** and add our www version of our domain as well. Hit **Review and request** once you are done.

![Add domain names to certificate screenshot](https://d33wubrfki0l68.cloudfront.net/9694dd4761019139242a58aa9a2c007c50b6b069/2f4dc/assets/add-domain-names-to-certificate.png)

Now to confirm that we control the domain, select the **DNS validation** method and hit **Review**.

![Select dns validation for certificate screenshot](https://d33wubrfki0l68.cloudfront.net/0227afab65ba2868e005b717e5845deaa46ed7f6/30c29/assets/select-dns-validation-for-certificate.png)

On the validation screen expand the two domains we are trying to validate.

![Expand dns validation details screenshot](https://d33wubrfki0l68.cloudfront.net/3ad9e96b5323f552974db1dc7c5efa4104a4a1a4/6d614/assets/expand-dns-validation-details.png)

Since we control the domain through Route 53, we can directly create the DNS record through here by hitting **Create record in Route 53**.

![Create Route 53 dns record screenshot](https://d33wubrfki0l68.cloudfront.net/81b5854a14c82ee083d65556e9f2a08031443cdd/eb4bc/assets/create-route-53-dns-record.png)

And confirm that you want the record to be created by hitting **Create**.

![Confirm Route 53 dns record screenshot](https://d33wubrfki0l68.cloudfront.net/4b656d6e9e8242af80cea02ed540c762e0de943e/690fd/assets/confirm-route-53-dns-record.png)

Also, make sure to do this for the other domain.

The process of creating a DNS record and validating it can take around 30 minutes.

Next, we’ll associate this certificate with our CloudFront Distributions.

#### Update CloudFront Distributions with Certificate
Open up our first CloudFront Distribution from our list of distributions and hit the **Edit** button.

![Select CloudFront Distribution screenshot](https://d33wubrfki0l68.cloudfront.net/d8192895d97d91999efcb265d0cbf27c76d1adb5/ca34d/assets/select-cloudfront-distribution.png)

Now switch the **SSL Certificate** to **Custom SSL Certificate** and select the certificate we just created from the drop down. And scroll down to the bottom and hit **Yes**, **Edit**.

![Select custom SSL Certificate screenshot](https://d33wubrfki0l68.cloudfront.net/4aec24d0f1a9cc89c07d174fbf1633c18e0977a3/5e93d/assets/select-custom-ssl-certificate.png)

Next, head over to the **Behaviors** tab from the top.

![Select Behaviors tab screenshot](https://d33wubrfki0l68.cloudfront.net/381fb6f614f3dbf69f6120665b66f4356db4aa5b/258d5/assets/select-behaviors-tab.png)

And select the only one we have and hit **Edit**.

![Edit Distribution Behavior screenshot](https://d33wubrfki0l68.cloudfront.net/433961798ba99c2a4ba3ff096d8f41499aaeb578/60d4e/assets/edit-distribution-behavior.png)

Then switch the **Viewer Protocol Policy** to **Redirect HTTP to HTTPS**. And scroll down to the bottom and hit **Yes**, **Edit**.

![Switch Viewer Protocol Policy screenshot](https://d33wubrfki0l68.cloudfront.net/10e670308d9adb4d0c90cee89a0160d7f6aa5023/2a3d3/assets/switch-viewer-protocol-policy.png)

Now let’s do the same for our other CloudFront Distribution.

![Select custom SSL Certificate screenshot](https://d33wubrfki0l68.cloudfront.net/01a3a3086e7880e53b7be4f441cfede1270e65df/5b836/assets/select-custom-ssl-certificate-2.png)

But leave the **Viewer Protocol Policy** as **HTTP and HTTPS**. This is because we want our users to go straight to the HTTPS version of our non-www domain. As opposed to redirecting to the HTTPS version of our www domain before redirecting again.

![Dont switch Viewer Protocol Policy for www distribution screenshot](https://d33wubrfki0l68.cloudfront.net/9254567518d2ab2cf5d65f1d705837dd6cedaa5e/39b42/assets/dont-switch-viewer-protocol-policy-for-www-distribution.png)

#### Update S3 Redirect Bucket
The S3 Redirect Bucket that we created in the last chapter is redirecting to the HTTP version of our non-www domain. We should switch this to the HTTPS version to prevent the extra redirect.

Open up the S3 Redirect Bucket we created in the last chapter. Head over to the **Properties** tab and select **Static website hosting**.

![Open S3 Redirect Bucket Properties screenshot](https://d33wubrfki0l68.cloudfront.net/bbbcd1f6b6221f6ff916bb96568ea2f0bc50e75a/82f74/assets/open-s3-redirect-bucket-properties.png)

Change the **Protocol** to **https** and hit **Save**.

![Change S3 Redirect to HTTPS screenshot](https://d33wubrfki0l68.cloudfront.net/c35498db65559f84125f0d6d87a35fa11ad6aa87/fbb45/assets/change-s3-redirect-to-https.png)

And that’s it. Our app should be served out on our domain through HTTPS.

![App live with certificate screenshot](https://d33wubrfki0l68.cloudfront.net/6162a57589bf2e53f5d79529e3e214c92798ff19/f9db4/assets/app-live-with-certificate.png)

Next up, let’s look at the process of deploying updates to our app.


[[Back]](https://github.com/eksant/serverless-react-aws)
