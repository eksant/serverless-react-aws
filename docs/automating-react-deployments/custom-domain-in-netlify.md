### **Custom Domains in Netlify**
Now that we have our first deployment, let’s configure a custom domain for our app through Netlify. This step is assuming you have a domain in Route 53 back from the first part of the tutorial.

#### Pick a Netlify Site Name
From the project page in Netlify, hit **Site settings**.

![Netlify hit Site settings screenshot](https://d33wubrfki0l68.cloudfront.net/3224152cbe40336e55bb5f62a58bc8ad073eddf8/84ea3/assets/part2/netlify-hit-site-settings.png)

Under **Site information** hit **Change site name**.

![Hit Change site name screenshot](https://d33wubrfki0l68.cloudfront.net/4746ac9041c140c3697b6a85254c4e830669cf22/4caf3/assets/part2/hit-change-site-name.png)

The site names are global, so pick a unique one. In our case we are using serverless-stack-2-client. And hit **Save**.

![Save change site name screenshot](https://d33wubrfki0l68.cloudfront.net/d868a9b2b3d6c36e1f8ee550f5cd6addd9ab1d2e/92054/assets/part2/save-change-site-name.png)

This means that our Netlify site URL is now going to be https://serverless-stack-2-client.netlify.com. Make a note of this as we will use this later in this chapter.

#### Domain Settings in Netlify
Next hit **Domain management** from the side panel.

![Select Domain management screenshot](https://d33wubrfki0l68.cloudfront.net/bdad15656cec053313db3780f9f0a1b4efbf30da/8f200/assets/part2/select-domain-management.png)

And hit **Add custom domain**.

![Click Add custom domain screenshot](https://d33wubrfki0l68.cloudfront.net/45d9c12ee5024d843e55c9feb898d1bd5339ae60/c6d46/assets/part2/click-add-custom-domain.png)

Type in the name of our domain, for example it might be demo-serverless-stack.com. And hit **Save**.

![Enter custom domain screenshot](https://d33wubrfki0l68.cloudfront.net/6e43d53a07fb0ee40d7b0b99001780084c52d55e/019d4/assets/part2/enter-custom-domain.png)

This will automatically add the www version as well and will ask you to configure your DNS.

![Custom domain settings added screenshot](https://d33wubrfki0l68.cloudfront.net/fe5eded2036d661888d7787180752b05c194ef12/2b14c/assets/part2/custom-domain-settings-added.png)

DNS Settings in Route 53
To do this we need to head back to the [AWS Console](https://console.aws.amazon.com/). and search for Route 53 as the service.

![Select Route 53 service screenshot](https://d33wubrfki0l68.cloudfront.net/80b2a99135a2866782f2eafebf27b62fc78c2d6a/eed7b/assets/part2/select-route-53-service.png)

Click on **Hosted zones**.

![Select Route 53 hosted zones screenshot](https://d33wubrfki0l68.cloudfront.net/696fc26d25e5b8e2db4fca1fb504ba6557fce89b/d2837/assets/part2/select-route-53-hosted-zones.png)

And select the domain we want to configure.

![Select Route 53 domain screenshot](https://d33wubrfki0l68.cloudfront.net/b3ff67ee40567ad752773b8e5cfc058e610a1a81/114d6/assets/part2/select-route-53-domain.png)

Here click on **Create Record Set**.

![Create first Route 53 record set screenshot](https://d33wubrfki0l68.cloudfront.net/f67660b0f5f9f4b777df2a4841702b5ea7eed94d/2db85/assets/part2/create-first-route-53-record-set.png)

Select **Type** as **A - IPv4 address** and set the **Value** to **104.198.14.52**. And hit **Create**.

![Add A record screenshot](https://d33wubrfki0l68.cloudfront.net/85fdeda64e57dedea8bce79fa313acb1a6bdd63f/5afcb/assets/part2/add-a-record.png)

Next hit **Create Record Set** again.

Set **Name** to www, **Type** to **CNAME - Canonical name**, and the value to the Netlify site name as we noted above. In our case it is https://serverless-stack-2-client.netlify.com. Hit **Create**.

![Add CNAME record screenshot](https://d33wubrfki0l68.cloudfront.net/cd01f94ddbbfd78998a2fdeae5af1a9511b6ac23/104e8/assets/part2/add-cname-record.png)

And give the DNS around 30 minutes to update.

#### Configure SSL
Back in Netlify, hit **HTTPS** in the side panel. And hit **Verify DNS configuration**.

![Verify DNS configuration screenshot](https://d33wubrfki0l68.cloudfront.net/0416c50685894b2b7ee26a7b08ad202858841729/71968/assets/part2/verify-dns-configuration.png)

If everything has been configured properly, you should be able to hit **Let’s Encrypt Certificate**.

![Setup Let's Encrypt Certificate screenshot](https://d33wubrfki0l68.cloudfront.net/9fb63841d2dc15616346f49fcff329f1ed644f19/440fc/assets/part2/setup-lets-encrypt-certificate.png)

Next, confirm this by hitting **Provision certificate**.

![Select Provision certificate screenshot](https://d33wubrfki0l68.cloudfront.net/072cf797f62beb7a66300a73d5ceaccb82a1587e/5b3e8/assets/part2/select-provision-certificate.png)

This process might take around 10 minutes to complete. But once complete, scroll down and hit **Force HTTPS**.

![Set Force HTTPS screenshot](https://d33wubrfki0l68.cloudfront.net/0daac0c624e464c6171fd68d83e3da63effa4ec7/f7ec4/assets/part2/set-force-https.png)

This forces your users to only use HTTPS to communicate with your app.

Now if you head over to your browser and go to your custom domain, your notes app should be up and running!

![Notes app on custom domain screenshot](https://d33wubrfki0l68.cloudfront.net/7a39b05831893da5d130a792ed89bea8933679d9/0dd32/assets/part2/notes-app-on-custom-domain.png)

We have our app in production but we haven’t had a chance to go through our workflow just yet. Let’s take a look at that next.


[[Back]](https://github.com/eksant/serverless-react-aws)
