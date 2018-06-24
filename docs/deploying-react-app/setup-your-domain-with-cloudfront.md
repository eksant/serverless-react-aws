### **Set up Your Domain with CloudFront**
Now that we have our CloudFront distribution live, let’s set up our domain with it. You can purchase a domain right from the [AWS Console](https://console.aws.amazon.com/) by heading to the Route 53 section in the list of services.

![Select Route 53 service screenshot](https://d33wubrfki0l68.cloudfront.net/9e93ac4516c27ad72ba6145f63d6363ec3b8e0d0/5a2b8/assets/select-route-53-service.png)

#### Purchase a Domain with Route 53
Type in your domain in the **Register domain** section and click **Check**.

![Search available domain screenshot](https://d33wubrfki0l68.cloudfront.net/f4315b643223255b36d3cba0d9a740e87450c38d/70b24/assets/search-available-domain.png)

After checking its availability, click **Add to cart**.

![Add domain to cart screenshot](https://d33wubrfki0l68.cloudfront.net/049eba40259554b39f98af207c84f9b5149738d4/e23b2/assets/add-domain-to-cart.png)

And hit **Continue** at the bottom of the page.

![Continue to contact details screenshot](https://d33wubrfki0l68.cloudfront.net/e95c6fec75dd0e387c511ce9ad694716ec977920/3cf3f/assets/continue-to-contact-detials.png)

Fill in your contact details and hit **Continue** once again.

![Continue to confirm details screenshot](https://d33wubrfki0l68.cloudfront.net/f16068e448c5b8da66a07245f87f9a0400eec65a/05853/assets/continue-to-confirm-detials.png)

Finally, review your details and confirm the purchase by hitting **Complete Purchase**.

![Confirm domain purchase screenshot](https://d33wubrfki0l68.cloudfront.net/fbaf5bec7c56ade0949f72168ec85dd37090a7f5/af13f/assets/confirm-domain-purchase.png)

Next, we’ll add an alternate domain name for our CloudFront Distribution.

#### Add Alternate Domain for CloudFront Distribution
Head over to the details of your CloudFront Distribution and hit **Edit**.

![Edit CloudFront Distribution screenshot](https://d33wubrfki0l68.cloudfront.net/11b9a63273acbc5353b6b5fa787e0695e8eabd8e/0ea7c/assets/edit-cloudfront-distribution.png)

And type in your new domain name in the **Alternate Domain Names (CNAMEs)** field.

![Set alternate domain name screenshot](https://d33wubrfki0l68.cloudfront.net/e40d0e08e7429225aeee0fa82e1046bb8fd9c316/d0c28/assets/set-alternate-domain-name.png)

Scroll down and hit **Yes**, **Edit** to save the changes.

![Yes edit CloudFront changes screenshot](https://d33wubrfki0l68.cloudfront.net/8028a4e879db5c716d0f13ac2e229529f79b66c9/677c9/assets/yes-edit-cloudfront-changes.png)

Next, let’s point our domain to the CloudFront Distribution.

#### Point Domain to CloudFront Distribution
Head back into Route 53 and hit the **Hosted Zones** button. If you don’t have an existing **Hosted Zone**, you’ll need to create one by adding the **Domain Name** and selecting **Public Hosted Zone** as the **Type**.

![Select Route 53 hosted zones screenshot](https://d33wubrfki0l68.cloudfront.net/157ad6bcb4932d0916d56f0f0cd219b035d8b5e7/c5225/assets/select-route-53-hosted-zones.png)

Select your domain from the list and hit **Create Record Set** in the details screen.

![Select create record set screenshot](https://d33wubrfki0l68.cloudfront.net/788a55a0296e3cf9becf8deb7e95c58dda3d2d9a/36ec7/assets/select-create-record-set.png)

Leave the **Name** field empty since we are going to point our bare domain (without the www.) to our CloudFront Distribution.

![Leave name field empty screenshot](https://d33wubrfki0l68.cloudfront.net/3748837d052ae127e8c9f40c7c8747d0ea2585b4/87177/assets/leave-name-field-empty.png)

And select **Alias** as **Yes** since we are going to simply point this to our CloudFront domain.

![Set Alias to yes screenshot](https://d33wubrfki0l68.cloudfront.net/61f7d57032e3cde60c3d6036eab307c98f8cd96b/6fc8f/assets/set-alias-to-yes.png)

In the **Alias Target** dropdown, select your CloudFront Distribution.

![Select your CloudFront Distribution screenshot](https://d33wubrfki0l68.cloudfront.net/047b4f775ccbe1a5a5c449fdd35fa20af98a4326/a7a71/assets/select-your-cloudfront-distribution.png)

Finally, hit **Create** to add your new record set.

![Select create to add record set screenshot](https://d33wubrfki0l68.cloudfront.net/485ff4777f375202b727788aa201c5898cba29df/a7b06/assets/select-create-to-add-record-set.png)

#### Add IPv6 Support
CloudFront Distributions have IPv6 enabled by default and this means that we need to create an AAAA record as well. It is set up exactly the same way as the Alias record.

Create a new Record Set with the exact settings as before, except make sure to pick **AAAA - IPv6 address** as the **Type**.

![Select AAAA IPv6 record set screenshot](https://d33wubrfki0l68.cloudfront.net/8ae5b560957226abcf02d99e3a35781aa1efe14d/7f2b9/assets/select-create-aaaa-ipv6-record-set.png)

And hit **Create** to add your AAAA record set.

It can take around an hour to update the DNS records but once it’s done, you should be able to access your app through your domain.

![App live on new domain screenshot](https://d33wubrfki0l68.cloudfront.net/6df51b359a2e4d51df76723d7faf9bb8d9a84c16/67e37/assets/app-live-on-new-domain.png)

Next up, we’ll take a quick look at ensuring that our www. domain also directs to our app.


[[Back]](https://github.com/eksant/serverless-react-aws)
